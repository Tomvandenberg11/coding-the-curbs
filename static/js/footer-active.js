const footerButton1 = document.getElementById('footer-button-1')
const footerButton2 = document.getElementById('footer-button-2')
const footerButton3 = document.getElementById('footer-button-3')
footerButton1.classList.add('active')

const installServiceWorker = async () => {
    if ('serviceWorker' in navigator) {
      try {
        await navigator.serviceWorker.register('/service.js')
      } catch (error) {
        console.error(`Registration failed with ${error}`)
      }
    }
  }
  
  installServiceWorker()

const sPath = window.location.pathname
const sPage = sPath.substring(sPath.lastIndexOf('/') + 1)

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