function createFibonacci () {
  var fibonacci = [0, 1];
  while (fibonacci.length < 80) {
    fibonacci.push(fibonacci[fibonacci.length - 1] +
      fibonacci[fibonacci.length - 2]);
  }
  return fibonacci;
}

var fibSeq = createFibonacci();

function getLoop (num, fibSeq) {
  var fibLoop = [];
  for (var i = 0; i < fibSeq.length; i++) {
    fibLoop.push(fibSeq[i] % num);
    if (fibLoop[fibLoop.length - 1] == 1 &&
      fibLoop[fibLoop.length - 2] == num - 1) {
      break;
    }
  }
  console.log(num + ": " + fibLoop.length);
}

for (var i = 2; i < 50; i++) {
  getLoop(i, fibSeq);
}
