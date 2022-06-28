<template>
  <view class="goods-scroll">
    <scroll-view scroll-x>
        <!-- 单个商品组件 -->
        <view class="commodity-item" :style="{width:itemWidth}" v-for="item in commodityList" :key="item.id">
          <image :style="{height:bigImageHeight}" :src="item.imgUrl" />
          <view>
            <text class="commodity-name" :style="{fontSize:nameSize}">{{item.name}}</text>
          </view>
          <view>
            <text class="pprice" :style="{fontSize:ppriceSize}">￥{{item.pprice}}</text>
            <text class="oprice" :style="{fontSize:opriceSize}">￥{{item.oprice}}</text>
          </view>
          <text class="discount" :style="{fontSize:discountSize}">{{item.discount}}折</text>
        </view>
      </scroll-view>
  </view>
</template>

<script lang="ts" setup>
type PropsType = {
  commodityList?: {
    id: number;
    imgUrl: string;
    name: string;
    pprice: string;
    oprice: string;
    discount: number;
  }[];
  itemWidth?:string;
  bigImageHeight?:string;
  nameSize?:string;
  opriceSize?:string;
  ppriceSize?:string;
  discountSize?:string;
};
const props = withDefaults(defineProps<PropsType>(), {
  commodityList:()=>[
    {
      id:1,
      imgUrl:'../../static/2051770.jpg',
      name:'大的午饭不趁风使柁大的午饭不趁风使柁大的午饭不趁风使柁大的午饭不趁风使柁大的午饭不趁风使柁',
      pprice:"211",
      oprice:"985",
      discount:5.2
    },
    {
      id:1,
      imgUrl:'../../static/2030898.jpg',
      name:'大的午饭不趁风使柁大的午饭不趁风使柁大的午饭不趁风使柁大的午饭不趁风使柁大的午饭不趁风使柁',
      pprice:"211",
      oprice:"985",
      discount:5.2
    },
    {
      id:1,
      imgUrl:'../../static/2051770.jpg',
      name:'大的午饭不趁风使柁大的午饭不趁风使柁大的午饭不趁风使柁大的午饭不趁风使柁大的午饭不趁风使柁',
      pprice:"211",
      oprice:"985",
      discount:5.2
    },
    {
      id:1,
      imgUrl:'../../static/2030898.jpg',
      name:'大的午饭不趁风使柁大的午饭不趁风使柁大的午饭不趁风使柁大的午饭不趁风使柁大的午饭不趁风使柁',
      pprice:"211",
      oprice:"985",
      discount:5.2
    },
    {
      id:1,
      imgUrl:'../../static/2051770.jpg',
      name:'大的午饭不趁风使柁大的午饭不趁风使柁大的午饭不趁风使柁大的午饭不趁风使柁大的午饭不趁风使柁',
      pprice:"211",
      oprice:"985",
      discount:5.2
    },
    {
      id:1,
      imgUrl:'../../static/2030898.jpg',
      name:'大的午饭不趁风使柁大的午饭不趁风使柁大的午饭不趁风使柁大的午饭不趁风使柁大的午饭不趁风使柁',
      pprice:"211",
      oprice:"985",
      discount:5.2
    },
    {
      id:1,
      imgUrl:'../../static/2030898.jpg',
      name:'大的午饭不趁风使柁大的午饭不趁风使柁大的午饭不趁风使柁大的午饭不趁风使柁大的午饭不趁风使柁',
      pprice:"211",
      oprice:"985",
      discount:5.2
    }
  ],
  itemWidth:'375rpx',
  bigImageHeight:'375rpx',
  nameSize:'26rpx',
  opriceSize:'24rpx',
  ppriceSize:'28rpx',
  discountSize:'20rpx'
});
</script>

<style lang="less" scoped>
  scroll-view{
    width: 100%;
    white-space: nowrap;
  }
  .commodity-item {
    /* width: 375rpx; */
    display: inline-block;
    padding-bottom: 20rpx;
    text-align: center;
    image {
      width: 100%;
      /* height: 375rpx; */
    }
    .commodity-name {
      text-overflow: ellipsis;
      display: -webkit-box;
      overflow: hidden;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      word-break: break-all;
      color: #333;
      padding: 6rpx 20rpx;
    }
    .oprice {
      text-decoration: line-through;
      /* font-size: 24rpx; */
      color: #999;
    }
    .discount {
      border-radius: 4rpx;
      border: 1px solid #ff3333;
      padding: 2rpx 10rpx;
      /* font-size: 20rpx; */
      color: #ff3333;
    }
  }
</style>