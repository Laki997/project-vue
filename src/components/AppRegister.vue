<template>
  <div>
    <form @submit.prevent="onSubmit">
      <div class="form-group">
        <label for="name">First Name</label>
        <input
          type="text"
          name="name"
          class="form-control"
          id="name"
          aria-describedby="emailHelp"
          placeholder="Enter first name"
          v-model="user.firstName"
          required
        />
      </div>
      <div class="form-group">
        <label for="name">Last Name</label>
        <input
          type="text"
          name="name"
          class="form-control"
          id="name"
          aria-describedby="emailHelp"
          placeholder="Enter last name"
          v-model="user.lastName"
          required
        />
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input
          type="email"
          name="email"
          class="form-control"
          id="email"
          aria-describedby="emailHelp"
          placeholder="Enter email"
          v-model="user.email"
          required
        />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input
          type="password"
          name="password"
          class="form-control"
          id="password"
          aria-describedby="emailHelp"
          placeholder="Enter password"
          v-model="user.password"
          required
        />
      </div>
      <div class="form-group">
        <label for="password">Confirm password</label>
        <input
          type="password"
          name="password_confirmation"
          class="form-control"
          id="password_confirmation"
          aria-describedby="emailHelp"
          placeholder="Confirm password"
          v-model="user.password_confirmation"
          required
        />
      </div>
      <div class="form-group">
        <label for="password">I Accept terms and conditions</label>
        <input
          type="checkbox"
          name="agreed"
          class="form-control"
          id="agreed"
          value="1"
          aria-describedby="emailHelp"
          required
        />
      </div>

      <button type="submit" class="btn btn-primary">Register</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      user: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        password_confirmation: "",
      },

      // greske: {
      //   password: "",
      //   email: "",
      // },
    };
  },

  methods: {
    ...mapActions({ register: "auth/register" }),

    async onSubmit() {
      await this.register(this.user)
        .then(() => {
          console.log(this.user);
          this.$router.push("/");
        })
        .catch((error) => {
          // this.greske.email = error.response.data.erros.email;
          // this.greske.password = error.response.data.errors.password;

          // const errors = Object.values(this.errors);

          // alert(`ERRORS: ${errors}` + "\n");

          const errorEmail = error.response.data.errors.email;
          const errorPass = error.response.data.errors.password;

          if (errorEmail && errorPass) {
            alert(`${errorEmail} ${errorPass}`);
          } else if (errorEmail) {
            alert(errorEmail);
          } else {
            alert(errorPass);
          }
        });
    },
  },
};
</script>

<style scoped></style>
