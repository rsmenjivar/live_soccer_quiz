$(document).ready(function() {
    //questions
    var questions = [{
        question: "Question #1: Which European Team has won the most Champions League Titles?",
        choices: ["Bayern Munich", "Barcelona", "Real Madrid", "AC Milan"],
        qNum : 0,
        correct : 2,
        },
        {
        question: "Question #2: Which country has won the most World Cups?",
        choices: ["Argentina", "Brazil", "Germany", "Italy"],
        qNum : 1,
        correct : 1,
        },
        {
        question: "Question #3: Which player has the most World Cup Goals?",
        choices: ["Miroslav Klose", "Ronaldo", "Gerd Müller", "Pele"],
        qNum : 2,
        correct : 0,
        },
        {
        question: "Question #4: Which player has the most goals in Champions League history?",
        choices: ["Lionel Messi", "Raul", "Cristiano Ronaldo", "Thierry Henry"],
        qNum : 3,
        correct : 2,
        },
        {
        question: "Question #5: Which player has played in the most World Cup Games?",
        choices: ["Lothar Matthäus", "Miroslav Klose", "Diego Maradona", "Ronaldo"],
        qNum : 4,
        correct : 0,
    }]
    
    //global variables
    var numberCorrect = 0;
    var currentQuestion = 0;
    
    $("#questions-box").on("click", "#submit", function () {
        currentQuestion++;
        nextQuestion();
    });
    
    $("#questions-box").on("click", "#retry", function () {
        numberCorrect = 0;
        currentQuestion = 0;
        var newQuestion = '<p class="question">'+questions[currentQuestion].question+'</p><div id="answers-box" class="answers-box"><input type="radio" name="option" class="option" value="0"><span class="answer">'+questions[currentQuestion].choices[0]+'</span><br><input type="radio" name="option" class="option" value="1"><span class="answer">'+questions[currentQuestion].choices[1]+'</span><br><input type="radio" name="option" class="option" value="2"><span class="answer">'+questions[currentQuestion].choices[2]+'</span><br><input type="radio" name="option" class="option" value="3"><span class="answer">'+questions[currentQuestion].choices[3]+'</span><br></div><div id="button"><input type="button" id="submit" value="Submit"><input type="button" id="retry" value="Retry"></div>';
        $("#questions-box").html(newQuestion);
    });

    function nextQuestion() {
        if (currentQuestion < 5) {
            $(".question").remove();
            $("#answers-box input").remove();
            $("#answers-box span").remove();
            var newQuestion = '<p class="question">'+questions[currentQuestion].question+'</p><div id="answers-box" class="answers-box"><input type="radio" name="option" class="option" value="0"><span class="answer">'+questions[currentQuestion].choices[0]+'</span><br><input type="radio" name="option" class="option" value="1"><span class="answer">'+questions[currentQuestion].choices[1]+'</span><br><input type="radio" name="option" class="option" value="2"><span class="answer">'+questions[currentQuestion].choices[2]+'</span><br><input type="radio" name="option" class="option" value="3"><span class="answer">'+questions[currentQuestion].choices[3]+'</span><br></div><div id="button"><input type="button" id="submit" value="Submit"><input type="button" id="retry" value="Retry"></div>';
            $("#questions-box").html(newQuestion);
        }
        else {
            $(".question").remove();
            $("#answers-box input").remove();
            $("#answers-box span").remove();
            $("#submit").css("display", "none");
            $("#retry").css("display", "inline");
            if (numberCorrect == 1) {
                var finalScore = '<span id="final">Congratulations. You finished the quiz!  You answered '+numberCorrect+' question correctly.'
                $("#answers-box").html(finalScore);
            }
            else {
                var finalScore = '<span id="final">Congratulations. You finished the quiz!  You answered '+numberCorrect+' question correctly.'
                $("#answers-box").html(finalScore);
            }
        }
    }
});
