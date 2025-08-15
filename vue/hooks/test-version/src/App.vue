<script setup>
// mvvm 响应式，数据绑定，状态管理，生命周期，hooks
// 使用自定义的useMouse hook来跟踪鼠标位置
import { ref, onMounted, onUnmounted } from 'vue';  // 响应式
import Todos from './components/Todos.vue';
// import MouseTracker from './components/MouseTracker.vue';

export default {
  name: 'App',
  components: {
    Todos,
    // MouseTracker
  }
};
</script>
// 模板
<template>
  <div id="app">
    <h1>Vue Hooks Demo</h1>
    <Todos />
    <!-- <MouseTracker /> -->
  </div>
</template>
// 样式
<style scoped>

</style>