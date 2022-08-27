// ==UserScript==
// @name         Trakken Interview
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Modifiy interviewpage!
// @author       Jorge Gámez
// @match        https://www.analytics-summit.de/interviews/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tampermonkey.net
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    let titles = document.querySelectorAll('.title');
    titles.forEach((element, index) => {
       const numberString = `${index}`.padStart(2, '0');
       element.textContent = `EVENT - INTERVIEW - ${numberString}`;
       const quote = element.nextElementSibling;
       mouseHover(quote);
       mouseHoverOut(quote);
    });

    function mouseHover(quote) {
       quote.addEventListener("mouseover", (event) => {
           quote.style.backgroundColor = "#666";
           const childI = quote.querySelector('i');
           childI.style.color = "white";
       }, false);
    }


    function mouseHoverOut(quote) {
       quote.addEventListener("mouseout", (event) => {
           quote.style.backgroundColor = "";
           const childI = quote.querySelector('i');
           childI.style.color = "";
       }, false);
    }

})();
