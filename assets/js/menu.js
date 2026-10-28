// var desktop_nav = document.getElementById('desktop-nav');
// var mobile_nav = document.getElementById('mobile-nav');
// var link_about = document.getElementById('link-about');


// (function () {
//    var pages = [].slice.call(document.querySelectorAll('.pages > .page')),
//       currentPage = 0,

//       revealerOpts = {
//          // the layers are the elements that move from the sides
//          nmbLayers: 3,
//          // bg color of each layer
//          bgcolor: ['#eee', '#ffb400', '#eee'],
//          // effect classname
//          effect: 'anim--effect-3',
//          onStart: function (direction) {
//             var nextPage = pages[currentPage === 0 ? 0 : currentPage];
//             classie.add(nextPage, 'page--animate-' + direction);
//          },
//          onEnd: function (direction) {
//             var nextPage = pages[currentPage === 0 ? pages.length - 1 : 0];
//             nextPage.className = 'page';
//          },
//       };
//    revealer = new Revealer(revealerOpts);

//    var desktop_elements = document.querySelectorAll(".desktop-nav-element");
//    for (var i = 0; i < desktop_elements.length; i++) {
//       desktop_elements[i].addEventListener("click", function () {
//          if (!(this.classList.contains('active'))) {
//             if (document.body.classList.contains('animation-top')) {
//                reveal('top');
//             } else if (document.body.classList.contains('animation-bottom')) {
//                reveal('bottom');
//             } else if (document.body.classList.contains('animation-right')) {
//                reveal('right');
//             } else if (document.body.classList.contains('animation-left')) {
//                reveal('left');
//             } else if (document.body.classList.contains('animation-cornertopleft')) {
//                reveal('cornertopleft');
//             } else if (document.body.classList.contains('animation-cornertopright')) {
//                reveal('cornertopright');
//             } else if (document.body.classList.contains('animation-cornerbottomleft')) {
//                reveal('cornerbottomleft');
//             } else if (document.body.classList.contains('animation-cornerbottomright')) {
//                reveal('cornerbottomright');
//             } else {
//                reveal('top');
//             }
//          }
//       });
//    }

//    var mobile_elements = document.querySelectorAll(".mobile-nav-element");
//    for (var i = 0; i < mobile_elements.length; i++) {
//       mobile_elements[i].addEventListener("click", function () {

//          if (!(this.classList.contains('active'))) {
//             if (document.body.classList.contains('animation-top')) {
//                reveal('top');
//             } else if (document.body.classList.contains('animation-bottom')) {
//                reveal('bottom');
//             } else if (document.body.classList.contains('animation-right')) {
//                reveal('right');
//             } else if (document.body.classList.contains('animation-left')) {
//                reveal('left');
//             } else if (document.body.classList.contains('animation-cornertopleft')) {
//                reveal('cornertopleft');
//             } else if (document.body.classList.contains('animation-cornertopright')) {
//                reveal('cornertopright');
//             } else if (document.body.classList.contains('animation-cornerbottomleft')) {
//                reveal('cornerbottomleft');
//             } else if (document.body.classList.contains('animation-cornerbottomright')) {
//                reveal('cornerbottomright');
//             } else {
//                reveal('top');
//             }
//          }

//          setTimeout(function () {
//             document.getElementById('inputmobile').click();
//          }, 500);
//          if ((this.classList.contains('home-link'))) {
//             setTimeout(function () {
//                document.body.classList.add('home');
//             }, 500);

//          } else {
//             setTimeout(function () {
//                document.body.classList.remove('home');
//             }, 500);
//          }
//       });
//    }


//    function reveal(direction) {
//       var callbackTime = 750,
//          callbackFn = function () {
//             classie.remove(pages[currentPage], 'page--current');
//             currentPage = indexPage;
//             classie.add(pages[indexPage], 'page--current');

//          };

//       ex = currentPage;

//       revealer.reveal(direction, callbackTime, callbackFn);
//       setTimeout(function () {
//          document.querySelector(".page--current").scrollTop = 0;
//       }, 500);
//    }

//    var indexPage = 0;

//    desktop_nav.addEventListener('click', function (e) {
//       var li = e.target.closest('li');
//       var nodes = Array.from(li.closest('ul').children);
//       indexPage = nodes.indexOf(li);

//    });

//    mobile_nav.addEventListener('click', function (e) {
//       var li = e.target.closest('li');
//       var nodes = Array.from(li.closest('ul').children);
//       indexPage = nodes.indexOf(li);
//    });

//    link_about.addEventListener('click', function () {

//       indexPage = 1;

