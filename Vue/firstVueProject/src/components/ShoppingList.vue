<template>
    <div>
        <header>
          <h2>Shopping List</h2>
        </header>
        <input type="text" ref="inputValue" v-model="inputValue" @keyup.enter="addItem" />
        <p>{{ inputValue }}</p>
        <button @click="addItem" >Add Item</button>
        <ul>
            <li v-for="(item, i) in shoppingList" :key="i" >
              {{ item }}
              <button @click="deleteItem(i)">Delete</button>
              <button @click="editItem(i)">Edit</button>
            </li>
            
        </ul>
        <button @click="deleteItem(-1)">Delete All</button>
      </div>
</template>

<script>
export default {
  data(){
    return{
      inputValue:'',
      shoppingList:[],
    }
  },
  methods:{
    addItem(){
        if(this.inputValue != ''){
                this.shoppingList.push(this.inputValue);
            this.inputValue='';
        }
        console.log(this.shoppingList);
        
        this.$refs.inputValue.focus();
    },
    deleteItem(i){
      this.shoppingList=(i+1) ? this.shoppingList.filter((item, x)=> x!==i) : [];
    },
    editItem(i){
      this.shoppingList.forEach((item, k)=>{
        if(i==k){
          let newValue=prompt( `Current Value: ${item}`);
          this.shoppingList.splice(k,1,newValue)

        }
      })
    }
  }
}
</script>


<!-- 'scoped' limits stying to component -->
<style scoped>
h2{
    color: darkslateblue;
  }
  ul{
    width: 100%;
    margin: 0 auto;

  }
</style>