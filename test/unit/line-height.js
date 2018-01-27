/* eslint-env mocha */
import './polyfills.js';
import { FontAnalyzer } from '../../src/font-analyzer.js';
import { LineHeight } from '../../src/line-height.js';
import { FONTS, almostEqual, loadFonts } from './fonts-info.js';

describe('Unit: LineHeight', () => {
    before((done) => {
        loadFonts(done);
    });

    describe('Unit: calcLineHeight', () => {
        for (let name in FONTS) {
            if (FONTS.hasOwnProperty(name)) {
                it(`check ${name}`, () => {
                    assert(
                        almostEqual(
                            FONTS[name].optimalLineHeight,
                            LineHeight.calcLineHeight(
                                14,
                                FontAnalyzer.getXHeight(name),
                                FontAnalyzer.getAscHeight(name)
                            ),
                            0.1
                        )
                    );
                });
            }
        }
    });
    describe('Unit: calcFontSize', () => {
        for (let name in FONTS) {
            if (FONTS.hasOwnProperty(name)) {
                it(`check ${name}`, () => {
                    assert(
                        almostEqual(
                            FONTS[name].optimalFontSize,
                            LineHeight.calcFontSize(
                                19,
                                FontAnalyzer.getXHeight(name),
                                FontAnalyzer.getAscHeight(name)
                            ),
                            0.1
                        )
                    );
                });
            }
        }
    });
});
