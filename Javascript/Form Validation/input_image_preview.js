// Input Image Preview
function readURL(input, preview) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            preview.setAttribute('src', e.target.result);
        }

        reader.readAsDataURL(input.files[0]);
    }
}

function imagePreview(e) {
    let inputTag = e.target
    let imgToChange = inputTag.parentElement.nextElementSibling // Add location of that div, where you want to preview this image.
    readURL(inputTag, imgToChange)
}

/* Calling Source :
    <input type="file" name="cardImage" class="inputImage" accept="image/*" onchange="imagePreview(event)"/>
*/
