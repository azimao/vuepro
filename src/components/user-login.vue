<template>
    <div id="me">
        <h2 class="text-center" v-if="isadmin">管理员登录</h2>
        <h2 class="text-center" v-else>用户登录</h2>
        <user-name placeholder="请输入你的用户名" v-on:updateUserName="setUserName"></user-name>
        <user-password placeholder="请输入你的密码" v-on:updateUserPwd="setUserPassword"></user-password>
        <user-submit></user-submit>
        <button v-on:click="show">测试父组件</button>
    </div>
</template>

<style>
    @import "./../css/bootstrap.css";
</style>

<script>
    import username from './user/user-name.vue';
    import usersubmit from './user/user-submit.vue';
    import userpassword from './user/user-password.vue';

    export default{
        data(){
            return {
                username:'',
                password:'',
                isadmin:0
            }
        },
        methods:{
            setUserName(uname){
                this.username = uname;
            },
            setUserPassword(upwd){
                this.password = upwd;
            },
            show(){
                this.isadmin = !this.isadmin;
            }
        },
        components: {
            'user-name': username,
            'user-submit':usersubmit,
            'user-password':userpassword
        }
    }
</script>