// constant for body
const studentInfo = document.getElementById("container");

// const for creating Vue component
const app = Vue.createApp({
    data() {
        return {
            name: 'Jennifer Baldwin',
            course: 'N320',
            assignment: 'Homework 6',
            difficutly: 4,
            fun: 8,
            frustration: 10,
            completed: false,
            prefText: '',
            newColor: '',
            colorAdd: '',
            favoriteColor: 0,
            myList: [
                "Bright Red", "Phthalo Blue", "Midnight Black", "Van Dyke Brown", "Cadmium Yellow", "Sap Green", "Titanium White", "Alizarin Crimson", "Liquid White"
            ]
        }
    },
    computed: {
        // function to create a due date
        dueDate() {
            const date = new Date();
            const mm = date.getMonth() + 1;
            const dd = date.getDate() + 7;
            const yyyy = date.getFullYear();

            const dateDue = `${mm}/${dd}/${yyyy}`

            return dateDue;
        },
        printStudent() {
            console.log("student printed");
            return studentInfo.innerHTML +=
                `<h1>{{name}}</h1>
                <h2>{{course}}: {{assignment}}</h2>
                <h3>{{dueDate}}</h3>
                <h4>Difficulty: {{difficutly}}/5</h4>
                <h5>Fun: {{fun}}/10
                <span>(does not scale)</span></h5>
                <h6>Frustration: {{frustration}}/5<span>(does , in-fact, scale)</span></h6>
                <hr>`
        }
    },
    watch: {

    },
    methods: {
        favorite() {
            if (this.favoriteColor == '' | this.favoriteColor >= this.myList.length) {
                this.favoriteColor = 0;
            }
            const favColor = this.myList[this.favoriteColor];

            this.prefText = `My favorite Bob Ross color is ${favColor}`;
            this.favoriteColor++;
        },
        addColor() {
            console.log("color added");
            console.log(this.newColor);
            this.myList.push(this.newColor);
            console.log(this.myList);
            this.colorAdd = `${this.newColor} was added to your list!`;

        }
    }
})





// Execution
app.mount('#app')