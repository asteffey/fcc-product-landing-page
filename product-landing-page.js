function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        var location_status = document.getElementById("location-status");
        location_status.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    document.getElementById("latitude").value = position.coords.latitude;
    document.getElementById("longitude").value = position.coords.longitude;
}

function showError(error) {
    var location_status = document.getElementById("location-status");
    switch (error.code) {
        case error.PERMISSION_DENIED:
            location_status.innerHTML = "User denied the request for Geolocation."
            break;
        case error.POSITION_UNAVAILABLE:
            location_status.innerHTML = "Location information is unavailable."
            break;
        case error.TIMEOUT:
            location_status.innerHTML = "The request to get user location timed out."
            break;
        case error.UNKNOWN_ERROR:
            location_status.innerHTML = "An unknown error occurred."
            break;
    }
}