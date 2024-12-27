const app = Vue.createApp({
  data() {
    return {
      name: "MoonKnight",
      age: 28,
      imageUrl:
        "https://cubanvr.com/wp-content/uploads/2023/07/ai-image-generators.webp",
    };
  },
  methods: {
    ageAfter() {
      return this.age + 5;
    },
    favouriteNumber() {
      let num = Math.random();
      console.log(num);
      if (num > 0.5) {
        return 1;
      } else {
        return 0;
      }
    },
  },
});

app.mount("#assignment");
