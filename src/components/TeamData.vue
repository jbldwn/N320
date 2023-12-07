<template>
    <div class="member">
        <h2>{{ name }}</h2>
        <p>Role: {{ role }}</p>
        <div class="details">
            <p>Phone: {{ phone }}</p>
            <p>Email: {{ email }}</p>
            <p>Team: {{ team }}</p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
        }
    },
    props: {
        name: String,
        role: String,
        phone: String,
        email: String,
        team: String,
    },
}
</script>

<style scoped>
.ctrlPanel {
    width: 40%;

    display: flex;
    justify-content: space-between;

}

.member {
    background-color: lightcyan;
    padding: 15px;
    width: 45%;
    margin-bottom: 40px;
    border-radius: 30px;

    /* display: flex; */
    /* justify-content: space-between; */
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

.details {
    margin: 15px auto;
    background-color: lightskyblue;

    border-radius: 15px;
}
</style>