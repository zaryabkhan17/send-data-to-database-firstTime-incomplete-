

function signupfunc() {
    axios.post('http://localhost:3000/login', {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
    }).then((response) => {
        console.log(response);
    }, (error) => {
        console.log(error);
    });
}
