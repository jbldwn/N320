const app = Vue.createApp({
    methods: {
        getTodayDate() {
            today = today.toLocaleDateString();
            return today;
        }
    }
})