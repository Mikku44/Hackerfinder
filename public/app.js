
window.addEventListener("DOMContentLoaded", function () {
    getEnv()
    if (document.cookie) { //accepted


        // Update the count down every 1 second
        var x = setInterval(function () {

            // Get today's date and time
            var now = new Date().getTime();

            // Find the distance between now and the count down date
            if (localStorage.first === undefined) localStorage.setItem("first", now);
            var distance = now - localStorage.first;


            var seconds = Math.floor(distance / 1000);


            timer.innerHTML = seconds + "s ";



        });

    } else {
        m.toggleAttribute('open');
    }

    if (document.getElementById("secret") !== undefined) {
        console.log("tset");
    }




}
);

function setLevel(level) {
    document.cookie = 'level=' + level;

}

function Setcookie() {
    m.toggleAttribute('open');
    document.cookie = "cookie=1,level=7;"
}

function goToNext(url) {
    document.location.replace(url);
}

function logIn() {
    console.log(username.value, password.value);

    if (username.value == 'admin' && (password.value == 'passwordIspassword')) {
        alert('No way , how you can do that!!🎉🎉.');
        alert("If you continue for the next level , it mean you accept us to keep a little of Cookies and some Storage for this website.");

        window.location.href = '/prepare.html'
    } else {
        alert('Something is incorrect,please try again.');
    }

}


function caesarCipher(text, shift) {
    return text.split('').map(char => {
        if (char.match(/[a-z]/i)) {
            let code = char.charCodeAt(0);

            // Uppercase letters
            if (code >= 65 && code <= 90) {
                return String.fromCharCode(((code - 65 + shift) % 26) + 65);
            }
            // Lowercase letters
            else if (code >= 97 && code <= 122) {
                return String.fromCharCode(((code - 97 + shift) % 26) + 97);
            }
        }
        return char;
    }).join('');
}


async function getEnv() {
    const response = await fetch("simulator.env");
    if (!response.ok) {
        throw new Error('Failed to load environment file');
    }
    const text = await response.text();
    return text;
}

// function parseEnv(envText) {
//     const lines = envText.split(/\r?\n/); // Split by newlines
//     const envVars = {};
    
//     lines.forEach(line => {
//         const [key, value] = line.split("=").map(part => part.trim());
//         if (key) {
//             envVars[key] = value ? value.replace(/"/g, '') : '';
//         }
//     });

//     return envVars;
// }
