"use strict";
exports.__esModule = true;
var Like = /** @class */ (function () {
    function Like(numOfLikes) {
        this.numOfLikes = numOfLikes;
        this.isClicked = false;
    }
    Like.prototype.click = function () {
        if (this.isClicked == false) {
            this.isClicked = true;
            this.numOfLikes += 1;
        }
        else {
            this.isClicked = false;
            this.numOfLikes -= 1;
        }
        console.log('num of likes: ' + this.numOfLikes
            + ' isClicked: ' + this.isClicked);
    };
    return Like;
}());
exports.Like = Like;
