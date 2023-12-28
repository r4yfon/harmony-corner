<script setup>
import { useAccountStore } from "../stores/account";

const userStore = useAccountStore();
userStore.selectedSchool = userStore.enrolledSchools[0];
</script>

<template>
  <header>
    <nav class="navbar navbar-expand bg-body-tertiary">
      <div class="container">
        <a class="navbar-brand" href="/">
          <icon-solar-square-academic-cap-bold height="48" width="48" />
        </a>

        <!-- the button that will appear on mobile viewports -->
        <!-- <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button> -->

        <!-- actual navbar in desktop viewport -->
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto">
            <select class="form-select bg-body-tertiary ps-3" v-model="userStore.selectedSchool">
              <option v-for="school in userStore.enrolledSchools" :key="school" :value="school">
                {{ school }}
              </option>
            </select>
          </ul>

          <div class="nav-item dropdown border rounded-pill">
            <a
              class="nav-link p-2 d-flex justify-content-center column-gap-2"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {{ userStore.name }}
              <icon-solar-user-circle-linear width="24" height="24" />
            </a>
            <ul class="dropdown-menu p-2">
              <li><a class="dropdown-item rounded" href="#">View account</a></li>
              <li><a class="dropdown-item rounded" href="#">Settings</a></li>
              <li><hr class="dropdown-divider" /></li>
              <li><a class="dropdown-item text-danger rounded" href="#">Log out</a></li>
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
