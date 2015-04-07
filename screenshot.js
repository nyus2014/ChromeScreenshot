// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

function setScreenshotUrl(url) {
  document.getElementById('target').src = url;
  console.log('there');
}

console.log("sadfasd" + document.getElementById('screenShotButton'));

// mouse events
//http://stackoverflow.com/questions/4445102/google-chrome-extension-highlight-the-div-that-the-mouse-is-hovering-over
//http://stackoverflow.com/questions/2626859/chrome-extension-how-to-capture-selected-text-and-send-to-a-web-service
//http://stackoverflow.com/questions/28099145/creating-a-drag-select-screen-capture-for-google-chrome