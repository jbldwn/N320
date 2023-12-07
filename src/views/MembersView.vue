<template>
    <h1>Member Search</h1>
    <div>
        <form>
            <input id="teamName" type="text" placeholder="Team Name">
            <select id="role">
                <option selected disabled>Choose Role...</option>
                <option value="Developer">Developer</option>
                <option value="Designer">Designer</option>
                <option value="UI/UX">UI/UX</option>
            </select>
            <button @click.prevent="filterMembers">submit</button>
        </form>
        <h1>Available Matches</h1>
        <div class="memDisplay" v-if="freeMatches">

            <member-data v-for="member in freeMatches" :key="member.name" :name="member.name" :role="member.role"
                :phone="member.phone" :email="member.email" :team="member.team" @add-team="addTeam"></member-data>
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
        filterMembers() {
            this.$emit('filterMembers');
            // this.freeMatches = [];
            // const selectedRole = document.getElementById("role").value;
            // const availableMembers = this.members.filter((m) => !m.team);
            // const availableMatches = availableMembers.filter((am) => am.role === selectedRole);
            // availableMatches.forEach((m) => this.freeMatches.push(m));
        },
        addTeam(member) {
            this.$emit('addTeam', member);
        }
    }
}

</script>

<style scoped>
form {
    margin: 0 30px;
    display: flex;
    align-items: start;
    justify-content: space-evenly;

    flex-direction: column;
}

.memDisplay {
    padding: 0 5vw;
    width: 90vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
}
</style>