<template>
    <div class="loginBody">
        <div class="loginForm hide">
            <div class="inpBox">
                <input placeholder="Enter your username here" type="text" name="username">
                <input placeholder="Enter your password here" type="password" name="password">
            </div>
            <span class="login btn">Log in</span>
            <span class="cancel btn">cancel</span>
        </div>
        <div class="wellcome">
            <p class="wellTxt">What are you thinking about now?</p>
            <div class="btnBox">
                <button v-on:click='showLogin'>Log in</button>
                <button v-on:click='dontLogin'>Don't log in</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Login',
    data () {
        return {
            msg: 'Welcome to Your Vue.js App'
        }
    },
    methods: {
        showLogin: function(){
            
        },
        dontLogin: function(){

            window.close()
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.loginForm{
    width: 100%;
    height: 100%;
    padding-top: 200px;
    box-sizing: border-box;
    text-align: center;
    background: linear-gradient(rgba(0,0,0,1), rgba(0,0,0,0))
}
.loginForm input{
    width: 200px;
    height: 30px;
    padding: 0 10px;
    border-radius: 4px;
    border: none;
    outline: none;
    background-color: rgba(255,255,255,0.5)
}
.inpBox{
    width: 500px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
}
.btn{
    display: block;
    cursor: pointer;
}
.login{
    margin-top: 50px;
    font-size: 50px;
    color: rgba(255,255,255,0.8);
}
.cancel{
    margin-top: 20px;
    font-size: 40px;
    color: rgba(255,255,255,0.5);
}
.loginBody{
    width: 100%;
    height: 100%;
    background-image: url('https://timgsa.baidu.com/timg?image&quality=80&size=b10000_10000&sec=1512461707&di=f9e60b6c0a8ef1af610a993da99299dd&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F7%2F537d5bfe2841e.jpg');
    background-repeat: no-repeat;
}
.hide{
    display: none;
}
.wellcome{
    width: 100%;
    height: 100%;
    padding-top: 200px;
    box-sizing: border-box;
    text-align: center;
}
.wellTxt{
    font-size: 70px;
    color: #fff;
    width: 500px;
    text-align: center;
    margin: 0 auto;
    text-shadow: 2px 2px 2px #000;
}
.btnBox{
    display: flex;
    justify-content: space-between;
    width: 300px;
    margin: 30px auto 0;
}
.btnBox button{
    padding: 10px 30px;
    border-radius: 4px;
    border: none;
    outline: none;
    font-size: 20px;
    background-color: rgba(255,255,255,0.7)
}
</style>
