<template>
    <div class="loginBody">
        <div class="loginForm">
            <input placeholder="Enter your username here" type="text" name="username">
            <input placeholder="Enter your password here" type="password" name="password">
            <span class="login" v-on:click='toInfo'>Log in</span>
            <p class="wellTxt">What are your dreams?</p>
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
        toInfo: function(){
            this.$router.push('info');
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.loginForm{
    width: 100%;
    height: 100%;
    padding: 10px 40px;
    box-sizing: border-box;
    text-align: right;
    background: linear-gradient(rgba(0,0,0,1), rgba(0,0,0,0))
}
.loginForm input{
    width: 200px;
    height: 30px;
    padding: 0 10px;
    margin: 0 10px;
    border-radius: 4px;
    border: none;
    outline: none;
    color: #fff;
    background-color: rgba(255,255,255,0.2);
}
:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
    color: rgba(255,255,255,0.5); opacity:1; 
}

::-moz-placeholder { /* Mozilla Firefox 19+ */
    color: rgba(255,255,255,0.5);opacity:1;
}

.loginForm input:-ms-input-placeholder{
    color: rgba(255,255,255,0.5);opacity:1;
}

.loginForm input::-webkit-input-placeholder{
    color: rgba(255,255,255,0.5);opacity:1;
}
.login{
    color: #fff;
    cursor: pointer;
}
.loginBody{
    width: 100%;
    height: 100%;
    background-image: url('http://r.photo.store.qq.com/psb?/V12H9F8V2kHZ7x/YlvZMHDymmCuejUdkywnDUnGdm3BMt*Tai8evnxMNac!/r/dPIAAAAAAAAA');
    background-repeat: no-repeat;
}
.wellTxt{
    font-size: 100px;
    color: rgba(255,255,255,0.5);
    width: 500px;
    text-align: center;
    margin: 150px auto 0;
}
</style>
