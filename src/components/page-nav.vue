<template>
    <!-- <nav class="navbar navbar-default" role="navigation">
        <div class="container-fluid">
            <div class="navbar-header">
                <a class="navbar-brand" href="#">网站logo位置</a>
            </div>

            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav">
                    <li class="active"><a href="#/login">登录</a></li>
                    <li><a href="#/news">热点新闻</a></li>

                </ul>

            </div>
        </div>
    </nav> -->

 <nav class="navbar navbar-default" role="navigation">
    <form class="navbar-form navbar-left" role="search">
      <div class="form-group">
        <input type="text" class="form-control" placeholder="Search">
        <button class="btn"><a href="#/login">登录</a></button>
        <button class="btn"><a href="#/news">新闻</a></button>
      </div>
      <!-- <router-link :to="{ name: '/login', params: {} }">登录</router-link>
      <router-link :to="{ name: '/new', params: {} }">新闻</router-link> -->
      <button type="submit" class="btn btn-default">Submit</button>
    </form>
 </nav>
</template>
<style>
    @import "./../css/bootstrap.css";
</style>
<script>

    export default{
        data(){
            return{

            }
        }

    }
</script>
