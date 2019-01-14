
        const footerimg = document.querySelector('.imgJump');
        const footertext = document.querySelector('.footer-top')
        window.onscroll = function () {
            let scrollHeight = document.documentElement.scrollTop;
            let inner = window.innerHeight;

            if ((inner + scrollHeight) >= (document.body.offsetHeight - 100)) {
                footerimg.classList.add('footer-Jumps');
                footerimg.classList.remove('footer-Jumph');
                footertext.classList.add('footer-Jumpts');
                footertext.classList.remove('footer-Jumpth');
            } else {
                footerimg.classList.remove('footer-Jumps');
                footerimg.classList.add('footer-Jumph');
                footertext.classList.remove('footer-Jumpts');
                footertext.classList.add('footer-Jumpth');
            }
        }