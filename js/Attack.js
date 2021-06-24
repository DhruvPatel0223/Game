class Attack {
    constructor() {
        this.index = null;
        this.distance = 0;
        //this.score =0;
    }

    

    update() {
        var attackIndex = "attacks/player" + this.index;
        database.ref(attackIndex).set({
            distance: this.distance + this.distance,
            //score:this.score
        });
    }

    static getAttackInfo() {
        var attackInfoRef = database.ref('attacks');
        attackInfoRef.on("value", (data) => {
            allPlayers = data.val();

        })
    }

    
}
 