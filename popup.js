// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


function handleTakeScreenshotButtonTapped() {
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		document.getElementById('text').textContent = 'url' + tabs[0].url;
	  chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello"}, function(response) {
	    console.log(response);
	  });
	});
}


chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    document.getElementById('text').textContent = (sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
    if (request.greeting == "hello") {
      sendResponse({farewell: "goodbye"});
    }
});

document.addEventListener('DOMContentLoaded', function() {
	document.getElementById('text').textContent = 'loaded';
	document.getElementById('takeScreenshot').addEventListener('click', handleTakeScreenshotButtonTapped);
});



// mouse events
//http://stackoverflow.com/questions/4445102/google-chrome-extension-highlight-the-div-that-the-mouse-is-hovering-over
//http://stackoverflow.com/questions/2626859/chrome-extension-how-to-capture-selected-text-and-send-to-a-web-service
//http://stackoverflow.com/questions/28099145/creating-a-drag-select-screen-capture-for-google-chrome
