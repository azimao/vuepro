<template>
    <div id="me">
        <h2 class="text-center" v-if="isadmin">管理员登录</h2>
        <h2 class="text-center" v-else>用户登录</h2>
        <user-name placeholder="请输入你的用户名"></user-name>
        <user-password placeholder="请输入你的密码"></user-password>
        <user-favs></user-favs>
        <user-area></user-area>
        <user-submit></user-submit>
        <!--<input v-on:click="show" type="button" value="测试父组件"/>-->
    </div>
</template>

<style>
    @import "./../css/bootstrap.css";
</style>

<script>
    import username from './user/user-name.vue';
    import userpassword from './user/user-password.vue';
    import userarea from './user/user-area.vue';
    import usersubmit from './user/user-submit.vue';
    import userfavs from './user/user-favs.vue';

    export default{
        //监测子组件
        mounted(){
            //循环子组件
           this.$children.forEach(function (cc) {
              cc.$on('childChange',this.setValue)
           }.bind(this))
        },
        //定义变量
        data(){
            return {
                username:'',
                password:'',
                userarea:0,
                isadmin:0,
            }
        },
        //处理函数
        methods:{
            setValue(key,value){
               this.$data[key] = value;
            },
            show(){
                console.log(this.$data)
                this.isadmin = !this.isadmin;
            }
        },
        //加载组件
        components: {
            'user-name': username,
            'user-password':userpassword,
            'user-area':userarea,
            'user-favs':userfavs,
            'user-submit':usersubmit,
        }
    }
</script>