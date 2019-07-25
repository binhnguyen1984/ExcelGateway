export function asyncApiGetCall(apiURL, callback) {
    let xhr = new XMLHttpRequest();
    xhr.overrideMimeType("application/json");
    xhr.open("GET", apiURL, true);
    xhr.onload = async function () {
        if (
            xhr.readyState == 4 && xhr.status == 200)
            await callback(xhr.responseText);
    }
    xhr.send(null);
}

export function syncApiPutCall(apiURL, rawData, callback) {
    let xhr = new XMLHttpRequest();
    let jsonData = JSON.stringify(rawData);
    xhr.open("PUT", apiURL, true);
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    xhr.onload = async function () {
        if (xhr.readyState == 4 && xhr.status == 200)
            callback(xhr.responseText);
    }
    xhr.send(jsonData);
}
