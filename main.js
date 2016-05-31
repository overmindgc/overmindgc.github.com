
function clickNavButton(buttonId) {
  if (buttonId == "introduction-div") {
    showDivWithId("introduction-div");
    document.getElementById("introductionLi").className = "active";
  } else {
    hideDivWithId("introduction-div");
    document.getElementById("introductionLi").className = "";
  }

  if (buttonId == "experience-div") {
    showDivWithId("experience-div");
    document.getElementById("experienceLi").className = "active";
  } else {
    hideDivWithId("experience-div");
    document.getElementById("experienceLi").className = "";
  }
}

function showDivWithId(divId) {
  document.getElementById(divId).style.display = "";
}

function hideDivWithId(divId) {
  document.getElementById(divId).style.display = "none";
}
