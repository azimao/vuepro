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
                        <td>{{fav.class2}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    </div>
</template>

<style>

</style>

<script>
    export default{
        data(){
            return {
                inputText:'',
                favs:[
                    {'class1':'web开发类','class2':'js'},
                    {'class1':'编程类','class2':'java'},
                ]
            }
        },
        methods:{
            showTable(){
                if(this.inputText=='') return false;
                return true;
            }
        },
        //计算属性
        computed:{
            getFavs(){
               return this.favs.filter(function (v) {
                   if(v.class2.indexOf(this.inputText)>=0){
                       return true;
                   }
                   return false;

                }.bind(this))
            }
        }
    }
</script>