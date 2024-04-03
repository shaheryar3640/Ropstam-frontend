<template>
    <NavBar></NavBar>
    <TheToaster v-if="toastAlert" :message="toastAlert"></TheToaster>
    <div class="container">
            <slot />
    </div>
</template>

<script>
    import TheToaster from "@/components/modals/TheToast.vue"
    import NavBar from "@/components/layout/NavBar.vue"
    export default {
        name : "HomeComponent",
        components:{
            NavBar,
            TheToaster
        },
        computed:{
            toastAlert(){
                return this.$store.state.toastAlert;
            }
        }
    }
</script>