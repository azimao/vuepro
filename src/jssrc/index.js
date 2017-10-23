import Vue from "vue";

// import userlogin from "./../components/user-login.vue";
import pagenav from "./../components/page-nav.vue";
// import newslist from "./../components/news-list.vue";
import newsdetail from "./../components/news-detail.vue";
import VueRouter from "vue-router";
import VueResource from "vue-resource";

Vue.use(VueRouter);  //全局使用插件
Vue.use(VueResource);  //全局使用插件

const userlogin=r=>{
 require.ensure([],()=>{
 r(require("./../components/user-login.vue"));
 })

 };
 const newslist=b=>{
 require.ensure([],()=>{
 b(require("./../components/news-list.vue"));
 })

 };


const routes = [
  {path:'/',component:newslist},
  {path:'/news',component:newslist,name:'newslist'},
  {path:'/news/:newsid',component:newsdetail,name:':newsdetail'},
  {path:'/login',component:userlogin,name:'userlogin'},
];

Vue.component('page-nav', pagenav);  //全局模板

const routerConfig = new VueRouter({
      routes:routes   //可以直接简写成 routes
});

let param = {
    el:'.container',
    router:routerConfig,
    mounted(){

      this.$http.post('http://www.shixin_dev.net/Company/list/companyGroup',{com_id:'022169'},{emulateJSON:true})
      .then(
          function(res){
            console.log(res.body)
            // console.log(res.body.data)
          },
          function(res){

          }
      );
    }
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
