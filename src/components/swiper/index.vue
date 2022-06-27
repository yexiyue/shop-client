<template>
  <view class="swiper">
    <swiper indicator-dots autoplay circular duration="1500" interval="3000">
      <swiper-item >
        <image class="swiper-img" src="@/static/2051770.jpg" />
      </swiper-item>
       <swiper-item>
        <image class="swiper-img" src="@/static/2052007.jpg" />
      </swiper-item>
       <swiper-item>
        <image class="swiper-img" src="@/static/2052875.jpg" />
      </swiper-item>
    </swiper>
  </view>
</template>

<script lang="ts" setup>
const props = defineProps();
</script>

<style scoped>
swiper{
  width: 100%;
  height: 400rpx;
}
swiper-item image{
  width: 100%;
  height: 400rpx;
}
</style>
