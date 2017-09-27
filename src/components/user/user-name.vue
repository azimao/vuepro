<template>
    <div>
        <div class="form-group">
            <label   class="col-sm-2 control-label">用户名:</label>
            <div class="col-sm-10">
                <input type="text" v-model="username"
                       class="form-control" v-on:change="userNameChange" :placeholder="placeholder">
            </div>
        </div>
    </div>
</template>

<style>

</style>

<script>
    export default{
        props: ['placeholder'],
        data:function () {
           return {
               username:''
           }
        },
        methods:{
            userNameChange(){
                this.$emit('updateUserName',this.username)
            }
        }
    }
</script>