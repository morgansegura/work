$(document).ready(function(){
    $('.search-form input').placeholderToggle('Enter a Movie Title...');
    // Bio tabs section
    tabSection('.bio-tab','.bio-tabs','i','fa-plus-square','fa-minus-square' );
    shiftMobileMenu($('.hamburger'), $('.main-menu'), $('.panels'));

});

function tabSection(tabClass,tabbedClass,iconRef,iconUp,iconDown) {

    $(tabClass).each(function(){
        var $this  = $(this),
            tab_id = $this.attr('data-tab');

        // tabSection has icons

        var iconToggle = function(option){
            if( iconRef !== null || iconRef !== undefined || iconRef !== '') {
                var tab_icon = $this.children(iconRef);
                switch(option){
                    case 'down':
                        tab_icon.removeClass(iconUp)
                            .addClass(iconDown); // swap icon classes
                        break;
                    case 'up':
                        tab_icon.removeClass(iconDown)
                            .addClass(iconUp); // swap icon classes
                        break;
                    case 'sibling':
                        $this.siblings(tabClass).children(iconRef)
                            .removeClass(iconDown)
                            .addClass(iconUp); // reset sibling icon classes
                        break;
                }
            }
        };

        $this.on('click', function() {
            // reset all sibling tabs on click
            $('#'+tab_id).siblings(tabbedClass).hide();
            $this.siblings(tabClass).removeClass('selected'); // remove sibling active
            $this.toggleClass('selected'); // this is active
            iconToggle('sibling');

            if($this.hasClass('selected')){
                $('#'+tab_id).fadeIn(); // fadeIn clicked tab
                iconToggle('down');
            } else {
                $('#'+tab_id).fadeOut(); // hide this tab area
                iconToggle('up');
            }
        });
    }); // End tab section
}


/*
 * FaceBook style menu shift for Mobile
 *
 */
function shiftMobileMenu(trigger,shiftMenu,shiftContainer){
    var trigger        = trigger,
        shiftMenu      = shiftMenu,
        shiftContainer = shiftContainer;

    trigger.clickToggle(function(){

        shiftMenu.animate({right:'0px'}, {duration: 500, queue: false});
        shiftContainer.addClass('shift').animate({left:'-200px'}, {duration: 500, queue: false});

    }, function(){
        shiftMenu.animate({right:'-200px'}, {duration: 500, queue: false});
        shiftContainer.animate({left:0}, {duration: 500, queue: false});
    });
}

/*
 * Resume Download
 *
 */
function downloadFile() {
    var fileName = fileName;
}

// Click toggle function
(function($) {
    $.fn.clickToggle = function(func1, func2) {
        var funcs = [func1, func2];
        this.data('toggleclicked', 0);
        this.click(function() {
            var data = $(this).data();
            var tc = data.toggleclicked;
            $.proxy(funcs[tc], this)();
            data.toggleclicked = (tc + 1) % 2;
        });
        return this;
    };
// Placeholder toggle
    $.fn.placeholderToggle = function(message){
        // hide / show place holder
        this.on('focus', function(){
            $(this).attr('placeholder', '');
        });
        this.on('focusout', function(){
            $(this).attr('placeholder', message);
        });
        // hello // goodbye
        return this;
    };
}(jQuery))

$ = jQuery;
var windowWidth  = $(window).outerWidth(true),
    windowHeight = $(window).outerHeight(true),
    body         = $('body');

$(document).ready(function(){

    /* Bio Panel */
    //diagonalLines()
    webBuild(); // portfolio
    galleryPanel();

    //hamburgler();

    $(window).resize(function(){
        windowWidth  = $(window).outerWidth(true),
            windowHeight = $(window).outerHeight(true);
        //diagonalLines()
    });
});
// Watch window w/h and changes
function randomColors(){
    // window.setTimeout( "randomColors()", 500);
    var hue = 'rgba(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + '.5)';

    $('.likes p span').each(function(){
        $(this).css({'background':'red'}).fadeIn('fast').fadeOut();
        console.log('refresh');
    })
}

