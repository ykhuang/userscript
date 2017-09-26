// ==UserScript==
// @name         InitiumAutoLink - Open all articles in new tab
// @namespace    http://theinitium.com/
// @version      0.1
// @description  Open all article link in new tab, then you can use EpubPress to push to your Kindle.
// @include    *theinitium.com/*
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

var whatsnew = document.getElementsByClassName("c-whats-new__content l-row"); // what's new section in cover
var cate = document.getElementsByClassName("l-waffle-1 l-waffle-sm-2 l-waffle-md-3 l-waffle-lg-4"); // for each category
var x = document.getElementsByClassName("c-digest-content l-col-8 l-col-md-6 l-col-lg-8"); // for round table in cover

// open tabs for cover
for(var i=0;i<whatsnew.length;i++)
{
    openNewBackgroundTab(whatsnew[i].getElementsByTagName("a")[0].href);
    openNewBackgroundTab(whatsnew[i].getElementsByTagName("a")[2].href);
}

for(var i=0;i<x.length;i++)
{
    openNewBackgroundTab(x[i].getElementsByTagName("a")[1].href);
}

// open tabs for category
for(var i=0;i<cate.length;i++)
{
    openNewBackgroundTab(cate[i].getElementsByTagName("a")[1].href);
    sleep(1000);
}
