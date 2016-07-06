chrome.webRequest.onCompleted.addListener(
    (details) => {
        console.log(details);
        chrome.tabs.sendMessage(details.tabId, {greeting: "hello"}, function(response) {
            console.log(response.farewell);
        });
    }, {
        urls: ['https://github.com/robin-drexler/*/pull/*/merge']
    });