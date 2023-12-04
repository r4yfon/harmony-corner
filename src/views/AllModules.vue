<script setup>
import ModuleCard from "../components/ModuleCard.vue";
import { useAccountStore } from "../stores/account";

const userStore = useAccountStore();
</script>

<template>
  <section
    class="container d-flex flex-wrap mt-5 row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 row-gap-3"
    v-if="userStore.selectedSchool in allModules"
  >
    <ModuleCard
      v-for="module in allModules[userStore.selectedSchool]"
      :school="userStore.selectedSchool"
      :key="module.id"
      :id="module.id"
      :title="module.title"
      :completionPercentage="
        (module.numberOfQuestionsCompleted / module.totalNumberOfQuestions) * 100
      "
    />
  </section>
</template>

<script>
let allModules = {
  模范班: [
    {
      id: 1,
      title: "礼节学习",
      totalNumberOfQuestions: 17,
      numberOfQuestionsCompleted: 12,
    },
    {
      id: 2,
      title: "文学鉴赏",
      totalNumberOfQuestions: 20,
      numberOfQuestionsCompleted: 15,
    },
    {
      id: 3,
      title: "数学思维",
      totalNumberOfQuestions: 25,
      numberOfQuestionsCompleted: 0,
    },
  ],
  青少年班: [
    {
      id: 4,
      title: "力学基础",
      totalNumberOfQuestions: 30,
      numberOfQuestionsCompleted: 22,
    },
    {
      id: 5,
      title: "电磁学入门",
      totalNumberOfQuestions: 28,
      numberOfQuestionsCompleted: 20,
    },
  ],
  朗诵组: [
    {
      id: 6,
      title: "绘画技巧",
      totalNumberOfQuestions: 15,
      numberOfQuestionsCompleted: 10,
    },
    {
      id: 7,
      title: "音乐鉴赏",
      totalNumberOfQuestions: 18,
      numberOfQuestionsCompleted: 14,
    },
  ],
  插花组: [
    {
      id: 8,
      title: "营养与健康",
      totalNumberOfQuestions: 22,
      numberOfQuestionsCompleted: 16,
    },
    {
      id: 9,
      title: "心理健康",
      totalNumberOfQuestions: 20,
      numberOfQuestionsCompleted: 17,
    },
  ],
};

export default {
  name: "allModules",
};
</script>
