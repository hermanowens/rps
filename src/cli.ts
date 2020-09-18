const inquirer = require('inquirer');
import { Game } from './Game';

/* used cliPrompt to avoid conflict with typescript prompt */
const cliPrompt = inquirer.createPromptModule();
const rockPaperScissors = new Game();

(function promptChoice() {
    cliPrompt({
        type: 'list',
        name: 'formation',
        message: 'Choose your formation',
        choices: rockPaperScissors.choices
    }).then((rps: { formation: string }) => {
        let random = Math.random() * rockPaperScissors.choices.length;
        console.log(rockPaperScissors.play(rps.formation, rockPaperScissors.choices[Math.floor(random)]));

        if (rockPaperScissors.count() < rockPaperScissors.totalRounds) {
            promptChoice();
        } else {
            console.log(rockPaperScissors.displayScore());
        }
    }).catch(console.error);
})();
