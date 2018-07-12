$( document ).ready(function() {
    console.log( "ready!" );
    //add URL here
    var ajaxURL = ""
    var constraints = { audio: false, video: { width: 1280, height: 720 } };
    var video = document.querySelector('video');
    var canvas = document.querySelector('canvas');
    var context = canvas.getContext("2d");
        
        navigator.mediaDevices.getUserMedia(constraints).then(function(mediaStream) {
            var video = document.querySelector('video');
            video.srcObject = mediaStream;
            video.onloadedmetada = function(e) {
                video.play();
            };
        })
        .catch(function(err) {console.log(err.name + ":" + err.message);});           
    
        timer = setInterval(
            function () {
                context.drawImage(video, 0, 0, 320, 240);
                var dataURL = canvas.toDataURL('image/jpeg', 1.0);
                var blob = dataURItoBlob(dataURL);
                var data = new FormData();
                data.append('file', blob);

                $.ajax({
                    url :  ajaxURL,
                    type: 'POST',
                    data: data,
                    contentType: false,
                    processData: false,
                    success: function(data) {
                    alert("success");
                    },    
                    error: function() {
                    alert("error");
                    }
                });
            }, 10000);
        
            function dataURItoBlob(dataURI) {
                // convert base64/URLEncoded data component to raw binary data held in a string
                var byteString;
                if (dataURI.split(',')[0].indexOf('base64') >= 0)
                    byteString = atob(dataURI.split(',')[1]);
                else
                    byteString = unescape(dataURI.split(',')[1]);
            
                // separate out the mime component
                var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
            
                // write the bytes of the string to a typed array
                var ia = new Uint8Array(byteString.length);
                for (var i = 0; i < byteString.length; i++) {
                    ia[i] = byteString.charCodeAt(i);
                }
            
                return new Blob([ia], {type:mimeString});
            }    
});
