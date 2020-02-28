class Population {
    constructor(ctx) {
        this.ctx = ctx;
        this.initialisePopulation()
        this.persons[10][10].status.red.infection = 10;
        this.persons[0][8].status.green.infection = 10;
        this.persons[8][16].status.blue.infection = 10;
        this.persons[7][16].status.blue.infection = 10;
        this.persons[8][15].status.blue.infection = 10;
    }

    initialisePopulation() {
        this.persons = [];
        for (let i = 0; i < Config.NUM_ROWS; i++) {
            this.persons.push([]);
            for (let j = 0; j < Config.NUM_COLS; j++) {
                let person = this.createPerson(j, i);
                this.persons[i].push(person);
            }
        }
    }

    createPerson(j, i) {
        let x = (1 + j) * Config.HORIZONTAL_SPACING;
        let y = (1 + i) * Config.VERTICAL_SPACING;
        let person = new Person(this.ctx, x, y);
        return person;
    }

    spread() {
        for (let person of this.forEachPerson()) {
            for (let otherPerson of this.forEachPerson()) {
                if (person !== otherPerson) {
                    person.infect(otherPerson);
               }
            }
        }
    }

    update() {
        this.spread();
        for (let person of this.forEachPerson()) {
            person.update();
        }
    }

    draw() {
        for (let person of this.forEachPerson()) {
            person.draw();
        }
    }

    * forEachPerson() {
        for (let personCol of this.persons) {
            for (let person of personCol) {
                yield person;
            }
        }
    }
}