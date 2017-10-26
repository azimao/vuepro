<template>
    <div class="news-list">
        <div class="row">
            <div class="page-header">
                <h2> {{newsdetail.title}}  <small>{{newsdetail.pubtime}}</small></h2>
                <p>
                {{newsdetail.desc}}
                </p>
            </div>

        </div>
    </div>
</template>
<style>
     
</style>
<script>

    export default{
        created()
        {
            this.$http.post("http://localhost/shixin_php/index.php/Company/vue/news",{newsid:this.$route.params.newsid},{emulateJSON:true})
                    .then(function(res){
                        this.newsdetail=res.body;
                    },function(rs){
                    })
        },
        data(){
            return{
                newsdetail:{}
            }
        }
    }
</script>
