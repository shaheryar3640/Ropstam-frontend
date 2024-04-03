<template>
  <div></div>
</template>
<script>
import { useToast } from "vue-toast-notification";
export default {
    name: 'TheToast',
    props:['message'],
    mounted(){
        const $toast = useToast();
        if(this.message.status == 200){
            let instance = $toast.success(this.message.message);
            this.$store.commit('toastAlert',false)
            setTimeout(() => {
                instance.dismiss();
            }, 3000);
        }
        else{
            let instance = $toast.error(this.message.error);
            this.$store.commit('toastAlert',false)
            setTimeout(() => {
                instance.dismiss();
            }, 3000);
        }
    },

}
</script>