function diagonalLines() {
    var location = $('.position'),
        lTop = location.outerHeight(true) / 2,
        lLeft = location.outerWidth(true) / 2,
        lOffsetTop = location.offset().top,
        lOffsetLeft = location.offset().left;

    $('.bio-text-panel .likes .bullet').each(function(){
        var div = $('<div class="border-div"></div>'),
            bullet = $(this),
            bTop = bullet.outerHeight(true) + 100,
            bLeft = bullet.width(),
            bOffsetTop = bullet.position().top,
            bOffsetLeft = bullet.offset().left,
            minus = bOffsetTop > 100 ? '-' : '',
            bdWidth = (bOffsetLeft - (lLeft+ lOffsetLeft));
        console.log('L: ==========================================');
        console.log('Center top: ' + lTop);
        console.log('Center left: ' + lLeft / 2);
        console.log('Offset top: '+ lOffsetTop);
        console.log('Offset Left: ' + lOffsetLeft);

        console.log('B: ==========================================')
        console.log('Center top: ' + bTop);
        console.log('Center left: ' + bLeft);
        console.log('Offset top: '+ bOffsetTop);
        console.log('Offset Left: ' + bOffsetLeft);



        $(this).append(div);
        var borderDiv = $(this).children('.border-div');

        borderDiv.css({
            'width': bdWidth +'px',
            '-webkit-transform': 'rotate(26deg)',
            'transform': 'rotate('+minus+''+(lTop+location.position().top)+'deg)',
            'left': '-'+ bdWidth +'px',
            'top': '0px',
        });

    });

}
var projects = [
    {
        "id": "0",
        "title": "This is the title of my project 6",
        "date": "December 12, 2016",
        "project": "https://test6.com",
        "small": "http://hdwallpaperbackgrounds.net/wp-content/uploads/2016/10/Cool-Wallpapers-Images-6.jpg",
        "large": "http://hdwallpaperbackgrounds.net/wp-content/uploads/2016/10/Cool-Wallpapers-Images-6.jpg",
        "paragraph": "Celery quandong swiss chard chicory earthnut pea potato. Salsify taro catsear garlic gram celery bitterleaf wattle seed collard greens nori. Grape wattle seed kombu beetroot horseradish carrot squash brussels sprout chard."
    },
    {
        "id": "1",
        "title": "This is the title of my project 1",
        "date": "December 12, 2016",
        "project": "https://test1.com",
        "small": "https://lh3.googleusercontent.com/K9znvr7zmYHAyNac_5Nj4N9DDmff1gow6sqih92dhv4eb1yMm-5jrYWU8CRllxlXWxE=h900",
        "large": "https://lh3.googleusercontent.com/K9znvr7zmYHAyNac_5Nj4N9DDmff1gow6sqih92dhv4eb1yMm-5jrYWU8CRllxlXWxE=h900",
        "paragraph": "Celery quandong swiss chard chicory earthnut pea potato. Salsify taro catsear garlic gram celery bitterleaf wattle seed collard greens nori. Grape wattle seed kombu beetroot horseradish carrot squash brussels sprout chard."
    },
    {
        "id": "2",
        "title": "This is the title of my project 2",
        "date": "December 12, 2016",
        "project": "https://test2.com",
        "small": "https://newevolutiondesigns.com/images/freebies/cool-wallpaper-3.jpg",
        "large": "https://newevolutiondesigns.com/images/freebies/cool-wallpaper-3.jpg",
        "paragraph": "Celery quandong swiss chard chicory earthnut pea potato. Salsify taro catsear garlic gram celery bitterleaf wattle seed collard greens nori. Grape wattle seed kombu beetroot horseradish carrot squash brussels sprout chard."
    },
    {
        "id": "3",
        "title": "This is the title of my project 3",
        "date": "December 12, 2016",
        "project": "https://test3.com",
        "small": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQve7sqiOXQtYet9Bw_nv8vTP3BV6CvX6vJyQktvYsPjWlBgbEp",
        "large": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQve7sqiOXQtYet9Bw_nv8vTP3BV6CvX6vJyQktvYsPjWlBgbEp",
        "paragraph": "Celery quandong swiss chard chicory earthnut pea potato. Salsify taro catsear garlic gram celery bitterleaf wattle seed collard greens nori. Grape wattle seed kombu beetroot horseradish carrot squash brussels sprout chard."
    },
    {
        "id": "4",
        "title": "This is the title of my project 4",
        "date": "December 12, 2016",
        "project": "https://test4.com",
        "small": "https://newevolutiondesigns.com/images/freebies/cool-wallpaper-1.jpg",
        "large": "https://newevolutiondesigns.com/images/freebies/cool-wallpaper-1.jpg",
        "paragraph": "Celery quandong swiss chard chicory earthnut pea potato. Salsify taro catsear garlic gram celery bitterleaf wattle seed collard greens nori. Grape wattle seed kombu beetroot horseradish carrot squash brussels sprout chard."
    },
    {
        "id": "5",
        "title": "This is the title of my project 5",
        "date": "December 12, 2016",
        "project": "https://test5.com",
        "small": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQrM3QIZTXjqhvIjAe94WLQ0nFf1PAVD_eWHwEzka1q-VTLLcC-",
        "large": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQrM3QIZTXjqhvIjAe94WLQ0nFf1PAVD_eWHwEzka1q-VTLLcC-",
        "paragraph": "Celery quandong swiss chard chicory earthnut pea potato. Salsify taro catsear garlic gram celery bitterleaf wattle seed collard greens nori. Grape wattle seed kombu beetroot horseradish carrot squash brussels sprout chard."
    }
];

