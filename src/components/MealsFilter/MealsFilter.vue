<script setup>
import { useMealsStore } from "../../store/meals";
import PersonalCenter from "../PersonalCenter/PersonalCenter.vue";

const meals = useMealsStore();
</script>
<template>
  <!-- <PersonalCenter></PersonalCenter> -->
  <div class="filter">
    <div class="filter-inner">
      <input
        v-model="meals.keyword"
        class="filter-input"
        type="text"
        placeholder="请输入关键字"
      />

      <!-- <button
        onclick="window.location.href='../../../index2.html'"
        type="button"
        id="add"
      >
        <PersonalCenter></PersonalCenter>
      </button> -->
      <!-- 
      <el-button
        type="primary"
        @click="PersonalCenter"
        style="background-color: goldenrod"
        round
      >
        <svg
          viewBox="0 0 1024 1024"
          xmlns="http://www.w3.org/2000/svg"
          data-v-ea893728=""
        >
          <path
            fill="currentColor"
            d="M512 512a192 192 0 1 0 0-384 192 192 0 0 0 0 384zm0 64a256 256 0 1 1 0-512 256 256 0 0 1 0 512zm320 320v-96a96 96 0 0 0-96-96H288a96 96 0 0 0-96 96v96a32 32 0 1 1-64 0v-96a160 160 0 0 1 160-160h448a160 160 0 0 1 160 160v96a32 32 0 1 1-64 0z"
          ></path>
        </svg>
        个人中心
      </el-button> -->

      <i class="ri-search-line"></i>
    </div>
  </div>
</template>

<style scoped>
.filter {
  padding: 20rem 40rem;
  border-bottom: 1px solid #e6e6e6;
}

.filter-inner {
  display: flex;
  align-items: center;
  height: 80rem;
  position: relative;
}

.filter-input {
  background-color: rgb(242, 242, 242);
  border: none;
  width: 100%;
  height: 100%;
  border-radius: 40rem;
  outline: none;
  padding: 0 40rem 0 80rem;
}

.filter-inner i {
  position: absolute;
  color: rgb(184, 184, 184);
  font-size: 30rem;
  left: 30rem;
}
</style>
