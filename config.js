class Config {
    static CANVAS_WIDTH = 1400;
    static CANVAS_HEIGHT = 1000;
    static NUM_ROWS = 10;
    static NUM_COLS = 10;
    static VERTICAL_SPACING = 25;
    static HORIZONTAL_SPACING = 25;
    static SUBSIDE_FACTOR = .99;
    static ANIMATION = {
        fps: 10
    }
    static COLOURS = {
        background: 'rgb(247, 220, 0)'
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
