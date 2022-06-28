<template>
  <view class="shop">
    <!-- 一个店铺 -->
    <view class="shop-item">
      <view class="shop-big">
        <image  src="@/static/2051770.jpg"/>
      </view>
      <GoodsScroll item-width="200rpx" big-image-height="200rpx" name-size="20rpx"></GoodsScroll>
    </view>

    <!-- 一个店铺 -->
    <view class="shop-item">
      <view class="shop-big">
        <image  src="@/static/2051770.jpg"/>
      </view>
      <GoodsScroll item-width="200rpx" big-image-height="200rpx" name-size="20rpx"></GoodsScroll>
    </view>
    
  </view>
</template>

<script lang="ts" setup>
import GoodsScroll from '@/components/goods-scroll/index.vue'
</script>

<style lang="less" scoped>
.shop-item{
  .shop-big{
    width: 100%;
    height: 375rpx;
    image{
    width: 100%;
    height: 375rpx;
    }
  }
}
</style>