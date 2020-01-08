




function startPage() {
    $('.portfolio').hide();
    $('.aboutMe').hide();
    $('.nav').hide();

    $('.start').on('click', '.portfolioButton', function (event){
        $('.start').hide();
        $('.aboutMe').hide();
        $('.portfolio').show();
        $('.nav').show();


    })

    $('.start').on('click', '.aboutButton', function (event){
        $('.start').hide();
        $('.aboutMe').show();
        $('.portfolio').hide();
        $('.nav').show();


    })


}

//function for when user clicks portfolio or aboutme buttons





//initialize the quiz
function initializeQuiz() {
   // $('.questionPage').hide();
   // $('.finalPage').hide();
    //score = 0;
    //qNumber = 0;
}


function logoClick() {
    $('.portfolio').on('click', '.navImage', function (event){
        $('.portfolio').hide();
        $('.aboutMe').hide();
        $('.nav').hide();



        $('.start').show();


    })
}








//Javascript Functions to run
function begin() {
    startPage();
    logoClick();


}

$(begin);