/**
 * Created by Administrator on 2017/7/11.
 */
function onSelfSound() {
    cc.audioEngine.setMusicVolume(1);
    cc.audioEngine.setEffectsVolume(1);
}

function downSelfSound() {
    cc.audioEngine.setMusicVolume(0);
    cc.audioEngine.setEffectsVolume(0);
}