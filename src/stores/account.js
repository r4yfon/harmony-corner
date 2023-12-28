// import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useAccountStore = defineStore("id", {
  state: () => ({
    id: 1,
    name: "司徒睿峰",
    role: "student",
    enrolledSchools: ["模范班", "青少年班", "朗诵组", "插花组", "书法组", "招待组", "廖内青少年班"],
    selectedSchool: "",
    selectedClassId: "",
    selectedClassTitle: "",
    latestQuestion: 0,
  }),
  actions: {
    selectClass(id, title) {
      console.log(id, title);
      this.selectedClassId = id;
      this.selectedClassTitle = title;
    },
  },
});
