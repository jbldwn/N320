<template>
    <h1>Team View</h1>
    <div class="team" v-for="team in teamsList">
        <h3>Team {{ team }}</h3>
        <div v-for="member in members" :key="member.name">
            <team-data v-if="member.team === team" :name="member.name" :role="member.role" :phone="member.phone"
                :email="member.email" :team="member.team"></team-data>

        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {}
    },
    emits: ["addTeam", "filterMembers"],
    props: {
        members: {
            name: String,
            role: String,
            phone: String,
            email: String,
            team: String
        },
        teamsList: Array,
        freeMatches: Array

    },
    methods: {
        teamCheck() {
            console.log("filtering by teamName");
        }
    }
}
</script>

<style scoped>
.team {
    width: 100%;
    background-color: lightblue;
    border-radius: 30px;
    padding: 15px 30px;
    margin-bottom: 25px;
}
</style>