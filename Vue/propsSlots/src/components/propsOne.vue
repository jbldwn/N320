<template>
    <h1>I love {{ who }}</h1>
    <p>{{ greeting }} {{ myVue }}</p>
    <p>{{ msg }}</p>
</template>
<script>
export default{
    data(){
        return{

        }
    },
    props:['greeting', 'who', 'myVue', 'msg']
}
</script>
<style></style>