function startPage() {
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



function logoClick() {
    $('.nav').on('click', '.navImage', function (event){
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