function hamburgler(){

     /**
     * forEach implementation for Objects/NodeLists/Arrays, automatic type loops and context options
     *
     * @private
     * @author Todd Motto
     * @link https://github.com/toddmotto/foreach
     * @param {Array|Object|NodeList} collection - Collection of items to iterate, could be an Array, Object or NodeList
     * @callback requestCallback      callback   - Callback function for each iteration.
     * @param {Array|Object|NodeList} scope=null - Object/NodeList/Array that forEach is iterating over, to use as the this value when executing callback.
     * @returns {}
     */
    var forEach=function(t,o,r){if("[object Object]"===Object.prototype.toString.call(t))for(var c in t)Object.prototype.hasOwnProperty.call(t,c)&&o.call(r,t[c],c,t);else for(var e=0,l=t.length;l>e;e++)o.call(r,t[e],e,t)};
    var hamburglers = document.querySelectorAll(".hamburgler");
    if (hamburglers.length > 0) {
        forEach(hamburglers, function(hamburger) {
            hamburger.addEventListener("click", function() {
                this.classList.toggle("is-active");
            }, false);
        });
    }

}

function webBuild() {
    var selector      = $('.main-nav a'), // the selector
        list          = $('#panel1,#panel2,#panel3,#panel4,#panel5'),
        header        = $('.header'), // header height
        scroller      = $('body'),
        toTopBtn      = $('.toTop');

    // Panel Sizing
    var panelSize = function() {
        // panel width/height
        list.css({'padding': header.outerHeight(true) + 'px 0'}); //height(windowHeight)
    } // End panel Sizing

    // Fix the header
    var fixedHeader = function() {
        $(document).on('scroll', function() {

            // fixed header
            if ( scroller.scrollTop() > header.height() ) {
                scroller.addClass("fixed"); // add fixed class
                toTopBtn.fadeIn('fast'); // show toTopBtn
            } else {
                scroller.removeClass("fixed"); // remove fixed class
                toTopBtn.fadeOut('fast'); // hide toTopBtn
            }
        });
        // go back to the top
        toTopBtn.click(function(){
            scroller.animate({scrollTop:0});
        });
    } // End Fixed Header

    // Navigation
    var panelNav = function() {
        // Main Navigation links
        selector.click(function(e){
            e.preventDefault(); // prevent default links
            var panelItem    = $(this).attr('ui-nav'), // ui-nav attribute
                panelTop     = $('#'+panelItem).offset().top // top of this panel

            scroller.animate({ // animate scroller
                // scroll to top (account for the header height)
                scrollTop : panelTop
            });
        });
    } // End Panel Navigation

    panelSize(list);
    fixedHeader();
    panelNav();

    // Detect window resize
    $(window).resize(function(){
        panelSize(list); // Panel resize
    })

}

