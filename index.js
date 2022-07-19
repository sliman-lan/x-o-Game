let arr = ["X","O"]
var squares = document.querySelectorAll(".square")
var winner = "";
function reset() {
    squares.forEach((s)=>{
        turn = true
        s.textContent = ""
        s.classList.remove("winner")
        s.classList.remove("ended")
    })
}
function checkWinner(){
    // horizontal
    if(squares[0].textContent==squares[1].textContent && squares[1].textContent==squares[2].textContent && squares[1].textContent!== ""){
        squares[0].classList.add('winner')
        squares[1].classList.add('winner')
        squares[2].classList.add('winner')
        winner = whoWin( playersName.winsTheMatch(squares[0].textContent))
        return 1
        
    }
    if(squares[3].textContent == squares[5].textContent && squares[5].textContent == squares[4].textContent && squares[4].textContent != ""){
        squares[3].classList.add('winner')
        squares[4].classList.add('winner')
        squares[5].classList.add('winner')
        winner =  whoWin(playersName.winsTheMatch(squares[3].textContent))
        return 1
    }
    if(squares[6].textContent ==squares[7].textContent && squares[7].textContent ==squares[8].textContent && squares[7].textContent != ""){
        squares[6].classList.add('winner')
        squares[7].classList.add('winner')
        squares[8].classList.add('winner')
        winner =  whoWin(playersName.winsTheMatch(squares[6].textContent))
        return 1
    }
    // vertical 
    if(squares[0].textContent ==squares[6].textContent && squares[3].textContent ==squares[6].textContent && squares[3].textContent != ""){
        squares[0].classList.add('winner')
        squares[3].classList.add('winner')
        squares[6].classList.add('winner')
        winner =  whoWin(playersName.winsTheMatch(squares[1].textContent))
        return 1
    }
    if(squares[1].textContent ==squares[7].textContent && squares[4].textContent ==squares[7].textContent && squares[4].textContent != ""){
        squares[1].classList.add('winner')
        squares[4].classList.add('winner')
        squares[7].classList.add('winner')
        winner = whoWin(playersName.winsTheMatch(squares[1].textContent))
        return 1
    }
    if(squares[2].textContent ==squares[8].textContent && squares[5].textContent ==squares[8].textContent && squares[5].textContent != ""){
        squares[2].classList.add('winner')
        squares[5].classList.add('winner')
        squares[8].classList.add('winner')
        winner =  whoWin(playersName.winsTheMatch(squares[2].textContent))
        return 1
    } 
    //       ================\=================
    if(squares[0].textContent ==squares[8].textContent && squares[4].textContent ==squares[8].textContent && squares[4].textContent != ""){
        squares[0].classList.add('winner')
        squares[4].classList.add('winner')
        squares[8].classList.add('winner')
        winner =  whoWin(playersName.winsTheMatch(squares[0].textContent))
        return 1
    }
    if(squares[2].textContent ==squares[6].textContent && squares[4].textContent ==squares[6].textContent && squares[4].textContent != ""){
        squares[2].classList.add('winner')
        squares[4].classList.add('winner')
        squares[6].classList.add('winner')
        winner =  whoWin(playersName.winsTheMatch(squares[2].textContent))
        return 1 
    }
    return 0
}
function  whoWin(w) {
    return w;
}
function checkEmpty(id) {
    return document.getElementById(id).innerHTML === ""
}
var turn = true // true means x turn
var btn = document.querySelector("#btn");
var player1 ,
    player2 ;
btn.addEventListener("focus",function () {
    btn.style.boxShadow = "0 0 2px  1px  #05f"
})
btn.addEventListener("blur",function () {
    btn.style.boxShadow = "0 0 0 0 "
})
btn.addEventListener("click",function () {
    player1 = document.querySelector("#f-user").value
    player2 = document.querySelector("#s-user").value
    playersName.p1 = player1
    playersName.p2 = player2
    document.querySelector(".face").style.display = "none"
    console.log( player1)
})

var playersName ={
    // p1 : player1,
    // p2 : player2,
    winsTheMatch : function (winner) {
        return "o" == winner.toLowerCase() ? this.p2  : this.p1  ;
    } 
} 

function insert(id){
    if(checkEmpty(id)){
        if(turn == true){
            document.getElementById(id).innerHTML = "X"
            turn =!turn
        }else{
            document.getElementById(id).innerHTML = "O"
            turn = !turn
        }
    }
    var win = checkWinner();
    
    if(win){
        var end = document.createElement("div");
        end.classList.add("stop")
        var text = document.createTextNode(`Player ${winner} is winner congrats`)
        end.appendChild(text)
        var restart = document.createElement("button")
        var btnTxt = document.createTextNode("play again")
        restart.appendChild(btnTxt)
        restart.classList.add("btn")
        restart.addEventListener("click",function () {
            restart.parentElement.remove();
            reset()
        })
        end.appendChild(restart)
        document.querySelector(".con-squares").appendChild(end)
        squares.forEach(s=>{
            s.classList.add("ended")
        })
    }
}



// console.log(squares)

// for(let i in squares){
//     squares[i].addEventListener("click",function(){
//         if(i % 2 == 0){
//             squares[i].textContent = arr[0]
//         }else{
//             squares[i].textContent = arr[1]
//         }
//     })
//     // if(i % 2 == 0){
//     //     squares[i].textContent = arr[0]
//     // }else{
//     //     squares[i].textContent = arr[1]
//     // }
// }

