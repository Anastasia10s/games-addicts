let board = [
    ["-", "-", "-"],

    ["-", "-", "-"],

    ["-", "-", "-"]
]
let playerOne = "X"
let playerTwo = "O"

const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  readline.question("Where do you want to play? ", (spot) => {
    console.log("SPOT", spot)
    const updateBoard = (spot) => {
        if (spot === 1) {
        board[0][0] = spot
        } else if (spot === 2) {
            board[0][2] = spot
            } else if (spot === 3) {
                board[0][3] = spot
                } else if (spot === 4) {
                    board[1][0] = spot
                    } else if (spot === 5) {
                        board[1][1] = spot
                        } else if (spot === 6) {
                            board[1][2] = spot
                            } else if (spot === 7) {
                                board[1][2] = spot
                                } else if (spot === 8) {
                                    board[2][0] = spot
                                    } else if (spot === 9) {
                                        board[2][1] = spot
                                        }

    console.log(board)};

    readline.close();
  });

//    const checkRow = (row = [], ) => {
//     if(row[0] === '-') {return false}
//     return row.every(element => element === row[0])
//    }
//    if(checkRow(board[0])) {
//     console.log(`${board[0][0] wins the game}`)
//    } else {
//     console.log("KEEP PLAYING")
//    }
   

