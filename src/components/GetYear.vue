<template>
    <div>
        <span>现在是公元：</span><span>{{year}}年</span>
    </div>
</template>
<script>
export default {
   data(){
       return{
        year:this.year
       }
   },
   mounted(){
       this.getTime();
   },
   methods:{
       getTime(){
           let date = new Date();
           this.year = date.getFullYear()
       }
   } 
}
</script>
<style scoped>

</style>