// ==UserScript==
// @name         Get iPlayer Episodes
// @namespace    https://example.com/
// @version      0.1
// @description  Copy all the episodes on a BBC iPlayer season page into the clipboard
// @author       Daniel Llewellyn <diddledan@gmail.com>
// @updateURL    https://github.com/diddledan/get_iplayer-episodes/raw/master/src/get_iplayer-episodes.user.js
// @downloadURL  https://github.com/diddledan/get_iplayer-episodes/raw/master/src/get_iplayer-episodes.user.js
// @match        https://www.bbc.co.uk/iplayer/episodes/*
// @grant        GM_log
// @grant        GM_setClipboard
// @grant        GM_notification
// @grant        GM_registerMenuCommand
// ==/UserScript==

(function() {
    'use strict';

    GM_registerMenuCommand('Copy download command', () => {
        let URLS = [].map.call(document.querySelectorAll('a.content-item__link'), a => a.href).join(',');
        let get_iplayer_cmd = `get_iplayer --url ${URLS}`;
        GM_log(`To download the episodes with get_iplayer, copy this command to a terminal and run it: \`${get_iplayer_cmd}\``);
        GM_setClipboard(get_iplayer_cmd, {type: 'text', mimetype: 'text/plain'});
        GM_notification({
            title: 'iPlayer episodes copied',
            text: 'Now paste the command in your clipboard onto your commandline',
        }, 'g');
    });
})();
