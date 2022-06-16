<template>
  <div class="login-account">
    <!-- :rules="accountRules"是用来绑定setup中定义的校验规则的，这例子的作用是在el-form绑定accountRules。
      绑定完之后，el-form-item可以通过prop来应用校验，prop的值应当是accountRules的某个属性
    -->
    <!--  :model="account" 是获取最新的值给el-form。这个例子中获取的是account的最新值，
      一旦v-model="account.name"引起account发生改变，el-form立刻就能知道，然后进行校验
     -->
    <el-form
      label-width="60px"
      :rules="accountRules"
      :model="account"
      ref="formRef"
    >
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="account.password" show-password></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>
<script lang="ts">
import { ElForm } from 'element-plus'
import { defineComponent, reactive, ref } from 'vue'
import { accountRules } from '../config/account.config'
export default defineComponent({
  name: 'login-account',
  components: {},
  setup() {
    const account = reactive({
      name: '',
      password: ''
    })
    const formRef = ref<InstanceType<typeof ElForm>>()
    const loginAction = () => {
      console.log('account页面外面打印内容')
      formRef.value?.validate((valid) => {
        if (valid) {
          console.log('真正执行登录逻辑')
        }
      })
    }

    return {
      account,
      accountRules,
      loginAction,
      formRef
    }
  }
})
</script>
