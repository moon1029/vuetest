<template>
    <div>
        <span>现在是公元：</span><span>{{year}}年</span>
    </div>
</template>
<script>
import axios from 'axios'
import api from '../api/index'
export default {
   data(){
       return{
        year:this.year
       }
   },
   created(){
       this.getWarningCount()
   },
   mounted(){
       this.getTime();
   },
   methods:{
       getTime(){
           let date = new Date();
           this.year = date.getFullYear()
       },
       getWarningCount(){
           api.getWarningCount()
           .then((res)=>{
               console.log(res.data)
           })
    //     axios.get('/v1/equip/listImsiInfo').then((res)=>{
    //         console.log(res.data)
    //     })
       }
   } 
}
</script>
<style scoped>

</style>