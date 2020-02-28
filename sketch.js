function begin() {
    var canvas = document.getElementById("standardCanvas");
    var ctx = canvas.getContext("2d");
    this.sketch = new Sketch(canvas, ctx);
}

class Sketch {
    constructor(canvas, ctx) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.population = new Population(ctx);
        var self = this;
        setInterval(function() {self.update(self)}, 1000 / Config.ANIMATION.fps);
    }

    update(self) {
        self.draw(self);
        Timer.frame++;
        this.population.update()
    }

    draw(self) {
        self.ctx.fillStyle = Config.COLOURS.background;
        self.ctx.fillRect(0, 0, Config.CANVAS_WIDTH, Config.CANVAS_HEIGHT);
        this.population.draw()
    }
}