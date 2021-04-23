<template>
        <el-container>
            <!-- 顶栏 -->
            <el-header height="60px">

                <h2>哈哈哈哈哈哈</h2>
<!--                <el-dropdown style="">
                    <i class="el-icon-setting" style="margin-right: 15px"></i>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>查看</el-dropdown-item>
                        <el-dropdown-item>新增</el-dropdown-item>
                        <el-dropdown-item>删除</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
                <span>王小虎</span>-->
            </el-header>
            <!-- 嵌套容器 -->
            <el-container>
                <el-aside width="200px">
                    <el-menu :default-openeds="['1', '2']" router  background-color="#545c64"
                             text-color="#fff"
                             active-text-color="#ffd04b">
                        <el-submenu index="1" router>
                            <template #title><i class="el-icon-user"></i>导航一</template>
                                <el-menu-item index="/pageOne">页面一</el-menu-item>
                                <el-menu-item index="/pageTwo">页面二</el-menu-item>
                        </el-submenu>
                        <el-submenu index="2">
                            <template #title><i class="el-icon-message"></i>导航二</template>
                                <el-menu-item index="/pageThree">页面三</el-menu-item>
                                <el-menu-item index="/pageFour" >页面四</el-menu-item>
                        </el-submenu>
                    </el-menu>
                </el-aside>
                <!-- 内容 -->
                <el-main>
                    <router-view>
                    </router-view>
                </el-main>
            </el-container>
            <!-- 底栏 -->
            <el-footer height="30px" style="flex:;">&copy;YongXin 2021</el-footer>
        </el-container>
</template>

<script>
    export default {
        name: "Navigation"
    }
</script>

<style scoped>
    .el-header {
        background-color: #545c64;
        color: #fff;
    }
    .el-footer {
        background-color: #cdd9e0;
        color: black;
        text-align: center;
    }
    .el-container{
        height:100%
    }
</style>