const checklistSubmit = document.querySelector("#checklistSubmit");
const budgetBar = document.querySelector(".budget-bar");
const budgetSidebar = document.querySelector(".budget-link");
const homeLink = document.querySelector(".home-link");
const mainSidePage = document.querySelector(".main");
const addBudget = document.querySelector(".add-budget");
const newBudget = document.querySelector(".new-budget");
const closeTaskButton = document.querySelector(".close-task");
const checklistDiv = document.querySelector(".add-checklist");
const addTaskButton = document.querySelector(".add-tasks");
const closeBtn = document.querySelector("#close");

// Home page in side bar
homeLink.addEventListener("click", () => {
  budgetBar.style.display = "none";
  mainSidePage.style.display = "block";
  checklistBar.style.display = "none";
  messagesBar.style.display = "none";
});

//Join Event
const closeEvent = document.querySelector("#closeEvent");

//join event pop up
const joinEvent = document.querySelector(".join-event");

const joinBtn = document.querySelector(".join-btn");
const createBtn = document.querySelector(".create-btn");

joinBtn.addEventListener("click", () => {
  joinEvent.style.display = "block";
  newBudget.disabled = true;
  addTaskButton.disabled = true;
});

//join close btn
closeEvent.addEventListener("click", () => {
  joinEvent.style.display = "none";
  newBudget.disabled = false;
  addTaskButton.disabled = false;
});

budgetSidebar.addEventListener("click", () => {
  budgetBar.style.display = "block";
  mainSidePage.style.display = "none";
  checklistBar.style.display = "none";
  messagesBar.style.display = "none";
});

function formLimit() {
  let getName = document.querySelector("#checklistName").value;
  let getDate = document.querySelector("#checklistDate").value;

  // create table row
  let tr = document.createElement("tr");

  //create table data
  let td3 = document.createElement("td");
  let td1 = document.createElement("td");
  let td2 = document.createElement("td");

  //create input
  let input = document.createElement("input");
  input.type = "checkbox";

  //create text in table data
  let inputName = document.createTextNode(getName);
  let inputDate = document.createTextNode(getDate);

  //append name to table data
  td1.appendChild(inputName);
  td2.appendChild(inputDate);
  td3.appendChild(input);

  //append table data to table row
  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);

  //append table row to table body
  document.querySelector("#tbody").appendChild(tr);
}
// Add new budget section
newBudget.addEventListener("click", () => {
  addBudget.style.display = "block";
  joinBtn.disabled = true;
  addTaskButton.disabled = true;
});

closeBtn.addEventListener("click", () => {
  addBudget.style.display = "none";
  joinBtn.disabled = false;
  addTaskButton.disabled = false;
});

// add checklist div and button
closeTaskButton.addEventListener("click", () => {
  checklistDiv.style.display = "none";
});

//display checklist div
addTaskButton.addEventListener("click", () => {
  checklistDiv.style.display = "block";
  joinBtn.disabled = false;
  newBudget.disabled = false;
});

////////////////////////////////////////////////////////
///////////////////////////////////////////////////////

//Create  event
const getCreateBtn = document.querySelector(".create-btn");
const displayCreateDiv = document.querySelector(".create-event");
const closeCreateEvent = document.querySelector("#closeCreateEvent");

getCreateBtn.addEventListener("click", () => {
  displayCreateDiv.style.display = "block";
  joinBtn.disabled = true;
  addTaskButton.disabled = true;
  newBudget.disabled = true;
});

closeCreateEvent.addEventListener("click", () => {
  displayCreateDiv.style.display = "none";
  joinBtn.disabled = false;
  addTaskButton.disabled = false;
  newBudget.disabled = false;
});
///////////////////////////////////////////////
///////////////////////////////////////////////

//Mobile responsiveness for side bar
const mobileHomeLink = document.querySelector(".mobile-home-link");
const mobileBudgetLink = document.querySelector(".mobile-budget-link");

mobileHomeLink.addEventListener("click", () => {
  budgetBar.style.display = "none";
  mainSidePage.style.display = "block";
  checklistBar.style.display = "none";
  messagesBar.style.display = "none";
});

mobileBudgetLink.addEventListener("click", () => {
  budgetBar.style.display = "block";
  mainSidePage.style.display = "none";
  checklistBar.style.display = "none";
  messagesBar.style.display = "none";
});

// Event days and minutes count down
// all this should start working when the create is
// clicked in the create event pop up
const createPopupBtn = document.querySelector(".create-popup-btn");

createPopupBtn.addEventListener("click", () => {
  let days = document.querySelector(".days");
  let hours = document.querySelector(".hours");
  let minutes = document.querySelector(".mins");
  let seconds = document.querySelector(".sec");
  let newDate = document.querySelector(".getDate");
  
  let futureDate = new Date(newDate.value).getTime();
  setInterval(() => {
    let now = new Date().getTime();

    // distance between now and the future
    let distance = futureDate - now;

    //calculate the days, hours and minutes
    let setDays = Math.floor(distance / (1000 * 60 * 60 * 24));
    days.innerHTML = setDays + "<br> Days";

    // The seconds
    let setSeconds = Math.floor((distance % (1000 * 60)) / 1000);
    seconds.innerHTML = setSeconds + "<br> Sec";

    //The Hours
    let setHours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    hours.innerHTML = setHours + "<br> Hours";

    //The Minutes
    let setMinutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    minutes.innerHTML = `${setMinutes} <br> Mins`;
  }, 1000);
});

// checklist main row
const checklistBar = document.querySelector(".checklist-bar");
const checklistLink = document.querySelector(".checklist-link");
const mobileChecklistLink = document.querySelector(".mobile-checklist-link");

checklistLink.addEventListener("click", () => {
  budgetBar.style.display = "none";
  mainSidePage.style.display = "none";
  checklistBar.style.display = "block";
  messagesBar.style.display = "none";
});

//mobile checklist
mobileChecklistLink.addEventListener("click", () => {
  budgetBar.style.display = "none";
  mainSidePage.style.display = "none";
  checklistBar.style.display = "block";
  messagesBar.style.display = "none";
});

//Messages main row
const messagesBar = document.querySelector(".messages-bar");
const messagesLink = document.querySelector(".messages-link");
const mobileMessagesLink = document.querySelector('.mobile-messages-link');

messagesLink.addEventListener("click", () => {
  messagesBar.style.display = "block";
  budgetBar.style.display = "none";
  mainSidePage.style.display = "none";
  checklistBar.style.display = "none";
});

mobileMessagesLink.addEventListener("click", () => {
  messagesBar.style.display = "block";
  budgetBar.style.display = "none";
  mainSidePage.style.display = "none";
  checklistBar.style.display = "none";
});
