player1name=localStorage.getItem("player1name");
player2name=localStorage.getItem("player2name");

player1score=0;
player2score=0;

document.getElementById("player1name").innerHTML=player1name+":";
document.getElementById("player2name").innerHTML=player2name+":";

document.getElementById("player1score").innerHTML=player1score;
document.getElementById("player2score").innerHTML=player2score;

document.getElementById("playerques").innerHTML="question turn-"+player1name;
document.getElementById("playerans").innerHTML="answer turn-"+player2name;
function send() {
 number1=document.getElementById("number1").value;
 number2=document.getElementById("number2").value;
 actual_answer=parseInt(number1)*parseInt(number2);


question_number = "<h4>" + number1 + " X "+ number2 +"</h4>";
input_box="<br>Answer: <input type='text'id='inputcheckbox'>";
check_button="<br> <br><button class='btn btn-info'onclick='check()'>Check</button>";
row= question_number+input_box+check_button;
document.getElementById("output").innerHTML=row;
document.getElementById("number1").value="";
document.getElementById("number2").value="";
}
answer_turn="player2";
question_turn="player1";
function check()
{
    get_answer=document.getElementById("inputcheckbox").value;
    answer=get_answer.toLowerCase();
    console.log("answer in lowercase -" + answer);
    if (answer==parseInt(number1)*parseInt(number2));
    {
        if (answer_turn=="player1")
        {
            player1score=player1score+1;
            document.getElementById("player1score").innerHTML=player1score;
        }
        else
        {
        player2score=player2score+1;
            document.getElementById("player2score").innerHTML=player2score;
        }
        if (question_turn=="player1")
        {
            question_turn="player2"
            document.getElementById("playerques").innerHTML="question turn-"+player2name;
        }
        else
        {
            question_turn="player1"
            document.getElementById("playerques").innerHTML="question turn-"+player1name;
        }
        if (answer_turn=="player1" )
        {
            answer_turn="player2"
            document.getElementById("playerans").innerHTML="answerturn-"+player2name;
        }
        else
        {
            answer_turn="player1"
            document.getElementById("playerans").innerHTML="answer turn-"+player1name;
        }
        document.getElementById("output").innerHTML="";
    }
}