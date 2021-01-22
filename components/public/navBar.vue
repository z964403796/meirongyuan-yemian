<template>
<view class="toBar" >
  <block >
	  <image src="/static/images/fanhui_img@2x.png"  class="left_img"  @tap="toback"></image>
  </block>

</view>
</template>

<script>
const app = getApp();

export default {
  data() {
    return {
    };
  },

  components: {},
  methods: {
    toback() {
      uni.navigateBack({
        delta: 1
      });
    }

  }
};
</script>
<style lang="scss" scoped>

.toBar{
  width: 100vw;
  position: absolute;
  display: flex;
  align-items: center;
  /*  #ifdef  H5 */
   height: 88upx;
  
  /*  #endif  */
  
  /*  #ifdef  APP-PLUS */
    height: 180upx;
   /*  #endif  */
 
}


.left_img{
  width: 52upx !important;
  height: 52upx !important;
  position: absolute;
  padding: 10upx;
  left: 20upx;
  top: 50%;
  transform: translateY(-50%);
  z-index: 100;
  border-radius: 50%;
}

</style>