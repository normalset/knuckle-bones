class RowError extends Error{}

function scoreCalc(roll , n){
  switch(roll){
    case 1:
      switch(n){
        case 0 : return 0 ;
        case 1 : return 1;
        case 2 : return 4;
        case 3 : return 9;
      }
    case 2:
      switch(n){
        case 0 : return 0 
        case 1 : return 2;
        case 2 : return 8;
        case 3 : return 18
      }
    case 3:
      switch(n){
        case 0 : return 0 
        case 1 : return 3
        case 2 : return 12
        case 3 : return 27
      }
    case 4: 
      switch(n){
        case 0 : return 0 
        case 1 : return 4
        case 2 : return 16
        case 3 : return 36
      }
    case 5:
      switch(n){
        case 0 : return 0 
        case 1 : return 5;
        case 2 : return 20;
        case 3 : return 45;
      }
    case 6 :
      switch(n){
        case 0 : return 0 
        case 1 : return 6
        case 2 : return 24;
        case 3 : return 54;
      }
  }
}

class Player{
  constructor(name){
    this.name = name;
    this.score = 0;
    this.isTurn= false;
    this.isFull = false;
  }
}

class Board{
  constructor(){
    this.score = 0

    this.row1 = []
    this.row1Element = {1:0 , 2:0 , 3:0 , 4:0 , 5:0 , 6:0}
    this.row2 = []
    this.row2Element = {1:0 , 2:0 , 3:0 , 4:0 , 5:0 , 6:0}
    this.row3 = []
    this.row3Element = {1:0 , 2:0 , 3:0 , 4:0 , 5:0 , 6:0}
    this.board = [this.row1, this.row2, this.row3]
    this.boardElements = [this.row1Element , this.row2Element , this.row3Element]
  }
  //todo 
  getScore(){
    for(let row of this.boardElements){
      for(let i = 1; i <=6 ; i++){
        this.score += scoreCalc(i , row[i])
      }
    }
    return this.score
  }
  
  placeItem(roll, position){
    switch(position){
      case "left":
        if(this.board[0].length >=3 ) throw new RowError("You can't place, already full")
        else{
          this.board[0].push(roll)
          this.boardElements[0][roll] += 1
        }
        break;

      case "center":
        if(this.board[1].length >=3 ) throw new RowError("You can't place, already full")
        else{
          this.board[1].push(roll)
          this.boardElements[1][roll] += 1
        }
        break;

      case "right":
      if(this.board[2].length >=3 ) throw new RowError("You can't place, already full")
      else{
        this.board[2].push(roll)
        this.boardElements[2][roll] += 1
      }
      break;

      default: throw new RowError("Chose a viable row")
    }
  }
  clearRow(){

  }
}

let player1 = new Player("p1")
let boardP1 = new Board()

let plyer2 = new Player("p2")
let boardP2 = new Board()

//console.log(player1,boardP2)

console.log(boardP1.getScore())
boardP1.placeItem(3,"right")
boardP1.placeItem(3,"right")
boardP1.placeItem(3,"left")
console.log("Elements:" , boardP1.boardElements , "Score:" ,boardP1.getScore())