export function asyncApiGetCall(apiURL, callback, ...args) {
    let xhr = new XMLHttpRequest();
    xhr.overrideMimeType("application/json");
    xhr.open("GET", apiURL, true);
    xhr.onload = async function () {
        if (xhr.readyState == 4 && xhr.status == 200 && callback != null)
            await callback(xhr.responseText, ...args);
    }
    xhr.send(null);
}

export function syncApiGetCall(apiURL,callback ) {
    let xhr = new XMLHttpRequest();
    xhr.overrideMimeType("application/json");
    xhr.open("GET", apiURL, false);
    xhr.onload = function () {
        if (xhr.readyState == 4 && xhr.status == 200 && callback!=null)
            callback(xhr.responseText);
    }
    xhr.send(null);
}
export function syncApiPutCall(apiURL, rawData, callback) {
    let xhr = new XMLHttpRequest();
    let jsonData = JSON.stringify(rawData);
    xhr.open("PUT", apiURL, false);
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    xhr.onload = function () {
        if (xhr.readyState == 4 && xhr.status == 200 && callback!=null)
            callback(xhr.responseText);
    }
    xhr.send(jsonData);
}
