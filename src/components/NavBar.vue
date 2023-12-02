<template>
  <header>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container">
        <a class="navbar-brand" href="/">
          <icon-solar-square-academic-cap-bold height="48" width="48" />
        </a>

        <!-- the button that will appear on mobile viewports -->
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <!-- actual navbar in desktop viewport -->
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <select class="form-select bg-body-tertiary border-0" v-model="selected_school">
              <option selected value="模范班">模范班</option>
              <option value="青少年班">青少年班</option>
            </select>
            <div class="vr mx-3 d-none d-lg-block"></div>
            <li class="nav-item">
              <a class="nav-link" href="#">Classes</a>
            </li>
          </ul>

          <div class="nav-item dropdown">
            <a
              class="nav-link p-2"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <icon-solar-user-circle-linear width="24" height="24" />
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">View account</a></li>
              <li><a class="dropdown-item" href="#">Edit details</a></li>
              <li><hr class="dropdown-divider" /></li>
              <li><a class="dropdown-item text-danger" href="#">Log out</a></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<style scoped>
nav {
  box-shadow: 0 3px 12px #00000014;
}
</style>

<script>
export default {
  data() {
    return {
      selected_school: "模范班"
    };
  }
};
</script>
