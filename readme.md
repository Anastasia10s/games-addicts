


Make board to track the state of the game



Start to play (X goes first)
    Ask user where they want  to place the X
    Verify that the input from the user is valid
        If not valid give feedback to the user and ask again
    If selection is valid place X

    check board for winning combo
        If won output congrats
        Ask users if they want to play again
    
    Switch to O turn 
    run loop again 



readline.question('what do you want to eat', (answer) => {
    if('food') console.log("What rest")
    else if (desert) console.log("What cookie")

    check win
    if won
    close callback 
})


/* if (board[0][0] === "X" || board[0][0] === "O" && board[0][1] === "X" || board[0][1] === "O" &&
    board[0][2] === "X" || board[0][2] === "O" && board[1][0] === "X" || board[1][0] === "O" &&
    board[1][1] === "X" || board[1][1] === "O" && board[1][2] === "X" || board[1][2] === "O" &&
    board[2][0] === "X" || board[2][0] === "O" && board[2][1] === "X" || board[2][1] === "O" &&
    board[2][2] === "X" || board[2][2] === "O") {
    playing = false
    return console.log("GAME OVER")
  } */
  

    // let temp = []

  // for (let i = 0; i < board.length; i++) {
  //   for (let j = 0; j < board[i].lenth; j++) {
  //     if (board[i][j] === "X" || board[i][j] === "O") {
  //       temp.push(board[i][j])
  //     }
  //   }
  // }
  // if (temp.length === 9) {
  //   return "the game is over"
  // }

  //    const checkRow = (row = [], ) => {
//     if(row[0] === '-') {return false}
//     return row.every(element => element === row[0])
//    }
//    if(checkRow(board[0])) {
//     console.log(`${board[0][0] wins the game}`)
//    } else {
//     console.log("KEEP PLAYING")
//    ]



//Play again??
//Ask the use if they want to end the game??
    readline.question("End game?", (stop) => {
      if (stop === "y") {
        playing = false;
      }

      if (playing) {
        play();

      } else {
        readline.close();
      }
    });