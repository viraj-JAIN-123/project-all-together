function addUser(){
    player_name1=document.getElementById("player1input").value;
    player_name2=document.getElementById("player2input").value;

localStorage.setItem("player1name",player_name1);
localStorage.setItem("player2name",player_name2);
window.location="game.html";
}