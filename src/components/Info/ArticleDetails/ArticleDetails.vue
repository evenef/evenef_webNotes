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
        <div>
            <ul class="reply_list">
                <li class="rep_item" v-for='(item, index) in reply'>
                    <div class="rep_info">
                        <div class="rep_user">
                            <div class="rep_icon">
                                <img v-bind:src='item.icon'>
                            </div>
                            <p class="reply_name">{{item.repUser}}</p>
                        </div>
                        <div class="rep_txt">
                            <p>{{item.text}}</p>
                            <p>{{item.text}}</p>
                            <p>{{item.text}}</p>
                            <p>{{item.text}}</p>
                            <p>{{item.text}}</p>
                            <p>{{item.text}}</p>
                            <p>{{item.text}}</p>
                            <p>{{item.text}}</p>
                            <p>{{item.text}}</p>
                            <p>{{item.text}}</p>
                            <p>{{item.text}}</p>
                        </div>
                    </div>
                    <div class="time_line">
                        <span>{{index + 1}}楼</span>
                        <span>{{item.repTime}}</span>
                        <span class="repBtn">回复</span>
                    </div>
                </li>
            </ul>
            <div class="page-block">
                <el-pagination
                  :current-page="1"
                  :page-size="10"
                  layout="total, prev, pager, next, jumper"
                  :total="reply.lenth">
                </el-pagination>
            </div>
        </div>
  	</div>
</template>

