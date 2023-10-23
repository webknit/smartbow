// https://hiddedevries.nl/en/blog/2017-01-29-using-javascript-to-trap-focus-in-an-element
export function trapFocus(element, addFirstEl) {

    let focusableEls = Array.from(element.querySelectorAll('a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])'));

    if (addFirstEl) {

        if (addFirstEl.constructor === Array) focusableEls = addFirstEl.concat(focusableEls);

        else focusableEls.unshift(addFirstEl);

    }

    const firstFocusableEl = focusableEls[0];
    const lastFocusableEl = focusableEls[focusableEls.length - 1];
    const KEYCODE_TAB = 9;

    element.addEventListener('keydown', function (e) {

        var isTabPressed = (e.key === 'Tab' || e.keyCode === KEYCODE_TAB);

        if (!isTabPressed) {
            return;
        }

        if (e.shiftKey) /* shift + tab */ {
            if (document.activeElement === firstFocusableEl) {
                lastFocusableEl.focus();
                e.preventDefault();
            }
        } else /* tab */ {
            if (document.activeElement === lastFocusableEl) {
                firstFocusableEl.focus();
                e.preventDefault();
            }
        }

    });
}