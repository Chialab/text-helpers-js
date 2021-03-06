import './polyfills.js';
import WebFont from 'webfontloader';

const FONTS = {
    Roboto: {
        xHeight: 535,
        ascHeight: 221,
        optimalLineHeight: 19.8,
        optimalFontSize: 13.6,
    },
    Merriweather: {
        xHeight: 560,
        ascHeight: 264,
        optimalLineHeight: 20.8,
        optimalFontSize: 12.7,
    },
};

let LOAD_PROMISE;

export function loadFonts(callback) {
    if (!LOAD_PROMISE) {
        LOAD_PROMISE = [callback];
        for (let k in FONTS) {
            let span = document.createElement('span');
            span.textContent = 'hello';
            span.setAttribute('style', `font-family: ${k}`);
            document.body.appendChild(span);
        }
        WebFont.load({
            google: {
                families: Object.keys(FONTS),
            },
            active() {
                setTimeout(() => {
                    LOAD_PROMISE.forEach((fn) => fn());
                    LOAD_PROMISE = true;
                }, 2000);
            },
        });
    } else if (Array.isArray(LOAD_PROMISE)) {
        LOAD_PROMISE.push(callback);
    } else {
        callback();
    }
}

export { FONTS };
