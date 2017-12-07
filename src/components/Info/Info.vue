<template>
    <el-container class='info'>
        <el-header class='header' style='height: 100px;'>
            <div class="even_title"><!-- 
                <i class="logo_img"></i>
                <span class="tit_name">天府软件园码农交流基地</span> -->
            </div>
            <div class="user_info">
                <div class="icon_box">
                    <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3469131571,740519505&fm=27&gp=0.jpg">
                </div>
                <span class="username">宋佳佳</span>
                <i class="el-icon-caret-bottom"></i>
            </div>
        </el-header>
        <el-container>
            <el-aside width="300px">
                <el-menu
                    default-active="2"
                    class="el-menu-vertical-demo"
                    @open="handleOpen"
                    @close="handleClose"
                    background-color="rgba(43,49,55,0.1)"
                    text-color="#fff"
                    active-text-color="#409EFF" style='border: none;text-align: left;'>
                    <el-menu-item index="1">
                        <i class="el-icon-view"></i>
                        <span slot="title">CSS</span>
                    </el-menu-item>
                    <el-menu-item index="2">
                        <i class="el-icon-mobile-phone"></i>
                        <span slot="title">移动端</span>
                    </el-menu-item>
                    <el-submenu index="3">
                        <template slot="title">
                            <i class="el-icon-tickets"></i>
                            <span>JavaScript</span>
                        </template>
                        <el-menu-item index="3-1">原生JS</el-menu-item>
                        <el-menu-item index="3-2">JQuery</el-menu-item>
                    </el-submenu>
                    <el-submenu index="4">
                        <template slot="title">
                            <i class="el-icon-menu"></i>
                            <span>框架</span>
                        </template>
                        <el-menu-item index="4-1">Vue</el-menu-item>
                        <el-menu-item index="4-2">React</el-menu-item>
                        <el-menu-item index="4-3">Angular</el-menu-item>
                    </el-submenu>
                </el-menu>
            </el-aside>
            <el-container>
                <el-main>
                    <router-view/>
                </el-main>
            </el-container>
        </el-container>
    </el-container>
</template>

<script>
export default {
    name: 'Info',
    data () {
        return {
        }
    },
    methods: {
        handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header{
    padding: 10px 20px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

}
.icon_box{
    width: 50px;
    height: 50px;
    margin-right: 10px;
    border-radius: 50%;
    overflow: hidden;
}
.icon_box>img{
    width: 100%;
}
.user_info{
    height: 100%;
    display: flex;
    align-items: center;
    margin-right: 30px;
    color: rgba(255,255,255,0.8);
}
.logo_img{
    display: inline-block;
    width: 170px;
    height:80px;
    background-image: url('http://r.photo.store.qq.com/psb?/V12H9F8V2kHZ7x/HeFW.SyShxVWVtTGaFrAaoF49McqJrON6Oe0D83FHHU!/r/dPMAAAAAAAAA');
}
.even_title{
    display: flex;
    align-items: flex-end;
}
.tit_name{
    color: rgba(255,255,255,0.8);
    font-size: 24px;
    letter-spacing: 2px;
}
.info{
    width: 100%;
    height: 100%;
    background: url('http://r.photo.store.qq.com/psb?/V12H9F8V2kHZ7x/nyT.W6Gt6KmEcpQyUa6i*iiT1HP5pTtuhqYGAk8YrAI!/r/dPMAAAAAAAAA');
    background-size: 100%;

}
.el-header, .el-footer {
    background-color: #24292e;
  }
  
  .el-aside {
    background-color: rgba(43,49,55,0.9);
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  .el-main {
    color: #333;
  }
 .el-container {
    background-color: rgba(43,49,55,0.8);
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
