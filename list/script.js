let list = [];
/*
function updateCart(){
    document.getElementById("list").innerHTML = list.toString();
}
*/
/*
const addbut = `<button id='thebutton' onclick='addToList()'>
<i id='plusicon' class='fa-solid fa-plus fa-2xl'></i>
</button>`;*/
function updateCart(){
    document.getElementById("list").innerHTML = "";
    document.getElementById("listarea").style.display= "block";
    document.getElementById("noitems").style.display = "none";
    document.getElementById("tooltip").style.display = "none";
    for(let i=0;i<list.length;i++){
        newItem = list[i];
        document.getElementById("list").innerHTML += ` <li> 
        ${newItem} 
        </li>
        <br>
        `;
    }
}


function addToList(){
    list.push(prompt("What would you like to add?"));
    updateCart();
}

function quickAdd(arg1, button){
    list.push(arg1);
    updateCart();
    disableButton(button);
}

function removeItem(){
    list.pop();
    updateCart();
}

function disableButton(button){
    button.disabled = true;
}

function removeAll(){
    list = [];
    updateCart();
    document.getElementById("noitems").style.display = "block";
    document.getElementById("listarea").style.display = "none";
    document.getElementById("tooltip").style.display = "block";
}