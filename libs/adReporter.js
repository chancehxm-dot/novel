(function (window, document) {
  'use strict';
  /**
   * 广告上报插件
   * 用于广告的展示(impression)和点击(click)上报
   * 支持PC端和移动端区分
   */
  var DEFAULT_ENDPOINT = 'https://acezi.info/b.gif';
  var MOBILE_REGEX = /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i;

  function AdReporter(options) {
    var opts = options || {};
    this.endpoint = opts.endpoint || DEFAULT_ENDPOINT;
    this.siteCode = opts.siteCode || deriveSiteCode();
    this.placements = Array.isArray(opts.placements) ? opts.placements.slice() : [];
    this.clickCooldownMs = typeof opts.clickCooldownMs === 'number' ? opts.clickCooldownMs : 500;
    this.state = {};
    this.placementsBySlot = {};

    this.placements = this.placements.filter(function (placement) {
      return placement && placement.slotId && placement.label;
    });

    for (var i = 0; i < this.placements.length; i++) {
      var placement = this.placements[i];
      this.placementsBySlot[placement.slotId] = placement;
      this.state[placement.slotId] = {
        impressions: {},
        activeCreative: null,
        lastClickAt: 0
      };
    }
  }

  AdReporter.prototype.init = function () {
    this.registerSlotRenderListener();
    this.registerBlockListener();
    this.bindFallbackClicks();
    this.bindClickDetection();
  };

  AdReporter.prototype.registerSlotRenderListener = function () {
    if (!window.googletag || !googletag.cmd || typeof googletag.cmd.push !== 'function') return;

    var self = this;
    googletag.cmd.push(function () {
      var pubads = typeof googletag.pubads === 'function' ? googletag.pubads() : null;
      if (!pubads || typeof pubads.addEventListener !== 'function') return;

      pubads.addEventListener('slotRenderEnded', function (event) {
        if (!event || !event.slot || typeof event.slot.getSlotElementId !== 'function') return;

        var slotId = event.slot.getSlotElementId();
        console.log('Slot rendered:', slotId, 'isEmpty:', event.isEmpty);
        if (!self.placementsBySlot[slotId]) return;

        var creative = event.isEmpty ? 'house' : 'google';
        self.recordImpression(slotId, creative);
      });
    });
  };

  AdReporter.prototype.registerBlockListener = function () {
    var self = this;
    document.addEventListener('adxAdControl:blockAdRequest', function () {
      self.reportFallbackForAll();
    });
  };

  AdReporter.prototype.bindFallbackClicks = function () {
    var self = this;
    onDomReady(function () {
      self.placements.forEach(function (placement) {
        if (!placement.fallbackId) return;
        var fallback = document.getElementById(placement.fallbackId);
        if (!fallback) return;

        fallback.addEventListener('click', function () {
          self.recordClick(placement.slotId, 'house');
        }, true);
      });
    });
  };

  AdReporter.prototype.bindClickDetection = function () {
    var self = this;
    var handler = function () {
      var slotId = self.resolveActiveSlotId();
      if (!slotId) return;

      var state = self.state[slotId] || {};
      var creative = state.activeCreative || 'google';
      self.recordClick(slotId, creative);
    };

    window.addEventListener('blur', handler, true);
    document.addEventListener('visibilitychange', function () {
      if (document.hidden) handler();
    });
    window.addEventListener('pagehide', handler);
  };

  AdReporter.prototype.resolveActiveSlotId = function () {
    var active = document.activeElement;
    if (!active) return null;
    return this.findPlacementId(active);
  };

  AdReporter.prototype.findPlacementId = function (node) {
    var el = node;
    while (el && el !== document.documentElement) {
      if (el.id && this.placementsBySlot[el.id]) {
        return el.id;
      }
      el = el.parentElement;
    }
    return null;
  };

  AdReporter.prototype.recordImpression = function (slotId, creative) {
    var state = this.state[slotId];
    if (!state || state.impressions[creative]) return;
    console.log('Recording impression for slot:', slotId, 'creative:', creative);
    state.impressions[creative] = true;
    state.activeCreative = creative;
    this.firePixel(slotId, creative, 'ms');
  };

  AdReporter.prototype.recordClick = function (slotId, creative) {
    var state = this.state[slotId];
    if (!state) return;

    var now = Date.now();
    if (now - state.lastClickAt < this.clickCooldownMs) return;

    state.lastClickAt = now;
    if (!state.activeCreative) {
      state.activeCreative = creative;
    }
    this.firePixel(slotId, state.activeCreative, 'mc');
  };

  AdReporter.prototype.reportFallbackForAll = function () {
    var self = this;
    this.placements.forEach(function (placement) {
      self.recordImpression(placement.slotId, 'house');
    });
  };

  /**
   * 发送上报请求
   * @param {string} slotId - 广告位ID
   * @param {string} creative - 广告类型 (google/house)
   * @param {string} timingCode - 上报时机 (ms=展示, mc=点击)
   */
  AdReporter.prototype.firePixel = function (slotId, creative, timingCode) {
    var placement = this.placementsBySlot[slotId];
    if (!placement) return;

    var isMobileDevice = isMobile();
    var suffix = isMobileDevice ? 'm' : '';
    var sParam = encodeURIComponent(this.siteCode + suffix);
    var aParam = encodeURIComponent(placement.label + '_' + creative + suffix);
    var url = this.endpoint + '?s=' + sParam + '&a=' + aParam + '&t=' + timingCode + '&_=' + Date.now();

    // 创建img元素发送上报请求，兼容处理，只支持get请求
    var pixel = new Image(1, 1);
    pixel.style.display = 'none';
    pixel.src = url;

    var parent = document.body || document.documentElement;
    if (parent) {
      parent.appendChild(pixel);
      setTimeout(function () {
        if (pixel.parentNode) {
          pixel.parentNode.removeChild(pixel);
        }
      }, 2000);
    }
  };

  function deriveSiteCode() {
    var host = (window.location.hostname || '').replace(/^www\./, '');
    var firstSegment = host.split('.')[0];
    return firstSegment || 'site';
  }

  function isMobile() {
    return MOBILE_REGEX.test(navigator.userAgent || '');
  }

  function onDomReady(callback) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', callback, { once: true });
    } else {
      callback();
    }
  }

  window.AdReporter = AdReporter;
})(window, document);
