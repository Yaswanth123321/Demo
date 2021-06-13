"use strict";
let results;
fetch("https://jsonplaceholder.typicode.com/todos")
  .then(function (response) {
    return response.json();
  })
  .then(function (json) {
    consoleLogJson(json);
  });
function consoleLogJson(json) {
  let table = document.getElementById("tablebody");
  results = json;
  for (let i = 0; i < results.length; i++) {
    let row = `<tr>
    <td>${results[i].userId}</td>
    <td>${results[i].id}</td>
      <td>${results[i].title}</td>
        <td>${results[i].completed}</td></tr>`;
    table.innerHTML += row;
  }
}
function adddata() {
  let table = document.getElementById("tablebody");
  let a1 = prompt("Enter userId");
  let a2 = prompt("Enter id");
  let a3 = prompt("Enter title");
  let a4 = prompt("Enter value of completed");
  let row = `<tr><td>${a1}</td>
  <td>${a2}</td>
  <td>${a3}</td>
  <td>${a4}</td></tr>`;
  table.innerHTML += row;
}
function updatedata() {
  fetch("https://jsonplaceholder.typicode.com/todos/1", {
    method: "PUT",
    body: JSON.stringify({
      id: 1,
      title: "foo",
      completed: "true",
      userId: 1,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
}
