// get the buttons by id
let scrollUp = document.getElementById('scrollUpButton');
let reload = document.getElementById('reloadButton');
let scrollDown = document.getElementById('scrollDownButton');

// use tabs.insertCSS to change header color on button click

// red
scrollUp.onclick = function() {
  // browser.tabs.insertCSS({code: ".c-uhfh .brand-neutral { background: red !important; }"});
  browser.tabs.executeScript({
    code: `window.scrollBy(0,-100);`
  });
};

// blue
reload.onclick = function() {
  // browser.tabs.insertCSS({code: ".c-uhfh .brand-neutral { background: blue !important; }"});
  // alert('Hello World!');
  // browser.window.scrollBy(0,100);
  browser.tabs.executeScript({
    code: `document.location.reload();`
  });
};

// back to original
scrollDown.onclick = function() {
  // browser.tabs.insertCSS({code: ".c-uhfh .brand-neutral { background: #2f2f2f !important; }"});
  browser.tabs.executeScript({
    code: `window.scrollBy(0,100);`
  });
};