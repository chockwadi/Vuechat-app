a<template>
  <div id="signup">
    <el-row align="middle">
      <el-col
        :xs="{span:24, offset:0}"
        :sm="{span:12, offset:6}"
        :md="{span:12, offset:6}"
        :lg="{span:12,offset:6}"
        :xl="24"
      >
        <el-card :body-style="{ padding: '20px' }">
          <div id="heading">
            <h3>REGISTERATION FORM</h3>
          </div>
          <form>
            <el-form ref="form" :model="form" :rules="rules" size="mini">
              <el-form-item prop="fname">
                <el-input v-model="form.fname" required placeholder="*First Name "></el-input>
              </el-form-item>
              <el-form-item prop="lname">
                <el-input v-model="form.lname" required placeholder="*Last Name"></el-input>
              </el-form-item>
              <el-form-item label="Gender" prop="gender">
                <el-radio-group v-model="form.gender" required>
                  <el-radio label="Male"></el-radio>
                  <el-radio label="Female"></el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item prop="email">
                <el-input v-model="form.email" required placeholder="*Email Addrss"></el-input>
              </el-form-item>
              <el-form-item prop="password">
                <el-input v-model="form.password" required type="password" placeholder="*Password"></el-input>
              </el-form-item>

              <el-form-item prop="checkpassword">
                <el-input
                  v-model="form.checkpassword"
                  type="password"
                  autocomplete="off"
                  placeholder="*Confirm Password"
                ></el-input>
              </el-form-item>
              <el-form-item label prop="agree">
                <el-checkbox-group v-model="form.agree">
                  <el-checkbox label="I agree with terms and conditions" name="agreed" required></el-checkbox>
                </el-checkbox-group>
              </el-form-item>

              <el-form-item style="text-align: center;">
                <el-button
                  size="medium "
                  style="position: relative; width:100%"
                  type="primary"
                  @click="onSubmit('form')"
                >
                  <!-- <button type="submit" style="background-color:#008080; color:#fff; border:1px solid #008080" > -->
                  Sign up
                  <!-- </button> -->
                </el-button>
              </el-form-item>

              <div class="bottom">
                <p>If you already have an account
                  <router-link to="/">Sign in here</router-link>
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
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("Please input the password"));
      } else {
        if (this.form.checkpassword !== "") {
          this.$refs.form.validateField("checkpassword");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("Please input the password again"));
      } else if (value !== this.form.password) {
        callback(new Error("Two inputs don't match!"));
      } else {
        callback();
      }
    };
    return {
      form: {
        fname: "",
        lname: "",
        gender: "",
        email: "",
        password: "",
        checkpassword: "",
        agree: []
      },

      rules: {
        fname: [
          {
            required: true,
            message: "please enter your First Name",
            trigger: "blur"
          }
        ],
        lname: [
          {
            required: true,
            message: "please enter your Last Name",
            trigger: "blur"
          }
        ],
        gender: [
          { required: true, message: "Select your gender", trigger: "blur" }
        ],
        email: [
          {
            required: true,
            message: "Please enter your Email Address",
            trigger: "blur"
          },
          {
            type: "email",
            message: "Please input correct email address",
            trigger: ["blur", "change"]
          }
        ],
        password: [{ validator: validatePass, trigger: "blur" }],
        checkpassword: [{ validator: validatePass2, trigger: "blur" }],
        agree: [
          {
            required: true,
            message: "Please Read and Agree with terms and conditions",
            trigger: "blur"
          }
        ]
      }
    };
  },
  beforeCreate: function() {
    document.body.className = "signup";
        this.$store.commit("authentication/userUid");

  },
  methods: {
    onSubmit(form) {
      // form.preventDefault()
      this.$refs[form].validate(valid => {
        if (valid) {
          this.signUp(this.form);
        }
      });
    },
    ...mapActions("authentication", ["signUp"])
  }
};
</script>
<style scoped>
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
  background-color: #008080;
  border-color: #008080;
}
.el-button--primary:hover {
  background: #004d4d;
}
.el-button--primary:focus {
  background: #004d4d;
}
</style>