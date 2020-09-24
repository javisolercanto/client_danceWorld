'use strict'

import { myApp } from "../main.js";

(function stopball() {
    document.body.onkeyup = function (e) {
        if (e.keyCode == 32) {
            myApp.action();
        }
    }
})();