var app = new Vue ({
    el:"#app",
    data: {
        cds: []
    },
    mounted() {
        const self = this;

        axios
            .get("https://flynn.boolean.careers/exercises/api/array/music ")
            .then(function(result) {
                console.log(result)
                const cds =result.data.response; 

                self.cds = cds;
                console.log (cds);
            })
    }

});

Vue.config.devtools = true;