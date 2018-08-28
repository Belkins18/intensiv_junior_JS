'use strict';
class User {
    constructor(height, width, bg, fontSize, textAlign) {
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
    }
    get getHeight() { return `${this.height}px` };
    get getWidth() { return `${this.width}px` };
    get getBackground() { return `${this.bg}` };
    get getFontSize() { return `${this.fontSize}px` };
    get getTextAlign() { return `${this.textAlign}` };
}
User.prototype.creatDiv = function(parentElem, elem) {
    elem.style.cssText=`
        height: ${this.getHeight};
        width: ${this.getWidth};
        background: ${this.getBackground};
        font-size: ${this.getFontSize};
        text-align: ${this.getTextAlign};
    `;
    elem.textContent = 'Test textContent';
    parentElem.appendChild(elem);
};

document.addEventListener("DOMContentLoaded", function() {
    let body = document.body;
    let d = document.createElement('div');

    let user = new User(80, 250, 'red', 12, 'center');
    user.creatDiv(body, d);
});