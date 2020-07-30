/************************************************/
/********* ADD CHECKLIST FUNCTIONALITY **********/
/************************************************/
var fullItemList = document.getElementById("my-list");

if (fullItemList){
 fullItemList.addEventListener("click", checkOffItem, false); 
}

function checkOffItem(clicked){
  if(clicked.target.tagname == "LI"){
    clicked.target.classlist.toggle("all-done");
  }
}


/* TODO: Add a variable to store the "my-list" element */


/* TODO: Create the event listener that listens for a mouse click and runs the checkOffList function */


/* TODO: Declare the function checkOffList and add actions inside the { } */


