function myFunction() {
  document.getElementById("myDropdown-menu").classList.toggle("show-menu");
  document.getElementById("myDropdownMr").classList.toggle("show-menu");
  /*  const menu = document.querySelector(".dropbtn-menu");
menu.addEventListener("click", (e) => {
  e.preventDefault();
  menu.nextElementSibling.classList.toggle("menu-show");
}); */
}
function myFunctionMr() {
  
}

// Закройте выпадающее меню, если пользователь щелкает за его пределами
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn-menu")) {
    var dropdowns = document.getElementsByClassName("dropdown-content-menu");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show-menu")) {
        openDropdown.classList.remove("show-menu");
      }
    }
  }
};
