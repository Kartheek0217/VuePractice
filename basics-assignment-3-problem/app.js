const app = Vue.createApp({
  data() {
    return {
      counterValue: 0,
    };
  },
  computed: {
    result() {
      if (this.counterValue < 37) {
        return "Not there yet";
      } else if (this.counterValue === 37) {
        return 37;
      } else {
        return "Too much!";
      }
    },
  },
  watch: {
    result() {
      const that = this;
      setTimeout(function () {
        that.counterValue = 0;
      });
    },
  },
  methods: {
    addNumber(num) {
      this.counterValue = this.counterValue + num;
      console.log(this.counterValue);
    },
  },
});
app.mount("#assignment");
