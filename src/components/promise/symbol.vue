<template>
    <div>

    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    },
    created(){
        this.getSymbol();
    },
    mounted(){},
    methods:{
        getSymbol(){
            let name = Symbol('name');
            let product = {
                [name]:'洗衣机',
                'price':799
            };
            Reflect.ownKeys(product);
            console.log(Reflect.ownKeys(product));
            let s = new Set();
            let a =1;
            s.add(a);
            s.add(a);
            console.log(s.size)
        }
    }
}
</script>