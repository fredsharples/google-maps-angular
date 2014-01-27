/**
 * Created by fred on 1/25/14.
 */
function initialize() {
    var mapOptions = {
        zoom: 8,
        center: new google.maps.LatLng(-34.397, 150.644)
    };

    var map = new google.maps.Map(document.getElementById('map-canvas'),
        mapOptions);
}

function loadScript() {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyC9Yf0BGs7qvoEoBXQ1BejWXPpg97J9i6A&sensor=false&libraries=visualization&callback=initialize";
    //script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&' + 'callback=initialize';

    document.body.appendChild(script);
}

window.onload = loadScript;