const { timeStamp } = require("console")

let emptyBoard = [
    ["X", "X", "O"],

    ["X", "O", "X"],

    ["O", "X", "O"]
]

const playTicTacToe = (board) => {

const map = new Map()
map.set('1', {x:0, y:0})
map.set('2', {x:0, y:1})
map.set('3', {x:0, y:2})
map.set('4', {x:1, y:0})
map.set('5', {x:0, y:1})
map.set('6', {x:0, y:2})
map.set('7', {x:2, y:0})
map.set('8', {x:0, y:1})
map.set('9', {x:0, y:2})

let temp = []

for(let i = 0; i < board.length; i++) {
    for(let j = 0; j < board[i].lenth; j++) {
        if(board[i][j] === "X" || board[i][j] === "O") {
            temp.push(board[i][j])
        }
    }
}

if(temp.length === 9) {
    return "the game is over"
}

const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  

  readline.question("Where do you want to play? ", (spot) => {
    console.log("SPOT", spot)
    if(!map.get(spot)) {
        console.log("Hey what are you trying to do??")
    } else {
        const { x, y} = map.get(spot)
        board[x][y] = 'X'
    }
    console.log(board);

    readline.close();
  });

playTicTacToe(board)

}

playTicTacToe(emptyBoard)

//    const checkRow = (row = [], ) => {
//     if(row[0] === '-') {return false}
//     return row.every(element => element === row[0])
//    }
//    if(checkRow(board[0])) {
//     console.log(`${board[0][0] wins the game}`)
//    } else {
//     console.log("KEEP PLAYING")
//    }
   

