import Vue from "vue";

import userlogin from "./../components/user-login.vue";
import pagenav from "./../components/page-nav.vue";
import newslist from "./../components/news-list.vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);  //全局使用插件


const routes = [
  {path:'/news',component:newslist},
  {path:'/login',component:userlogin},
];

Vue.component('page-nav', pagenav);  //全局模板

const routerConfig = new VueRouter({
      routes:routes   //可以直接简写成 routes
});

let param = {
    el:'.container',
    router:routerConfig,
}

let myvue = new Vue(param);
// let param = {
//     el:'.container',
//     components:{
//             'user-login':userlogin,
//             'page-nav':pagenav,
//             'news-list':newslist,
//         }
// }
// let myvue = new Vue(param);
//
// //监听url
// window.onhashchange=function () {
//    if(window.location.hash = '#admin')
//        myvue.$children['0'].$data.isadmin = true;
//    else
//        myvue.$children['0'].$data.isadmin = false;
// }
