/*start page and event listeners*/
function startPage() {
    /*portfolio button click*/
    $('.start').on('click', '.portfolioButton', function (event){
        portfolioPage();
    })
    /*about me button click*/
    $('.start').on('click', '.aboutButton', function (event){
        aboutPage();
    })
}

/*listen for clicks on portfolio and about me links at menu bar*/
function menuBar() {
    $('.nav').on('click', '.portfolioLink', function(event) {
        portfolioPage();
    })
    $('.nav').on('click', '.aboutLink', function(event) {
        aboutPage();
    })
}
/*actions to show portfolio page*/
function portfolioPage() {
    $('.start').hide();
    $('.aboutMe').hide();
    $('.portfolioSection').show();
    $('.nav').show();
    $('.portfolioLink').addClass('activePage');
    $('.aboutLink').removeClass('activePage');
}
/*actions to show about me page*/
function aboutPage() {
    $('.start').hide();
        $('.aboutMe').show();
        $('.portfolioSection').hide();
        $('.nav').show();
        $('.aboutLink').addClass('activePage');
        $('.portfolioLink').removeClass('activePage');
}
/*listens for any clicks on the sunny logo*/
function logoClick() {
    $('.nav').on('click', '.navImage', function (event){
        $('.portfolioSection').hide();
        $('.aboutMe').hide();
        $('.nav').hide();
        $('.start').show();
    })
}

//Javascript Functions to run
function begin() {
    startPage();
    logoClick();
    menuBar();
}

$(begin);