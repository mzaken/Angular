"use strict";
exports.__esModule = true;
var LikeComponent = /** @class */ (function () {
    function LikeComponent(likesCount) {
        this.likesCount = likesCount;
        this.isSelected = false;
    }
    LikeComponent.prototype.click = function () {
        if (this.isSelected == false) {
            this.isSelected = true;
            this.likesCount += 1;
        }
        else {
            this.isSelected = false;
            this.likesCount -= 1;
        }
        console.log('num of likes: ' + this.likesCount
            + ' isClicked: ' + this.isSelected);
    };
    return LikeComponent;
}());
exports.LikeComponent = LikeComponent;
