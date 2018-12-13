<template>
  <div id="signin">
    <el-row align="middle">
      <el-col
        :xs="{span:24, offset:0}"
        :sm="{span:12, offset:6}"
        :md="{span:12, offset:6}"
        :lg="{span:12,offset:6}"
        :xl="24"
      >
        <el-card
          :body-style="{ paddingBottom: '100px', paddingTop:'50px', paddingLeft:'20px', paddingRight:'20px' }"
          shadow="always"
        >
          <div id="heading">
            <h3>LOG IN FORM</h3>
          </div>
          <form @submit.prevent="submitFun">
            <el-form ref="form" :model="form" size="medium">
              <el-form-item>
                <el-input v-model="form.email" type="email" required placeholder="Email Addrss"></el-input>
              </el-form-item>
              <el-form-item>
                <el-input v-model="form.password" required type="password" placeholder="Password"></el-input>
              </el-form-item>
              <el-form-item style="text-align: center;">
                <el-button
                  type="primary"
                  size="medium "
                  @click="submitFun"
                  style="position: relative; width:100%"
                >
                  <button type="submit" id="btnn">Sign In</button>
                </el-button>
              </el-form-item>
              <div class="bottom">
                <p>If do not have any account
                  <router-link to="signup">Sign up here</router-link>
                </p>
              </div>
            </el-form>
          </form>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "sign-in",
  data() {
    return {
      form: {
        email: "",
        password: ""
      }
    };
  },
  beforeCreate: function() {
    document.body.className = "signin";
    this.$store.commit("authentication/userUid");
  },
  methods: {
    submitFun(e) {
      e.preventDefault();
      this.signIn(this.form);
    },
    ...mapActions("authentication", ["signIn"])
  }
};
</script>
<style scoped >
a {
  text-decoration: none;
  color: #008080;
  font-weight: bold;
}
p {
  text-align: center;
  font-family: "Times New Roman", Times, serif;
}
#heading {
  text-align: center;
  color: teal;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 200px;
  background: #008080;
  color: #fff;
  padding: 2px;
  margin-bottom: 10px;
  border-radius: 15px;
}
.el-button--primary {
  background-color: teal;
  border-color: teal;
}
.el-button--primary:hover {
  background: #004d4d;
}
.el-button--primary:focus {
  background: #004d4d;
}
#btnn {
  background-color: #008080;
  color: #fff;
  border: 1px solid #008080;
}
#btnn:focus {
  background: #004d4d;
}
#btnn:hover {
  background: #004d4d;
}
</style>

