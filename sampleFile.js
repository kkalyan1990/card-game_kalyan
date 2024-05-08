import rl from "readline-promise";

function sampleFile() {
    
    const readline = rl.default;
    const rlp = readline.createInterface({
        input: process.stdin,
        output: process.stdout
      });
      console.log('sample2');
      var waitForUserInput = function() {
        rlp.question("Pick a card ( Enter a number between 1 and 10) /n", answer => {
          if (answer > 0 && answer < 11) {
            console.log(`answer is ${answer}`);
                // card = new Card(number);
                // this.checkTotalScore(card);
                rlp.close();
          } else {
            console.log('recursive');
              waitForUserInput();
          }
        });
      }
      waitForUserInput();
}

sampleFile();