// ==UserScript==
// @name         readmooAutoLink - Open all articles in new tab
// @namespace    http://news.readmoo.com/
// @version      0.1
// @description  Open all article link in new tab, then you can use EpubPress to push to your Kindle.
// @include    *news.readmoo.com/*
// @author       YK Huang
// @copyright  YK Huang
// ==/UserScript==

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

function openNewBackgroundTab(target){
    //alert(target);
    var popup = window.open(target);
    popup.blur();
    window.focus();
}

var x = document.getElementsByClassName("entry-content");

for(var i=0;i<x.length;i++)
{
    openNewBackgroundTab(x[i].getElementsByTagName("a")[0].href);
    sleep(1000);
}
