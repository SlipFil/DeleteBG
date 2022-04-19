
// XHR helper function wrapper
const NUM_MAX_RETRIES = 50;

let xhrRequestRetryCount;
function xhrRequest(url, method) {
  xhrRequestRetryCount = 0;
  return xhrRequestImpl(url, method);
}


// XHR helper function implementation
function xhrRequestImpl(url, method) {
  return new Promise((resolve, reject) => {
    xhrRequestRetryCount++;
    if (xhrRequestRetryCount >= NUM_MAX_RETRIES) {
      reject();
      return;
    }
    const req = new XMLHttpRequest();
    req.timeout = 1000;
    req.onload = () => {
      if (req.status === 200) {
        try {
          resolve(req.response);
        } catch (err) {
          reject(`Couldn't parse response. ${err.message}, ${req.response}`);
        }
      } else if (req.status === 202) { // wait a bit more
        setTimeout(function () { resolve(xhrRequestImpl(url, method)) }, 2500);
      } else {
        reject(`Request had an invalid status: ${req.status}`);
      }
    }
    req.ontimeout = () => {
      if (req.status >= 400 && req.status < 600) {
        reject("Timeout error occured.");
      } else {
        console.log("polling...");
        resolve(xhrRequestImpl(url, method));
      }
    }
    req.onerror = (err) => {
      error("request error: " + err);
      console.log(err)
      console.log(JSON.stringify(err))
      reject(err)
    }
    req.open(method, url, true);
    req.responseType = 'json';
    req.send();
  });
}


// uxp helpers
function openLink(url) {
    require("uxp").shell.openExternal(url);
}

async function showError(e) {
    await app.showAlert(e);
}
 
function getExtensionVersion() {
    var version = require("uxp").versions.plugin;
    return version;
}

function getUxpVersion() {
    var version = require("uxp").versions.uxp;
    return version;
}

function getAppVersion() {
    var version = require("uxp").host.version;
    return version;
}

function getOSInformation() {
    var os = require("os");
    var platform = os.platform();
    var release = os.release();
    var arch = os.arch();
    return `${platform}_${release}_${arch}`;
}

  
  

  

module.exports = {xhrRequest, openLink, showError, getExtensionVersion, getUxpVersion, getAppVersion, getOSInformation};