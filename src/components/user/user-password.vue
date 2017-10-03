<template>
    <div>
        <div class="form-group">
            <label   class="col-sm-2 control-label">密码:</label>
            <div class="col-sm-10">
                <input type="text" v-model="password"
                       class="form-control" v-on:change="userPasswordChange"  :placeholder="placeholder">
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
                password: ''
            }
        },
        methods:{
            userPasswordChange(){
                this.$emit('childChange','password',this.password)
            }
        }
    }
</script>