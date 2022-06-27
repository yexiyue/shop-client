<template>

  <!-- 卡片头部文字 -->
  <view class="card-name">
    <view>—</view>
    <slot>
      <view>{{name}}</view>
    </slot>
    <view>—</view>
  </view>

</template>

<script lang="ts" setup>
type PropsType={
  name?:string
}
const props = withDefaults(defineProps<PropsType>(),{
  name:'猜你喜欢'
})
</script>

<style lang="less" scoped>
.card-name{
  display: flex;
  justify-content: center;
  padding: 20rpx 0;
  font-weight: bold;
  view:nth-child(2){
    margin:0 20rpx;
    font-size: 32rpx;
  }
}
</style>