/// Snap Crackle Popup
function snapCracklePopup() {
    var popupHtml     = $('<div class="popupOverlay"><div class="popupContainer"></div><div class="backDrop closed"></div></div>'),
        popupOverlay  = $('.popupOverlay'),
        openSelector  = $('.snapCracklePop'),
        closeSelector = $('.closed');

    // Show Popup
    openSelector.click(function(e){
        e.preventDefault(); // prevent default
        popupOverlay.fadeIn(); // fade in the overlay
        body.addClass('no-scroll'); // stop the bg from scrolling
        console.log('click');
    });
    // Hide Popup
    closeSelector.click(function(){
        popupOverlay.fadeOut(); // fade out the overlay
        body.removeClass('no-scroll'); // allow bg to scroll
    });
    // Append to the body
    body.append(popupHtml);
}

// Gallery and gallery panel
function galleryPanel() {

    // Append gallery popup
    var html = '<div class="gallery-info clearfix">' +
        '<i class="fa fa-close closeBtn icon-nav closed" title="Close Gallery"></i>' +
        '<div class="pointer closed image-area col-xs-6 col-sm-6 col-md-8"></div>' +
        '<div class="content-area col-xs-6 col-sm-6 col-md-4 clearfix">' +
        '<h4 class="title"></h4>' +
        '<p class="date"></p>' +
        '<div class="image-detail">' +
        '</div>' +
        '<div calss="row clearfix alt-image-list"></div>' +
        '<p class="project-link"><a class="text-info" href="" title="Go to project website">Project Website</a></p>' +
        '<button class="gallery-btn closed btn btn-info">Close Project</button>' +
        '</div>' +
        '</div>';

    snapCracklePopup();

    $('.popupContainer').html(html);

    var galleryContainer = $('.gallery-info'),
        imageSection     = $('.image-area'),
        infoSection      = $('.content-area'),
        mainGallery      = $('.gallery-list')

    // Height of window
    imageSection.height(windowHeight);
    infoSection.height(windowHeight);

    // Setup image gallery main
    $.each(projects, function(i,v){
        var displayImg  = $('<img id="proj-'+projects[i].id+'" class="v-align display-image img-responsive" src="'+projects[i].large+'" alt="'+projects[i].title+'" />'),
            galleryList = $('<a ui-id="proj-'+projects[i].id+'" class="pointer gallery-list-images snapCracklePop col-xs-12 col-sm-6 col-md-4">' +
                '<div class="cropper">' +
                '<p class="title light">'+projects[i].title+'</p>' +
                '<img class="img-responsive" src="'+projects[i].small+'" alt="'+projects[i].title+'" >' +
                '</div>' +
                '</a>');

        // Append main gallery images
        mainGallery.append(galleryList);
        // Load profile project image and details
        galleryList.click(function(){

            if( displayImg.attr('id') === $(this).attr('ui-id')) { // Map the images
                imageSection.html(displayImg); // Assign the correct profile image
                // get image details by Id
                var newImg    = document.getElementById("proj-"+projects[i].id),
                    marginTop = marginTop = windowHeight - newImg.height;
                // set a max-width by natural image width
                displayImg.css({'max-width': newImg.naturalWidth + 'px'});

                if(projects[i].paragraph !== '' || projects[i].paragraph !== undefined){
                    var paragraph = $('<p ui-id="p-'+ projects[i].id +'" class="body-content">'+ projects[i].paragraph +'</p>');
                    $('.image-detail').html(paragraph);
                }
            }
            // Setup info content area (title and date)
            $('.content-area .title').text(projects[i].title);
            $('.content-area .date').text(projects[i].date);

            // Project Link
            if( projects[i].project !== '' || projects[i].project !== undefined){
                $('.project-link a').attr('href', projects[i].project);
            } else {
                $('.project-link').replaceWith('');
            }
        });
    }); // end main loop

    snapCracklePopup();
} // end gallery

