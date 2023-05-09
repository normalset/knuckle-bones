/////todo basic item placement and storage 1p
/////todo score calculation 1p
/////todo remove items on duplicate 1p
/////todo end game script
/////todo item placement and storage 2p
/////todo score calculation 2p
/////todo remove item on duplicate 2p

//Colors for text
let p1Color = "rgb(247, 220, 220)"
let p2Color = "rgb(227, 79, 79)"

const cells = document.querySelectorAll('.cell');
const cellSigns = new Array(9).fill(0);

let p1row1 = {1:0 , 2:0 , 3:0 , 4:0 , 5:0 , 6:0}
let p1row2 = {1:0 , 2:0 , 3:0 , 4:0 , 5:0 , 6:0}
let p1row3 = {1:0 , 2:0 , 3:0 , 4:0 , 5:0 , 6:0}

let p2row1 = {1:0 , 2:0 , 3:0 , 4:0 , 5:0 , 6:0}
let p2row2 = {1:0 , 2:0 , 3:0 , 4:0 , 5:0 , 6:0}
let p2row3 = {1:0 , 2:0 , 3:0 , 4:0 , 5:0 , 6:0}

let player = "p2"
//? Funzione per calcolare lo score dati il roll/volte 
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
//? Funzione che calcola lo score totale e lo returna
function updateRow(index, n){
  console.log("UpdateRow running, index:", index, " n:", n)
  //! unoptimal way to do this , refresho a zero ogni row ogni volta che devo checkare
  if(player == "p1"){
    switch(index){
    case 0:
    case 3:
    case 6:
      p1row1[cellSigns[index]]++
      break;
    case 1:
    case 4:
    case 7:
      p1row2[cellSigns[index]]++
      break;
    case 2:
    case 5:
    case 8:
      p1row3[cellSigns[index]]++
      break; 
    }
  }else if(player == "p2"){
    switch(index){
    case 0:
    case 3:
    case 6:
      p2row1[cellSigns[index]]++
      break;
    case 1:
    case 4:
    case 7:
      p2row2[cellSigns[index]]++
      break;
    case 2:
    case 5:
    case 8:
      p2row3[cellSigns[index]]++
      break; 
    }
  }
}
//? clear se un player piazza un numero gia' piazzato dall'altro player nella stessa row
function clear(roll, index , player){
  if(player == 'p1'){
          switch(index){
            case 0:
            case 3:
            case 6:
              if(p2row1[roll] != 0){
                p2row1[roll] = 0;
                p1row1[roll]--
                for(let i = 0 ; i < 9 ; i+=3){
                  if(cellSigns[i] == roll){
                    cellSigns[i] = 0;
                    cells[i].innerHTML = '';
                  }
                }
              }
              break;
            case 1:
            case 4:
            case 7:
             if(p2row2[roll] != 0){
                p2row2[roll] = 0;
                p1row2[roll]--
                for(let i = 1 ; i < 9 ; i+=3){
                  if(cellSigns[i] == roll){
                    cellSigns[i] = 0;
                    cells[i].innerHTML = '';
                  }
                }
              }
              break;
              
            case 2:
            case 5:
            case 8:
              if(p2row3[roll] != 0){
                p2row3[roll] = 0;
                p1row3[roll]--
                for(let i = 2 ; i < 9 ; i+=3){
                  if(cellSigns[i] == roll){
                    cellSigns[i] = 0;
                    cells[i].innerHTML = '';
                  }
                }
              }
              break;
          }
        }
        else if(player == 'p2'){
          switch(index){
            case 0:
            case 3:
            case 6:
              if(p1row1[roll] != 0){
                p1row1[roll] = 0;
                p2row1[roll]--
                for(let i = 0 ; i < 9 ; i+=3){
                  if(cellSigns[i] == roll){
                    cellSigns[i] = 0;
                    cells[i].innerHTML = '';
                  }
                }
              }
              break;
            case 1:
            case 4:
            case 7:
             if(p1row2[roll] != 0){
                p1row2[roll] = 0;
                p2row2[roll]--
                for(let i = 1 ; i < 9 ; i+=3){
                  if(cellSigns[i] == roll){
                    cellSigns[i] = 0;
                    cells[i].innerHTML = '';
                  }
                }
              }
              break;
              
            case 2:
            case 5:
            case 8:
              if(p1row3[roll] != 0){
                p1row3[roll] = 0;
                p2row3[roll]--
                for(let i = 2 ; i < 9 ; i+=3){
                  if(cellSigns[i] == roll){
                    cellSigns[i] = 0;
                    cells[i].innerHTML = '';
                  }
                }
              }
              break;
          }
        }
  }


