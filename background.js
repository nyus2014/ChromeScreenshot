chrome.runtime.onInstalled.addListener(function() {
  console.log('backgournd onInstalled');
  chrome.runtime.sendMessage({greeting: "backgournd onInstalled"}, function(response) {
    console.log(response);
  });
});