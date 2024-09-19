  function speak(text) {
            const a = new SpeechSynthesisUtterance(text)
            speechSynthesis.speak(a)
        }

    function playGame(playerChoice) {
        var choices = ['Rock', 'Paper', 'Scissors'];
        var  randomNumber=Math.floor(Math.random()*3)
        var computerChoise=choices[randomNumber]
        let result=''
        var user=playerChoice
        if (computerChoise==user){
            console.log('match draw')
            result='match draw! you both chose= '+user+'.'
            speak(result)
        }
        else if(computerChoise=='Rock' && user=='Paper'){
            console.log('user win')
            result='user wins'
            speak(result)

        }
        else if(computerChoise=='Rock' && user=='Scissors'){
            console.log('computer win')
            result='Computer wins'
            speak(result)

        }
        else if(computerChoise=='Paper' && user=='Rock'){
            console.log('computer win')
            result='computer wins'
            speak(result)

        }
        else if(computerChoise=='Paper' && user=='Scissors'){
            console.log('user win')
            result='user wins'
            speak(result)

        }
        else if(computerChoise=='Scissors' && user=='Rock'){
            console.log('user win')
            result='user wins'
            speak(result)

        }
        else if(computerChoise=='Scissors' && user=='Paper'){
            console.log('computer win')
            result='computer wins'
            speak(result)

        }
        document.querySelector('#result').innerHTML=result
    }