//          if (document.body.classList.contains('animation-top')) {
//             reveal('top');
//          } else if (document.body.classList.contains('animation-bottom')) {
//             reveal('bottom');
//          } else if (document.body.classList.contains('animation-right')) {
//             reveal('right');
//          } else if (document.body.classList.contains('animation-left')) {
//             reveal('left');
//          } else if (document.body.classList.contains('animation-cornertopleft')) {
//             reveal('cornertopleft');
//          } else if (document.body.classList.contains('animation-cornertopright')) {
//             reveal('cornertopright');
//          } else if (document.body.classList.contains('animation-cornerbottomleft')) {
//             reveal('cornerbottomleft');
//          } else if (document.body.classList.contains('animation-cornerbottomright')) {
//             reveal('cornerbottomright');
//          } else {
//             reveal('top');
//          }
//          var mobile_nav_elements = document.querySelectorAll(".mobile-nav-element");
//          var desktop_nav_elements = document.querySelectorAll(".desktop-nav-element");
//          setTimeout(function () {
//          document.body.classList.remove('home');
//          for (var i = 0; i < mobile_nav_elements.length; i++) {
//             mobile_nav_elements[i].classList.remove('active');
//          }
//          for (var j = 0; j < mobile_nav_elements.length; j++) {
//             desktop_nav_elements[j].classList.remove('active');
//          }
//          desktop_nav.querySelector('li:nth-child(2)').classList.add('active');
//          mobile_nav.querySelector('li:nth-child(2)').classList.add('active');
//       }, 500);
//    });


// })();




var desktop_nav = document.getElementById('desktop-nav');
var mobile_nav = document.getElementById('mobile-nav');
var link_about = document.getElementById('link-about');
var backButton = document.getElementById('mobileBackBtn');

(function () {
    var pages = [].slice.call(
        document.querySelectorAll('.pages > .page')
    );

    var currentPage = Math.max(
        0,
        pages.findIndex(function (page) {
            return page.classList.contains('page--current');
        })
    );

    var indexPage = currentPage;
    var isAnimating = false;

    var revealerOpts = {
        nmbLayers: 3,
        bgcolor: ['#eee', '#ffb400', '#eee'],
        effect: 'anim--effect-3',

        onStart: function (direction) {
            if (pages[currentPage]) {
                classie.add(
                    pages[currentPage],
                    'page--animate-' + direction
                );
            }
        },

        onEnd: function () {
            pages.forEach(function (page) {
                page.classList.remove(
                    'page--animate-top',
                    'page--animate-bottom',
                    'page--animate-left',
                    'page--animate-right',
                    'page--animate-cornertopleft',
                    'page--animate-cornertopright',
                    'page--animate-cornerbottomleft',
                    'page--animate-cornerbottomright'
                );
            });
        }
    };

    var revealer = new Revealer(revealerOpts);

    function getDirection() {
        var directions = [
            'top',
            'bottom',
            'right',
            'left',
            'cornertopleft',
            'cornertopright',
            'cornerbottomleft',
            'cornerbottomright'
        ];

        for (var i = 0; i < directions.length; i++) {
            if (
                document.body.classList.contains(
                    'animation-' + directions[i]
                )
            ) {
                return directions[i];
            }
        }

        return 'top';
    }

    function updateNavigation(pageIndex) {
        document.body.classList.toggle('home', pageIndex === 0);

        var desktopItems = document.querySelectorAll(
            '.desktop-nav-element'
        );

        var mobileItems = document.querySelectorAll(
            '.mobile-nav-element'
        );

        desktopItems.forEach(function (item, index) {
            item.classList.toggle('active', index === pageIndex);
        });

        mobileItems.forEach(function (item, index) {
            item.classList.toggle('active', index === pageIndex);
        });
    }

    function closeMobileMenu() {
        var mobileToggle = document.getElementById('inputmobile');

        if (mobileToggle) {
            mobileToggle.checked = false;
        }
    }

    function navigateTo(pageIndex) {
        if (
            isAnimating ||
            pageIndex < 0 ||
            pageIndex >= pages.length
        ) {
            return;
        }

        if (pageIndex === currentPage) {
            updateNavigation(currentPage);
            closeMobileMenu();
            return;
        }

        isAnimating = true;
        indexPage = pageIndex;

        var oldPage = currentPage;
        var newPage = pageIndex;

        revealer.reveal(getDirection(), 750, function () {
            pages.forEach(function (page) {
                page.classList.remove('page--current');
            });

            pages[newPage].classList.add('page--current');

            currentPage = newPage;
            indexPage = newPage;

            updateNavigation(currentPage);
            closeMobileMenu();

            pages[newPage].scrollTop = 0;
            isAnimating = false;
        });
    }

    // Desktop navigation
    if (desktop_nav) {
        desktop_nav.addEventListener('click', function (event) {
            var item = event.target.closest('.desktop-nav-element');

            if (!item) return;

            var items = Array.prototype.slice.call(
                desktop_nav.querySelectorAll('.desktop-nav-element')
            );

            navigateTo(items.indexOf(item));
        });
    }

    // Mobile navigation
    if (mobile_nav) {
        mobile_nav.addEventListener('click', function (event) {
            var item = event.target.closest('.mobile-nav-element');

            if (!item) return;

            var items = Array.prototype.slice.call(
                mobile_nav.querySelectorAll('.mobile-nav-element')
            );

            navigateTo(items.indexOf(item));
        });
    }

    // More About Me button
    if (link_about) {
        link_about.addEventListener('click', function () {
            navigateTo(1);
        });
    }

    // BACK TO HOME BUTTON
    if (backButton) {
        backButton.addEventListener('click', function (event) {
            event.preventDefault();
            navigateTo(0);
        });
    }

    // Set the correct initial active navigation item
    updateNavigation(currentPage);

})();
