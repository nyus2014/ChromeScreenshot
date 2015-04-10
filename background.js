chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
	console.log('background received msg');
	takeScreenShot();
});

var id = 100;
function takeScreenShot() {
	var id = 100;
    chrome.tabs.captureVisibleTab(function(screenshotUrl) {
        console.log('screenshot url is '+screenshotUrl);
		var viewTabUrl = chrome.extension.getURL('EditScreenshot.html?id=' + id++);
		var targetId = null;
		var views = chrome.extension.getViews();
		for (var i = 0; i < views.length; i++) {
			var view = views[i];
			if (view.location.href == viewTabUrl) {
				console.log('view.location.href is '+view.location.href);
				view.setScreenshotUrl(screenshotUrl);
				break;
			}
		}
		chrome.tabs.create({url: viewTabUrl}, function(tab) {
			targetId = tab.id;
		});
    });
}