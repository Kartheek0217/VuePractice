const app = Vue.createApp({
  data() {
    return {
      counterValue: 0,
    };
  },
  methods: {
    addCounter() {
      this.counterValue = this.counterValue + 5;
    },
  },
});
app.mount("#assignment");
