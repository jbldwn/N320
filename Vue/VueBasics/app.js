/* app initialized */
const app = Vue.createApp({
    // data: function(){}
    /* same as: */
    data() {
        // a function in an obj will ALWAYS RETURNS AN OBJ
        return {
            courseGoal1: 'Learn advanced javascript',
            courseGoal2: 'Learn Vue'
        }
    }
});

/* tie app to id on HTML page */
app.mount("#myGoals");


