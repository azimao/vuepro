##### 安装 node
- 直接取官网下载node 可以翻墙最好 
- 不行就换成淘宝镜像： 
```shell
$ npm install -g cnpm --registry=https://registry.npm.taobao.org
```

##### 安装 vue
- $ cnpm install -g vue-cli //安装vue
- $ vue init webpack azimao   //当前文件新建一个项目
- $ cnpm install //进项目安装依赖
- $ npm run dev  //运行项目

##### 
```vue
import Vue from "vue";

let my_name = {
    template: '<div id="me">{{name}}</div>',
	//es2015 写法 data：（）=>{}
    data:function () {
        return {name:'azimo'}
    }
 }

let param = {
    el:'.container',
    components:{
            'myname':my_name
        }
}
new Vue(param);
```

------------

##### 属性
- v-bind 动态绑定赋值
- v-on   点击监听   v-on:click 点击事件
- v-model  双向绑定
- ref   子组件索引
```vue
ref = "uname"  //父组件
this.$parent.$refs.uname.$data.username  //子组件获取值
$emit('父类函数'，参数)  //触发父类函数
wondow.location   //获取当前url
window.location.hash //获取设置页面标签值
```
- v-if  v-else  //条件判断
- v-for=" area in areas" v-bind="area.area_id"  //循环areas 绑定id

##### 异步加载
```vue
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
```

##### 自定义插件格式 
```vue
        //自定义组件
        Vue.directive('uname',{
           bind(){
               console.log('begin');
           },
            update(el,binding,vnode){
               //业务在插件里
               //binding.expression 获取到 showErrorLable
/*                if(/\w{6,30}/.test(el.value)){
                   vnode.context[binding.expression] = false;
                }else {
                    vnode.context[binding.expression] = true;
                }*/

                //业务在组件里
                vnode.context[binding.expression]();  //调用组件函数

                console.log(el);  //当前标签
                console.log(binding); //标签各种属性值
                console.log(vnode); //上线文对象
            }
        })
```
