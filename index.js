let currentGameScore = 0;
let quiz = {
  currentQuestion: 0,
  quizData: [{
      "question": "Which actor, with the classic 70s mustache, played an outlaw smuggling beer into Georgia?",
      "A": "Burt Reynolds",
      "B": "Errol Flynn",
      "C": "Will Ferrell",
      "D": "Al Pacino",
      "theAnswer": "Burt Reynolds",
      "correctFeedback": "You're correct!  Burt Reynolds starred in 1977's Smokey and the Bandit along side Sally Field and Jerry Reed.",
      "wrongFeedback": "The correct answer is Burt Reynold.  Legend has it, Burt Reynolds insured his mustache for a million dollars.",
      "img": "burt-reynolds.png' id='mustacheImg' alt='Burt Reynolds'",
      "questionNum": "Question 1",
      "imgAnswer": "reynolds-full.png' id='mustacheImg' alt='Burt Reynolds'",
    },
    {
      "question": "Which actor, with a truly unruly mustache, played a skilled knife thrower, nicknamed Bill the Butcher?",
      "A": "Bruno Ganz",
      "B": "Emilio Estevez",
      "C": "Bob Hoskins",
      "D": "Daniel Day Lewis",
      "theAnswer": "Daniel Day Lewis",
      "correctFeedback": "You are correct!  Daniel Day Lewis protrayed William Cutting in 'Gangs of New York'",
      "wrongFeedback": "The correct answer is Danial Day Lewis.  During filming 'Gangs of New York'  Lewis got so tired of his greasy hair and mustache, he shaved both immidiatly after filming was complete.",
      "img": "daniel-day-lewis.png' id='mustacheImg' alt='Daniel Day Lewis'",
      "questionNum": "Question 2",
      "imgAnswer": "lewis-full.png' id='mustacheImg' alt='Daniel Day Lewis'",
    },
    {
      "question": "Which actor, sporting this handlebar mustach, played dodgeball on ESPN The Ocho?",
      "A": "Jon Hamm",
      "B": "Daniel Plainview",
      "C": "Ben Stiller",
      "D": "Vince Vaughn",
      "theAnswer": "Ben Stiller",
      "correctFeedback": "You are correct! Ben Stiller starred as White Goodman, the insane owner of GLOBO GYM.",
      "wrongFeedback": "The correct answer is Ben Stiller, seen here in the movie Dodgeball.  Stiller broke three cameras filming one scene.",
      "img": "ben-stiller.png' id='mustacheImg' alt='Ben Stiller'",
      "questionNum": "Question 3",
      "imgAnswer": "stiller-full.png' id='mustacheImg' alt='Ben Stiller'",
    },
    {
      "question": "Which actor rocked this police stache, while saying more than once “I’m getting too old for this Sh*t?",
      "A": "Samual L Jackson",
      "B": "Wesley Snipes",
      "C": "Eddie Murphy",
      "D": "Danny Glover",
      "theAnswer": "Danny Glover",
      "correctFeedback": "You are correct!  Danny Glover starred in 4 lethal weapon movies.",
      "wrongFeedback": "The correct answer is Danny Glover, seen here in Lethal Weapon.  Danny Glover was 10 years younger than the character he portrayed in Lethal Weapon.",
      "img": "danny-glover.png' id='mustacheImg' alt='Danny Glover'",
      "questionNum": "Question 4",
      "imgAnswer": "glover-full.png' id='mustacheImg' alt='Danny Glover'",
    },
    {
      "question": "Which actor, who wore this pencil thin stache, played an escaped convict, on a quest for a lost treasure?",
      "A": "George Clooney",
      "B": "Carl Withers",
      "C": "Charles Bronson",
      "D": "Clark Gable",
      "theAnswer": "George Clooney",
      "correctFeedback": "You are correct!  George Clooney played the lead in 'O Brother Where Art Thou?'",
      "wrongFeedback": "The correct answer is George Clooney, seen here in 'O Brother Where Art Thou?'.  Clooney signed on before ever reading the script.",
      "img": "george-clooney.png' id='mustacheImg' alt='George Clooney'",
      "questionNum": "Question 5",
      "imgAnswer": "clooney-full.png' id='mustacheImg' alt='George Clooney'",
    },
    {
      "question": "Which actor, pulling off a scifi stache, played a trader, turned hero for the rebellion?",
      "A": "Danny Trejo",
      "B": "Billy Dee Williams",
      "C": "Ice Cube",
      "D": "Chris Rock",
      "theAnswer": "Billy Dee Williams",
      "correctFeedback": "You are correct!  Billy Dee Williams first appears as Lando Calrissian in 'The Empire Strikes Back",
      "wrongFeedback": "The correct answer is Billy Dee Williams, seen here in 'The Empire Strikes Back'.  Williams has voiced the role of Lando in more than a dozen games and animated series.",
      "img": "billy-dee-williams.png' id='mustacheImg' alt='Billy Dee Williams'",
      "questionNum": "Question 6",
      "imgAnswer": "williams-full.png' id='mustacheImg' alt='Billy Dee Williams'",
    },
    {
      "question": "Which actor, wearing this Freddy Mercury esc stache, played a traveler making his way across the United States to learn about traditions and culture?",
      "A": "Dustin Hoffman",
      "B": "Sacha Baron Cohen",
      "C": "Gene Wilder",
      "D": "Jack Black",
      "theAnswer": "Sacha Baron Cohen",
      "correctFeedback": "That is correct!  Sacha Baron Cohen played the titular Borat.  Borat originally appeared in 'The Ali G Show'.",
      "wrongFeedback": "'The correct answer is Sacha Baron Cohen, seen here in the movie 'Borat'.  Cohen and co-producer are actually speaking Hebrew throughout the movie.",
      "img": "sacha-baron-cohen.png' id='mustacheImg' alt='Sacha Baron Cohen'",
      "questionNum": "Question 7",
      "imgAnswer": "cohen-full.png' id='mustacheImg' alt='Sacha Baron Cohen'",
    },
    {
      "question": "Which actor, with a stoic cowboy stache, played a man known for giving life advice over bowling?",
      "A": "Josh Brolin",
      "B": "Jon Gries",
      "C": "John Travolta",
      "D": "Sam Elliott",
      "theAnswer": "Sam Elliott",
      "correctFeedback": "That is correct! Sam Elliott's character in the 'Big Lebowski' has no name, he's credited as 'the stranger'",
      "wrongFeedback": "'The correct answer is Sam Elliot, seen here in the Big Lebowski.  The Cohen Brothers had Elliot in mind when they were writing the character.",
      "img": "sam-elliott.png' id='mustacheImg' alt='Sam Elliot'",
      "questionNum": "Question 8",
      "imgAnswer": "elliott-full.png' id='mustacheImg' alt='Sam Elliot'",
    },
    {
      "question": "which actor, who is arguably more mustache than man, played bass in the all-time fake iconic 80s band?",
      "A": "Harry Shearer",
      "B": "Kurt Russel",
      "C": "Michael Biehn",
      "D": "Nicolas Cage",
      "theAnswer": "Harry Shearer",
      "correctFeedback": "That is correct! Harry Shearer along with the rest of the cast, improvised most of the dialog in the movie 'Spinal Tap'.",
      "wrongFeedback": "'The correct answer is Harry Shearer.  Shearer, a competent musician in real life, actually plays bass on the soundtrack for the movie 'Spinal Tap'.",
      "img": "harry-shearer.png' id='mustacheImg' alt='Harry Shearer'",
      "questionNum": "Question 9",
      "imgAnswer": "shearer-full.png' id='mustacheImg' alt='Harry Shearer'",
    },
    {
      "question": "Which actor, who has inspired generations of mustaches, played an aging baseball player who moves to Japan after being traded by the New York Yankees?",
      "A": "Paddy Considine",
      "B": "Peter Sellers",
      "C": "Tom Selleck",
      "D": "Robert Redford",
      "theAnswer": "Tom Selleck",
      "correctFeedback": "That is correct!  In preparation for his role in 'Mr. Baseball' Tom Selleck went to spring training with the Detroit Tigers.",
      "wrongFeedback": "The correct answer is Tom Selleck, seen here in 'Mr. Baseball'.  Nolan Ryan agreed to pitch to Tom Selleck to get him used to 100mph pitches.",
      "img": "tom-selleck.png' id='mustacheImg' alt='Tom Selleck'",
      "questionNum": "Question 10",
      "imgAnswer": "selleck-full.png' id='mustacheImg' alt='Tom Selleck'",
    }

  ],

  //loading the quiz content, for questions and anser choices

  loadQuizContent: function() {
    let qData = this.quizData[this.currentQuestion]
    $('#quizQuestion').html(qData.question);
    $('#correctAnswer').html(qData.theAnswer);
    $('#answerA').val(qData.A);
    $('#answerB').val(qData.B);
    $('#answerC').val(qData.C);
    $('#answerD').val(qData.D);
    $('#mustacheImg').replaceWith("<img src= 'img/" +
      qData.img + "/>")


    $('.questionNumber').html(qData.questionNum + " out of 10");


  },

  //Selecting a new answer to start answer function

  loadQuizClicks: function() {
    $('.button').click(this.onAnswerChosen);

  },

  //comparing the answer you selected with the answer from the array

  onAnswerChosen: function() {
    event.preventDefault();
    $('#answerChoices').hide();
    // quiz.compareMyAnswer();
    let qData = quiz.quizData[quiz.currentQuestion]
    $('#mustacheImg').replaceWith("<img src= 'img/" +
      qData.imgAnswer + "/>");
    if (this.value === $("#correctAnswer").text()) {
      $('.correctMessage').html(quiz.quizData[quiz.currentQuestion].correctFeedback);
      $('.correctMessage').addClass("answerRight");
      $('.correctMessage').removeClass("answerWrong");

      gameCurrentScore++;
      currentScore();
    } else {
      $('.correctMessage').html(quiz.quizData[quiz.currentQuestion].wrongFeedback);

      $('.correctMessage').addClass("answerWrong");
      $('.correctMessage').removeClass("answerRight");
    }
    $('.correctMessage').show();
    quiz.currentQuestion++;
    quiz.checkQuizProgress();

  },

  //checks if the quiz should continue or end

  checkQuizProgress: function(e) {
    $('.button').hide();
    if (quiz.currentQuestion > quiz.quizData.length - 1) {
      quiz.tryAgain();
    } else {
      $('.button-next-question').show();
      $('.button-next-question').click(quiz.onClickNextQuestion);
    }
  },

  //pulls in the next question for the quiz

  onClickNextQuestion: function(e) {
    $('.button').show();
    $('.button-next-question').hide();
    $('.correctMessage').hide();
    quiz.loadQuizContent();


  },

  //hides answer choices and let the user decide if they will play again
  tryAgain: function() {
    $('.button').hide();
    $('.button-retake-quiz').show();
    $('#quizQuestion').hide();
    $('.correctMessage').addClass("answerRight");
    $('.correctMessage').removeClass("answerWrong");
    $('.correctMessage').append("<br>");
    $('.correctMessage').append("<br>End of Quiz.<br> Your score is: ");
    $('.correctMessage').append(gameCurrentScore);

    $('.button-retake-quiz').click(quiz.restartQuiz);



    //resets the quiz and starts the user at the beginning
  },
  restartQuiz: function() {
    $('.button').show();
    $('.button-retake-quiz').hide();
    $('#quizQuestion').show();
    $('.correctMessage').hide();
    quiz.currentQuestion = 0;
    gameCurrentScore = 0;
    currentScore();
    quiz.loadQuizContent();

  }

}

//keeps track of score, clears out before each new game

function currentScore() {
  $('#gameScore').html("Score: " + gameCurrentScore);
}

function startQuiz() {
  quiz.loadQuizContent();
  quiz.loadQuizClicks();
  gameCurrentScore = ' ' + 0;
  $('.container-1').show();
  $('.mustacheHolder').show();
  $('.container-3').show();
  $('.quizBox').show();
  $('.button').show();
  $('#gameScore').html("Score: " + gameCurrentScore);
  $('.welcome-screen').hide();


}

function handleStartFirstQuiz() {
  $('.beginQuiz').click(startQuiz);
}


$(document).ready(function() {
  $(handleStartFirstQuiz);
  $('.container-1').hide();
  $('.mustacheHolder').hide();
  $('.quizBox').hide();
});