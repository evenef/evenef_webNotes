<template>
    <div class="table_box">
        <div class="btn_box">
            <el-button type="primary">我要发贴</el-button>
        </div>
        <el-table
            :data="tableData"
            height="100%"
            border
            style="width: 100%;">
            <el-table-column
                prop="title"
                label="标题">
            </el-table-column>
            <el-table-column
                prop="text"
                label="内容">
            </el-table-column>
            <el-table-column
                prop="date"
                label="发贴时间"
                width="100">
            </el-table-column>
            <el-table-column
                prop="creater"
                label="发贴人"
                width="100">
            </el-table-column>
            <el-table-column
                prop="lastDate"
                label="最新编辑"
                width="110">
            </el-table-column>
            <el-table-column
                prop="lastEdit"
                label="编辑人"
                width="100">
            </el-table-column>
            <el-table-column
                fixed="right"
                label="操作"
                width="100"
                >
                <template slot-scope="scope">
                    <el-button type="text" size="small">查看</el-button>
                </template>
            </el-table-column>
        </el-table>
        <div class="page-block">
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="currentPage4"
              :page-size="10"
              layout="total, prev, pager, next, jumper"
              :total="tableData.lenth">
            </el-pagination>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CSS',
    data () {
        return {
            tableData: [{
          date: '2017-12-06',
          creater: '刘锐',
          lastDate: '2017-12-08',
          lastEdit: '刘锐',
          title: 'webpack配置与打包',
          text: '刘锐是二笔刘锐是二笔刘锐是二笔刘锐是二笔刘锐是二笔刘锐是二笔刘锐是二笔刘锐是二笔刘锐是二笔刘锐是二笔刘锐是二笔刘锐是二笔刘锐是二笔'
        }, {
          date: '2017-12-06',
          creater: '张川',
          lastDate: '2017-12-08',
          lastEdit: '刘锐',
          title: 'Vue安装配置&方法属性',
          text: '刘锐是二笔刘锐是二笔刘锐是二笔刘锐是二笔刘锐是二笔刘锐是二笔刘锐是二笔刘锐是二笔刘锐是二笔刘锐是二笔刘锐是二笔刘锐是二笔刘锐是二笔'
        }, {
          date: '2017-12-06',
          creater: '唐玲',
          lastDate: '2017-12-08',
          lastEdit: '刘锐',
          title: '你不知道的CSS小技巧',
          text: '刘锐是二笔刘锐是二笔刘锐是二笔刘锐是二笔刘锐是二笔刘锐是二笔刘锐是二笔刘锐是二笔刘锐是二笔刘锐是二笔刘锐是二笔刘锐是二笔刘锐是二笔'
        }, {
          date: '2017-12-06',
          creater: '刘科峰',
          lastDate: '2017-12-08',
          lastEdit: '刘锐',
          title: '媒体标签（video、audio）',
          text: '刘锐是二笔刘锐是二笔刘锐是二笔刘锐是二笔刘锐是二笔刘锐是二笔刘锐是二笔刘锐是二笔刘锐是二笔刘锐是二笔刘锐是二笔刘锐是二笔刘锐是二笔'
        }, {
          date: '2017-12-06',
          creater: '宋佳佳',
          lastDate: '2017-12-08',
          lastEdit: '刘锐',
          title: '我就没啥可说的了',
          text: '刘锐是二笔刘锐是二笔刘锐是二笔刘锐是二笔刘锐是二笔刘锐是二笔刘锐是二笔刘锐是二笔刘锐是二笔刘锐是二笔刘锐是二笔刘锐是二笔刘锐是二笔'
        },
        {date: '2017-12-06',
          creater: '刘锐',
          lastDate: '2017-12-08',
          lastEdit: '刘锐',
          title: 'webpack配置与打包',
          text: '刘锐是二笔刘锐是二笔刘锐是二笔刘锐是二笔刘锐是二笔刘锐是二笔刘锐是二笔刘锐是二笔刘锐是二笔刘锐是二笔刘锐是二笔刘锐是二笔刘锐是二笔'
        }, {
          date: '2017-12-06',
          creater: '张川',
          lastDate: '2017-12-08',
          lastEdit: '刘锐',
          title: 'Vue安装配置&方法属性',
          text: '刘锐是二笔刘锐是二笔刘锐是二笔刘锐是二笔刘锐是二笔刘锐是二笔刘锐是二笔刘锐是二笔刘锐是二笔刘锐是二笔刘锐是二笔刘锐是二笔刘锐是二笔'
        }, {
          date: '2017-12-06',
          creater: '唐玲',
          lastDate: '2017-12-08',
          lastEdit: '刘锐',
          title: '你不知道的CSS小技巧',
          text: '刘锐是二笔刘锐是二笔刘锐是二笔刘锐是二笔刘锐是二笔刘锐是二笔刘锐是二笔刘锐是二笔刘锐是二笔刘锐是二笔刘锐是二笔刘锐是二笔刘锐是二笔'
        }, {
          date: '2017-12-06',
          creater: '刘科峰',
          lastDate: '2017-12-08',
          lastEdit: '刘锐',
          title: '媒体标签（video、audio）',
          text: '刘锐是二笔刘锐是二笔刘锐是二笔刘锐是二笔刘锐是二笔刘锐是二笔刘锐是二笔刘锐是二笔刘锐是二笔刘锐是二笔刘锐是二笔刘锐是二笔刘锐是二笔'
        }]
        }
    },
    methods: {
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.page-block,.btn_box{
    width: 100%;
    background-color: #fff;
}
.table_box .el-table .cell{
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.table_box{
    height: 100%; 
    padding: 20px;
    box-sizing: border-box; 
    background-color: #fff;    
}
</style>
