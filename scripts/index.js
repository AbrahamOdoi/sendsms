(function () {

    document.addEventListener('deviceready', onDeviceReady.bind(this), false);
    var pictureSource;
    var destinationType;

    function onDeviceReady() {
        pictureSource = navigator.camera.PictureSourceType;
        destinationType = navigator.camera.DestinationType;

//
		$(function () {
             "use strict";
             $("#decode").click(function () {
                 //alert("clicked");
                 cordova.plugins.barcodeScanner.scan(
                     function (result) {
                         alert(result.text);
                     },
                     function (error) {
                         alert(error);
                     }
                 );
                 //end
             });
         });
		//

		//Geolocation start
         var c = function (pos) {
             var lat = pos.coords.latitude,
                 long = pos.coords.longitude,
                 coords = lat + ', ' + long;

             document.getElementById('google-map').setAttribute('src', 'http://maps.google.co.uk?q=' + coords + '&z=60&output=embed');

         }

         //get location function
         document.getElementById("getloc").onclick = function () {
             navigator.geolocation.getCurrentPosition(c);
             return false;
         }


        // document.getElementById("camera").onclick = function () {
        //     navigator.camera.getPicture(onPhotoDataSuccess, onFail, {
        //         quality: 50,
        //         destinationType: destinationType.DATA_URL,
        //         saveToPhotoAlbum: true,
        //         allowEdit: true
        //     });
        // }
        //
    };

    function onPhotoDataSuccess(imageData) {

    }

    function onFail(message) {

    }

    function clearCache() {

    }

})();

