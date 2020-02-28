class Config {
    static CANVAS_WIDTH = 1400;
    static CANVAS_HEIGHT = 1000;
    static NUM_ROWS = 20;
    static NUM_COLS = 20;
    static VERTICAL_SPACING = 45;
    static HORIZONTAL_SPACING = 45;
    static ANIMATION = {
        fps: 30
    }
    static COLOURS = {
        background: 'rgb(247, 220, 111)'
    };
}

class Timer {
    static frame = 0;
    static animation = 0;

    static resetFrame() {
        this.frame = 0;
    }

    static resetAnimation() {
        this.animation = 0;
    }
}

class Debug {
    static DEFUALT = 1;
}
