<template>
	<view class="header">
		<view class="my">
			我的
		</view>
		<view >
			<uni-icons class="message-icon" type="email" size="30" @click="goToMessagePage"></uni-icons>
		</view>
		
	<view >
		<uni-icons class="setting-icon" type="gear" size="30" @click="goToSettingPage"></uni-icons>
	</view>
		
	
	</view>
	<view class="container">
		<view class="searchpic">
			<view class="search-icon">
					<icon type="search" size="18" color="#999"/>
			</view>
			<input 
				type="text"  
				placeholder="请输入内容" 
				class="search-input" 
				placeholder-class="placeholder"
			/>
		</view>
	</view>
	<view class="box">
		<view class="user-container">
			<image src="/static/头像.jpg" mode="aspectFill" class="circle"></image>
			<text class="user">用户名</text>
			<uni-icons class="exit-icon" type="home-filled" size="14"></uni-icons>
			<uni-icons class="vip-icon" type="vip" size="16"></uni-icons>
			<uni-icons class="medal-icon" type="medal" size="16"></uni-icons>
			<text class="fan">关注</text>
		</view>
		<view class="wallet-container">
			<navigator url="/pages/ProfilePage/Wallet/Wallet">
				<uni-icons class="wallet-icon" type="wallet-filled" size="20"></uni-icons>
				<text class="wallet-text">提现</text>
			</navigator>
			
		</view>
		<view class="vipfill-container">
			<navigator url="/pages/ProfilePage/Vip/Vip">
				<uni-icons class="vipfill-icon" type="vip-filled" size="20"></uni-icons>
			    <text class="vipfill-text">会员</text>
			</navigator>
		</view>
		<view class="shop-container">
			<navigator url="/pages/ProfilePage/Shop/Shop">
				<uni-icons class="shop-icon" type="shop-filled" size="20"></uni-icons>
			    <text class="shop-text">装扮</text>
			</navigator>
		</view>
		<view class="calendar-container">
			<navigator url="/pages/ProfilePage/Calendar/Calendar">
				<uni-icons class="calendar-icon" type="calendar-filled" size="20"></uni-icons>
			    <text class="calendar-text">日签</text>
			</navigator>
		</view>
	</view>
	
	<view class="box2">
		<view class="collect-container">
			<navigator url="/pages/ProfilePage/Collect/Collect">
					<uni-icons class="collect-icon" type="heart-filled" size="30"></uni-icons>
			</navigator>
			<text class="collect-text">收藏</text>
		</view>
		<view class="local-container">
			<navigator url="/pages/ProfilePage/Local/Local">
				<uni-icons class="local-icon" type="download-filled" size="30"></uni-icons>
			</navigator>
				<text class="local-text">本地</text>
		</view>
		<view class="voice-container">
			<navigator url="/pages/ProfilePage/Voice/Voice">
				<uni-icons class="voice-icon" type="mic-filled" size="30"></uni-icons>
			</navigator>
			<text class="voice-text">有声</text>
		</view>
		<view class="cart-container">
			<navigator url="/pages/ProfilePage/Cart/Cart">
					<uni-icons class="cart-icon" type="cart-filled" size="30"></uni-icons>
			</navigator>
			<text class="cart-text">已购</text>
		</view>
	</view>
	
</template>

<script>
	export default {
		methods: {
			goToMessagePage() {
				uni.navigateTo({
					url: '/pages/ProfilePage/Massage/Massage'
				});
			},
			goToSettingPage() {
				uni.navigateTo({
					url: '/pages/ProfilePage/Setting/Setting'
				});
			}
		}
	}
</script>

