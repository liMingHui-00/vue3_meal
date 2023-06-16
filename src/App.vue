<script setup>
import Meals from "@/components/Meals/Meals.vue";
import CartBar from "./components/Cart/CartBar.vue";
import MealsFilter from "./components/MealsFilter/MealsFilter.vue";
import { useMealsStore } from "./store/meals";
const meals = useMealsStore();
</script>
<template>
  <!-- < to="http://localhost:3000/">退出</>&nbsp; -->
  <!-- <button onclick="window.location.href='http://localhost:3000/'"></button> -->
  <button><a href="http://localhost:3000/">退出登录</a></button>
  <router-link to="/gerenxinxi">
    <svg
      class="elementplus"
      viewBox="0 0 1024 1024"
      xmlns="http://www.w3.org/2000/svg"
      data-v-ea893728=""
    >
      <path
        fill="currentColor"
        d="M512 512a192 192 0 1 0 0-384 192 192 0 0 0 0 384zm0 64a256 256 0 1 1 0-512 256 256 0 0 1 0 512zm320 320v-96a96 96 0 0 0-96-96H288a96 96 0 0 0-96 96v96a32 32 0 1 1-64 0v-96a160 160 0 0 1 160-160h448a160 160 0 0 1 160 160v96a32 32 0 1 1-64 0z"
      ></path>
    </svg> </router-link
  >&nbsp;
  <router-view></router-view>
  <MealsFilter></MealsFilter>
  <Meals :desc="true" :meals="meals.filterMeals"></Meals>
  <CartBar></CartBar>
</template>

<style scoped>
.elementplus {
  height: 58px;
  color: rgb(184, 184, 184);
  position: fixed;
  right: -9px;
  top: 50px;
}
</style>
