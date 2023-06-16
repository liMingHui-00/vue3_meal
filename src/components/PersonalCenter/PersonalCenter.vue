<template>
  <div class="mask">
    <p v-if="loading">正在加载中...</p>
    <ul v-else>
      <h3 v-for="item in dataList" :key="item.id">
        <!-- <h3>hahah</h3> -->
        <div class="PersonalCenter">
          <div class="background">
            <div class="transbox">
              <button id="btn">
                <a href="http://127.0.0.1:5173"> X</a>
              </button>
              <h1>个人信息</h1>
              <h3 class="ex1">用户名： {{ item.username }}</h3>
              <h3 class="ex1">地址： {{ item.address }}</h3>
              <h3 class="ex1">联系电话：{{ item.phone }}</h3>
            </div>
          </div>
        </div>
      </h3>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      dataList: [],
      loading: true,
      length: 0,
    };
  },
  async mounted() {
    try {
      const response = await axios.get("http://localhost:3000/user/findAll"); //根据id查询
      // console.log(response);
      this.dataList = response.data;
      console.log(response.data);
      // this.length = response.data.length;
      // console.log(response.data.length);
    } catch (error) {
      console.error(error);
    } finally {
      this.loading = false;
    }
  },
};
</script>
<style scoped>
.PersonalCenter {
  background-image: url(/images/img/aa.png);
  background-size: cover;
}
div.transbox {
  width: 1050px;
  height: 1080px;
  margin: 90px 90px;
  opacity: 0.8;
}

h1,
h3 {
  text-align: center;
  margin-top: 5px;
  color: #000;
  font-size: 15rem;
}
.mask {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: white;
  opacity: 1;
  filter: alpha(opacity=10);
  z-index: 1000000;
}
#btn {
  position: absolute;
  left: 1050px;
}
</style>
