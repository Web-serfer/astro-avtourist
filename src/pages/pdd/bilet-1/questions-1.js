const app = Vue.createApp({
  data() {
    return {
      index: 0,
      selectedAnswer: "",
      correctAnswer: 0,
      wrongAnswer: 0,
      count: 3,
      questions: [
        {
          question: "В каком случае водитель совершит вынужденную остановку?",
          answers: { a: "Остановившись непосредственно перед пешеходным переходом, чтобы уступить дорогу пешеходу", b: "Остановившись на проезжей части из-за технической неисправности транспортного средства", c: "В обоих перечисленных случаях" },
          correctAnswer: "с",
        },
        {
          question:
            "Разрешен ли Вам съезд на дорогу с грунтовым покрытием?",
          answers: { a: "Разрешен", b: "Разрешен только при технической неисправности т/c", c: "Запрещен" },
          correctAnswer: "a",
        },        
        {
          question: "Можно ли Вам остановиться в указанном месте для посадки пассажира?",
          answers: { a: "Можно", b: "Можно, если Вы управляете такси", c: "Нельзя" },
          correctAnswer: "a",
        },
      ],
    };
  },
  methods: {
    answered(e) {
      this.selectedAnswer = e.target.value;
      if (this.selectedAnswer == this.questions[this.index]["correctAnswer"])
        this.correctAnswer++;
      else this.wrongAnswer++;
    },
    nextQuestion() {
      this.index++;
      this.selectedAnswer = "";
    },
    showResults() {
      this.index++;
    },
    resetQuiz() {
      this.index = 0;
      this.selectedAnswer = "";
      this.correctAnswer = 0;
      this.wrongAnswer = 0;
    },
  },
});

app.mount("#app");
