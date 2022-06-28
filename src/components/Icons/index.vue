<template>
  <view class="Icons">
    <view class="icons-item" v-for="i in 8" :key="i">
      <image src="../../static/2051770.jpg" mode="acceptFill" />
      <text class="f-color">运动户外</text>
    </view>
  </view>
</template>

<script lang="ts" setup>
const props = defineProps();
</script>

<style lang="less" scoped>
.Icons{
  display: flex;
  flex-wrap: wrap;
  .icons-item{
    width: 25%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 20rpx;
    image{
      width: 110rpx;
      height: 110rpx;
    }
  }
}
</style>
