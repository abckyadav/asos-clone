 // https://github.com/masai-school/api-mocker/wiki/Authentication-API

  //api link ==>  https://masai-api-mocker.herokuapp.com/

  //register url ==>  https://masai-api-mocker.herokuapp.com/auth/register

  //login url ==>  https://masai-api-mocker.herokuapp.com/auth/login


var errortag = document.getElementById("error");
var successtag = document.getElementById("success");

var userArr = JSON.parse(localStorage.getItem("userData")) || [];
console.log('userArr:', userArr);


var register_data;

  async function Register(e) {
    //1. get all the input value;
    //2. store it in an object
    //3. convert the object to json
    //4. send data to server(fetch)
    try {
      e.preventDefault();

      register_data = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
        username: document.getElementById("username").value,
        mobile: document.getElementById("mobile").value,
        description: document.getElementById("description").value,
      };

      register_data = JSON.stringify(register_data);
      console.log("register_data:", register_data);
    } catch (e) {
      console.log("e:", e);
    }

    let reg_api = `https://masai-api-mocker.herokuapp.com/auth/register`;

    try {
      let response = await fetch(reg_api, {
        method: "POST",

        body: register_data,

        headers: {
          "Content-Type": "application/json",
        },
      });


      let data = await response.json();
      console.log("data:", data);
      errortag.textContent = data.message;

      if(data.error == false) {
          errortag.style.color = "green";

            userArr.push(register_data);
            localStorage.setItem("userData", JSON.stringify(userArr));

            

          setTimeout(function(){
            window.location.href = "../signin.html"
          }, 2000);
      }

    } catch (err) {
      console.log("err:", err);
    }

  }

  async function login(e) {
    e.preventDefault();

    let login_data = {
      username: document.getElementById("username-login").value,
      password: document.getElementById("password-login").value,
    };

    login_data = JSON.stringify(login_data);

    let login_url = `https://masai-api-mocker.herokuapp.com/auth/login`;

    let response = await fetch(login_url, {
      method: "POST",

      body: login_data,

      headers: {
        "Content-Type": "application/json",
      },
    });

    let logged_data = await response.json();
    console.log("logged_data:", logged_data);

    

     if (logged_data.error == true){
        errortag.textContent = logged_data.message;
        errortag.style.color = "red";
      }
     

    let username = document.getElementById("username-login").value;
    getUser(username, logged_data.token);
  }

  async function getUser(username, token) {
    let api = `https://masai-api-mocker.herokuapp.com/user/${username}`;

    let response = await fetch(api, {
      headers: {
        "Content-Type": "application/json",

        Authorization: `Bearer ${token}`,
      },
    });

    let after_login_data = await response.json();
    console.log("logged_data:", after_login_data);

    successtag.textContent = `Hi ${after_login_data.name}`;
        successtag.style.color = "green";

        setTimeout(function(){
            window.location.href = "../index.html.html"
          }, 2000);
  }