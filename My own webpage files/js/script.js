

const quizConrainer = document.querySelector(".popup");
const quiz_banner = document.querySelector(".quiz_banner");


function prev() {
    document.getElementById('slider-container').scrollLeft -= 270;
}


function next() {
    document.getElementById('slider-container').scrollLeft += 270;
}


function quiz_start() {

    
    quizConrainer.classList.add("popup_visible");
    quiz_banner.classList.add("unvisible");
    const quizes = document.querySelectorAll(".quiz");
    const questions = document.querySelectorAll(".popup__content");
    const answers = [];


    
    quizes.forEach((quiz, i) => {
        const options = quiz.querySelectorAll(".quiz__input");
        const nextButton = quiz.querySelector(".popup__button");
        options.forEach((option) => {
            option.addEventListener("click", () => {             
                answers[i] = option.value;  
                nextButton.disabled = false;
            });
        });
    });



    questions.forEach((question, i) => {
        const button = document.getElementById(`popupButton${i + 1}`);
        let marks = 0;
        button.addEventListener("click", () => {
            question.classList.remove("question-visible");

            if (questions[i + 1]) {
                questions[i + 1].classList.add("question-visible");
            }

            if (i + 1 == 4) {

                if (answers[0] == '3') {
                    marks = marks + 1;
                }

               
                if (answers[1] == '1') {
                    marks = marks + 1;
                }

                
                if (answers[2] == '2') {
                    marks = marks + 1;
                }

                
                if (answers[3] == '3') {
                    marks = marks + 1;
                }

                
                const marks_text = document.getElementById("marks_text");
                marks_text.innerText = marks + "/4";
                console.log("mark" + marks);

            }
        });
    });


}


function full_screen_card(src) {
    const imageName = src.split('/').pop();
    const fullImageDiv = document.querySelector(".full-image");
    const full_card_image = document.getElementById("full_card_image");
    full_card_image.src = "images/" + imageName;
    fullImageDiv.classList.remove("unvisible");
}


function close_full_card() {
    const fullImageDiv = document.querySelector(".full-image");
    fullImageDiv.classList.add("unvisible");
}

function SubForm (){
    $.ajax({
        url:'https://api.apispreadsheets.com/data/niZUkuDvLvZxA2oG/',
        type:'post',
        data:$("#myForm").serializeArray(),
        success: function(){
          alert("Form Data Submitted :)")
        },
        error: function(){
          alert("There was an error :(")
        }
    });
}