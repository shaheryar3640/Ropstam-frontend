import { createStore } from 'vuex'
import login from './modules/login';
import car from './modules/car';
import category from './modules/category';


export default createStore({
  modules:{
      login,
      car,
      category
  },
  state:{
    toastAlert:false,
  },
  getters:{},
  mutations:{
    toastAlert(state, toastAlert){
        state.toastAlert = toastAlert;
    }
  },
  actions:{},
});