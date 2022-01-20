<template>
  <div class="login-page">
    <Form ref="form" :model="formData" :rules="rules" :label-width="80">
      <FormItem label="Username" prop="username">
        <Input v-model="formData.username" />
      </FormItem>
      <FormItem label="Password" prop="password">
        <Input type="password" password v-model="formData.password" />
      </FormItem>
      <FormItem label="VerifyCode" prop="verifyCode">
        <Input v-model="formData.verifyCode" />
        <img :src="verifyCode" alt="verify code" @click="updateVerifyCode" />
      </FormItem>
      <FormItem>
        <Button
          type="primary"
          style="width: 100%"
          @click="handleSubmit('form')"
          :loading="loading"
        >
          {{ loading ? 'Logging' : 'Log In' }}
        </Button>
      </FormItem>
    </Form>
  </div>
</template>
<script>
import { mapActions } from 'vuex';
import { CodeType } from '@/config';
const API_PATH = process.env.VUE_APP_CONSOLE_SERVICE_PATH;

const validateFactory = (keyName) => (rule, value, callback) => {
  if (value === '') callback(new Error(`${keyName} cannot be empty.`));
  callback();
};
const createForm = (object) => {
  let form = new FormData();
  for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
      form.append(key, object[key]);
    }
  }
  return form;
};
export default {
  name: 'Login',
  data() {
    return {
      formData: { username: '', password: '', verifyCode: '' },
      rules: {
        username: [{ validator: validateFactory('username'), trigger: 'blur' }],
        password: [{ validator: validateFactory('password'), trigger: 'blur' }],
        verifyCode: [
          { validator: validateFactory('verifyCode'), trigger: 'blur' },
        ],
      },
      loading: false,
      verifyCode: `${API_PATH}/verification`,
    };
  },
  methods: {
    ...mapActions('user', ['loggedIn']),
    updateVerifyCode() {
      this.verifyCode = `${API_PATH}/verification?t=${new Date().getTime()}`;
    },
    handleSubmit(name) {
      this.$refs[name].validate(async (valid) => {
        if (valid) {
          this.loading = true;
          const response = await fetch(`${API_PATH}/login`, {
            method: 'POST',
            body: createForm(this.formData),
            credentials: 'include',
          });
          const result = await response.json();
          if (result) {
            const { code, data, message } = result;
            if (CodeType.isSuccess(code)) {
              this.loggedIn(data);
              this.$router.push({ name: 'home' });
            } else {
              this.$Message.error(message);
              this.updateVerifyCode();
            }
          }
          this.loading = false;
        }
      });
    },
  },
};
</script>
<style lang="less">
.login-page {
  width: 360px;
  margin: 200px auto;
}
</style>
