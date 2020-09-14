const inquirer = require('inquirer');

/* TODO: move interface to separate file */
interface Round {
    computer: string;
    user: string;
    winner: string;
}

/* used cliPrompt to avoid conflict with typescript prompt */
const cliPrompt = inquirer.createPromptModule();

/* TODO: move game to a spearate file and important, so that it may be a shared dependency */
class Game {
    private _draw: number = 0;
    private _lose: number = 0;
    private _rounds: Round[] = [];
    private _win: number = 0;

    choices: string[] = ['rock','paper','scissors'];
    decision = new Map();
    totalRounds: number;

    constructor(totalRounds: number = 10) {
        this.totalRounds = totalRounds;

        /* determines what beats what */
        this.decision.set('rock', 'scissors');
        this.decision.set('paper', 'rock');
        this.decision.set('scissors', 'paper');
    }

    addRound(round: Round): void {
        this._rounds.push(round);
    }

    count(): number {
        return this._rounds.length;
    }

    displayScore(): string {
        let final = `Wow, that's impressive! You managed to get a draw with the computer over ${this.totalRounds} rounds!`;

        if (this._win > this._lose) {
            final = "WooHoo, you beat the computer!";
        } else if (this._win < this._lose) {
            final = "Bummer, you lost to the computer! You should restart and play again.";
        }

        return `Final Score: ${final}\nYou: ${this._win}\nComputer: ${this._lose}\nDraws: ${this._draw}`;
    }

    play(user: string, computer: string) {
        let winner;

        if (user === computer) {
            this._draw++;
            winner = 'Whew, that was a close one! It was a draw!';
        } else if (this.decision.get(user) === computer) {
            this._win++;
            winner = 'WooHoo, you won!'
        } else {
            this._lose++;
            winner = "Bummer, you lost!";
        }

        this.addRound({
            computer,
            user,
            winner
        })

        return winner;
    }
}

const rockPaperScissors = new Game();

function promptChoice() {
    cliPrompt({
        type: 'list',
        name: 'formation',
        message: 'Choose your formation',
        choices: rockPaperScissors.choices
    }).then((rps: {formation: string}) => {
        let random = Math.random() * rockPaperScissors.choices.length;
        console.log(rockPaperScissors.play(rps.formation, rockPaperScissors.choices[Math.floor(random)]));

        if (rockPaperScissors.count() < rockPaperScissors.totalRounds) {
            promptChoice();
        } else {
            console.log(rockPaperScissors.displayScore());
        }
    }).catch(console.error);
}

promptChoice();
