<script setup>
import RadioOption from "../components/RadioOption.vue";
import { useAccountStore } from "../stores/account";
const userStore = useAccountStore();
</script>

<template>
  <section class="container-fluid bg-black vh-100 vw-100 p-5 pt-0">
    <!-- navigational buttons at the top to select question and exit the current quiz -->
    <nav class="navbar d-flex justify-content-between py-4">
      <select
        class="form-select rounded-4 w-auto d-lg-none"
        aria-label="Default select example"
        v-model="selectedQuestion"
      >
        <option v-for="question in questions" :key="question.name" :value="question.id">
          {{ question.name }}
        </option>
      </select>
      <div class="text-white">{{ userStore.selectedClassTitle }}</div>
      <button
        class="btn btn-link text-decoration-none text-white d-flex align-items-center column-gap-1"
        @click="$router.go(-1)"
      >
        <icon-solar-exit-outline width="24" height="24" class="text-warning" />
        Exit
      </button>
    </nav>

    <div
      class="rounded-4 bg-white w-100 d-flex flex-column flex-lg-row row overflow-hidden justify-content-center align-items-center mx-auto"
      id="question"
    >
      <div class="col-2 d-none d-lg-block p-3">
        <label
          :class="[
            'btn',
            'btn-outline-dark',
            'd-block',
            'mb-2',
            { active: question.id === selectedQuestion },
          ]"
          v-for="question in questions"
          :key="question.name"
        >
          <input class="btn-check" type="radio" v-model="selectedQuestion" :value="question.id" />
          {{ question.name }}
          <icon-solar-check-circle-outline v-if="question.selection !== ''" color="green" />
        </label>
      </div>
      <div class="col bg-info-subtle p-4 d-flex flex-column justify-content-between">
        {{ questions[selectedQuestion].question }}
        <div class="align-self-end col-gap-2">
          {{ questions[selectedQuestion].id + 1 }} of {{ questions.length }}

          <button
            class="btn btn-link text-decoration-none text-warning py-0"
            @click="selectQuestion()"
          >
            Next
            <icon-solar-alt-arrow-right-bold width="24" height="24" />
          </button>
        </div>
      </div>
      <div class="col bg-tertiary p-4">
        Select your answer
        <div class="d-flex flex-wrap row-cols-1 row-gap-2">
          <RadioOption
            v-for="(option, index) in questions[selectedQuestion].options"
            :key="index"
            :name="questions[selectedQuestion].name"
            :optionId="index"
            >{{ option }}</RadioOption
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ChallengeView",
  data() {
    return {
      options: ["option 1", "option 2", "option 3", "option 4"],
      selectedQuestion: 0,
      questions: [
        {
          id: 0,
          name: "Question 1",
          question: "What is the capital of Nigeria?",
          format: "mcq",
          selection: "",
          options: ["Lagos", "Abuja", "Kano", "Ibadan"],
          solution: "Abuja",
        },
        {
          id: 1,
          name: "Question 2",
          question: "What is the capital of China?",
          format: "mcq",
          selection: "",
          options: ["Beijing", "Shanghai", "Guangzhou", "Hong Kong"],
          solution: "Beijing",
        },
        {
          id: 2,
          name: "Question 3",
          question: "What is the capital of India?",
          format: "mcq",
          selection: "",
          options: ["Delhi", "Mumbai", "Kolkata", "Chennai"],
          solution: "Delhi",
        },
        {
          id: 3,
          name: "Question 4",
          question: "What is the capital of Japan?",
          format: "mcq",
          selection: "",
          options: ["Tokyo", "Osaka", "Kyoto", "Yokohama"],
          solution: "Tokyo",
        },
      ],
    };
  },
  methods: {
    selectQuestion() {
      if (this.selectedQuestion < this.questions.length - 1) {
        this.selectedQuestion++;
      } else {
        this.selectedQuestion = 0;
      }
    },
  },

  watch: {
    selectedQuestion() {
      console.log(this.selectedQuestion);
    },
  },
};
</script>

<style scoped>
#question {
  height: calc(100% - 86px);

  > div {
    height: 100%;
    /* width: 100%;

    @media (min-width: 992px) {
      height: 100%;
      width: 10%;;
    } */
  }
}
</style>
