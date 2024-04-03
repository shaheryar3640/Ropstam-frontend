<template>
    <div class="container-fluid">
        <nav class="navbar navbar-light bg-light">
            <div class="container-fluid">
              <div class="navbar-header">
                <router-link class="navbar-brand" to="/">Home</router-link>
                <router-link class="navbar-brand" to="/CategoryList">Category</router-link>
              </div>
              <div class="navbar-nav ml-auto">
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit" @click.prevent="logOut">Logout</button>
              </div>
            </div>
          </nav>
          
    </div>
</template>

<script>
    export default {
        name : "navBar",
        methods:{
            logOut(){
                this.$store.dispatch('login/logOut')
                .then(() => {
                    this.$router.push('/login')
                })
                
            }
        }
    }
</script>
<style>
    .navbar-brand:hover {
      color: #007bff; /* Change to your desired hover color */
    }
  </style>