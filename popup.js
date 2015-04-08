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

document.addEventListener('DOMContentLoaded', function() {
	document.getElementById('text').textContent = 'loaded';
	document.getElementById('takeScreenshot').addEventListener('click', handleTakeScreenshotButtonTapped);
});

chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
	console.log('popup received a message');
  sendResponse({'bar': msg.foo});
});



// mouse events
//http://stackoverflow.com/questions/4445102/google-chrome-extension-highlight-the-div-that-the-mouse-is-hovering-over
//http://stackoverflow.com/questions/2626859/chrome-extension-how-to-capture-selected-text-and-send-to-a-web-service
//http://stackoverflow.com/questions/28099145/creating-a-drag-select-screen-capture-for-google-chrome
