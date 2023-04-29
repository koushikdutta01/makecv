// alert("loading");
/*(function () {
  'use strict'
  var forms = document.querySelectorAll('.needs-validation')
  Array.prototype.slice.call(forms).forEach(function(form) {
    form.addEventListener('submit',function (event) {
      if(!form.checkValidity()){
        event.preventDefault()
        event.stopPropagation()
      }
      form.classList.add('was-validated')
    }, false)
  });
})*/

document.getElementById("templates").style.display = "none";
function addNewWEField() {
  //   console.log("Adding new field");

  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("weField");
  newNode.classList.add("mt-2");
  newNode.setAttribute("rows", 3);
  newNode.setAttribute("placeholder", "Enter here");

  let weOb = document.getElementById("we");
  let weAddButtonOb = document.getElementById("weAddButton");

  weOb.insertBefore(newNode, weAddButtonOb);
}

function addNewAQField() {
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("eqField");
  newNode.classList.add("mt-2");
  newNode.setAttribute("rows", 3);
  newNode.setAttribute("placeholder", "Enter here");

  let aqOb = document.getElementById("aq");
  let aqAddButtonOb = document.getElementById("aqAddButton");

  aqOb.insertBefore(newNode, aqAddButtonOb);
}
function addNewskillField() {
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("skillField");
  newNode.classList.add("mt-2");
  newNode.setAttribute("rows", 1);
  newNode.setAttribute("placeholder", "Enter here");

  let skillOb = document.getElementById("skill");
  let skillAddButtonOb = document.getElementById("skillAddButton");

  skillOb.insertBefore(newNode, skillAddButtonOb);
}
function formValid() {
  'use strict'
  const forms = document.querySelectorAll('.needs-validation');
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if(!form.checkValidity()){
        event.preventDefault();
        event.stopPropagation();
      }
      form.classList.add('was-validated')
    },false);
  });  
}
//template choice
function chooseCV() {  
  document.getElementById("cv-form").style.display = "none";
  document.getElementById("examples").style.display = "none";
  document.getElementById("tagline").style.display = "none";
  document.getElementById("templates").style.display = "block";
}

//generating cv
function generateCV() {
  document.getElementById("title").style.display = "none";
  document.getElementById("templates").style.display = "none";
  document.getElementById("footer").style.display = "none";
  document.getElementById("cv-template").style.display = "block";
  // console.log("generating CV");

  let nameField = document.getElementById("nameField").value;

  let nameT1 = document.getElementById("nameT1");

  nameT1.innerHTML = nameField;

  //direct

  document.getElementById("nameT1").innerHTML = nameField;

  //contact
  console.log(document.getElementById("contactField").value)
  document.getElementById("contactT").innerHTML =
    document.getElementById("contactField").value;

  //email
  document.getElementById("emailT").innerHTML =
    document.getElementById("emailfield").value;

  //address
  document.getElementById("addressT").innerHTML =
    document.getElementById("addressField").value;

  //objective

  document.getElementById("objectiveT").innerHTML =
    document.getElementById("objectiveField").value;

  //we

  let wes = document.getElementsByClassName("weField");
  let weVal = document.getElementById("WorkExp").value;
  console.log(weVal)
  if (weVal === "") {
    document.getElementById("weHead").style.display = "none";
  }
  else{
    let str = "";

    for (let e of wes) {
      str = str + `<li> ${e.value} </li>`;
    }

    document.getElementById("weT").innerHTML = str;
  }

  //skill
  let skils = document.getElementsByClassName("skillField");
  let skillVal = document.getElementById("skl").value;
  console.log(skillVal)
  if (skillVal === "") {
    document.getElementById("skillHead").style.display = "none";
  }
  else{
    let str2 = "";

    for (let e of skils) {
      str2 += `<li> ${e.value} </li>`;
    }

    document.getElementById("skillT").innerHTML = str2;
  }

  

  //aq

  let aqs = document.getElementsByClassName("eqField");
  let aqVal = document.getElementById("aqua").value;
  console.log(aqVal)
  if (aqVal === "") {
    document.getElementById("aqHead").style.display = "none";
  }
  else{
    let str2 = "";

    for (let e of aqs) {
      str2 += `<li> ${e.value} </li>`;
    }

    document.getElementById("aqT").innerHTML = str2;
  }

  //code for setting image

  let file = document.getElementById("imgField").files[0];

  console.log(file);

  let reader = new FileReader();

  reader.readAsDataURL(file);

  console.log(reader.result);

  //set the image to template

  reader.onloadend = function () {
    document.getElementById("imgTemplate").src = reader.result;
  };

}

//template 2

function createtwoCV() {
  document.getElementById("title").style.display = "none";
  document.getElementById("templates").style.display = "none";
  document.getElementById("footer").style.display = "none";
  document.getElementById("cv-template2").style.display = "block";
  // console.log("generating CV");

  let nameField = document.getElementById("nameField").value;

  let nameT1 = document.getElementById("nameT2");

  nameT1.innerHTML = nameField;

  //direct

  document.getElementById("nameT2").innerHTML = nameField;

  //contact
  console.log(document.getElementById("contactField").value)
  document.getElementById("contactT2").innerHTML =
    document.getElementById("contactField").value;

  //email
  document.getElementById("emailT2").innerHTML =
    document.getElementById("emailfield").value;

  //address
  document.getElementById("addressT2").innerHTML =
    document.getElementById("addressField").value;

  //objective

  document.getElementById("objectiveT2").innerHTML =
    document.getElementById("objectiveField").value;

  //we

  let wes = document.getElementsByClassName("weField");
  let weVal = document.getElementById("WorkExp").value;
  console.log(weVal)
  if (weVal === "") {
    document.getElementById("weHead2").style.display = "none";
  }
  else{
    let str = "";

    for (let e of wes) {
      str = str + `<li> ${e.value} </li>`;
    }

    document.getElementById("weT2").innerHTML = str;
  }

  //skill
  let skils = document.getElementsByClassName("skillField");
  let skillVal = document.getElementById("skl").value;
  console.log(skillVal)
  if (skillVal === "") {
    document.getElementById("skillHead2").style.display = "none";
  }
  else{
    let str2 = "";

    for (let e of skils) {
      str2 += `<li> ${e.value} </li>`;
    }

    document.getElementById("skillT2").innerHTML = str2;
  }

  

  //aq

  let aqs = document.getElementsByClassName("eqField");
  let aqVal = document.getElementById("aqua").value;
  console.log(aqVal)
  if (aqVal === "") {
    document.getElementById("aqHead2").style.display = "none";
  }
  else{
    let str2 = "";

    for (let e of aqs) {
      str2 += `<li> ${e.value} </li>`;
    }

    document.getElementById("aqT2").innerHTML = str2;
  }

  //code for setting image

  let file = document.getElementById("imgField").files[0];

  console.log(file);

  let reader = new FileReader();

  reader.readAsDataURL(file);

  console.log(reader.result);

  //set the image to template

  reader.onloadend = function () {
    document.getElementById("imgTemplate2").src = reader.result;
  };

}

//print cv
function printCV() {
  document.getElementById("print").style.display = "none";
  window.print();
}
