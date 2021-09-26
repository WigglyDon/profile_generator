const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name? \n", (answer1) => {
  rl.question('What is your favorite food? \n', (answer2) => {
    rl.question('What is an activity you like doing? \n', (answer3) => {
      rl.question('What do you listen to while doing that? \n', (answer4) => {
        rl.question('What is your superpower? \n', (answer5) => {
          rl.question('What is your favorite season? \n', (answer6) => {
            console.log(`Let me get this straight...
            your name is ${answer1},
            and your favorite food is ${answer2}.
            Usually you enjoy spending time doing ${answer3}
            while listening to ${answer4}.
            Your superpower is ${answer5}
            and your favorite season is ${answer6}?`);
            rl.close();
          });
        });
      });
    });
  });
});









// ---------------------------------------------------
//      example questions below
// 1) What's your name? Nicknames are also acceptable :)
// 2) What's an activity you like doing?
// 3) What do you listen to while doing that?
// 4) Which meal is your favourite (eg: dinner, brunch, etc.)
// 5) What's your favourite thing to eat for that meal?
// 6) Which sport is your absolute favourite?
// 7) What is your superpower? In a few words, tell us what you are amazing at!