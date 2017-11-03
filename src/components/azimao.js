/**
 * Created by azimao on 2017/10/27.
 */

export default {
    install(Vue){
        //验证文本框自带组件
        Vue.component("azimao-text",{
           template:"<dev><input type='text' class='form-control' v-model='textValue'/>" +
           "<lable v-if='showErrorLable' class='label label-danger'>用户名不合法</lable></dev>",
           data(){
                return {
                    textValue:""
                }
            },
            computed:{
             showErrorLable(){
                 if(/\w{6,30}/.test(this.textValue) || this.textValue == "" ){
                     return false;
                 }
                 return true;
             }
            },

        })

        // //验证文本框，自带组件
        // Vue.component("azimao-text",{
        //     template:" <div><input type='text' class='form-control'  v-model='textValue'/>" +
        //     "<label v-if='showErrorLable' class='label label-danger'>用户名不合法</label></div>",
        //     data(){
        //         return {
        //             textValue:""
        //         }
        //     },
        //     computed:{
        //         showErrorLable()
        //         {
        //             if(/\w{6,20}/.test(this.textValue) || this.textValue=="") {
        //                 return false;
        //             }
        //             return true;
        //         }
        //     }
        // })        //自定义函数

        Vue.prototype.checkUserName = (value) => {
            if(value == '') return true;
            if(/\w{6,30}/.test(value)){
                return true;
            }
            return false;
        }

        Vue.prototype.errorLabel = null;
        Vue.prototype.hasError = false;
        //自定义组件
        Vue.directive('uname',{
           bind(){
               let error = Vue.extend({
                   template:'<lable class="label label-danger">用户名不合法</lable>'
               });
               Vue.errorLable = (new error()).$mount().$el;
           },
            update(el,binding,vnode){
               //业务在插件里
               //binding.expression 获取到 showErrorLable
                if(/\w{6,30}/.test(el.value)){
                   // vnode.context[binding.expression] = false;
                    if(Vue.hasError){
                        el.parentNode.removeChild(Vue.errorLable);
                        Vue.hasError = !Vue.hasError;
                    }
                }else {
                    // vnode.context[binding.expression] = true;
                    if(!Vue.hasError){
                        el.parentNode.appendChild(Vue.errorLable);
                        Vue.hasError = !Vue.hasError;
                    }
                }

                //业务在组件里
                vnode.context[binding.expression]();  //调用组件函数

/*                console.log(el);  //当前标签
                console.log(binding); //标签各种属性值
                console.log(vnode); //上线文对象*/
            }
        })
    }
}
