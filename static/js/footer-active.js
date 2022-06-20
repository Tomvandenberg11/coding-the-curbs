const footerButton1 = document.getElementById('footer-button-1')
const footerButton2 = document.getElementById('footer-button-2')
const footerButton3 = document.getElementById('footer-button-3')
footerButton1.classList.add('active')


var sPath = window.location.pathname;
var sPage = sPath.substring(sPath.lastIndexOf('/') + 1);
console.log(sPage);
if (sPage === "") {
    footerButton1.classList.add('active')
} else if (sPage === "addtime" || sPage === "timelist" || sPage === "addtime" || sPage === "succesful") {
    footerButton1.classList.add('active')
    footerButton2.classList.remove('active')
    footerButton3.classList.remove('active')
} else if (sPage === "checkVerify" || sPage === "verifyCode" || sPage === "delete" || sPage === "verify") {
    footerButton1.classList.remove('active')
    footerButton2.classList.remove('active')
    footerButton3.classList.add('active')
} else if (sPage === "map") {
    footerButton1.classList.remove('active')
    footerButton2.classList.add('active')
    footerButton3.classList.remove('active')
}