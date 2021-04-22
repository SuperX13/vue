<template>
  <div id="app">
    <el-container>
      <!-- 顶栏 -->
      <el-header height="60px">
        <h2>哈哈哈哈哈哈</h2>
      </el-header>
      <!-- 嵌套容器 -->
      <el-container>
        <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
          <el-menu :default-openeds="['1', '2']">
            <el-submenu index="1">
              <template #title><i class="el-icon-user"></i>导航一</template>
              <el-menu-item-group>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
                <el-menu-item index="1-3">选项3</el-menu-item>
                <el-menu-item index="1-4">选项4</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="2">
              <template #title><i class="el-icon-message"></i>导航二</template>
              <el-menu-item-group>
                <el-menu-item index="2-1">选项1</el-menu-item>
                <el-menu-item index="2-2">选项2</el-menu-item>
                <el-menu-item index="2-3">选项3</el-menu-item>
                <el-menu-item index="2-4">选项4</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-aside>
        <!-- 内容 -->
        <el-main>
          <h1>aaaaaaaaaaa</h1>
          <!-- 第二列布局 -->
        <!--  <el-row>-->

          <el-table
                  :data="users"
                  border
                  style="width: 100%">
            <el-table-column
                    prop="id"
                    label="ID"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="name"
                    label="姓名"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="sex"
                    label="性别">
            </el-table-column>
            <el-table-column label="操作">
              <template #default="scope">
                <el-button
                        size="mini"
                        @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                <el-button
                        size="mini"
                        type="danger"
                        @click="handleDelete(scope.$index, scope.row)">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
          <!--</el-row>-->
        </el-main>
      </el-container>
      <!-- 底栏 -->
      <el-footer height="30px">&copy;YongXin 2021</el-footer>
    </el-container>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        users:[
          {
            id:"",
            name:"",
            sex:"",
          }
        ]
      }
    },
    created() {
      const _this=this
      axios.get('http://localhost:8888/user/showAll').then(function (resp) {
        _this.users=resp.data
      })
    }
  }</script>
<style>
  .el-header {
    background-color: #70bcff;
    color: white;
  }
  .el-footer {
    background-color: #cdd9e0;
    color: black;
    text-align: center;
  }

</style>