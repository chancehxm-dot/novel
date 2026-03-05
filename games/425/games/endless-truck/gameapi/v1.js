(function(d, params, env, apiHost, hosts) {
    // set params
    (function(regex, qs, tokens) {
        regex = /[?&]?([^=]+)=([^&]*)/g;
        qs = d.location && d.location.search ? d.location.search.split('+').join(' ') : '';

        while ((tokens = regex.exec(qs))) {
            params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);
        }
    })();

    env = params.fg_env || 'prod';
    apiHost = hosts[env];
    // load script
    (function(d, url, fgJS, firstJS) {
        fgJS = d.createElement('script');
        firstJS = d.getElementsByTagName('script')[0];
        fgJS.src = url + "?_location=" + encodeURIComponent(d.location);
        firstJS.parentNode.insertBefore(fgJS, firstJS);
    })(d, './gameapi/3df41947-b71e-4659-b3ae-c1afe0508e57.js');

})(document, {}, '', '', {
    'dev': 'api.dev',
    'staging': 'api.staging.gc',
    'staging.aws': 'api.staging.aws',
    'staging.gc': 'api.staging.gc',
    'prod': 'api'
});