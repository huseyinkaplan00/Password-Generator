const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];
let inputRange = document.querySelector("#rangeSlide");
const passBtn = document.getElementById("passBtn");
const btnOne = document.getElementById("buttonOne");
const btnTwo = document.getElementById("buttonTwo");
const textRange = document.getElementById("textRange")
const mainBox = document.querySelector(".mainBox")
const headOne = document.querySelector("#headOne")
const headTwo = document.querySelector("#headTwo")
const onOff = document.getElementById("onOff")

function updateRange() {
    return textRange.textContent = inputRange.value
}
inputRange.addEventListener("input", updateRange)


function getRandom() {
    let sayi = Math.floor(Math.random() * characters.length);
    return characters[sayi]
}

function render() {
    let randomPass = ""
    for (let i = 0; i < updateRange(); i++) {
        randomPass += getRandom()
    }
    return randomPass
}
function renderTwo() {
    let randomPass = ""
    for (let i = 0; i < updateRange(); i++) {
        randomPass += getRandom()
    }
    return randomPass
}



function copyClipboard() {
    let range = document.createRange();
    range.selectNode(btnOne);
    window.getSelection().removeAllRanges(); // clear current selection
    window.getSelection().addRange(range); // to select text
    document.execCommand("copy");
    window.getSelection().removeAllRanges();// to deselect
}
function copyClipboardTwo() {
    let range = document.createRange();
    range.selectNode(btnTwo);
    window.getSelection().removeAllRanges(); // clear current selection
    window.getSelection().addRange(range); // to select text
    document.execCommand("copy");
    window.getSelection().removeAllRanges();// to deselect

}


passBtn.addEventListener("click", function () {
    btnOne.textContent = render()
    btnTwo.textContent = renderTwo()
})

btnOne.addEventListener("click", copyClipboard)
btnTwo.addEventListener("click", copyClipboardTwo)

btnOne.addEventListener("click", function () {

    btnOne.style.background = '#10B981'
    btnOne.innerHTML = 'Copied ✅'

    setTimeout(() => {

        btnOne.textContent = render()
        btnOne.style.background = '#2F3E53'
    }, 2000);
})
btnTwo.addEventListener("click", function () {

    btnTwo.style.background = '#10B981'
    btnTwo.innerHTML = 'Copied ✅'

    setTimeout(() => {

        btnTwo.textContent = render()
        btnTwo.style.background = '#2F3E53'
    }, 2000);
})


onOff.addEventListener("click", function () {
    mainBox.classList.toggle("colorOne")
    headOne.classList.toggle("colorTwo")
    headTwo.classList.toggle("colorTwo")

})

