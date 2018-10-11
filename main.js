var config = {
  flag: true,
  location: 'topLeft',
  refreshPageOnTranslation: true,
  dropdownColor: '',
  dropdownTextColor: ''
}

var checkForFlags = () => {
  if (config.flag) {
    var languageOptions = document.querySelector('#qordoba-myDropdown').children;

    for (var i = 0; i < languageOptions.length; i++) {
      var countryCode = languageOptions[i].dataset.langcode.split('-')[1];
      var flagToBeAppended = document.createElement('img');

      flagToBeAppended.src = `https://raw.githubusercontent.com/tkrotoff/famfamfam_flags/master/${countryCode}.png`;
      flagToBeAppended.align = 'right';

      languageOptions[i].appendChild(flagToBeAppended);
    }
  }
}

var setDropdownPosition = () => {
  var dropdown = document.getElementsByClassName('qordoba-dropdown')[0];

  dropdown.classList.add(`qordoba-${config.location}`);

  if (config.location.slice(0,3) === 'top') {
    document.body.style.paddingTop = `${dropdown.clientHeight}px`
  }
  else {
    document.body.style.paddingBottom = `${dropdown.clientHeight}px`
  }
}

var setDropdownColor = () => {
  var dropdownButton = document.getElementsByClassName('qordoba-dropbtn')[0];
  if (config.dropdownColor.length) {
    dropdownButton.style.backgroundColor = config.dropdownColor;
  }
  if (config.dropdownTextColor.length) {
    dropdownButton.style.color = config.dropdownTextColor;
  }
}

var handleSelect = (context) => {
  if (!Qordoba) {
    console.error('Qordoba SDK not foundd')
  }
  else {
    Qordoba.translate(context.dataset.langcode, config.refreshPageOnTranslation)
  }
}

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
var toggleDropdown = () => {
    document.getElementById("qordoba-myDropdown").classList.toggle("qordoba-show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = (event) => {
  if (!event.target.matches('.qordoba-dropbtn')) {

    var dropdowns = document.getElementsByClassName("qordoba-dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('qordoba-show')) {
        openDropdown.classList.remove('qordoba-show');
      }
    }
  }
}

var init = () => {
  checkForFlags();
  setDropdownPosition();
  setDropdownColor();
}

document.addEventListener('DOMContentLoaded', () => {
  init()
});