'use strict';

let projectNo = 0;

/*listen for clicks on portfolio and about me links at menu bar*/
function menuBar() {
    $('.nav').on('click', '.portfolioLink', function (event) {
        portfolioPage();
    })
    $('.nav').on('click', '.aboutLink', function (event) {
        aboutPage();
    })
}

/*listens for any clicks on the sunny logo*/
function logoClick() {
    $('.nav').on('click', '.navImage', function (event) {
        $('.portfolioSection').hide();
        $('.aboutMe').hide();
        $('.nav').hide();
        $('.start').show();
    })
}

/*listening and checking for portfolio page button clicks*/
function portfolioButtonClick() {
    $('.portfolioSection').on('click', '.next', function (event) {
        event.preventDefault();
        projectNo++;
        $('.portfolioBox').empty();
        return createProjects(projectNo);
    })

    $('.portfolioSection').on('click', '.prev', function (event) {
        event.preventDefault();
        projectNo--;
        $('.portfolioBox').empty();
        return createProjects(projectNo);
    })
}

/*displaying the project info*/
function createProjects(pNumber) {
    //enable buttons before check
    $('.next').attr('disabled', false);
    $('.prev').attr('disabled', false);

    //disabling buttons
    if (pNumber <= 0) {
        $('.prev').attr('disabled', true);
    } else if (pNumber >= (PROJECTS.length - 1)) {
        $('.next').attr('disabled', true);
    }

    //matching shown project with number
    $('.pNumber').html(`${PROJECTS[pNumber].number}`);

    //printing project info to box
    $('.portfolioBox').append(`
        <section class="portfolioSS">
            <h1 class ="pHeading">${PROJECTS[pNumber].title}</h1>
            <figure class="tList${pNumber} techList"></figure>
            <img src="${PROJECTS[pNumber].screenshot}" alt="${PROJECTS[pNumber].alt}" class="ssImage">
            <p class="portfolioDescription tab">${PROJECTS[pNumber].description}</p>
            <div class="pageLinks">
                <a href="${PROJECTS[pNumber].repo}" target='_blank'>Code</a><span> | </span>
                <a href="${PROJECTS[pNumber].livepage}" target='_blank'>Live Page</a>
            </div>
        </section>`);

    //add technologies to each project
    for (let i = 0; i < PROJECTS[pNumber].tech.length; i++) {
        if (PROJECTS[pNumber].tech[i] === "html5") {
            $('.tList' + pNumber).append(`<img src="images/tinyHTML5Logo.png" alt="HTML5 logo">`);
        } else if (PROJECTS[pNumber].tech[i] === "css3") {
            $('.tList' + pNumber).append(`<img src="images/tinycsslogo.png" alt="CSS3 logo">`);
        } else if (PROJECTS[pNumber].tech[i] === "javascript") {
            $('.tList' + pNumber).append(`<img src="images/tinyjavascriptlogo.png" alt="JavaScript logo">`);
        } else if (PROJECTS[pNumber].tech[i] === "jquery") {
            $('.tList' + pNumber).append(`<img src="images/tinyjquerylogo.png" alt="JQuery Logo">`);
        } else if (PROJECTS[pNumber].tech[i] === "react") {
            $('.tList' + pNumber).append(`<img src="images/tinyReactlogo.png" alt="React Logo">`);
        } else if (PROJECTS[pNumber].tech[i] === "node") {
            $('.tList' + pNumber).append(`<img src="images/tinynodelogo.png" alt="Node.js Logo">`);
        } else if (PROJECTS[pNumber].tech[i] === "express") {
            $('.tList' + pNumber).append(`<img src="images/tinyexpress.jpg" alt="Express Logo">`);
        } else if (PROJECTS[pNumber].tech[i] === "postgresql") {
            $('.tList' + pNumber).append(`<img src="images/tinypostgresql.png" alt="PostgreSQL Logo">`);
        }
    };
}

/*actions to show portfolio page*/
function portfolioPage() {
    $('.start').hide();
    $('.aboutMe').hide();
    $('.portfolioSection').show();
    $('.nav').show();
    $('.portfolioLink').addClass('activePage');
    $('.aboutLink').removeClass('activePage');
    $('footer').show();

    projectNo = 0;
    $('.portfolioBox').empty();

    //refresh page if window gets resized
    $(window).resize(function () {
        portfolioPage();
    });

    //layout change depending on screen size
    if ($(window).width() >= 800) {
        for (let i = 0; i < PROJECTS.length; i++) {
            createProjects(i);
        }
    } else {
        $('.total').html(`${PROJECTS.length}`);
        $('.pNumber').html('1');
        createProjects(0);
    }
}

/*actions to show about me page*/
function aboutPage() {
    $('.start').hide();
    $('.aboutMe').show();
    $('.portfolioSection').hide();
    $('.nav').show();
    $('.aboutLink').addClass('activePage');
    $('.portfolioLink').removeClass('activePage');
    $('footer').hide();
}

/*start page and event listeners*/
function startPage() {
    /*portfolio button click*/
    $('.start').on('click', '.portfolioButton', function (event) {
        portfolioPage();
    })
    /*about me button click*/
    $('.start').on('click', '.aboutButton', function (event) {
        aboutPage();
    })
}

//Javascript Functions to run
function begin() {
    startPage();
    logoClick();
    menuBar();
    portfolioButtonClick();
}

$(begin);