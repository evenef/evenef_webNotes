<template>
  	<div class="article">
        <h1 class="title">{{this.title}}</h1>
        <div class="pub_info">
            <div class="user_info">
                <p class="creater">发表人：{{this.creater}}</p>
                <p class="date">发表时间：{{this.date}}</p>
            </div>
            <div class="about_edit">
                <div>
                    <el-button class='edit_btn' type="warning" plain>编辑</el-button>
                </div>
                <div>
                    <p>最近编辑人：{{this.lastEdit}}</p>
                    <p>编辑时间：{{this.lastDate}}</p>
                </div>
            </div>
        </div>
        <div class="content">
            <div class="text">{{this.text}}</div>
            <el-button type="primary">回复</el-button>
        </div>
        <ul class="reply_list" v-for='item in reply'>
            <li>
                <div>
                    <div>
                        <img src=''>
                    </div>
                    <p class="reply_name">{{item.repUser}}</p>
                </div>
                <div>{{item.text}}</div>
            </li>
        </ul>
  	</div>
</template>

<script>
import E from 'wangeditor'
export default {
    name: 'editor',
    data () {
        return {
            date: '2017-12-06',
            creater: '宋佳佳',
            lastDate: '21124124',
            lastEdit: '1242412',
            title: '测试标题1111111',
            text: 'Vue.js (读音 /vjuː/，类似于 view) 是一套构建用户界面的渐进式框架。与其他重量级框架不同的是，Vue 采用自底向上增量开发的设计。Vue 的核心库只关注视图层，它不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与单文件组件和 Vue 生态系统支持的库结合使用时，Vue 也完全能够为复杂的单页应用程序提供驱动。如果你是有经验的前端开发者，想知道 Vue.js 与其它库/框架的区别，查看对比其它框架。',
            reply: [
                {
                    repUser: '刘科峰',
                    icon: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3469131571,740519505&fm=27&gp=0.jpg',
                    repTime: '2017-12-07 18:00',
                    text: '测试回复1111111111'
                },
                {
                    repUser: '张川',
                    icon: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3469131571,740519505&fm=27&gp=0.jpg',
                    repTime: '2017-12-07 18:30',
                    text: '测试回复2222222222'
                },
                {
                    repUser: '唐玲',
                    icon: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3469131571,740519505&fm=27&gp=0.jpg',
                    repTime: '2017-12-07 20:00',
                    text: '测试回复33333333333'
                },
                {
                    repUser: '刘锐',
                    icon: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3469131571,740519505&fm=27&gp=0.jpg',
                    repTime: '2017-12-07 21',
                    text: '测试回复4444444444'
                },
                {
                    repUser: '刘科峰',
                    icon: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3469131571,740519505&fm=27&gp=0.jpg',
                    repTime: '2017-12-07 18:00',
                    text: '测试回复1111111111'
                },
                {
                    repUser: '刘科峰',
                    icon: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3469131571,740519505&fm=27&gp=0.jpg',
                    repTime: '2017-12-07 18:00',
                    text: '测试回复1111111111'
                }
            ]
        }
    },
    created: {
    },
    methods: {
    }
}
</script>

<style scope>
.title{
    font-size: 30px;
    color: #24292e;
    margin-bottom: 20px;
}

.article{
    width: 100%;
    height: 100%;
    padding: 20px;
    box-sizing: border-box;
    background-color: #fff;
    overflow-y: scroll;
}
.pub_info{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.user_info p,.about_edit p{
    color: #999;
    font-size: 12px;
    margin-bottom: 10px;
}
.about_edit{
    margin-right: 50px;
    display: flex;
}
.edit_btn{
    margin-right: 10px;
}
.content{
    margin: 30px 0;
}
.text{
    margin-bottom: 20px;
}
</style>
