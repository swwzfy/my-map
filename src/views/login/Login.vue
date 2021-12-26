<template>
    <div class="login">
        <el-form ref="ruleForm"
        :model="ruleForm"
        status-icon
        :rules="rules"
        label-width="80px"
        class="demo-ruleForm">
            <el-form-item label="账号" prop="username">
                <el-input v-model="ruleForm.username" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input v-model="ruleForm.password" type="password" autocomplete="off"></el-input>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
// @ is an alias to /src
export default {
    name: "Login",
    data() {
        return {
            ruleForm:{
                username:'',
                password:''
            },
            rules:{
                
            }
        };
    },
    mounted() {

    },
    methods: {
        login(){
            let _self = this;
            _self.$http({
                method:'post',
                url:'/user',
                data:{
                    username: 'admin',
                    password: '123456'
                }
            }).then(res => {
                console.log(res);
                let code = res.data.meta.status;
                if(code == '200'){
                    _self.$router.push('/home')
                }
            })
        }
    },
};
</script>
