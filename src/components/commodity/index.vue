<template>
  <view class="commodity">
    <!-- 单个商品组件 -->
    <view class="commodity-item" v-for="item in commodityList" :key="item.id">
      <image :src="item.imgUrl" />
      <view>
        <text class="commodity-name">{{item.name}}</text>
      </view>
      <view>
        <text class="pprice">￥{{item.pprice}}</text>
        <text class="oprice">￥{{item.oprice}}</text>
      </view>
      <text class="discount">{{item.discount}}折</text>
    </view>
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
  ]
});
</script>

<style lang="less" scoped>
.commodity {
  display: flex;
  flex-wrap: wrap;
  .commodity-item {
    width: 375rpx;
    padding-bottom: 20rpx;
    text-align: center;
    image {
      width: 100%;
      height: 375rpx;
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
      font-size: 24rpx;
      color: #999;
    }
    .discount {
      border-radius: 4rpx;
      border: 1px solid #ff3333;
      padding: 2rpx 10rpx;
      font-size: 20rpx;
      color: #ff3333;
    }
  }
}
</style>
