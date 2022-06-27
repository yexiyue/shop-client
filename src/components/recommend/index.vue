<template>
  <view class="recommend bg-color">
    <!-- 卡片区域 -->
    <view class="recommend-item">
      <image src="@/static/2021812.jpg" class="item-big"/>
      <view class="item-small">
        <image src="@/static/2051770.jpg" class="item-image"/>
        <image src="@/static/2052007.jpg" class="item-image"/>
        <image src="@/static/2052875.jpg" class="item-image"/>
      </view>
    </view>
    
    <view class="recommend-item">
      <image src="@/static/2021812.jpg" class="item-big"/>
      <view class="item-small">
        <image src="@/static/2051770.jpg" class="item-image"/>
        <image src="@/static/2052007.jpg" class="item-image"/>
        <image src="@/static/2052875.jpg" class="item-image"/>
      </view>
    </view>

  </view>
</template>

<script lang="ts" setup>
  const props = defineProps();
</script>

<style scoped>
.recommend{
  padding: 20rpx;
}
.recommend-item{
  display: flex;
  flex-direction: column;
  border-radius: 20rpx;
  border:2rpx solid #CCC;
  overflow: hidden;
  margin:20rpx 0;
}
.recommend-item .item-small{
  width: 100%;
  height: 240rpx;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.item-big{
  width: 100%;
  height:300rpx;
}
.item-image{
  width: 33.33%;
  height: 240rpx;
}
</style>