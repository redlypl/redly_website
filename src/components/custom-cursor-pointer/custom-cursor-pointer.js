document.querySelector(document).ready(function() {

    let container = document.querySelector('body'),
        element = document.querySelector('.btn');

    let cursor = document.querySelector('<div />').classList.add('cursor').html('<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28"><polygon fill="#FFFFFF" points="8.2,20.9 8.2,4.9 19.8,16.5 13,16.5 12.6,16.6 "/><polygon fill="#FFFFFF" points="17.3,21.6 13.7,23.1 9,12 12.7,10.5 "/><rect x="12.5" y="13.6" transform="matrix(0.9221 -0.3871 0.3871 0.9221 -5.7605 6.5909)" width="2" height="8"/><polygon points="9.2,7.3 9.2,18.5 12.2,15.6 12.6,15.5 17.4,15.5 "/></svg>').appendTo(container)

    container.css('cursor', 'none');

    document.querySelector(document).addEventListener('mousemove', e => {
        cursor.toggle(document.querySelector(e.target).is(container));
        cursor.css({
            '--x': e.pageX + 'px',
            '--y': e.pageY + 'px',
            '--r': calculateRotate(cursor, element) + 20 + 'deg'
        });
    });
    
    container.addEventListener('mouseleave', e => {
        cursor.hide(); 
    });

    function calculateRotate(elem, to) {
        let offset = elem.offset(),
            toOffset = to.offset(),
            center = {
                x: offset.left + elem.outerWidth() / 2,
                y: offset.top + elem.outerHeight() / 2
            },
            toCenter = {
                x: toOffset.left + to.outerWidth() / 2,
                y: toOffset.top + to.outerHeight() / 2
            },
            radians = Math.atan2(toCenter.x - center.x, toCenter.y - center.y),
            degree = (radians * (180 / Math.PI) * -1) + 180;
        return degree;
    }

    element.click(e => {
        return false;
    })

});