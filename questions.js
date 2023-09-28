(function(){
    function buildQuiz(){
      const output = [];
      myQuestions.forEach(
        (currentQuestion, questionNumber) => {
          const answers = [];
          for(letter in currentQuestion.answers){
            answers.push(
              `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
              </label>`
            );
          }
          output.push(
            `<div class="slide">
              <div class="question"> ${currentQuestion.question} </div>
              <div class="answers"> ${answers.join("")} </div>
            </div>`
          );
        }
        
      );
      quizContainer.innerHTML = output.join('');
    }
  
    function showResults(){
      const answerContainers = quizContainer.querySelectorAll('.answers');
      let numCorrect = 0;
      myQuestions.forEach( (currentQuestion, questionNumber) => {
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
        if(userAnswer === currentQuestion.correctAnswer){
          numCorrect++;
          answerContainers[questionNumber].style.color = 'lightgreen';
        }
        else{
          answerContainers[questionNumber].style.color = 'red';
        }
      });
      resultsContainer.innerHTML = `You scored ${numCorrect} out of ${myQuestions.length}! Well done :)`;
    }
  
    function showSlide(n) {
      slides[currentSlide].classList.remove('active-slide');
      slides[n].classList.add('active-slide');
      currentSlide = n;
      if(currentSlide === 0){
        previousButton.style.display = 'none';
      }
      else{
        previousButton.style.display = 'inline-block';
      }
      if(currentSlide === slides.length-1){
        nextButton.style.display = 'none';
        submitButton.style.display = 'inline-block';
      }
      else{
        nextButton.style.display = 'inline-block';
        submitButton.style.display = 'none';
      }
    }
  
    function showNextSlide() {
      showSlide(currentSlide + 1);
    }
  
    function showPreviousSlide() {
      showSlide(currentSlide - 1);
    }
  
    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');
    const myQuestions = [
        {
            question: "Which global goal is focused on promoting responsible consumption and production patterns?",
            answers: {
              a: "Clean Water and Sanitation",
              b: "Climate Action",
              c: "Life Below Water",
              d: "Ensure Sustainable Consumption and Production"
            },
            correctAnswer: "d"
          },
          {
            question: "What is the primary aim of the goal related to taking urgent action to combat climate change and its impacts?",
            answers: {
              a: "Ending poverty and hunger",
              b: "Ensuring access to clean water and sanitation",
              c: "Reducing inequalities in society",
              d: "Combating climate change and its impacts"
            },
            correctAnswer: "d"
          },
          {
            question: "This global goal specifically addresses the conservation and sustainable use of oceans, seas, and marine resources. What is it?",
            answers: {
              a: "Affordable and Clean Energy",
              b: "Quality Education",
              c: "Conservation and Sustainable Use of Oceans, Seas, and Marine Resources",
              d: "Gender Equality and Empowerment"
            },
            correctAnswer: "c"
          },
          {
            question: "Which goal focuses on protecting and restoring terrestrial ecosystems, including forests and biodiversity?",
            answers: {
              a: "Protect, Restore, and Promote Sustainable Use of Terrestrial Ecosystems",
              b: "Ensure Access to Affordable, Reliable, Sustainable, and Modern Energy",
              c: "Achieve Gender Equality and Empower All Women and Girls",
              d: "Ensure Healthy Lives and Promote Well-being for All Ages"
            },
            correctAnswer: "a"
          },
          {
            question: "What is the primary objective of the goal that aims to ensure sustainable consumption and production patterns?",
            answers: {
              a: "Universal access to quality healthcare",
              b: "Sustainable cities and communities",
              c: "Responsible consumption and production of goods and resources",
              d: "Clean water and sanitation for all"
            },
            correctAnswer: "c"
          },
          {
            question: "Which global goal is primarily concerned with taking urgent action to combat climate change and its impacts?",
            answers: {
              a: "Ensure Sustainable Consumption and Production",
              b: "Combating Climate Change and Its Impacts",
              c: "Conservation and Sustainable Use of Oceans, Seas, and Marine Resources",
              d: "Protect, Restore, and Promote Sustainable Use of Terrestrial Ecosystems"
            },
            correctAnswer: "b"
          },
          {
            question: "What is the key objective of the goal related to the conservation and sustainable use of oceans, seas, and marine resources?",
            answers: {
              a: "Promoting sustainable cities and communities",
              b: "Ensuring access to clean water and sanitation",
              c: "Reducing inequalities in society",
              d: "Conserving and sustainably using oceans, seas, and marine resources"
            },
            correctAnswer: "d"
          },
          {
            question: "This goal focuses on protecting and restoring terrestrial ecosystems, including forests and biodiversity. What is it?",
            answers: {
              a: "Reducing greenhouse gas emissions",
              b: "Protecting and restoring terrestrial ecosystems",
              c: "Ensuring access to clean energy for all",
              d: "Achieving gender equality and empowerment"
            },
            correctAnswer: "b"
          },
          {
            question: "Which of the following global goals addresses responsible consumption and production patterns?",
            answers: {
              a: "Decent Work and Economic Growth",
              b: "Combating Climate Change and Its Impacts",
              c: "Conservation and Sustainable Use of Oceans, Seas, and Marine Resources",
              d: "Ensure Sustainable Consumption and Production Patterns"
            },
            correctAnswer: "d"
          },
          {
            question: "Taking urgent action to combat climate change and its impacts is the primary focus of which global goal?",
            answers: {
              a: "Make Cities and Human Settlements Inclusive, Safe, Resilient, and Sustainable",
              b: "Ensure Availability and Sustainable Management of Water and Sanitation for All",
              c: "Combating Climate Change and Its Impacts",
              d: "Ensure Inclusive and Equitable Quality Education for All"
            },
            correctAnswer: "c"
          }
        
      ];
  
    buildQuiz();
    const previousButton = document.getElementById("previous");
    const nextButton = document.getElementById("next");
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;
    showSlide(currentSlide);
    submitButton.addEventListener('click', showResults);
    previousButton.addEventListener("click", showPreviousSlide);
    nextButton.addEventListener("click", showNextSlide);
  })();
  
  