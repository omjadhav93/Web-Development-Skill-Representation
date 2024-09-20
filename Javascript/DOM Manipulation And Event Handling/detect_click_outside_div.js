/* I have designed a <select button> manually and this code will help me to open options list for selecting one of them and close options list if user selected any one or user cick on the webpage rather than it.  */

const openOption = (btn) => {
    btn.querySelector("#selectOptContainer").classList.toggle("addOption")
}

window.addEventListener('click', function (e) {
    const selectBtns = document.querySelectorAll('.selectOptBtn');
    selectBtns.forEach(btn => {
        if (!btn.contains(e.target) && !btn.querySelector("#selectOptContainer").classList.contains("addOption")) {
            openOption(btn); // Calling function to close options list when user click on the webpage but outside the select button.
        }
    })
});
