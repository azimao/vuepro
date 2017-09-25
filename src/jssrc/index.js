import Vue from "vue";

import my_name from "../components/myage.vue";

let param = {
    el:'.container',
    components:{
            'myname':my_name
        }
}
new Vue(param);
