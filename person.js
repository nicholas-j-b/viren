class Person {
    constructor(ctx, x, y) {
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.width = 3;
        this.radius = 6;
        this.status = {
            virus: new Status(),
            blue: new Status()
        };
    }

    infect(otherPerson) {
        let dist = this.getDistance(otherPerson);
        let transfer = this.getTransfer(dist);
        otherPerson.contractStatus(transfer);
    }


    contractStatus(transfer) {
        for (status in transfer) {
            this.status[status].contractStatus(transfer[status]);
        }
    }

    getTransfer(dist) {
        let transfer = {};
        for (status in this.status) {
            transfer[status] = this.status[status].infection * this.getProximityMuliplier(dist);
        }
        return transfer;
    }

    getProximityMuliplier(dist) {
        return 1 / (dist ** 2);
    }

    getDistance(otherPerson) {
        return Math.sqrt((this.x - otherPerson.x)**2 + (this.y - otherPerson.y)**2);
    }

    update() {
        for (status in this.status) {
            this.status[status].update();
        }
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
        let g = 200 * this.status.virus.infection;
        let b = 200 * this.status.blue.infection;
        return `rgb(${r}, ${g}, ${b})`;
    }
}