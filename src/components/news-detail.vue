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
            this.$http.get("http://localhost:9090/news.php?newsid="+this.$route.params.newsid)
                    .then(function(res){
                        this.newsdetail=res.body;
                    },function(rs){})
        },
        data(){
            return{
                newsdetail:{}
            }
        }
    }
</script>
