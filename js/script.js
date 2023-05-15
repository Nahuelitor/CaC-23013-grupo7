function iniciarMap(){
    var coord = {lat:-34.6061253,lng:-58.4456171};
    var map = new google.maps.Map(document.getElementById('map'),{
    zoom: 10,
    center: coord
    });
    }