const app = Vue.createApp({
  data() {
    return {
      inputText: "",
      savedText: "",
    };
  },
  methods: {
    buttonPress() {
      alert("Alert Button Pressed.");
    },
    showText(event) {
      this.inputText = event.target.value;
    },
    showTextOnEnter(event) {
      this.savedText = event.target.value;
    },
  },
});
app.mount("#assignment");
