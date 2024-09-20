/* I had designed a 'select button' for selecting state while filling address, and dynamically changed the options in 'select button' for district.
  We know that there is always a default option in select button like "Select your district".
  After changing the district list there might be chance that the text of previously selected option for another state may appears on the select button without any proper functioning.
  For avoiding such thing I have dispatch an Event to click on the default option to clear the text.
*/

const statesAndDist = {
    'Maharashtra': ['Ahmednagar','Sambhajinagar','Mumbai','Pune','Thane']
}

const stateSelected = async (value) => {
    const district = document.getElementById('district');
    const oldOptions = district.querySelectorAll('.opt:not(#default)');

    oldOptions.forEach(opt => {
        opt.remove();
    })

    if(value) {
        const districts = statesAndDist[value];
        districts.forEach(dist => {
            let newOption = document.createElement('span');
            newOption.setAttribute('value', dist);
            newOption.setAttribute('onclick', 'select(this)');
            newOption.textContent = dist;
            newOption.className = 'opt';
            district.querySelector('#selectOptContainer').appendChild(newOption);
        })
    }

    district.querySelector('#default').dispatchEvent(new Event('click'));
}
