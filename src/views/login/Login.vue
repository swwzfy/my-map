<template>
    <div class="login">
        <el-form ref="ruleForm"
        :model="ruleForm"
        status-icon
        :rules="rules"
        label-width="0"
        class="demo-ruleForm">
            <el-form-item prop="username">
                <el-input prefix-icon="User" v-model="ruleForm.username" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item prop="password">
                <el-input prefix-icon="Lock" v-model="ruleForm.password" type="password" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submit('ruleForm')">登录</el-button>
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
                username: [
                    {
                        required: true,
                        message: '请输入账号!',
                        trigger: 'blur',
                    },
                ],
                password: [
                    {
                        required: true,
                        message: '请输入密码!',
                        trigger: 'blur',
                    },
                ],
            }
        };
    },
    mounted() {

    },
    methods: {
        submit(formName){
            let _self = this;
            _self.$refs[formName].validate((valid) => {
                if (valid) {
                    _self.$http({
                        method:'post',
                        url:'/user',
                        data:{
                            username: _self.ruleForm.username,
                            password: _self.ruleForm.password
                        }
                    }).then(res => {
                        let code = res.data.meta.status;
                        if(code == '200'){
                            _self.$router.push('/home')
                        }
                    })
                } else {
                    console.log('error submit!!')
                    return false
                }
            })
        }
    },
};
</script>
<style lang="less" scoped>
    .login{
        position: relative;
        width: 100%;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        .demo-ruleForm{
            width: 600px;
        }
    }
    
</style>
