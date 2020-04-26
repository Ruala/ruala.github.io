$(()=>{

    /* offcanvas bar */
    (() => {
        const $body = $('body');
        const $offcanvas = $('.offcanvas');
        const $offcanvasBar = $('.offcanvas__bar');
        const $btnOpen = $('.js-offcanvas-open');
        const $btnClose = $('.js-offcanvas-close');

        $btnOpen.on('click', handleOpen);

        $btnClose.on('click', handleClose);

        $body.on('click', handleOuterClick);

        function handleOpen(e) {
            e.preventDefault();

            $offcanvas.addClass('offcanvas_open');
            $body.addClass('body_muted');
            $offcanvasBar.animate({
                right: 0,
            }, 300);
        }

        function handleClose(e) {
            e.preventDefault();

            $offcanvasBar.animate({
                right: '-100%',
            }, 300, function () {
                $offcanvas.removeClass('offcanvas_open');
                $body.removeClass('body_muted');
            });
        }

        function handleOuterClick(e) {
            const $target = $(e.target);
            const isCanvas = $target.closest($offcanvasBar).length;
            const isOpen = $offcanvas.hasClass('offcanvas_open');
            const isButton = $target.closest($btnOpen).length;

            if (isCanvas || !isOpen || isButton) {
                return;
            }

            handleClose(e);
        }
    })();
});
