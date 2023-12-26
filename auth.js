var inputName = document.getElementById("name");
var emailUser = document.querySelector("#email");
var passwordUser = document.querySelector("#password");
var btnSubmit = document.querySelector("#btn");
var linkPage = document.querySelector("#linkpage");
var htmltext = document.querySelector(".group");
var logoutBtn = document.querySelector(".logout");

var usersList = [];

if (JSON.parse(localStorage.getItem("userlist")) != null) {
  usersList = JSON.parse(localStorage.getItem("userlist"));
}
function changepage() {
  if (linkPage.innerHTML == "Sign Up") {
    singupPage();
  } else {
    sininPage();
  }
}

function submitForm() {
  if (btnSubmit.innerHTML == "sinup") {
    formSinUpSubmit();

    sininPage();
  } else if (btnSubmit.innerHTML == "login") {
    formLoginSubmit();
  }
}

function singupPage() {
  inputName.classList.remove("d-none");
  btnSubmit.innerHTML = "sinup";
  linkPage.innerHTML = "login";
}
function sininPage() {
  inputName.classList.add("d-none");
  btnSubmit.innerHTML = "login";
  linkPage.innerHTML = "Sign Up";
}
function formSinUpSubmit() {
  if (/\w+\@\w+\.(com)$/.test(emailUser.value)) {
    if (usersList.find((x) => x.email == emailUser.value)) {
      alert("email is used");
    } else {
      var user = {
        name: inputName.value,
        email: emailUser.value,
        password: passwordUser.value,
      };
      usersList.push(user);
      localStorage.setItem("userlist", JSON.stringify(usersList));
    }
  } else {
    alert("enter valid emal");
  }
}

function formLoginSubmit() {
  if (/\w+\@\w+\.(com)$/i.test(emailUser.value)) {
    console.log(usersList);
    var checkUser = usersList.find((x) => x.email == emailUser.value);
    console.log(checkUser);

    if (checkUser) {
      if (checkUser.password == passwordUser.value) {
        htmltext.innerHTML = `<h1>
      
      wellcome ${checkUser.name}
      
      </h1>`;
        logoutBtn.classList.remove("d-none");
      } else {
        htmltext.innerHTML = `<h1>
      
      password in correct
      </h1>`;
      }
    } else {
      htmltext.innerHTML = `<h1>
      
      email not found
      </h1>`;
    }
  } else {
    alert("enter valid email");
  }
}

function logout() {
  window.location.reload();
}
