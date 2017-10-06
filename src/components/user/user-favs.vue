<template>
    <div>
        <div class="form-group">
            <label   class="col-sm-2 control-label">你的爱好:</label>
        <div class="col-sm-10">
            <input type="text" class="form-control" v-model="inputText">
            <table class="table table-border" v-if="showTable()">
               <thead>
                <th>类别1</th>
                <th>类别2</th>
               </thead>
                <tbody>
                    <tr v-for="fav in getFavs">
                        <td>{{fav.class1}}</td>
                         <td><a href="#" v-for="name in updateClass(fav.class2)">{{name}}</a></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    </div>
</template>

<style>
a{
    width: 20px;
    margin-left:8px;
}
</style>

<script>
    export default{
        data(){
            return {
                inputText:'',
                favs:[
                    {'class1':'web开发类','class2':['js','php','html','css']},
                    {'class1':'java编程类','class2':['java','asp','orcal','spring']},
                ]
            }
        },
        methods:{
            showTable(){
                if(this.inputText=='') return false;
                return true;
            },
            updateClass(name){
                return name.filter(function (v) {
                    return v.indexOf(this.inputText)>=0;
                }.bind(this))
            }
        },
        //计算属性
        computed:{
            getFavs(){
               return this.favs.filter(function (v) {
                   if(v.class2.filter(function (name) {
                        return name.indexOf(this.inputText)>=0;
                       }.bind(this)).length>0){
                       return true;
                   }
                   return false;

                }.bind(this))
//                indexOf(this.inputText)>=0
            }
        }
    }
</script>