/* app initialized */
const app = Vue.createApp({
    // data: function(){}
    /* same as: */
    data() {
        // a function in an obj will ALWAYS RETURNS AN OBJ
        return {
            courseGoal1: 'Learn advanced javascript',
            courseGoal2: 'Learn Vue',
            vueLink: 'https://vuejs.org',
            courseGoal3: `<h4>Create an application</h4>`,
            counter: 10,
            name: '',
            // fullName: this.fullName()
        }
    },
    computed: {
        fullName() {
            if (this.name == '') {
                return "";
            } else {
                return this.name + " " + "Baldwin";
            }
        },
        nameData() {
            return "name data"
            /* let nameVal = [];

            // length of fullName
            let nameLength = this.fullName();
            nameVal.push(nameLength.length);

            // middle character
            let middle = nameLength.charAt(Math.floor(nameLength / 2));

            nameVal.push(middle)

            return nameVal; */
        }
    },
    methods: {
        newGoal() {
            const rNum = Math.random();
            if (rNum < .2) {

            } else {
                return this.courseGoal1
            }
        },
        add() {
            this.counter++;
        },
        remove() {
            this.counter--;
        },
        addMore(num) {
            this.counter += num;

        },
        setName(event) {
            this.name = event.target.value;
        },
        resetName() {
            this.name = '';
        },
        submitForm() {
            alert("Form Submitted")
        },
        consoleMe() {
            console.log("spaceBar clicked");
        }
    }
});

/* tie app to id on HTML page */
app.mount("#myGoals");


