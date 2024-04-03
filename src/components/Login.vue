<template>
    
        <div class="col-md-6 mx-auto">
          <form class="login-content animate" @submit.prevent="handleSubmit">
            <div class="imgcontainer">
              <h2>Login</h2>
            </div>
            <div class="alert alert-danger" v-if="error">
              {{error}}
            </div>
        
            <div class="container">
              <label for="uname"><b>Email</b></label>
              <input type="email" placeholder="Enter Email" v-model="email" name="email" required>
              <div v-if="emailError" class="error-message">{{emailError}}</div>
        
              <label for="psw"><b>Password</b></label>
              <input type="password" placeholder="Enter Password" v-model="psw" name="psw" required>
              <div v-if="passwordError" class="error-message">{{passwordError}}</div>
                
              <button type="submit">Login</button>
              <div class="signup-link">
                <router-link to="/register">Sign up</router-link>
              </div>
            </div>
          </form>
        </div>
   
  </template>

<script>
    // import axios from "axios";
  export default {
    name: 'LoginForm',
    data(){
      return {
        email:'',
        psw:'',
        emailError: false,
        passwordError: false,
        error:''
      }
    },
    computed: {
      loggedIn: function() {
        return this.$store.state.login.token;
      }
    },
    mounted() {
      if (this.loggedIn) {
        this.$router.push('/');
      }
    },
    methods:{
      handleSubmit(){
        this.emailError = '';
        this.passwordError = '';
        this.error = '';

        if (!this.email) {
          this.emailError = 'Email is Required';
        }
        if (!this.psw) {
          this.passwordError = 'Password is Required';
        }

        if (this.emailError || this.passwordError) {
          return;
        }
        const payload = {
          'email' : this.email,
          'password' : this.psw
        };
        this.$store.dispatch('login/login',payload)
        .then((response) => {
          console.log(response,'asas')
          this.$router.push('/');
        })
        .catch(error => {
          if(error.response.data?.data?.email){
            this.emailError = error.response.data.data.email[0];
          }
          if(error.response.data?.data?.password){
            this.passwordError = error.response.data.data.password[0];
          }
          if(error.response.data?.message){
            this.error = error.response.data.message;
          }
            console.error("Error:", error.response);
          
        });
      }
    }
  }
</script>

<style scoped>
  .signup-link {
    text-align: right; /* Align the sign-up link to the right */
    margin-top: 10px; /* Add margin for spacing */
  }
  .error-message {
    color: red;
    font-size: 14px;
  }
  input[type=email], input[type=password] {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    box-sizing: border-box;
  }

/* Set a style for all buttons */
button {
  background-color: #04AA6D;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
}

button:hover {
  opacity: 0.8;
}

/* Extra styles for the cancel button */


/* Center the image and position the close button */
.imgcontainer {
  text-align: center;
  margin: 24px 0 12px 0;
  position: relative;
}



.container {
  padding: 16px;
}

span.psw {
  float: right;
  padding-top: 16px;
}


.login-content {
  background-color: #fefefe;
  margin: 5% auto 15% auto; 
  border: 1px solid #888;
  width: 80%;
}



/* Add Zoom Animation */
.animate {
  -webkit-animation: animatezoom 0.6s;
  animation: animatezoom 0.6s
}

@-webkit-keyframes animatezoom {
  from {-webkit-transform: scale(0)} 
  to {-webkit-transform: scale(1)}
}
  
@keyframes animatezoom {
  from {transform: scale(0)} 
  to {transform: scale(1)}
}

/* Change styles for span and cancel button on extra small screens */
@media screen and (max-width: 300px) {
  span.psw {
     display: block;
     float: none;
  }
}
  </style>
