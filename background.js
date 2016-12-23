chrome.browserAction.onClicked.addListener(()=>{

    chrome.tabs.query({"currentWindow": true}, (tabArray)=>{

      tabArray.forEach((tab) => {
        chrome.tabs.reload(tab.id);
      });

  });
});
