export const accountRules = {
  // 语法： name: [{规则1}, {规则2}]
  name: [
    {
      required: true,
      message: '用户名是必传内容',
      trigger: 'blur'
    },
    {
      pattern: /^[a-z0-9]{5,10}$/,
      message: '必须是5~10个数字或字母',
      trigger: 'blur'
    }
    // { required: true, message: '必须输入用户名', trigger: 'blur' },
    // {
    //   pattern: /^[a-z0-9]{6,20}$/,
    //   message: '必须是6~20个字母或者数字',
    //   trigger: 'blur'
    // }
  ],
  password: [
    {
      required: true,
      message: '密码是必传内容',
      trigger: 'blur'
    },
    {
      pattern: /^[a-z0-9]{3,}$/,
      message: '必须是3位数以上的密码',
      trigger: 'blur'
    }
  ]
}
