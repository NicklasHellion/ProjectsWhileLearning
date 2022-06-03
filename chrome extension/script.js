let myLeads = ["A", "B", "C"];
const inputBtn = document.getElementById("input-btn");
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  console.log(myLeads);
});

let listItems = "";

for (let i = 0; i < myLeads.length; i++) {
  listItems += "<li>" + myLeads[i] + "</li> ";
  console.log(listItems);
}

ulEl.innerHTML = listItems;
