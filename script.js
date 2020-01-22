let player = 1;
let sign = "X"
let turn = document.getElementById('player');
function printx(num){
    let box_number = document.getElementById('r' + num);
    
    if(box_number.innerHTML == ""){
        box_number.innerHTML = sign;
        winner();
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
        turn.innerHTML = `<p style = "text-align: center"> ${sign} <br> Player 1  turn</p>`;
       player = 2
    }else{
        player = 1;
        turn.innerHTML = `<p style = "text-align: center"> ${sign} <br> Player 2 turn</p>`;
    }
   // turn.innerHTML = 'Player' + player + '\'s turn'
}
function getBox (num){
   return document.getElementById('r'+num).innerHTML;
}
function checkMove (a,b,c,m){
    if (getBox(a)==m && getBox(b)==m && getBox(c)==m ) 
        return true ;
        else 
        return false;
}

function winner(){
    if (checkMove(1,2,3,sign) || checkMove(4,5,6,sign) || checkMove(7,8,9,sign) 
    || checkMove(1,4,7,sign) || checkMove(4,5,6,sign) || checkMove(7,8,9,sign)){
        alert(`${sign}` + " wins")
    }
}