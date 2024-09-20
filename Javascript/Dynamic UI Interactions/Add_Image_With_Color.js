/* This feature allows sellers to add product images corresponding to different color variants while listing their products on the E-Commerce platform. The UI ensures ease of use by dynamically generating input fields based on selected colors and enforcing image upload limits. */

/* This function is written for adding and removing a user interface for adding images for selected checkboxes of different colors of a product. This UI is designed such that a seller can add images of a product in it's respective color easily. */
const fileSection = () => {
    const prevHtml = document.querySelector('.color-not-selected');
    if (prevHtml) {
        prevHtml.remove();
    }

    const colors = document.querySelectorAll('input[name="color"]:checked')
    const appendLoc = document.getElementById('images');

    let colorList = [];
    // Creating new color boxes
    colors.forEach(color => {
        colorList.push(`${color.value}`);
        const inputBtn = document.querySelectorAll(`input[name='${color.value}-image']`);
        if (inputBtn.length > 0) {
            return;
        }
        const newDiv = document.createElement('div');
        newDiv.classList = "image-box";
        newDiv.innerHTML = `<p class="que">Add images of product for ${color.value} colour :</p>
            <div class="image-adding-section">
                <input type="file" name="${color.value}-image" class="file-input-tag" onchange="checkFile(this)" accept="image/*" multiple/>
                <div class="add-option" onclick="takeInput('${color.value}')"><ion-icon name="add-outline"></ion-icon></div>
            </div>`;

        appendLoc.appendChild(newDiv);
    })

    // Delete Previously selected but not now.
    const imageBoxes = document.querySelectorAll('.image-box');
    imageBoxes.forEach(box => {
        const colorName = box.querySelector('input[type="file"]').getAttribute('name');
        if (!(colorList.indexOf(colorName.slice(0, colorName.indexOf('-'))) >= 0)) {
            box.remove();
        }
    })
}

/* This function is designed to check that number of images selected in a single input for a particular color of a product by user is <= 5 or not. If it exceeds the limit then decline the call of input.*/
const takeInput = color => {
    const inputBtn = document.querySelectorAll(`input[name='${color}-image']`);
    let imgLen = 0;
    inputBtn.forEach(btn => {
        imgLen += btn.files.length;
    })
    if (imgLen > 5) {
        alert("You can upload only 5 images for each color")
        return;
    }
    inputBtn[inputBtn.length - 1].click();
}

/* This function is designed to check that does the user exceeding limit of 5 after adding number of images selected in current input to the number of images added before for a particular color. 
    - If it exceeds it then decline the current set selected images in input.
    - If it exactly matches the limit of 5 then add them and stop showing input option.
    - If it is less than 5 then continue showing input option.
This functions will also adding the preview of images added by user. */
const checkFile = (e) => {
    const inputBtn = document.querySelectorAll(`input[name='${e.name}']`);
    let imgLen = 0;
    inputBtn.forEach(btn => {
        imgLen += btn.files.length;
    })
    if (imgLen > 5) {
        alert("You can upload only 5 images for each color")
        e.value = "";
        return;
    }

    const addImageLoc = e.parentElement.querySelector('.add-option');

    const newDiv = document.createElement('div');
    newDiv.classList = "image-cover";
    let height = addImageLoc.offsetHeight;
    newDiv.style.height = height;
    newDiv.innerHTML = '<ion-icon name="close-circle" class="cut-icon" onclick="removeImg(this)"></ion-icon>';

    const files = Array.from(e.files);
    files.forEach(file => {
        const imgDiv = document.createElement('div');
        imgDiv.classList = "image-display";

        const reader = new FileReader();

        // Read file as data URL
        reader.readAsDataURL(file);

        // Add an event listener for when file reading is complete
        reader.onload = function () {
            const img = document.createElement('img');
            img.src = reader.result;
            img.alt = file.name;
            img.classList.add('preview-image');
            imgDiv.appendChild(img);
        };

        newDiv.appendChild(imgDiv);
    })

    addImageLoc.before(newDiv)

    if (imgLen == 5) {
        addImageLoc.remove();
    } else {
        const inputFile = document.createElement('input')
        inputFile.type = 'file';
        inputFile.name = `${e.name}`;
        inputFile.classList = 'file-input-tag';
        inputFile.setAttribute('onchange', 'checkFile(this)');
        inputFile.accept = 'image/*';
        inputFile.multiple = true;
        addImageLoc.before(inputFile);
    }
}

/* This function will remove the set of that images which was added together in a same input call, if user wants to remove them.*/
const removeImg = e => {
    const imgCover = e.parentElement;
    const inputBtn = imgCover.previousElementSibling;
    const editLoc = imgCover.parentElement
    const inputName = inputBtn.name;
    imgCover.remove();
    inputBtn.remove();

    const color = inputName.slice(0, inputName.indexOf('-'));
    const inputBtnList = document.querySelectorAll(`input[name='${color}-image']`);
    let imgLen = 0;
    inputBtnList.forEach(btn => {
        imgLen += btn.files.length;
    })
    const addImageLoc = editLoc.querySelector('.add-option');
    if (imgLen < 5 && !addImageLoc) {
        const inputFile = document.createElement('input')
        inputFile.type = 'file';
        inputFile.name = `${inputName}`;
        inputFile.classList = 'file-input-tag';
        inputFile.setAttribute('onchange', 'checkFile(this)');
        inputFile.accept = 'image/*';
        inputFile.multiple = true;
        editLoc.appendChild(inputFile);

        const addImageBtn = document.createElement('div');
        addImageBtn.classList.add('add-option');
        addImageBtn.setAttribute('onclick', `takeInput('${color}')`);
        addImageBtn.innerHTML = '<ion-icon name="add-outline"></ion-icon>';
        editLoc.appendChild(addImageBtn);
    }
}
