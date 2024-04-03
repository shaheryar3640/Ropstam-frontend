<template>
    <div class="row">
        <div class="col-md-6 mx-auto" >
          <h2 class="mt-3">Add Category</h2>
            <div class="mt-3">
              <div class="form-group">
                <label for="name">Name</label>
                <input type="text" class="form-control" id="name" v-model="category.name">
                <div class="input-errors" v-for="error of v$.category.name.$errors" :key="error.$uid">
                  <div class="error-msg">{{ error.$message }}</div>
                </div>
              </div>
                <button type="submit" class="btn btn-primary mt-3" @click.prevent="updateCategory()">Update</button>
            </div>
        </div>
    </div>
</template>
<script>
  import useValidate from '@vuelidate/core'
  import { required,maxLength,minLength } from '@vuelidate/validators'
  export default {
    name: 'EditCategory',
    data(){
      return {
        v$: useValidate(),
        isMounted:false,
        category: {
          name: ''
        }
      }
    },
    validations() {
      return {
        category: {
          name: { required,minLength: minLength(2),maxLength: maxLength(255) }
        },
      }
    },
    mounted(){
      this.editCategory();
    },
    methods: {
      editCategory(){
        const id = this.$route.params.id;
        this.$store.dispatch('category/editCategory', id)
      .then((response) =>{
        console.log(response)
        this.category.name = response.name
      })
      .catch((error)=>{
        this.$router.push('/categoryList');
        console.log(error)
      })
    },
    updateCategory(){
      let payload = {
        name : this.category.name,
        id : this.$route.params.id
      };
      this.v$.$validate();
      if(!this.v$.$error){
        this.$store.dispatch('category/updateCategory',payload)
        .then(() => {
          this.$router.push('/categoryList');
        })
        .catch((error) => {
          console.log(error)
        })
      }
    }

  }
    
  }
</script>
<style>
  .input-errors{
    color: red;
  }
</style>