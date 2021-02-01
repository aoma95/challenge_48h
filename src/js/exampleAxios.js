// First option with XMLHttpRequest

/*window.onload = function () {
    let submitLoginButton = document.getElementById('login-submit');
    submitLoginButton.addEventListener('click', function (e) {
        e.preventDefault();
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                // Get jwt token -> good luck ALessio !
                console.log(JSON.parse(this.responseText));
            }
        }
        let data = {
            "username": document.getElementById('username').value,
            "password": document.getElementById('password').value
        };
        xhttp.open('POST', 'http://localhost:8080/login');
        xhttp.setRequestHeader('Content-Type', 'application/json');
        xhttp.send(JSON.stringify(data));
    });
}*/

// Second option : Ajax with JQuery

/*$('#login-submit').click(function () {
    let data = {
        "username": $('#username').val(),
        "password": $('#password').val()
    };

    $.ajax({
        type: 'POST',
        contentType: 'application/json',
        url: 'http://localhost:8080/login',
        data: JSON.stringify(data),
        success: function (result) {
            // Get jwt token -> good luck ALessio !
            console.log(result);
        },
    })
});*/

// Third option : Axios

window.onload = function () {
    let submitLoginButton = document.getElementById('login-submit');
    submitLoginButton.addEventListener('click', function (e) {
        e.preventDefault();
        let data = {
            "username": document.getElementById('username').value,
            "password": document.getElementById('password').value
        };
        axios.post('http://localhost:8080/login', data)
            .then(response => {
                // Get jwt token -> good luck ALessio !
                const result = response.data;
                console.log(result);
            })
            .catch(error => console.log(error));
    });

axios.get('http://localhost:8080/login').then(resp => {

    console.log(resp.data);
});
}

