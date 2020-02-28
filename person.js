class Person {
    constructor(ctx, x, y) {
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.width = 3;
        this.radius = 6;
        this.infection = 0;
        this.exposure = 0;
    }

    infect(otherPerson) {
        let dist = this.getDistance(otherPerson);
        let transfer = this.getTransfer(dist);
        otherPerson.getInfected(transfer);
    }

    getInfected(transfer) {
        this.exposure += transfer;
    }

    getTransfer(dist) {
        return (1 / (dist ** 2)) * this.infection;
    }

    getDistance(otherPerson) {
        return Math.sqrt((this.x - otherPerson.x)**2 + (this.y - otherPerson.y)**2);
    }

    update() {
        //if (this.infection > 0) {
            //console.log(this);
        //}
        this.infection += this.exposure;
        this.exposure = 0;
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        this.ctx.closePath();

        this.ctx.lineWidth = this.width;
        this.ctx.strokeStyle = this.getColour();
        this.ctx.stroke();

    }

    getColour() {
        let r = 100;
        let g = 200 * this.infection;
        let b = 80;
        return `rgb(${r}, ${g}, ${b})`;
    }
}