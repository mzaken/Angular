
export class LikeComponent {
    private isSelected = false;

    constructor(private likesCount:number) {

    }

    click() {
        if (this.isSelected == false) {
            this.isSelected = true;
            this.likesCount += 1;
        } else {
            this.isSelected = false;
            this.likesCount -= 1;
        }
        console.log('num of likes: ' + this.likesCount 
                        + ' isClicked: ' + this.isSelected);
    }
}