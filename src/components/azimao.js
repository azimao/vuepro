/**
 * Created by azimao on 2017/10/27.
 */

export default {
    install(Vue){
        //自定义函数
        Vue.prototype.checkUserName = (value) => {
            if(value == '') return true;
            if(/\w{6,30}/.test(value)){
                return true;
            }
            return false;
        }

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
    }
}
