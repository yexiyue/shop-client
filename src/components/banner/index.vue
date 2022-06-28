<template>
  <view class="banner">
    <image src="../../static/2052007.jpg" mode="aspectFill"/>
  </view>
</template>

<script lang="ts" setup>
  const props = defineProps();
</script>

<style lang="less" scoped>
  .banner{
    image{
      width: 100%;
      height: 300rpx;
    }
  }
</style>