let twoDo = [];
let elements = document.getElementsByClassName("row");
let priority = document.getElementsByClassName("priority");
let inp = document.getElementsByClassName("inp");
let completed = document.getElementsByClassName("completed");
let removed = document.getElementsByClassName("removed");
let prioritized = null;
let comp = null;
let itemRemoved = null;

function nameFunc() {
    var firstLast = document.getElementById("names").value;
    document.getElementById("inp1").innerHTML = "hello, " + firstLast;
}

function creditFunc() {
    var cred = document.getElementById("credit").value;
    const MIN = 1;
    const MAX = 9999999999999999;

    if (cred > MAX || cred < MIN || Number.isNaN(cred)|| cred % 1 != 0){
      document.getElementById("inp2").innerHTML = "please enter a valid number.";
    }

    let cardNumber = String(cred);
    let cardLength = cardNumber.length;
    let cardAdd = 0;

    for (let i = cardLength - 2; i >= 0; i -= 2) {
      let doubleDigits = String(cardNumber.charAt(i) * 2);
      let digLength = doubleDigits.length;
      (digLength > 1) ? cardAdd = cardAdd + Number(doubleDigits.charAt(0)) + Number(doubleDigits.charAt(1)) : cardAdd = cardAdd + Number(doubleDigits);
    }

    for (let i = cardLength - 1; i >= 0; i -= 2) {
      let otherDigitNumber = Number(cardNumber.charAt(i));
      cardAdd += otherDigitNumber;
    }

    if (String(cardAdd).charAt(String(cardAdd).length - 1 == "0")) {
      if ((cardLength == 15 && cardNumber.charAt(0) == "3") && (cardNumber.charAt(1) == "4" || cardNumber.charAt(1) == "7")) {
        document.getElementById("inp2").innerHTML = "thank you for your amex.";
        setTimeout(function(){ window.location.href = 'main.html'; }, 1000);
      } else if (cardLength == 16 && cardNumber.charAt(0) == "5" && (cardNumber.charAt(1) == "1" || cardNumber.charAt(1) == "2" || cardNumber.charAt(1) == "3" || cardNumber.charAt(1) == "4" || cardNumber.charAt(1) == "5")) {
        document.getElementById("inp2").innerHTML = "thank you for your mastercard.";
        setTimeout(function(){ window.location.href = 'main.html'; }, 1000);
      } else if (cardLength >= 13 && cardLength <= 16 && cardNumber.charAt(0) == "4") {
        document.getElementById("inp2").innerHTML = "thank you for your visa.";
        setTimeout(function(){ window.location.href = 'main.html'; }, 1000);
      } else {
      document.getElementById("inp2").innerHTML = "please enter a valid number.";
      }
    } else {
      document.getElementById("inp2").innerHTML = "please enter a valid number.";
    }
}

window.onload = function() {
  document.getElementById("inpTable").onclick = chngState;
  document.getElementById("inp").onclick = add2Do;
};

const add2Do = function() {
  let input = document.getElementById("accInp").value;
  let inputLower = input.toLowerCase;
  if (input == "") {
      window.alert("nice! next time, try typing something!")
  } else if (inputLower.includes("cookies") {
      window.location.href = 'https://orteil.dashnet.org/cookieclicker/';
  } else {
    let toDoItem = {
      task: input, prioritized: false, completed: false, htmlRow: null,
      priorityButton: null, outToDo: null, completedButton: null,
      cursedSmile: null, remove2Do: null
    }

  twoDo.push(toDoItem);
  let toIndex = twoDo.indexOf(toDoItem);

  twoDo[toIndex].htmlRow = document.createElement("tr");
  twoDo[toIndex].htmlRow.setAttribute("class", "row");
  document.getElementById("inpTable").append(twoDo[toIndex].htmlRow);

  twoDo[toIndex].priorityButton = document.createElement("td");
  twoDo[toIndex].priorityButton.setAttribute("class", "priority");
  twoDo[toIndex].priorityButton.innerHTML = "!";
  elements[toIndex].append(twoDo[toIndex].priorityButton);

  twoDo[toIndex].outToDo = document.createElement("td");
  twoDo[toIndex].outToDo.innerHTML = twoDo[toIndex].task;
  twoDo[toIndex].outToDo.setAttribute("class", "inp");
  elements[toIndex].append(twoDo[toIndex].outToDo);

  twoDo[toIndex].completedButton = document.createElement("td");
  twoDo[toIndex].completedButton.setAttribute("class", "completed");
  elements[toIndex].append(twoDo[toIndex].completedButton);

  twoDo[toIndex].cursedSmile = document.createElement("img");
  twoDo[toIndex].cursedSmile.src = "images/checked.png";
  twoDo[toIndex].cursedSmile.setAttribute("class", "check");
  completed[toIndex].append(twoDo[toIndex].cursedSmile);

  twoDo[toIndex].remove2Do = document.createElement("td");
  twoDo[toIndex].remove2Do.setAttribute("class", "removed");
  twoDo[toIndex].remove2Do.innerHTML = "x";
  elements[toIndex].append(twoDo[toIndex].remove2Do);
  }
  document.getElementById("accInp").value = "";
};

const imp2Do = function() {
  prioritized = false;
  for (let i = 0; i < priority.length; i++) {
    priority[i].onclick = function() {
  if (twoDo[i].prioritized == false) {
    const nonImp2Do = elements[i];
    priority[i].style.backgroundColor = "#f5a038";
    elements[0].before(nonImp2Do);
    twoDo[i].prioritized = true;
    const firstToDo = twoDo[i];
    twoDo.splice(i, 1);
    twoDo.unshift(firstToDo);
    prioritized = true;
  } else if (twoDo[i].prioritized) {
    const nonImp2Do = elements[i];
    priority[i].style.backgroundColor = "#f7dc8f";
    elements[elements.length - 1].after(nonImp2Do);
    twoDo[i].prioritized = false;
    const firstToDo = twoDo[i];
    twoDo.splice(i, 1);
    twoDo.push(firstToDo);
    prioritized = true;
  }
};

if (prioritized) {
  break;
  }
}
};

const compToDo = function() {
  comp = false;
  for (let i = 0; i < completed.length; i++) {
    completed[i].onclick = function() {
    if (twoDo[i].completed == false) {
      inp[i].style.setProperty("text-decoration", "line-through");
      twoDo[i].completed = true;
    } else if (twoDo[i].completed) {
      inp[i].style.setProperty("text-decoration", "none");
      twoDo[i].completed = false;
    }
};

if (prioritized) {
  break;
  }
}
};

const xToDo = function() {
  itemRemoved = false;
  for (let i = 0; i < removed.length; i++) {
    removed[i].onclick = function() {
    const xToDoRemove = elements[i];
    xToDoRemove.remove();
    twoDo.splice(i, 1);
    itemRemoved = true;
};

if (itemRemoved) {
    break;
  }
}
}

const chngState = function() {
  imp2Do();
  compToDo();
  xToDo();
};

document.addEventListener("keyup", function(pressEnter) {
  if (pressEnter.keyCode == 13) {
  add2Do();
  }
});
