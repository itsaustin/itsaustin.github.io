function produce(){
    let numBottles = 99;
    while(numBottles >1){
        document.getElementById("Lyrics").innerHTML+= `${numBottles} bottles of beer on the wall, ${numBottles} bottles of beer <br> Take one down and pass it around,  ${numBottles-1} bottles of beer on the wall <br><br>`;
        numBottles--;}
        if(numBottles==1){
            document.getElementById("Lyrics").innerHTML += "1 bottle of beer on the wall, 1 bottle of beer <br>Take one down and pass it around, no more bottles of beer on the wall <br><br>";
            numBottles--;
        }
        if(numBottles==0){
            document.getElementById("Lyrics").innerHTML += "No more bottles of beer on the wall, no more bottles of beer <br>Go to the store and buy some more, 99 bottles of beer on the wall<br><br>";
            document.getElementById("Store").style.display = "block";
        }
    }


