var outputRoman = document.getElementById("output");

function convertToRoman() {
  var inputNumber = document.getElementById("input").value;
  var romanNumeral = "";
  var thousands = Math.floor(inputNumber/1000);
  inputNumber = inputNumber - (thousands * 1000);
  var hundreds = Math.floor(inputNumber/100);
  inputNumber = inputNumber - (hundreds * 100);
  var tens = Math.floor(inputNumber/10);
  inputNumber = inputNumber - (tens * 10);
  var ones = Math.floor(inputNumber);
  romanNumeral = addThousands(thousands);
  romanNumeral = romanNumeral + addHundreds(hundreds);
  romanNumeral = romanNumeral + addTens(tens);
  romanNumeral = romanNumeral + addOnes(ones);
  return romanNumeral;
}

function addOnes(num) {
  var romanNumeral = "";
  switch (num) {
    case 1:
      romanNumeral = "I";
      break;
    case 2:
      romanNumeral = "II";
      break;
    case 3:
      romanNumeral = "III";
      break;
    case 4:
      romanNumeral = "IV";
      break;
    case 5:
      romanNumeral = "V";
      break;
    case 6:
      romanNumeral = "VI";
      break;
    case 7:
      romanNumeral = "VII";
      break;
    case 8:
      romanNumeral = "VIII";
      break;
    case 9:
      romanNumeral = "IX";
      break;
    default:
      romanNumeral = "";
  }
  return romanNumeral;
}

function addTens(num) {
  var romanNumeral = "";
  switch (num) {
    case 1:
      romanNumeral = "X";
      break;
    case 2:
      romanNumeral = "XX";
      break;
    case 3:
      romanNumeral = "XXX";
      break;
    case 4:
      romanNumeral = "XL";
      break;
    case 5:
      romanNumeral = "L";
      break;
    case 6:
      romanNumeral = "LX";
      break;
    case 7:
      romanNumeral = "LXX";
      break;
    case 8:
      romanNumeral = "LXXX";
      break;
    case 9:
      romanNumeral = "XC";
      break;
    default:
      romanNumeral = "";
  }
  return romanNumeral;
}

function addHundreds(num) {
  var romanNumeral = "";
  switch (num) {
    case 1:
      romanNumeral = "C";
      break;
    case 2:
      romanNumeral = "CC";
      break;
    case 3:
      romanNumeral = "CCC";
      break;
    case 4:
      romanNumeral = "CD";
      break;
    case 5:
      romanNumeral = "D";
      break;
    case 6:
      romanNumeral = "DC";
      break;
    case 7:
      romanNumeral = "DCC";
      break;
    case 8:
      romanNumeral = "DCCC";
      break;
    case 9:
      romanNumeral = "CM";
      break;
    default:
      romanNumeral = "";
  }
  return romanNumeral;
}

function addThousands(num) {
  var romanNumeral = "";
  switch (num) {
    case 1:
      romanNumeral = "M";
      break;
    case 2:
      romanNumeral = "MM";
      break;
    case 3:
      romanNumeral = "MMM";
      break;
    default:
      romanNumeral = "";
  }
  return romanNumeral;
}

document.body.onkeyup = function(e) {
  //  validKeys -- backspace and 0-9 //
  var validKeys = [8, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57];
  if (validKeys.includes(e.keyCode)) {
    outputRoman.innerHTML = convertToRoman();
  }
};
