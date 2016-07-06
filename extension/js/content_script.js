chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    const deleteBranch = () => {
        const deleteBranchButton = document.querySelector('.post-merge-message button');
        if (!deleteBranchButton) {
            return window.setTimeout(deleteBranch);
        }
        deleteBranchButton.click();
        sendResponse({});
    };

    deleteBranch();
});