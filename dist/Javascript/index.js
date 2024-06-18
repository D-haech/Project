// Global variable declarations
const button = document.querySelectorAll("#button");
const mainPage = document.querySelector(".main-cont");
const signUp = document.querySelector(".sign-up");
const login = document.querySelector(".login");
const aLogin = document.querySelectorAll("#login");









button.forEach((e) => {
  e.addEventListener("click", () => {
    mainPage.style.display = "none";
    signUp.style.display = "block";
    login.style.display = "none";
  });
});

aLogin.forEach((e) => {
  e.addEventListener("click", () => {
    mainPage.style.display = "none";
    signUp.style.display = "none";
    login.style.display = "block";
  });
});

const clickin = () => {
  window.location.replace('repeat.html');
  console.log('see me');
}




