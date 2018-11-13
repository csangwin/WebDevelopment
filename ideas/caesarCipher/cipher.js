function rot13(str) {
  var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var message = "";
  for (var i = 0; i < str.length; i++) {
    if (str[i] == " ") {
      message = message + " ";
    } else {
      var letterIndex = alphabet.indexOf(str[i]);
      letterIndex = (letterIndex + 13) % 26;
      message = message + alphabet[letterIndex];
    }
  }
  return message;
}

console.log(rot13("SERR PBQR PNZC"));
