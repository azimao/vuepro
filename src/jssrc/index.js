import Vue from "vue";

import userlogin from "./../components/user-login.vue";
import pagenav from "./../components/page-nav.vue";
import newslist from "./../components/news-list.vue";

let param = {
    el:'.container',
    components:{
            'user-login':userlogin,
            'page-nav':pagenav,
            'news-list':newslist,
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
