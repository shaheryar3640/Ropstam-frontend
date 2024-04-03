<template>
    <div class="row">
        <div class="col-md-8 mx-auto" v-if="isMounted">
          <h2 class="mt-3">Add Car</h2>
            <div class="mt-3">
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="title">Color</label>
                    <input type="text" class="form-control" id="color" v-model="car.color">
                    <div class="input-errors" v-for="error of v$.car.color.$errors" :key="error.$uid">
                      <div class="error-msg">{{ error.$message }}</div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="title">Model</label>
                    <input type="text" class="form-control" id="model" v-model="car.model">
                    <div class="input-errors" v-for="error of v$.car.model.$errors" :key="error.$uid">
                      <div class="error-msg">{{ error.$message }}</div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="title">Registeration No</label>
                    <input type="text" class="form-control" id="registration_no" v-model="car.registration_no">
                    <div class="input-errors" v-for="error of v$.car.registration_no.$errors" :key="error.$uid">
                      <div class="error-msg">{{ error.$message }}</div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="title">Make</label>
                    <input type="text" class="form-control" id="make" v-model="car.make">
                    <div class="input-errors" v-for="error of v$.car.make.$errors" :key="error.$uid">
                      <div class="error-msg">{{ error.$message }}</div>
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <label for="category">Category</label>
                  <select class="form-control" id="category" v-model="car.category_id">
                    <option v-for="category in categories" :key="category.id" :value="category.id">{{ category.name }}</option>
                  </select>
                  <div class="input-errors" v-for="error of v$.car.category_id.$errors" :key="error.$uid">
                    <div class="error-msg">{{ error.$message }}</div>
                  </div>
                </div>
              </div>
                <button type="submit" class="btn btn-primary mt-3" @click.prevent="addCar()">Submit</button>
            </div>
        </div>
    </div>
</template>
<script>
  import useValidate from '@vuelidate/core'
  import { required} from '@vuelidate/validators'
  import { mapState } from 'vuex';
  export default {
    name: 'AddFeedback',
    data(){
      return {
        v$: useValidate(),
        isMounted:false,
        car: {
          color: '',
          category_id: null,
          make: '',
          model: '',
          registration_no: '',
        }
      }
    },
    validations() {
      return {
        car: {
          color: { required },
          category_id: { required },
          make: { required },
          model: { required },
          registration_no: { required },
        },
      }
    },
    computed: {
      ...mapState({
        categories: state => state.category.category,
      }),
    },
    mounted(){
      this.getAllCategories();
    },
    methods: {
      getAllCategories() {
        this.$store.dispatch('category/getAllCategory')
        .then(() =>{
          this.isMounted = true;
        })
      },
      addCar(){
        this.v$.$validate();
        console.log(this.v$.$error,this.car)
        if(!this.v$.$error){
          this.$store.dispatch('car/storeCar',this.car)
          .then(() => {
            this.$router.push('/');
          })
        }
      }
    }    
  }
</script>