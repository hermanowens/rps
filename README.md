# Rock, Paper, Scissors (RPS)
Creates a rock, paper, scissors game that allows a player to play 10 rounds against the CPU, before declaring a winner.

## Rules:
- Rock beats Scissors
- Scissors beat Paper
- Paper beats Rock
- It's a draw, when both players choose the same formation.

## Play Game
*Note: Instructions include npm and yarn alternatives. It is not necessary to type in both commands. Please choose one based on your preference.*

1. Clone repository
1. Install dependencies using `npm i` or `yarn`
1. Play Game:
    - CLI (Text-Based): `npm run cli` or `yarn cli`
    - GUI (Browser-Based): `npm run app` or `yarn app`
1. Extend Game:
    - View endpoints locally on port 3000

## Goals:
1. **Play game via CLI** (Primary game will be text-based via command line)
1. **Play game via web browser** (Extends game to include a server-side rendered GUI)
1. **Add Integration/Unit tests** (Extends game to be tested for different scenarios)
1. **Scale for various platform integration** (Extends game to include REST endpoint for accessing the game in other applications)

## Planned Dependencies
- Express
- Express Types
- Jest
- ~~Prompt~~ => Inquirer (swapped due to a circular dependency issue --- outdated Winston dependency included in prompts) [more info](https://github.com/flatiron/prompt/issues/199)
- Pug
- Sass Compiler
- Typescript

### Optional
- Cookie Parser
- Debug
- HTTP Errors
