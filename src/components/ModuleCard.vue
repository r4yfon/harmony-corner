<template>
  <RouterLink :to="'challenge/' + school + '/' + id" class="px-2 text-decoration-none">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">{{ title }}</h5>
      </div>
      <div
        class="progress rounded-0"
        role="progressbar"
        aria-label="progress indicator"
        style="height: 4px"
        aria-valuenow="0"
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <div class="progress-bar" :style="{ width: completionPercentage + '%' }"></div>
      </div>
      <div class="p-2">
        <span v-if="0 < completionPercentage && completionPercentage < 100">
          {{ completionPercentage.toFixed() }}% completed
        </span>
        <span v-else-if="completionPercentage === 0">Incomplete</span>
      </div>
    </div>
  </RouterLink>
</template>

<script>
export default {
  name: "ModuleCard",
  props: {
    title: String,
    completionPercentage: Number,
    id: Number,
    school: String,
  },
};
</script>
