console.log('content script loaded');

/*
	Detect selected area
*/
var startPoint;
var endPoint;
document.addEventListener('mousedown', function(loc) {
	startPoint = {'x':loc.clientX, 'y':loc.clientY};
	console.log('start point is: '+startPoint);
});

document.addEventListener('mouseup', function(loc) {
	endPoint = {'x':loc.clientX, 'y':loc.clientY};
	console.log('end point is: '+endPoint);
	informSelectedArea(startPoint, endPoint);
});

/*
	Send message
*/
function informSelectedArea(start, end) {
	var object = {'startPoint':start, 'endPoint':end};
	console.log('informSelectedArea:'+object);
	chrome.runtime.sendMessage(null, object, function(response) {

	});
}

// Listen to tapping on "Take Screenshot" button

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
	console.log('content gets message');

    return true;
});
