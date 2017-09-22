// ==UserScript==
// @name         SoSReaderAutoLink - Open all articles in new tab
// @namespace    http://sosreader.com/
// @version      0.1
// @description  Open all article link in new tab, then you can use EpubPress to push to your Kindle.
// @include    *sosreader.com/*
// @author       YK Huang
// @copyright  YK Huang
// ==/UserScript==

function openNewBackgroundTab(target){
    //alert(target);
    var popup = window.open(target);
    popup.blur();
    window.focus();
}

var x = document.getElementsByClassName("article-top");

for(var i=0;i<x.length;i++)
{
    openNewBackgroundTab(x[i].getElementsByTagName("a")[0].href);
}
