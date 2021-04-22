<template>
    <div>
        <table
        :data="users">
            <tr>
                <td>ID</td>
                <td>姓名</td>
                <td>性别</td>
            </tr>
        </table>
    </div>
</template>
<script>
    export default {
        name: "Show",
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
    }
</script>
<style scoped>
</style>