<template>
    <div>
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
                            @click="handleEdit(scope.$index, scope.row)">编辑
                    </el-button>
                    <el-button
                            size="mini"
                            type="danger"
                            @click="handleDelete(scope.$index, scope.row)">删除
                    </el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                users: [
                    {
                        id: "",
                        name: "",
                        sex: "",
                    }
                ]
            }
        },
        created() {
            axios.get('http://localhost:8888/user/showAll').then((resp) => {
                this.users = resp.data
            })
        }
    }
</script>

<style scoped>

</style>