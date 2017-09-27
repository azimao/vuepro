import Vue from "vue";

import userlogin from "./../components/user-login.vue";

let param = {
    el:'.container',
    components:{
            'user-login':userlogin,
        }
}
let myvue = new Vue(param);

//监听url
window.onhashchange=function () {
   if(window.location.hash = '#admin')
       myvue.$children['0'].$data.isadmin = true;
   else
       myvue.$children['0'].$data.isadmin = false;
}
