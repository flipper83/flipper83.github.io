// Maps
    var map;
        $(document).ready(function(){
            map = new GMaps({
                el: '#map',
                lat: 40.7103665,
                lng: -3.9963574,
                zoomControl : false, 
                zoomControlOpt: {
                style : 'SMALL',
                position: 'TOP_LEFT'
            },
            panControl : false,
            streetViewControl : false, 
            mapTypeControl: false,
            scrollwheel: false,
            overviewMapControl: false
        });
        map.addMarker({
            lat: 40.7103665,
            lng: -3.9963574,
            title: 'marlow heights', 
        });
    });