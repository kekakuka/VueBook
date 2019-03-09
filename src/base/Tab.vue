<template>
    <div class="footer">
    <router-link  to="/home"><i class="iconfont icon-shouye"></i>
        <span>Home</span>
    </router-link>
    <router-link  to="/list"><i class="iconfont icon-yanchurili"></i>
       <span>List</span>
    </router-link>
    <router-link   to="/add"><i class="iconfont icon-jiajianzujianjiahao"></i>
       <span>Add</span>
    </router-link>
    <router-link  to="/collect"><i  class="iconfont icon-shoucang"></i>
      <span>Like</span>
    </router-link></div>
</template>


<style scoped lang="less">
    .footer{
        background-color: white;
        border-top:1px gold solid ;
        position: fixed;
        left: 0;
        bottom: 0;
        height: 50px;
        width: 100%;
        a{
            display: flex;
            flex-direction: column;
           float: left;
            width: 25%;
            height: 100%;
            align-items: center;
color: gold;
        }
        a.router-link-active{
            color: red;
        }
    }

</style>
