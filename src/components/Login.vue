<template>
  <div class="login-container">
    <div class="login-box">
        <!-- 头像区域 -->
        <div class="avatar-box">
            <img src="../assets/logo.png" alt="">
        </div>
        <!-- 登录表单区域 
        label-width="80px"
        label=".."左边文本
        -->
        <el-form :model="loginform" label-width="0px" class="login-form" :rules="loginformrules" ref="loginFormRef">
            <el-form-item prop="username">
                <el-input v-model="loginform.username" prefix-icon="el-icon-user-solid"></el-input>
            </el-form-item>
            <el-form-item prop="password">
                <el-input type="password" v-model="loginform.password" prefix-icon="el-icon-key"></el-input>
            </el-form-item>
            <el-form-item class="btns">
                <el-button type="primary" @click="login">登录</el-button>
                <el-button type="info" @click="resetform">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
  </div>
</template>

<script>

export default {
    data(){
        return{
            loginform:{
                username:"",
                password:""
            },
            loginformrules:{
                username:[
                    {required:true,message:"请输入登录名称",trigger:"blur"},
                    {min:3,max:10,message:"长度要在3~10之间",trigger:"blur"}
                ],
                password:[
                    {required:true,message:"请输入密码",trigger:"blur"},
                    {min:6,max:15,message:"长度要在6~15之间",trigger:"blur"}
                ]
            }
        }
    },
    methods:{
        resetform(){
            this.loginform.username="";
            this.loginform.password="";
            this.$refs.loginFormRef.resetFields();
        },
        login(){
            this.$refs.loginFormRef.validate(res=>{
                if(!res) return;
                this.$http.get("/login.json").then(res=>{
                    console.log(res)
                    if(this.loginform.username==res.data.admin.username&&this.loginform.password==res.data.admin.password){
                        this.$message.success("admin login");
                        window.sessionStorage.setItem("token",res.data.admin.token);
                        this.$router.push("/home")
                    } else{
                        return this.$message.error("login failed");
                    }
                })
            })
        }
    }
}
</script>

<style lang="less" scoped>
.login-container{
    background-color: #2b4b6b;
    height: 100%;
}
.login-box{
    width: 450px;
    height: 300px;
    background-color: #fff;
    border-radius: 3px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
}
.avatar-box{
    height: 130px;
    width: 130px;
    border: 1px solid #eee;
    border-radius: 50%;
    overflow: hidden;
    padding: 10px;
    box-shadow: 0 0 10px #ddd;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    img{
        width: 100%;
        height: 100%;
    }
}
.login-form{
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;
}
.btns{
    display: flex;
    justify-content: flex-end;
}
</style>>

