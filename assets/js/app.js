const app = new Vue({
    el: "#app",

    data: {

        tasks: [
            { text: 'Fare i compiti', done: false },
            { text: 'Fare la spesa', done: true },
            { text: 'Fare il bucato', done: false },
        ]
    },

    methods: {

        removeTask(index) {
            this.tasks.splice(index, 1);
        }

    }
})