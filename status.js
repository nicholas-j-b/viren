class Status {
    constructor() {
        this.infection = 0;
        this.transfer = 0;
        this.exposure = 0;
    }
     
    update() {
        this.infection += this.exposure;
        this.infection *= Config.SUBSIDE_FACTOR;
        this.exposure = 0;
    }

    contractStatus(transfer) {
        this.exposure += transfer;
    }
}