//Turn display text
let turnText = document.getElementById('TurnText');
let turn = -1;
let player1Text = document.getElementById('p1Text');
let player2Text = document.getElementById('p2Text');

//* Score
function getScore(player){
  let score = 0;
  if(player == "p1"){
    for(let i = 1 ; i <= 6 ; i++){
    score += scoreCalc(i , p1row1[i]) + scoreCalc(i , p1row2[i]) + scoreCalc(i , p1row3[i])
  }
  console.log(`Score: ${score}`)
  }else if(player == "p2"){
    for(let i = 1 ; i <= 6 ; i++){
    score += scoreCalc(i , p2row1[i]) + scoreCalc(i , p2row2[i]) + scoreCalc(i , p2row3[i])
  }
  console.log(`Score ${player}: ${score}`)
  }
  return score
}


let diceCell = document.getElementById('dice')
function roll(){
  return Math.floor(Math.random() * 6)+1
}
diceCell.innerHTML = roll()

for(let i = 0; i < cells.length ; i++ ){
    const cell = cells[i]; 
    

    cell.addEventListener('click', function(){
        console.log(`hai clickato ${i}`)

        if(cellSigns[i]){
            console.log('Questa cella e gia stata clickata');
            return;
        }

        turn++;
        
        if(turn % 2 === 0){
            player = 'p1';
            turnText.innerHTML = "E' il turno del player 2"
        }else{
            player = 'p2';
            turnText.innerHTML = "E' il turno del player 1"
        }
        

        if(player == "p1"){
          cell.style.color = p1Color
        }else{
          cell.style.color = p2Color
        }
        cell.innerText = diceCell.innerHTML;
        cellSigns[i] = diceCell.innerHTML;
        //carico i valori slle righe per il calcolo
        console.log(`passo a updateRow(${i},${diceCell.innerHTML},${player})`)
        updateRow(i , diceCell.innerHTML,player)
        clear(diceCell.innerHTML , i , player)

        //Get new roll
        if(player == "p2"){
          diceCell.style.color = p1Color
        }else{
          diceCell.style.color = p2Color
        }
        diceCell.innerHTML = roll()
        console.table(cellSigns);

        let scorep1 = getScore("p1");
        player1Text.innerHTML = `LAMB: ${scorep1}`
        let scorep2 = getScore("p2")
        player2Text.innerHTML = `RED: ${scorep2}`



        let boardFull = checkFullBoard();
        console.log('Board Full?', boardFull);

        if(boardFull){
            showAlert(`The Board is full! ${scorep1>scorep2 ? "LAMB" : "RED"} ha vinto con ${Math.max(scorep1 , scorep2)} punti!`);
        }
    });
}

function checkFullBoard(){
  for(let index in cellSigns){
    if(cellSigns[index]==0) return false
  }
  return true
}
function showAlert(message){
    const gameArea = document.querySelector('.game-area');

    const alertMessage = `
    <div class="game-alert">
    <div class="game-alert-message">${message}</div>
    </div>
    `;

    gameArea.innerHTML = gameArea.innerHTML + alertMessage;
}

/*
function checkVictory () {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
  
    for(let i = 0; i < winningCombinations.length; i++){
      const combination = winningCombinations[i];
  
      const a = combination[0];
      const b = combination[1];
      const c = combination[2];
  
  
      if(cellSigns[a] && cellSigns[a] === cellSigns[b] && cellSigns[b] === cellSigns[c]){
        console.log(`Trovata combinazione vincente: ${a} ${b} ${c}`);
        return true;
      }
    }
  
    return false;
  }
*/





