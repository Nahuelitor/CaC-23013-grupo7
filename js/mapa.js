function ElGranMapa(){
    let coord = {lat:-34.5536889,lng:-58.4561897};
    let map = new google.maps.Map(document.getElementById('map'),{
    zoom: 15,
    center: coord
    });
    var marker = new google.maps.Marker({
        position: coord,
        map: map
    });
}