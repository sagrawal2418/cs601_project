<template>

   <Sidebar />
  <div :style="{ 'margin-left': sidebarWidth }">
    <router-view />
  </div>
    <!-- Footer Section Start -->
  <footer>
    <div class="text">
      <span>
        Created By
        <a href="#">Sandeep Agrawal</a>
        | &#169; 2021 All Rights Reserved
      </span>
    </div>
  </footer>
</template>

<script>
import Sidebar from '@/components/Sidebar'
import { sidebarWidth } from '@/components/state'
export default {
  components: { Sidebar },
  setup() {
    return { sidebarWidth }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

/* Footer CSS */
footer {
  background: #2b4aa5;
  padding: 15px 0;
  text-align: center;
  font-family: 'Poppins', sans-serif;
}
footer .text span {
  font-size: 17px;
  font-weight: 400;
  color: #fff;
}
footer .text span a {
  font-weight: 500;
  color: #fff;
}
footer .text span a:hover {
  text-decoration: underline;
}

#app {
  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: black;
}

#nav a.router-link-exact-active {
  color: #6c62d9;
}
</style>
