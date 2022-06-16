<template>
  <el-form label-width="60px" :rules="phoneRules" :model="phoneAccount">
    <el-form-item label="电话" prop="numbRules">
      <el-input v-model="phoneAccount.numb"></el-input>
    </el-form-item>
    <el-form-item label="验证码">
      <div class="verify-code">
        <el-input v-model="phoneAccount.code"></el-input>
        <el-button type="primary" class="get-btn">获取验证码</el-button>
      </div>
    </el-form-item>
  </el-form>
</template>
<script lang="ts">
import { defineComponent, reactive } from 'vue'

export default defineComponent({
  name: 'App',
  components: {},
  setup() {
    const phoneAccount = reactive({
      numb: '',
      code: ''
    })
    const phoneRules = {
      numbRules: [
        {
          required: true,
          message: '电话是必传内容',
          trigger: 'blur'
        },
        {
          pattern: /^[0-9](11)/,
          message: '请输入11位数字号码',
          trigger: 'blur'
        }
      ]
    }
    return {
      phoneAccount,
      phoneRules
    }
  }
})
</script>
<style scoped lang="less">
.verify-code {
  display: flex;

  .get-btn {
    margin-left: 8px;
  }
}
</style>