<style>
	.header {
		display: flex;
		justify-content: space-between;
	}
	.my{
		padding:20px 0 0 20px;
		font-family: "黑体";
		color: black;
		font-size: 17px;
		font-weight: bold;
	}
	.message-icon {
		position: absolute;
		font-size: 20px;
		padding: 16px 0 0 260px;
	}
	.setting-icon{
		position: absolute;
		font-size: 20px;
		padding: 16px 0 0 300px;
	}
	.container{
		padding: 20px;
	}
	.searchpic{
		position:relative;
		display:flex;
		align-items: center;
	}
	.search-icon {
		position: absolute;
		top: 9px;
		left: 11px;
		z-index: 1;
		font-size: 10px;
		color: #ccc;
	}
	.search-input{
		width: 100%;
		height:70rpx;
		background: #f5f5f5;
		border-radius: 35rpx;
		padding: 0 20rpx 0 70rpx;
		font-size: 15px;
		font-family: "黑体";
		box-sizing: border-box;
	}
	.placeholder{
		color: #ccc;
	}
	.box{
		background: #f5f5f5;
		width:80%;
		margin-left: 20px;
		height:80px;
		border-radius: 2px;
		padding: 10px 14px 22px 20px;
	}
	.user-container {
	  display: flex;
	  align-items: center; 
	}
	.circle{
		width:100rpx;
		height: 100rpx;
		border-radius: 50%;
		overflow: hidden;
		margin-top: 5px;
		image{
			width:100%;
			height: 100%;
		}
	}
	.user{
		position: relative;
		font-size: 6px;
		font-family: "黑体";
		font-weight: bold;
		margin-top: -30px;
		margin-left: 10px;
	}
	.exit-icon{
		position: relative;
		margin-top: -30px;
		margin-left: 10px;
	}
	.vip-icon{
		position: relative;
		margin-top: 10px;
		margin-left: -56px;
	}
	.medal-icon{
		position: relative;
		margin-top: 10px;
		margin-left: 10px;
	}
	.fan{
		font-size: 6px;
		font-family: "黑体";
		font-weight: bold;
		margin-top: 14px;
		margin-left: 150px;
	}
	.wallet-container {
	  position: absolute;
	  top: 190px; 
	  left: 40px; 
	  display: flex;
	  align-items: center;
	}
	.wallet-text{
	  font-size: 12px;
	  font-family: "黑体";
	  margin-left: 5px; 
	}
	.wallet-icon {
	  margin: 0; 
	}
	.vipfill-container{
		position: absolute;
		top: 190px; 
		left: 120px; 
		display: flex;
		align-items: center;
	}
	.vipfill-text{
	  font-size: 12px;
	  font-family: "黑体";
	  margin-left: 5px; 
	}
	.vipfill-icon{
		margin: 0; 
	}
	.shop-container{
		position: absolute;
		top: 190px; 
		left: 200px; 
		display: flex;
		align-items: center;
	}
	.shop-text{
		font-size: 12px;
		font-family: "黑体";
		margin-left: 5px;
	}
	.shop-icon{
		margin: 0; 
	}
	.calendar-container{
		position: absolute;
		top: 190px; 
		left: 280px; 
		display: flex;
		align-items: center;
	}
	.calendar-text{
		font-size: 12px;
		font-family: "黑体";
		margin-left: 5px;
	}
	.calendar-icon{
		margin: 0;
	}
.collect-container {
  position: absolute;
  top: 240px;
  left: 40px;
  display: flex;
  flex-direction: column; 
  align-items: center;  
  justify-content: center; 
}
.collect-text {
  font-size: 10px;
  margin-top: 4px; 
  font-family: "黑体";
}
.local-container {
  position: absolute;
  top: 240px;     
  left: 130px;   
  display: flex;
  flex-direction: column;  
  align-items: center;     
  justify-content: center; 
}
.local-text {
  font-size: 10px;
  margin-top: 4px; 
  font-family: "黑体";
}
.voice-container{
	position: absolute;
	top: 240px;
	left: 220px;
	display: flex;
	flex-direction: column; 
	align-items: center;  
	justify-content: center; 
}
.voice-text{
	font-size: 10px;
	margin-top: 4px; 
	font-family: "黑体";
}
	
.cart-container{
	position: absolute;
	top: 240px;
	left: 300px;
	display: flex;
	flex-direction: column; 
	align-items: center;  
	justify-content: center; 
}
.cart-text{
	font-size: 10px;
	margin-top: 4px; 
	font-family: "黑体";
}
</style>