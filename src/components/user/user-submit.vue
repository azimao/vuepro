<template>
    <div class="form-group">
        <div class="col-sm-offset-2 col-sm-10">
            <button type="button" v-on:click="test" class="btn btn-success">提交</button>
        </div>
    </div>
</template>

<style>

</style>

<script>
    export default{
        methods:{
            test(){
                alert(this.$parent.$data.username)
                alert(this.$parent.$data.password)
            }
        }
    }
</script>