<template>
    <div class="session">
        <div class="horizontal">
            <h1>{{ title }}</h1>
            <h4 class="schedule">{{ sDay }} at {{ leTime }}</h4>

        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {}
    },
    props: {
        id: Number,
        title: String,
        sTime: Number,
        sDay: String,
    }, 
}
</script>

<style>
h1 {
    font-size: 18px;
    color: dodgerblue;
    width: 75%;
    margin-bottom: 15px;
}

.session {
    border-bottom: 2px solid gray;
}
</style>