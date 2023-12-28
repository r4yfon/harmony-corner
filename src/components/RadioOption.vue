<template>
  <label class="btn btn-secondary">
    <input
      type="radio"
      class="btn-check"
      :name="questionName"
      :id="questionName + optionId"
      autocomplete="off"
    />
    <slot></slot>
  </label>
</template>

<script>
export default {
  name: "RadioOption",
  props: {
    option: String,
    optionId: Number,
    questionName: String,
  },
};
</script>
