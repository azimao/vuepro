<template>
    <div>
        <div class="form-group">
            <label   class="col-sm-2 control-label">用户名:</label>
            <div class="col-sm-10">
                 <!--v-uname="showErrorLable"-->
                <input type="text" v-model="username"
                    v-uname="showLable"   class="form-control" v-on:change="userNameChange" :placeholder="placeholder">
                <lable v-if="showErrorLable" class="label label-danger">用户名不合法</lable>
            </div>
        </div>
    </div>
</template>

<style>

</style>

<script>
    export default{
        mounted(){

        },
        props: ['placeholder'],
        data:function () {
           return {
               username:'',
               showErrorLable:false,
           }
        },
        methods:{
            showLable(){
               if(this.checkUserName(this.username)){
                   this.showErrorLable = false;
               }else {
                   this.showErrorLable = true;
               }
            },
            userNameChange(){
                if (this.checkUserName(this.username)){
                    this.showErrorLable = false;
                } else {
                    this.showErrorLable = true;
                }

                this.$emit('childChange','username',this.username)
            }
        }
    }
</script>