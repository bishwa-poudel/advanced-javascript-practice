// challenge on objects

(function(){
    var score = 0

    // 1. build a function constructor called qstn to describe a question
    var Question = function(question, options, answer){
        this.question = question
        this.options = options
        this.answer = answer
    }


    // 2. create couple of questions
    var question1 = new Question('Who is the captain of current Indian Cricket Team?', ['Virat Kohli', 'Rohit Sharma', 'Mahendra Singh Dhoni'], 0)
    var question2 = new Question('What is the capital city of Nepal?', ['Pokhara', 'Bharatpur', 'Kathmandu'], 2)

    // 3. store questions inside array
    var questionSet = [question1, question2]

    // 4. select one random question and log it in console with possible answers
    Question.prototype.displayQuestion = function(){
        console.log(this.question)
        for(i=0; i<this.options.length; i++){
            console.log(i+1 + '. ' + this.options[i])
        }
    }

    // 8. repeatedly ask another random question such that the game never end
    while (true) {
        questionSelected = Math.floor(Math.random() * 2)
        questionSet[questionSelected].displayQuestion()

        // 5. ask user for the correct answer using prompt. Input number from user.
        var answer = prompt('Enter correct answer: ')

        // 9. if user writes exit instead of answer, game ends
        if(answer == 'exit'){
            break
        }else {
            answer = parseInt(answer)
        }

        // 6. check if the answer is correct
        Question.prototype.checkAnswer = function(answer){
            (this.answer == (answer - 1)) ? score++ & console.log('Correct answer') : console.log('Wrong answer')
            console.log('Your score is '+ score)
        }
        
        questionSet[questionSelected].checkAnswer(answer)

        // 7. make this code as plugin so it wont interfere with other programmers code
    }
    
})()
