let player = 1;
let sign = "X"
let turn = document.getElementById('player')
function printx(num){
    let box_number = document.getElementById('r' + num);
    
    if(box_number.innerHTML == ""){
        box_number.innerHTML = sign;
        checkSign();
    
    checkPlayer();
    }
}

function checkSign (){
    if (sign == "X") {
        sign = "O"
    }else{
        sign = "X"
    }
   
}
function checkPlayer(){
    if (player == 1){
        turn.innerHTML = `<p style = "text-align: center">Player 1 turn</p>`;
       player = 2
    }else{
        player = 1;
        turn.innerHTML = `<p style = "text-align: center">Player 2 turn</p>`;
    }
   // turn.innerHTML = 'Player' + player + '\'s turn'
}