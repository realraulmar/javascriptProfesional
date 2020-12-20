"use strict";
exports.__esModule = true;
var MediaPlayer = /** @class */ (function () {
    function MediaPlayer(config) {
        this.media = config.el;
        this.plugins = config.plugins || [];
        this.initPlayer();
        this.initPlugins();
    }
    MediaPlayer.prototype.initPlugins = function () {
        var _this = this;
        this.plugins.forEach(function (plugin) {
            plugin.run(_this);
        });
    };
    MediaPlayer.prototype.initPlayer = function () {
        this.container = document.createElement('div');
        this.container.style.position = 'relative';
        this.media.parentNode.insertBefore(this.container, this.media);
        this.container.appendChild(this.media);
    };
    MediaPlayer.prototype.play = function () {
        this.media.play();
    };
    MediaPlayer.prototype.pause = function () {
        this.media.pause();
    };
    MediaPlayer.prototype.togglePlay = function () {
        this.media.paused ? this.play() : this.pause();
    };
    MediaPlayer.prototype.toggleMute = function () {
        this.media.muted = this.media.muted ? false : true;
    };
    MediaPlayer.prototype.mute = function () {
        this.media.muted = true;
    };
    MediaPlayer.prototype.unmute = function () {
        this.media.muted = false;
    };
    return MediaPlayer;
}());
exports["default"] = MediaPlayer;
