<template>
  <view class="index">
    <!-- 顶部轮播图 -->
    <IndexSwiper></IndexSwiper>
    <!-- 推荐 -->
    <Recommend></Recommend>
    <!-- 猜你喜欢 -->
    <Card></Card>
    <Card name="推荐店铺"></Card>
    <CommodityList></CommodityList>
  </view>
</template>

<script setup lang="ts">
import IndexSwiper from '@/components/swiper/index.vue'
import Recommend from '@/components/recommend/index.vue'
import Card from '@/components/card/index.vue'
import CommodityList from '@/components/commodityList/index.vue'
</script>

<style scoped>

</style>
