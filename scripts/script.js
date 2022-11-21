window.onload = function() {
  //Get a reference to the link on the page
  // with an id of "mylink"
  //Set code to run when the link is clicked
  // by assigning a function to "onclick"
  const navButton = document.getElementById("navButton");
  const navList = document.getElementById("navList")
  navButton.addEventListener("click", showNavBar);

  function showNavBar() {

    if (navList.style.display == "block"){

      navList.style.display = "none";
    }
    else {
      navList.style.display = "block";
    }
    return false;
  }


}
