function handleTakeScreenshotButtonTapped() {
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
	  chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello"}, function(response) {
	    console.log('log response from popup.js' + response);
	  });
	});
}

document.addEventListener('DOMContentLoaded', function() {
	document.getElementById('text').textContent = 'loaded';
	document.getElementById('takeScreenshot').addEventListener('click', handleTakeScreenshotButtonTapped);
});

// mouse events
//http://stackoverflow.com/questions/4445102/google-chrome-extension-highlight-the-div-that-the-mouse-is-hovering-over
//http://stackoverflow.com/questions/2626859/chrome-extension-how-to-capture-selected-text-and-send-to-a-web-service
//http://stackoverflow.com/questions/28099145/creating-a-drag-select-screen-capture-for-google-chrome
