<template>

    <div class="news-list">
        <div class="row">
            <div class="page-header" v-for="news in newslist">
                <!--<h2><router-link :to="{ name: 'newsdetail', params: { newsid: news.newsid} }">{{news.title}}</router-link> <small>{{news.pubtime}}</small></h2>-->
                <h2><router-link :to="{name:'newsdetail', params:{ newsid: news.newsid}}"> {{news.title}} </router-link> <small>{{news.pubtime}}</small></h2>

                <p>
                    {{news.desc}}
                </p>
            </div>

        </div>
    </div>

</template>
<style>

</style>
<script>
    export default{
        data(){
            return{
                newslist:[
                    {newsid:'1',pubtime:"2016-10-02",title:"QFix 探索之路 —— 手Q热补丁轻量级方案 ",desc:"QFix是手Q团队近期推出的一种新的Android热补丁方案，在不影响App运行时性能（无需插桩去preverify）的前提下有效地规避了"},
                    {newsid:'2',pubtime:"2016-10-01",title:"大规模排行榜系统实践及挑战 ",desc:" 如何支持业务接近接入，数万乃至几十万级排行榜自动化申请调度？选择什么样的存储引擎？怎样避免各业务资源抢占? "},
                    {newsid:'3',pubtime:"2016-09-28",title:"BitBucket Cloud新增Git大文件存储Beta支持 ",desc:"Git LFS背后的基本理念是将大型二进制文件存储在并行存储中，而Git库只包含到那些文件的轻量级引用"},
                    {newsid:'4',pubtime:"2016-09-30",title:"飞天进化，互联网、数据和计算的聚变 ",desc:"阿里巴巴技术委员会主席王坚发布的新书《在线》，被外界视作阿里巴巴技术体系总设计师的王坚出版的第一本著作，吸引了众多参会者的兴趣"}

                ]
            }
        }

    }
</script>