<script>
export default {
    name: 'editor',
    data () {
        return {
            date: '2017-12-06 18:00',
            creater: '宋佳佳',
            lastDate: '2017-12-08 19:00',
            lastEdit: '宋佳佳',
            title: '测试标题1111111',
            text: '他清晰地记得，六岁那年夏天的那个傍晚，当他把一条巴掌大的草鱼捧到母亲面前时，母亲眼里第一次出现了一种陌生的光。他甚至觉得，他在母亲眼里一定是突然有了地位的，这种感觉在随后下地干活回来的父亲和两位哥哥眼里也得到了验证。他有些受宠若惊。此前，他的生活就是满村子蹿，上树掏鸟窝，扒房檐偷瓜摘桃。因此，每天的饭都没准时过，啥时肚子饿了回家吃饭，都要先挨上父亲或母亲的一顿打才能挨着饭碗的边儿。那天不一样，母亲把双手在围裙上擦了又擦。母亲终于接过那条鱼时，他忽然有一点点失望，那条本来大得超出他意料的鱼，在母亲的双手之间动弹时，竟然显得那么瘦小。准确地说，在那之前他没吃过鱼，唇齿间也回荡不起勾涎引谗的味道。他相信两个哥哥应该也极少尝过这东西——在母亲的安排下，他们手忙脚乱地争抢母亲递过的准备装豆腐的瓷碗。豆腐，是跟年联系在一起的东西了。天！为了那条鱼，母亲要舀一瓷碗的黄豆种子去换半瓷碗的豆腐来搭配。隐约的，他有了美味的概念，还有慢慢浓起来的期待。父亲坐在灶前看着火苗舔着锅底，一边简单地埋怨了几句，似乎是嫌母亲把鱼洗得太干净了，没了鱼腥味。这已经是意外里的意外了，平日里，父亲一个礼拜可能也就说这么一句话。父亲埋怨时母亲正在把那条鱼放进锅里，她轻手轻脚，似乎开了膛破了肚的草鱼还会有被烫痛的感觉。父亲笑了笑，带着点儿嘲意。母亲嗔怪着说，你笑什么笑！鱼真的还没死，还在锅里游呢。说着，母亲还掀了锅盖让父亲看。父亲保持着笑意，不愿起身母亲拿着装了葱段蒜沫的碗，就那么站着等水烧开。他则坐在桌前，看这一切时他是不是双手托着腮？他忘了。反正所有的记忆都是那条鱼，和围绕着那条鱼而产生的梦一般陌生的气息。那天什么活都不用他干，他是这顿美味的缔造者，可以游手好闲。父母的举动让他觉得他有这个资格。在豆腐到来时，母亲甚至都没来得及埋怨一下一贯喜欢缺斤短两的吴豆腐贩子，因为豆腐马上就被切成块下了锅。美味，带着很多的迫不及待，还有一点点的张皇。张皇什么呢？鱼都在锅里了，它还能游回村头那条沟里去？不过这种张皇让他有点熟悉，在沟里捉到鱼时他也这么心慌来着，因为连他自己都不相信，那条沟里竟然会有鱼。来不及细细回味了，豆腐一下锅，屋子里忽然鲜香扑鼻。他是第一次知道，鱼的味道原来是这样的，新鲜得让人稍稍发晕。在鱼汤从锅里到上桌之间，他拼命地扇动鼻翼，有些贪婪地往肺里装这些味道。他相信装得越多，可供回味的时间就越长。至于那锅鱼汤具体是什么滋味，他倒完全不记得哪怕一点细节。因为全家吃饭喝鱼汤的状态都有些卤莽，只有嘴唇和汤接触的呼呼声，一碗接一碗时勺子与锅碰撞的叮当响声，还有一口与另一口之间换气时隐约的急促。那天饭桌上的气氛也不一样，一家人习惯的默不做声完全没了踪影，父亲开口谈天气了，两个哥哥则说了今年可能的收成。而母亲，只是嘴含笑意，一遍又一遍地给大家盛汤。最后，父亲说了一句有点儿没头没脑的话，他说三子该上学了。他就叫三子。如今回想起来，对鱼汤食不知味的原因应该就是这句话。两个哥哥没进过一天学校的大门。现在到了他三子，父亲说他该上学了。该，就是要，快要的意思。他忘了两个哥哥投过来的眼神的内容，他忘了鱼汤是什么味道，他忘了那个晚上一切的细节。他离美味的书面意思越来越近。但是，他知道美味的真正意思并不是之后的上学，仍然是有鱼的那天晚上——两个哥哥忽然就饱了，先后离开桌子回屋睡觉，可是鱼汤每个人起码还可以盛两碗。他们没解释为什么，也不用解释，地里的活要起早贪黑，否则这种鱼加豆腐的美味只能还是好多年享受一次。父亲愣了愣，恢复了以往的铁嘴铜牙的表情。母亲端着碗，出神，她似乎用眼神示意过父亲的口不择言，但是现在她卸去了笑容，朝着屋外黑乎乎的夜空，一直出神。可是羊要进圈，牛要喂草，猪还要吃食。全家都这么愣着不能解决一点问题。他起身去做，也只有他，还有心情做。坐在灶前添柴火煮猪食时，已经是最后一项了，他刚把火点着，第二把柴火他就抓着了一个粘粘软软的东西，凑到灶前的火光里一看，是那条鱼。从锅里蹦到地面，它显然已经超越了极限。现在，它早已死了，只是眼里还闪着一丝诡异的光。“他”，是我的一个兄弟，绰号老牛。关于美味的一些细节，你可以向他求证。不过有一点我可以保证，这种美味，不是每个人都有机会能尝得到的',
            reply: [
                {
                    repUser: '刘科峰wegewherjrregerherhrt',
                    icon: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3469131571,740519505&fm=27&gp=0.jpg',
                    repTime: '2017-12-07 18:00',
                    text: '测试回复1111111111测试回复1111111111测试回复1111111111测试回复1111111111测试回复1111111111测试回复1111111111测试回复1111111111测试回复1111111111测试回复1111111111测试回复1111111111测试回复1111111111测试回复1111111111测试回复1111111111测试回复1111111111测试回复1111111111测试回复1111111111测试回复1111111111测试回复1111111111测试回复1111111111测试回复1111111111测试回复1111111111'
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
.article{
    width: 100%;
    height: 100%;
    padding: 40px 100px;
    box-sizing: border-box;
    background-color: #fff;
    overflow-y: scroll;
}
.title{
    font-size: 30px;
    color: #24292e;
    margin-bottom: 20px;
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
    margin-bottom: 40px;
}
.reply_list{
    margin-top: 100px;
}
.rep_item{
    padding: 30px 0 6px 0;
    border-bottom: 1px solid #e5e5e5;
}
.rep_item:first-child{
    border-top: 1px solid #e5e5e5;
}
.rep_info{
    display: flex;
}
.rep_user{
    width: 130px;
    text-align: center;
    margin-right: 20px;
}
.reply_name{
    width: 90%;
    margin: 0 auto;
    font-size: 12px;
    color: #409EFF;
    cursor: pointer;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.reply_name:hover{
    color: #66b1ff;
    text-decoration: underline;
}
.rep_icon{
    width: 80px;
    height: 80px;
    margin: 0 auto 10px;
    border-radius: 50%;
    overflow: hidden;
}
.rep_icon>img{
    width: 100%;
}
.rep_txt{
    padding: 10px 0;
    color: #24292e;
    font-size: 14px;
}
.time_line{
    font-size: 12px;
    color: #999;
    font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
    text-align: right;
}
.repBtn{
    color: #409EFF;
    cursor: pointer;
}
.repBtn:hover{
    color: #66b1ff;
}
.page-block{
    margin-top: 10px;
    text-align: right;
}
</style>
