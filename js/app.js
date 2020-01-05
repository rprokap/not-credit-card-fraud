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
