<template>
  	<div class="edit">
  		<h1 class="pub_icon">
  			<i class="el-icon-edit"></i>
  			发表新贴
  		</h1>
  		<div class="plane">
			<span class="tit">主题：</span>
			<el-input class='title_inp' v-model="input" placeholder="请输入主题"></el-input>
  		</div>
  		<div class="plane">
			<span class="tit">正文：</span>
			<div id="editorElem" style="text-align:left;"></div>
  		</div>
   		<el-button type="primary" v-on:click="getContent">发表</el-button>
  	</div>
</template>

<script>
import E from 'wangeditor'
export default {
      name: 'editor',
      data () {
        return {
          editorContent: '',
          input: ''
        }
      },
      methods: {
        getContent: function () {
            console.log(this.editorContent)
        }
      },
      mounted() {
        var editor = new E('#editorElem')
        editor.customConfig.onchange = (html) => {
          this.editorContent = html
        }
        editor.create()
      }
    }
</script>

<style>
.pub_icon{
	font-size: 20px;
	color: #24292e;
	margin-bottom: 30px;
}
.edit{
	width: 100%;
	height: 100%;
	padding: 20px;
	box-sizing: border-box;
	background-color: #fff;
}
.plane{
	margin-bottom: 20px;
}
.tit{
	display: inline-block;
	margin-bottom: 10px;
}
</style>
