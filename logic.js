

let random = Math.floor(Math.random() * (20 - 1 + 1)) + 1

let score = 20;
console.log(random)


let checkButton = document.querySelector(".check")


checkButton.addEventListener("click", 
    function () {

        

        let guess = document.querySelector(".text-box").value;
        console.log(guess)

        if (score > 0) {


            if (guess == ""){
            document.querySelector(".message").textContent = "⛔️ Not a number!"
        }
        else if (guess != random) {
            if (guess < random) {
                document.querySelector(".message").textContent = "📉 Too low!"
                score --
                document.querySelector(".score").textContent = score
            }
            else if(guess > random) {
                document.querySelector(".message").textContent = "📈 Too high"
                score --
                document.querySelector(".score").textContent = score
            }
        }
        else{
            document.querySelector(".message").textContent = "🎉You win! "

            document.querySelector(".number").textContent = random

            if (score > document.querySelector(".highscore").textContent){
                document.querySelector(".highscore").textContent = score
            }
        }
        }

        else {
            document.querySelector(".message").textContent = "💥 You lost!"
        }
        


    })


let againButton = document.querySelector(".again")

againButton.addEventListener("click",
    function () {
        random = Math.floor(Math.random() * (20 - 1 + 1)) + 1
        console.log(random)
        document.querySelector(".score").textContent = 20
        document.querySelector(".message").textContent = "Start guessing..."
        document.querySelector(".number").textContent = "?"
    }
)