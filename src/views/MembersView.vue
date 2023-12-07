<template>
    <h1>Member View</h1>
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
        <h1>Member Data</h1>
        <div class="memDisplay" v-if="freeMatches">

            <member-data v-for="member in freeMatches" :key="member.name" :name="member.name" :role="member.role"
                :phone="member.phone" :email="member.email" :team="member.team" @add-team="addTeam"></member-data>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            members: [
                {
                    id: 1,
                    name: "Chandler Bing",
                    phone: "123 123 1234",
                    email: "cBing@gmail.com",
                    role: 'Developer',
                    team: '',

                },
                {
                    id: 2,
                    name: "Joey Tribbiani",
                    phone: "321 321 4321",
                    email: "jtribby@gmail.com",
                    role: 'UI/UX',
                    team: '',

                },
                {
                    id: 3,
                    name: "Ross Geller",
                    phone: "222 333 4444",
                    email: "rgeller@gmail.com",
                    role: 'Developer',
                    team: '',

                },
                {
                    id: 4,
                    name: "Monica Bing",
                    phone: "123 123 1235",
                    email: "mbing@gmail.com",
                    role: 'Designer',
                    team: '',
                },
                {
                    id: 5,
                    name: "Rachel Green",
                    phone: "876 345 1678",
                    email: "rgreen@gmail.com",
                    role: 'UI/UX',
                    team: '',
                },
                {
                    id: 6,
                    name: "Phoebe Buffay",
                    phone: "678 908 5686",
                    email: "pbuff@gmail.com",
                    role: 'UI/UX',
                    team: '',
                },
                {
                    id: 7,
                    name: "Stacy Boling",
                    phone: "345 679 4212",
                    email: "sBoling@gmail.com",
                    role: 'Designer',
                    team: '',
                },
                {
                    id: 8,
                    name: "Jake Trimult",
                    phone: "443 665 7888",
                    email: "jtrim@gmail.com",
                    role: 'Developer',
                    team: '',
                },
                {
                    id: 9,
                    name: "Rose Greathouse",
                    phone: "345 567 9087",
                    email: "rgreat@gmail.com",
                    role: 'UI/UX',
                    team: '',
                },
                {
                    id: 10,
                    name: "Mindy Kellum",
                    phone: "555 666 7777",
                    email: "mKellum@gmail.com",
                    role: 'UI/UX',
                    team: '',
                },
                {
                    id: 11,
                    name: "Sarah Miller",
                    phone: "987 654 1234",
                    email: "smiller@gmail.com",
                    role: 'Developer',
                    team: '',

                },
                {
                    id: 12,
                    name: "Caroline Bender",
                    phone: "111 222 3456",
                    email: "cBend@gmail.com",
                    role: 'Designer',
                    team: '',
                },
            ],
            teamsList: [],
            freeMatches: [],
        }
    },
    methods: {
        filterMembers() {
            this.freeMatches = [];
            const selectedRole = document.getElementById("role").value;
            const availableMembers = this.members.filter((m) => !m.team);
            const availableMatches = availableMembers.filter((am) => am.role === selectedRole);
            availableMatches.forEach((m) => this.freeMatches.push(m));
        },
        addTeam(member) {
            /* add to team name to Member */
            const teamVal = document.getElementById("teamName").value;
            let teammate = this.members.find((m) => m.name === member);
            teammate.team = teamVal;

            /* Add member to array of teammates */
            this.teamsList.push(teammate)
            console.log(this.teamsList);
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
    /* background-color: red; */
    padding: 0 5vw;
    width: 90vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
}
</style>