let myHeading = document.querySelector("h1");
myHeading.textContent = "hello world!";

// document.querySelector("html").addEventListener("click", function(){
//     alert("别戳我，我怕疼");
// });

let myImg = document.querySelector("img");
myImg.onclick = function () {
    let mySrc = myImg.getAttribute("src");
    if (mySrc == "images/person/test.png") {
        myImg.setAttribute("src", "images/machine/fly.png");
    } else {
        myImg.setAttribute("src", "images/person/test.png");
    }
};

let myButton = document.querySelector("button")
myButton.onclick = function () {
    setUserName();
};

if (!localStorage.getItem("name")) {
    setUserName();
    
} else {
    let storedName = localStorage.getItem("name");
    myHeading.textContent = "China 酷毙了，" + storedName;
}

function setUserName() {
    let myName = prompt("请输入你的名字。");
    if(!myName) {
        setUserName();
    }else {
        localStorage.setItem("name", myName);
        myHeading.textContent = "China 酷毙了，" + myName;
    }

}