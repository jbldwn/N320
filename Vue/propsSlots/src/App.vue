

<template>
  <h1>Props and Slots</h1>
  <div>
    <props-one :greeting="greeting" :who="who" :myVue="myVue" msg="Props are awesome!"></props-one>
  </div>
</template>

<script>
export default{
  data(){
    return{
      greeting: 'hello',
      who: 'Vue',
      count: 1,
      myVue: 'Vue.js'
    }
  }
}
</script>


<style scoped>
</style>
