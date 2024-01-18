const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "/images/image.png"){
        myImage.setAttribute("src", "/images/weasel-face.jpeg");
     } else {
            myImage.setAttribute("src", "/images/image.png");
        }
    
}

let myButton = document.querySelector("button");
let myMsg = document.querySelector("#msg");

function setUserName() {
    const userName = prompt("Please enter your name");
    if (!userName) {
        setUserName();
    } else {
    localStorage.setItem("name", userName);
    myMsg.textContent = `You are welcome, ${userName}`;
    }    
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myMsg.textContent = `You are Welcome, ${storedName}`;
}

myButton.onclick = () => {
    setUserName();
}