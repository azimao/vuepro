<style>
    #myage{
        color: red;
    }
</style>

<template>
    <div id="myage">my age is{{value}}</div>
</template>

<script>
    export default {
//        data:()=>{
//            return {age:'13'}
//        }
       props:['value']
    }
</script>
