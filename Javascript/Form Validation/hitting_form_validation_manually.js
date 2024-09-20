/* This code helps me to add 'atleast one' condition to checkbox, and required codition to radio. After adding this the main thing remains that is the form validation for other remaining form elements which get bypassed when we do form.submit() directly. So I add an Event Listener to submit action for report validation of other form elements(like input[type="text", required=true]) before submitting it.*/


/* Submitting Form */
const form = document.getElementById('addProductForm');

form.addEventListener(
    "submit",
    () => {
        form.reportValidity();
    },
    false,
);

const submitDone = async (event) => {
    const category = document.getElementById("category-input");
    const product = document.getElementById("product-type-input");
    const radios = document.querySelectorAll('input[type="hidden"]');
    const checkboxes = document.querySelectorAll('.checkbox-options');

    if (!category.value && category.value.length == 0) {
        alert(`Please select the category of your product. It's Important!`);
        return;
    }

    if (!product.value && product.value.length == 0) {
        alert(`Please select the category of your product. It's Important!`);
        return;
    }

    let radioCheck = false;
    for(const radio of radios)  {
        if (!radio.value && radio.value.length == 0) {
            alert(`Please select the ${radio.getAttribute('name')} of your product. It's Important!`);
            radioCheck = true;
            return;
        }
    }

    if (radioCheck) return;

    const colorSelected = document.querySelectorAll('input[name="color"]:checked')
    if (colorSelected.length == 0) {
        alert(`You doen't have selected any color, please select atleast any one.`)
        return;
    }

    checkboxes.forEach(check => {
        const checkList = check.querySelectorAll('input[type="checkbox"]:checked');
        if (checkList.length == 0) {
            alert(`You doen't have selected any ${check.querySelector('input[type="checkbox"]').getAttribute('name')}, please select atleast any one.`);
            radioCheck = true;
            return;
        }

    })

    if (radioCheck) return;


    colorSelected.forEach(color => {
        const fileInput = document.querySelectorAll(`input[name='${color.value}-image']`);
        let imgLen = 0;
        fileInput.forEach(input => {
            imgLen += input.files.length;
        })
        if (imgLen == 0) {
            alert(`Please add images for ${color.value} colour.`)
            return;
        }
    })

    form.requestSubmit();

}
