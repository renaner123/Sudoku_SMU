class Zone {
    /**
     * Gera a primeira zona
     */
    constructor(zone = null) {
        let usedNumbers = [];
        this.zone = [];

        for (let i = 0; i < 3; i++) {
            let line = []

            // ignora os valores da linha atual
            let ignore = []
            if (zone != null) for (let z of zone) ignore.concat(z);

            for (let j = 0; j < 3; j++) {
                // ignora os numeros ja usados na zona e da linha corrente
                let n = this.generateNumber(ignore.concat(usedNumbers));
                usedNumbers.push(n);
                line.push(n);
            }

            this.zone.push(line);
        }
    }

    /**
     * Gera um numero aleatorio de 1 a 9
     * @param alreadyInUse lista de numeros que nao pode ser
     * @returns {number}
     */
    generateNumber(alreadyInUse) {
        while (true) {
            let n = Math.floor(Math.random() * 9) + 1;
            if (!alreadyInUse.includes(n)) return n;
        }
    }
}

const zone1 = new Zone();
const zone2 = new Zone(zone1.zone);

console.log("zona1\n" + zone1.zone);
console.log("zona2\n" + zone2.zone);