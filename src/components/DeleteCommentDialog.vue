<template>
  <div class="container111" v-show="show">
    <div class="content">
      <p>
        {{ modalText }}
      </p>
      <button @click="cancel" class="btn btn-warning">
        CANCEL
      </button>
      <button @click="confirm" class="btn btn-primary">
        YES
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["modalText", "cancel", "confirm", "show"],
};
</script>

<style>
.container111 {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.35);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
}

.content {
  background-color: white;
  border: 1px solid;
  border-radius: 50px;
  padding: 10%;
  box-shadow: 0px 0px 10px rgb(33, 33, 33);
}

p {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 30px;
}

button {
  margin: 20px;
  padding: 10px 20px !important;
}
</style>
