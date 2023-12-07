<template>
    <div class="member">
        <div>
            <h2>{{ name }}</h2>
            <p>Role: {{ role }}</p>
            <div v-if="visibleData">
                <p>Phone: {{ phone }}</p>
                <p>Email: {{ email }}</p>
                <p>Team: {{ team }}</p>
            </div>
        </div>
        <div class="ctrlPanel">
            <button v-if="!team" @click="addTeam(name)">Join Team</button>
            <button @click="toggleDetails">{{ visibleData ? "Hide" : "Show" }} details</button>
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            visibleData: false
        }
    },
    props: {
        name: String,
        role: String,
        phone: String,
        email: String,
        team: String,
    },
    methods: {
        toggleDetails() {
            this.visibleData = !this.visibleData;
        },
        addTeam(member) {
            this.$emit('add-team', member);
        }
    }
}
</script>

<style scoped>
.ctrlPanel {
    width: 40%;

    display: flex;
    justify-content: space-between;

}

.member {
    background-color: lightblue;
    padding: 15px;
    width: 45%;
    margin-bottom: 40px;

    display: flex;
    justify-content: space-between;
}

button {
    background-color: cadetblue;
    border: none;
    color: white;
    height: 35px;
    padding: 0 15px;
    border-radius: 30px;
}

button:hover {
    background-color: rgb(65, 104, 106);
}

h2 {
    margin: 0;
}

p {
    margin: 0 30px;
}
</style>