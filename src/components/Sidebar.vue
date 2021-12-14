<script>
import SidebarLink from './SidebarLink'
import { collapsed, toggleSidebar, sidebarWidth } from './state'

export default {
  props: {},
  components: { SidebarLink },
  setup() {
    return { collapsed, toggleSidebar, sidebarWidth }
  },
   watch: {
    '$route' () {
      this.collapsed = true
    }
  },
  methods:{
   goToHome(){
   this.$router.push('/'); 
      }
  }
}
</script>

<template>
  <aside class="sidebar" :style="{ width: sidebarWidth }">
    <h1 class="sidebar_name" @click="goToHome()">
      <span v-if="collapsed">
        <div>S</div>
        <div>A</div>
      </span>
    </h1>

    <SidebarLink to="/" icon="fas fa-home">Home</SidebarLink>
    <SidebarLink to="/projects" icon="fas fa-project-diagram">Projects</SidebarLink>
    <SidebarLink to="/experience" icon="fas fa-briefcase">
      Experience
    </SidebarLink>
    <SidebarLink to="/contact" icon="fas fa-id-card">Contact</SidebarLink>

    <span
      class="collapse-icon"
      :class="{ 'rotate-180': collapsed }"
      @click="toggleSidebar">
      <i class="fas fa-angle-double-left" />
    </span>
  </aside>
</template>

<style>
:root {
  --sidebar-bg-color: #2b4aa5;
  --sidebar-item-hover: #6c62d9;
  --sidebar-item-active: #4e4ccb;
}
</style>

<style scoped>
.sidebar {
  color: white;
  background-color: var(--sidebar-bg-color);
  float: left;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  bottom: 0;
  padding: 0.5em;
  transition: 0.3s ease;
  display: flex;
  flex-direction: column;
}

.sidebar h1 {
  height: 2.5em;
}

.collapse-icon {
  position: absolute;
  bottom: 0;
  padding: 0.75em;
  color: rgba(255, 255, 255, 0.7);
  transition: 0.2s linear;
}

.rotate-180 {
  transform: rotate(180deg);
  transition: 0.2s linear;
}

.sidebar_name{
  margin-bottom: 10px;
  cursor: pointer;

}
</style>
