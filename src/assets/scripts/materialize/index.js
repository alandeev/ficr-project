document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems, sidenavOptions);
  
});

const sidenavOptions = {
  edge: 'right',
  draggable: true
}

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.slider');
  var instances = M.Slider.init(elems, sliderOptions);
});

const sliderOptions = {
  duration: 100,
}

const elemsDropdown = document.querySelectorAll('.dropdown-trigger');
const instancesDropdown = M.Dropdown.init(elemsDropdown, {
  coverTrigger: false
})
