# Rock, Paper, Scissors (RPS)

Creates a rock, paper, scissors game that allows a player to play 10 games against the CPU, before declaring a winner.

## Rules:
- Rock beats Scissors
- Scissors beat Paper
- Paper beats Rock
- It's a draw, when both players choose the same formation.

## Play Game
Clone repository and enter the following commands (npm or yarn)
```
npm install
npm run cli
```
or
```
yarn
yarn cli
```

## Goals:
1. **Play game via CLI** (Primary game will be text-based via command line)
1. **Play game via web browser** (Extends game to include a server-side rendered GUI)
1. **Add Integration/Unit tests** (Extends game to be tested for different scenarios)
1. **Scale for various platform integration** (Extends game to include REST endpoint for accessing the game in other applications)

## Planned Dependencies
- Express
- Express Types
- Jest
- ~~Prompt~~ Inquirer (some circular dependency bug -- so  found this one, which is pretty cool)
- Pug
- Sass Compiler
- Typescript


### Optional
- Cookie Parser
- Debug
- HTTP Errors
