<template>
  <view class="index">

    <scroll-view scroll-x class="topBar" :scroll-into-view="topIndexView">
      <view :id="'top'+index" v-for="item,index in topBar" :key="index" @click="changeTopBar(index)">
        <text :class="[index==topBarIndex?'f-active-color':'f-color']">{{item.name}}</text>
      </view>
    </scroll-view>

    <swiper :current="topBarIndex" @change="onChangeBar" :style="{height:HomeDataHeight+'px'}">
      <swiper-item v-for="item,index in topBar" :key="index">
        <view class="home-data" v-if="index==0">
          <!-- 推荐模板 -->
          <!-- 顶部轮播图 -->
          <IndexSwiper></IndexSwiper>
          <!-- 推荐 -->
          <Recommend></Recommend>
          <!-- 猜你喜欢 -->
          <Card></Card>
          <Card name="推荐店铺"></Card>
          <CommodityList></CommodityList>
        </view>
        <view class="home-data" v-else>
          <!-- 其他模板 -->
          <!-- 运动户外 -->
          <Banner></Banner>
          <Icons></Icons>
          <Card name="热销爆品"></Card>
          <Hot></Hot>
          <Card name="推荐店铺"></Card>
          <Shop></Shop>
          <Card name="为您推荐"></Card>
          <CommodityList></CommodityList>
        </view>
      </swiper-item>
    </swiper>


  </view>
</template>

<script setup lang="ts">
import IndexSwiper from '@/components/swiper/index.vue'
import Recommend from '@/components/recommend/index.vue'
import Card from '@/components/card/index.vue'
import CommodityList from '@/components/commodityList/index.vue'
import Banner from '@/components/banner/index.vue'
import Icons from '@/components/Icons/index.vue'
import Hot from '@/components/hot/index.vue'
import Shop from '@/components/shop/index.vue'
import { reactive ,toRefs} from 'vue'
import { onReady } from '@dcloudio/uni-app'

const data=reactive({
  //顶栏导航索引
  topBarIndex:0,
  //设置跟随
  topIndexView:'top0',
  topBar:[
    {name:'推荐'},
    {name:'运动户外'},
    {name:'服饰内衣'},
    {name:'鞋靴箱包'},
    {name:'美妆个护'},
    {name:'食品母婴'}
  ],
  //内容块高度
  HomeDataHeight:0
})
const {topBar,topBarIndex,topIndexView,HomeDataHeight}=toRefs(data)
const changeTopBar=(index:number)=>{
  if(topBarIndex.value==index)return
  topBarIndex.value=index
  topIndexView.value='top'+index
}
const onChangeBar=(e:SwiperChangeObject)=>{
  changeTopBar(e.detail.current)
}

//给swiper设置高度
onReady(()=>{
  const view=uni.createSelectorQuery().select('.home-data')
  view.boundingClientRect(data => {
    HomeDataHeight.value=data.height!
  }).exec();
})
</script>

<style scoped lang="less">
.index{
  height: 100vh;
  overflow-y: auto;
}
.topBar{
  width: 100%;
  white-space: nowrap;
  height: 80rpx;
  view{
    display: inline-block;
    padding: 10rpx 30rpx;
    font-size: 32rpx;
  }
}
.f-active-color{
  padding: 10rpx 0;
  border-bottom: 6rpx solid var(--font-active-color);
}
</style>
