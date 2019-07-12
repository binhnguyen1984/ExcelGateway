let messageBanner;
let hdbURL, cdpURL;
export { hdbURL, cdpURL};
declare let fabric: any;


export function set_urls(config_data)
{
    hdbURL = config_data.hdbURL; 
    cdpURL = config_data.cdpURL;
}

export function convert_string_to_array(str) {
    return str.split(",").map(function (item) {
        return item.trim();
    })
}

export function initializeMessageBanner()
{
    let element = document.querySelector('.ms-MessageBanner');
    messageBanner = new fabric.MessageBanner(element);
    messageBanner.hideBanner();
}
export function empty(data) {
    if (typeof (data) == 'number' || typeof (data) == 'boolean') {
        return false;
    }
    if (typeof (data) == 'undefined' || data === null) {
        return true;
    }
    if (typeof (data.length) != 'undefined') {
        return data.length == 0;
    }
    return true;
}

// this is kind of a pattern for handling contents in the current excel sheet
export async function excelHandler(action) {
    try {
        await Excel.run(action);
    } catch (error) {
        errorHandler(error);
    }
}

// Helper function for treating errors
export function errorHandler(error) {
    // Always be sure to catch any accumulated errors that bubble up from the Excel.run execution
    showNotification("Error", error);
    console.log("Error: " + error);
    if (error instanceof OfficeExtension.Error) {
        console.log("Debug info: " + JSON.stringify(error.debugInfo));
    }
}

// Helper function for displaying notifications
export function showNotification(header, content) {
    $("#notification-header").text(header);
    $("#notification-body").text(content);
    messageBanner.showBanner();
    messageBanner.toggleExpansion();
}

