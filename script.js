const rock_div = document.getElementById("Rock")
const paper_div = document.getElementById("Paper")
const scissor_div = document.getElementById("Scissor")  



function compChoice () {
    const options = ["images/rock.png", 'images/paper1.png', 'images/scissor1.png'];
    const randomizer = (Math.floor(Math.random() * 3)); 
    if (options[randomizer]==="images/rock.png") {
        return compChoice1 = "Rock"
    }
    // return options[randomizer];

    if (options[randomizer]==="images/paper1.png") {
        return compChoice1 = "Paper"
    }

    if (options[randomizer]==="images/scissor1.png") {
        return compChoice1 = "Scissor"
    }
}




function compImgDisplayer(){
    let mycompchoice
    if (compChoice1 === "Rock") {
         mycompchoice = "images/rock.png"
    }

    if (compChoice1 === "Paper") {
         mycompchoice = "images/paper1.png"
    }

    if (compChoice1 === "Scissor") {
         mycompchoice = "images/scissor1.png"
    }

    // let mycompchoice = compChoice();

    compBox = document.getElementById("compBox")
 
    let compimg = document.createElement("img")
    compimg.style.width = "150px"
    compimg.style.height = "150px"
    compimg.style.marginTop = "25px"
    compimg.src = mycompchoice
    compBox.style.backgroundColor = "white"
    compBox.appendChild(compimg)
    }
    




function Win () {
    document.getElementById("secretBox").innerHTML="WIN"
}
        
function Lose () {
    document.getElementById("secretBox").innerHTML="LOST"
}

function Draw () {
    document.getElementById("secretBox").innerHTML="DRAW"
}


function result(playerChoice){
    const computerChoice = compChoice();

    console.log(playerChoice + " " + computerChoice)
    switch (playerChoice + computerChoice) {
        case "RockScissor":
            case "PaperRock":
                case "ScissorPaper":
                    Win();
            break;
        case "RockPaper":
            case "PaperScissor":
                case "ScissorRock":
                    Lose();
            break;
            case "RockRock":
                    case "PaperPaper":
                        case "ScissorScissor":
                    Draw();
            break;
    }
    if (compChoice === 'Rock') {
        compBox = document.getElementById("compBox")
    if (compBox.firstChild){
        return
    }
    let rockimg = document.createElement("img")
    rockimg.style.width = "150px"
    rockimg.style.height = "150px"
    rockimg.style.marginTop = "25px"
    rockimg.src = "images/rock.png"
    compBox.style.backgroundColor = "white"
    compBox.appendChild(rockimg)
    }
    

}








function ultimate() {
    rock_div.addEventListener('click', function() {
    let computerChoice = result("Rock");
    let youBox = document.getElementById("youBox")
    let compBox = document.getElementById("compBox")
    if (youBox.firstChild){
        let curnode = youBox.firstChild
        curnode.remove()
    }
    if(compBox.firstChild){
        let curnode = compBox.firstChild
        curnode.remove()
    }

    let rockimg = document.createElement("img")
    rockimg.style.width = "150px"
    rockimg.style.height = "150px"
    rockimg.style.marginTop = "25px"
    rockimg.src = "images/rock.png"
    youBox.style.backgroundColor = "white"
    youBox.appendChild(rockimg)

    compImgDisplayer()
})

        paper_div.addEventListener('click', function() {
            let computerChoice = result("Paper");
            let youBox = document.getElementById("youBox")
            let compBox = document.getElementById("compBox")
            if (youBox.firstChild){
                let curnode = youBox.firstChild
                curnode.remove()
            }
            if(compBox.firstChild){
                let curnode = compBox.firstChild
                curnode.remove()
            }
            let paperimg = document.createElement("img")
            paperimg.style.width = "150px"
            paperimg.style.height = "150px"
            paperimg.style.marginTop = "25px"
            paperimg.src = "images/paper1.png"
            youBox.style.backgroundColor = "white"
            youBox.appendChild(paperimg)
            compImgDisplayer()
})

    scissor_div.addEventListener('click', function() {
        let computerChoice = result("Scissor");
        let youBox = document.getElementById("youBox")
        let compBox = document.getElementById("compBox")
        if (youBox.firstChild){
            let curnode = youBox.firstChild
            curnode.remove()
        }
        if(compBox.firstChild){
            let curnode = compBox.firstChild
            curnode.remove()
        }
        let scissorimg = document.createElement("img")
        scissorimg.style.width = "150px"
        scissorimg.style.height = "150px"
        scissorimg.style.marginTop = "25px"
        scissorimg.src = "images/scissor1.png"
        youBox.style.backgroundColor = "white"
        youBox.appendChild(scissorimg)
        compImgDisplayer()
})
}

ultimate();
