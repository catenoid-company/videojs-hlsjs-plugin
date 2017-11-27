var Hls = require("hls.js");
var attachVideojsStreamrootProvider = require('./videojs5-hlsjs-source-handler.js');

// If browser is safari, do not load hls.js plugin
// because safari browser is running under native HLS module.
/*if (!(navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1)) {
	attachVideojsStreamrootProvider(window, videojs, Hls);
}*/
attachVideojsStreamrootProvider(window, window.videojs, Hls);
