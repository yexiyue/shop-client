<script setup lang="ts">
import { onLaunch, onShow, onHide } from "@dcloudio/uni-app";
onLaunch(() => {
  console.log("App Launch");
});
onShow(() => {
  console.log("App Show");
});
onHide(() => {
  console.log("App Hide");
});
</script>
<style>
/* 全局公共样式 */
@import url(@/common/uni.css);
@import url(@/common/iconfont.css);
@import url(@/common/common.css);
</style>
