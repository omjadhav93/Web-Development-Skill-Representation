// Input image validation
function validateFileType(e) {
    let inputImage = e.target.value;
    var idxDot = inputImage.lastIndexOf(".") + 1;
    var extFile = inputImage.substr(idxDot, inputImage.length).toLowerCase();
    if (extFile == "jpg" || extFile == "jpeg" || extFile == "png") { // You can add all the extension which you want to allow.
    } else {
        e.target.value = '';
        alert("Only jpg/jpeg and png files are allowed!");
    }
}

/* Calling Source :
    <input type="file" name="cardImage" class="inputImage" accept="image/*" onchange="validateFileType(event)"/>
*/
