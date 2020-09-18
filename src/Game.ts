export class Game {
    #draw: number = 0;
    #lose: number = 0;
    #rounds: Round[] = [];
    #win: number = 0;

    choices: string[] = ['rock','paper','scissors'];
    decision = new Map([
        ['rock', 'scissors'],
        ['paper', 'rock'],
        ['scissors', 'paper']
    ]);
    totalRounds: number;

    constructor(totalRounds: number = 10) {
        this.totalRounds = totalRounds;
    }

    addRound(round: Round): void {
        this.#rounds.push(round);
    }

    count(): number {
        return this.#rounds.length;
    }

    displayScore(): string {
        let final = `Wow, that's impressive! You managed to get a draw with the computer over ${this.totalRounds} rounds!`;

        if (this.#win > this.#lose) {
            final = "WooHoo, you beat the computer!";
        } else if (this.#win < this.#lose) {
            final = "Bummer, you lost to the computer! You should restart and play again.";
        }

        return `Final Score: ${final}\nYou: ${this.#win}\nComputer: ${this.#lose}\nDraws: ${this.#draw}`;
    }

    play(user: string, computer: string) {
        let winner = `The computer played ${computer}.\n`;

        if (user === computer) {
            this.#draw++;
            winner += 'Whew, that was a close one! It was a draw!';
        } else if (this.decision.get(user) === computer) {
            this.#win++;
            winner += 'WooHoo, you won!'
        } else {
            this.#lose++;
            winner += 'Bummer, you lost!';
        }

        this.addRound({
            computer,
            user,
            winner
        })

        return winner;
    }
}
