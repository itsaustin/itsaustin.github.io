let counter = 0;
let wincounter = 0;
let losecounter = 0;
let drawcounter = 0;

function letsplay(){
    if(counter>=3){
        document.getElementById("gameover").innerHTML = "<h1>You have played 3 times, <br><br>Game over</h1>";
        document.getElementById("playcontainer").style.display = "none";
        if(wincounter>0){
            document.getElementById("gameover").innerHTML += `Number of wins = ${wincounter}<br><br>`;
        }
         if(losecounter>0){
            document.getElementById("gameover").innerHTML += `Number of loses = ${losecounter}<br><br>`;
        }
         if(drawcounter>0){
            document.getElementById("gameover").innerHTML += `Number of draws = ${drawcounter}<br><br>`;
        }
        document.getElementById("playagain").style.display = "block";
        return;
    }
    var playerchoice =  document.forms.playerselection.rps.value;
    var compchoice = Math.floor(Math.random() * 3) + 1;
    //below if to display computers choice
    if(compchoice==1){
        document.getElementById("cc").innerHTML="The computer choose Rock!";
    }
    else if(compchoice==2){
        document.getElementById("cc").innerHTML="The computer choose Paper!";
    }
    else if(compchoice==3){
        document.getElementById("cc").innerHTML="The computer choose Scissors!";
    }


    var result = 0; //win=1 lose=2 draw=3
    if(playerchoice==1 && compchoice ==1){
        result = 3;
    }
    else if (playerchoice==1 && compchoice==2){
        result = 2;
    }
    else if (playerchoice==1 && compchoice==3){
        result = 1;
    }
    else if(playerchoice==2 && compchoice==1){
        result = 1;
    }
    else if(playerchoice==2 && compchoice==2){
        result = 3;
    }
    else if(playerchoice==2 && compchoice==3){
        result = 2;
    }
    else if (playerchoice==3 && compchoice==1){
        result = 2;
    }
    else if (playerchoice==3 && compchoice==2){
        result = 1;
    }
    else if (playerchoice==3 && compchoice==3){
        result = 3;
    }
    //display the results
    if(result==1){
        document.getElementById("result").innerHTML="Congratulations, you are a winner!";
        document.getElementById("result").style.transform = "scale(1.4)";
        document.getElementById("result").style.transitionDuration = "2s";
        let counter = 0;
        let wincounter = 0;
        let losecounter = 0;
        let drawcounter = 0;
        
        function letsplay(){
            if(counter>=3){
                document.getElementById("gameover").innerHTML = "<h1>You have played 3 times, <br><br>Game over</h1>";
                document.getElementById("playcontainer").style.display = "none";
                if(wincounter>0){
                    document.getElementById("gameover").innerHTML += `Number of wins = ${wincounter}<br><br>`;
                }
                 if(losecounter>0){
                    document.getElementById("gameover").innerHTML += `Number of loses = ${losecounter}<br><br>`;
                }
                 if(drawcounter>0){
                    document.getElementById("gameover").innerHTML += `Number of draws = ${drawcounter}<br><br>`;
                }
                document.getElementById("playagain").style.display = "block";
                return;
            }
            var playerchoice =  document.forms.playerselection.rps.value;
            var compchoice = Math.floor(Math.random() * 3) + 1;
            //below if to display computers choice
            if(compchoice==1){
                document.getElementById("cc").innerHTML="The computer choose Rock!";
            }
            else if(compchoice==2){
                document.getElementById("cc").innerHTML="The computer choose Paper!";
            }
            else if(compchoice==3){
                document.getElementById("cc").innerHTML="The computer choose Scissors!";
            }
        
        
            var result = 0; //win=1 lose=2 draw=3
            if(playerchoice==1 && compchoice ==1){
                result = 3;
            }
            else if (playerchoice==1 && compchoice==2){
                result = 2;
            }
            else if (playerchoice==1 && compchoice==3){
                result = 1;
            }
            else if(playerchoice==2 && compchoice==1){
                result = 1;
            }
            else if(playerchoice==2 && compchoice==2){
                result = 3;
            }
            else if(playerchoice==2 && compchoice==3){
                result = 2;
            }
            else if (playerchoice==3 && compchoice==1){
                result = 2;
            }
            else if (playerchoice==3 && compchoice==2){
                result = 1;
            }
            else if (playerchoice==3 && compchoice==3){
                result = 3;
            }
            //display the results
            if(result==1){
                document.getElementById("result").innerHTML="Congratulations, you are a winner!";
                document.getElementById("result").style.transform = "scale(1.4)";
                document.getElementById("result").style.transitionDuration = "2s";
                document.getElementById("result").style.color = "green";
                wincounter++;
            }
            else if(result==2){
                document.getElementById("result").innerHTML="Sorry, you have lost. Try again!";
                document.getElementById("result").style.transform = "scale(0.7)";
                document.getElementById("result").style.transitionDuration = "2s";
                document.getElementById("result").style.color = "red";
                losecounter++;
            }
            else if(result==3){
                document.getElementById("result").innerHTML="Its a draw. Try again!";
                document.getElementById("result").style.transform = "scale(1)";
                document.getElementById("result").style.transitionDuration = "0s";
                document.getElementById("result").style.color = "black";
                drawcounter++;
            }
            counter++;
            
        }     document.getElementById("result").style.color = "green";
        wincounter++;
    }
    else if(result==2){
        document.getElementById("result").innerHTML="Sorry, you have lost. Try again!";
        document.getElementById("result").style.transform = "scale(0.7)";
        document.getElementById("result").style.transitionDuration = "2s";
        document.getElementById("result").style.color = "red";
        losecounter++;
    }
    else if(result==3){
        document.getElementById("result").innerHTML="Its a draw. Try again!";
        document.getElementById("result").style.transform = "scale(1)";
        document.getElementById("result").style.transitionDuration = "0s";
        document.getElementById("result").style.color = "black";
        drawcounter++;
    }
    counter++;
    
}