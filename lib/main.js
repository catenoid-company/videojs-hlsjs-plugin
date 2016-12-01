//var Hls = require("hls.js");
import videojs from 'video.js';
import Hls from '../../../submodules/hls.js/src/index';
var attachVideojsStreamrootProvider = require('./videojs5-hlsjs-source-handler.js');

// If browser is safari, do not load hls.js plugin
// because safari browser is running under native HLS module.
/*if (!(navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1)) {
	attachVideojsStreamrootProvider(window, videojs, Hls);	
}*/
attachVideojsStreamrootProvider(window, videojs, Hls);	