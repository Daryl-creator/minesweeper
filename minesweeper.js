document.addEventListener('DOMContentLoaded', startGame)

//Daryl Chen 2020

/* This is the Board*/
// Define your `board` object here!
var board = {
  cells: [
    {
      row:0, 
      col:0, 
      isMine:true, 
      hidden:true
    }, 
    {
      row:0, 
      col:1, 
      isMine:false, 
      hidden:true
    }, 
    {
      row:0, 
      col:2, 
      isMine:false, 
      hidden:true
    }, 
    {
      row:0, 
      col:3, 
      isMine:false, 
      hidden:true
    }, 
    {
      row:1, 
      col:0, 
      isMine:false, 
      hidden:true
    }, 
    {
      row:1, 
      col:1, 
      isMine:false, 
      hidden:true
    }, 
    {
      row:1, 
      col:2, 
      isMine:false, 
      hidden:true
    },
    {
      row:1, 
      col:3, 
      isMine:false, 
      hidden:true
    },  
    {
      row:2, 
      col:0, 
      isMine:false, 
      hidden:true
    }, 
    {
      row:2, 
      col:1, 
      isMine:true, 
      hidden:true
    }, 
    {
      row:2, 
      col:2, 
      isMine:false, 
      hidden:true
    },
    {
      row:2, 
      col:3, 
      isMine:false, 
      hidden:true
    },
    {
      row:3, 
      col:0, 
      isMine:false, 
      hidden:true
    }, 
    {
      row:3, 
      col:1, 
      isMine:false, 
      hidden:true
    }, 
    {
      row:3, 
      col:2, 
      isMine:true, 
      hidden:true
    },
    {
      row:3, 
      col:3, 
      isMine:false, 
      hidden:true
    },
    
  ]
}

//sound effects
function playWin() {
  var audio = new Audio('audio\babyshark.mp3');
    audio.play();
}
//win video
function playVideo(){
  document.getElementById('video').innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/j8z7UjET1Is?start=3&autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
}

function startGame () {
  // Don't remove this function call: it makes the game work!
  //loop through the board cells
  for (var i = 0; i < board.cells.length; i++)  {
    //call countSurroundingMines and assign it to the cell
    board['cells'][i].surroundingMines =  countSurroundingMines(board['cells'][i]);}
    console.log(board)
  lib.initBoard()
  //assign left mouse click to call checkForWin
  document.addEventListener("mousedown", callCheckForWin)
  //assign right mouse click to call checkForWin
  document.addEventListener("contextmenu", callCheckForWin)
}

function callCheckForWin(){
  setTimeout(function(){ checkForWin() }, 100);
}
// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin () {
    var win = true;
    // loop through all of board.cells
    for (var i = 0; i < board.cells.length; i++) {
      //For each cell, check to see if both .isMine and .isMarked are true. If any mine still exists that isn't marked, the player hasn't won yet and you can return to exit out of the function.
      //check to see if cell is mine and if it is marked, why is.Marked false??
      if (board['cells'][i].isMine == true && board['cells'][i].isMarked == false) {
        win = false;
        //check if cell is mine and is hidden, why is isMine !==true?
      }
      if (board.cells[i].isMine == false && board.cells[i].hidden == true) {
        console.log(board.cells[i]);
        win = false;
      } 
  } 
  if(win == true ) {
      lib.displayMessage('You win!')
      playVideo()
    //If every mine is marked, but there are still cells with the hidden property set to true, the player hasn't won yet and you can return out of the function.
    //If both these criteria pass, the player has won! There's a displayMessage function call at the bottom of checkForWin you can use to tell them so.
  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
  //   lib.displayMessage('You win!')
    }
}


// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`: 
//
//   var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through 
// them, counting the number of times `cell.isMine` is true.
function countSurroundingMines (cell) {
  var surrounding = lib.getSurroundingCells(cell.row, cell.col)
  var count = 0
  for (var i = 0; i < surrounding.length; i++) {
    if (surrounding[i].isMine === true) {
     count++
    }  
  }
  return count
}

