

let random = Math.floor(Math.random() * (20 - 1 + 1)) + 1

let score = 20;
console.log(random)


let checkButton = document.querySelector(".check")

checkButton.addEventListener("click", 
    function () {

        let guess = document.querySelector(".text-box").value;
        console.log(guess)

        if (guess == ""){
            document.querySelector(".message").textContent = "⛔️ Not a number!"
        }
        else if (guess != random) {
            if (guess < random) {
                document.querySelector(".message").textContent = "📉 Too low!"
            }
            else if(guess > random) {
                document.querySelector(".message").textContent = "📈 Too high"
            }
        }
        else{
            document.querySelector("message").textContent = "🎉You win! "
        }


    })