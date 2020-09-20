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
        <el-form :model="loginform" label-width="0px" class="login-form">
            <el-form-item>
                <el-input v-model="loginform.username" prefix-icon="el-icon-search"></el-input>
            </el-form-item>
            <el-form-item>
                <el-input type="password" v-model="loginform.password" prefix-icon="el-icon-search"></el-input>
            </el-form-item>
            <el-form-item class="btns">
                <el-button type="primary">登录</el-button>
                <el-button type="info">重置</el-button>
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
            }
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

