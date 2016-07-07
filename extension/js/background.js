chrome.webRequest.onCompleted.addListener(
    (details) => {
        console.log(details);
        chrome.tabs.sendMessage(details.tabId, {});
    }, {
        urls: ['https://github.com/*/*/pull/*/merge']
    });