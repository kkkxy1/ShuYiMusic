<template>
	<view class="all">
		<view class="header">
			<view class="my">
				我的
			</view>
			<view class="icons">
				<navigator url="/pages/ProfilePage/Massage/Massage">
					<uni-icons class="message-icon" type="email" size="30"></uni-icons>
				</navigator>
				<navigator url="/pages/ProfilePage/Setting/Setting">
					<uni-icons class="setting-icon" type="gear" size="30"></uni-icons>
				</navigator>
			</view>
		</view>
		<view class="container">
			<view class="searchpic">
				<view class="search-icon">
					<icon type="search" size="18" color="#999" />
				</view>
				<input type="text" placeholder="请输入内容" class="search-input" placeholder-class="placeholder" />
			</view>
		</view>
		<navigator url="/pages/ProfilePage/Exit/Exit">
			<uni-icons class="exit-icon" type="home-filled" size="14"></uni-icons>
		</navigator>
		<view class="box">
			<view class="user-container">
				<image src="/static/头像.jpg" mode="aspectFill" class="circle"></image>
				<text class="user">用户名</text>

				<uni-icons class="vip-icon" type="vip" size="16"></uni-icons>
				<uni-icons class="medal-icon" type="medal" size="16"></uni-icons>
				<text class="fan">关注</text>
				<view>
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
	</view>
	
	<view class="box3">
		<navigator url="/pages/ProfilePage/Zuijinbofang/Zuijinbofang">
			最近播放
			<uni-icons class="right-icon" type="right" size="15"></uni-icons>
		</navigator>
	</view>
	
  <view class="box4">
    <scroll-view class="music" scroll-x="true" @scroll="scroll" scroll-left="120" style="white-space: nowrap;">
        <view id="demo1" class="Yinyue">
			<navigator url="/pages/ProfilePage/Yiboyinyue/Yiboyinyue">
				<image src="/static/mp1.png" mode="aspectFill"></image>
			</navigator>            
        </view>
		
        <view id="demo2" class="Yinyue">
			<navigator url="/pages/ProfilePage/Yiboyinyue/Yiboyinyue">
				<image src="/static/mu2.jpg" mode="aspectFill"></image>
			</navigator>
        </view>
		
		<view id="demo3" class="Yinyue">
			<navigator url="/pages/ProfilePage/Yiboyinyue/Yiboyinyue">
				<image src="/static/mu3.jpg" mode="aspectFill"></image>
			</navigator>
		</view>
		
		<view id="demo4" class="Yinyue">
			<navigator url="/pages/ProfilePage/Yiboyinyue/Yiboyinyue">
				<image src="/static/mu4.jpg" mode="aspectFill"></image>
			</navigator>
		</view>
		
		<view id="demo5" class="Yinyue">
			<navigator url="/pages/ProfilePage/Yiboyinyue/Yiboyinyue">
				<image src="/static/mu5.jpg" mode="aspectFill"></image>
			</navigator>
		</view>
		
		<view id="demo6" class="Yinyue">
			<navigator url="/pages/ProfilePage/Yiboyinyue/Yiboyinyue">
				<image src="/static/mu6.jpg" mode="aspectFill"></image>
			</navigator>
		</view>
		
		<view id="demo7" class="Yinyue">
			<navigator url="/pages/ProfilePage/Yiboyinyue/Yiboyinyue">
				<image src="/static/头像.jpg" mode="aspectFill"></image>
			</navigator>
		</view>
		
    </scroll-view>
  </view>
		
	<view class="box5">
		<navigator url="/pages/ProfilePage/Zijiangedan/Zijiangedan">
			自建歌单
		</navigator>
	</view>
		
	<view class="box6">
		<navigator url="/pages/ProfilePage/Shoucanggedan/Shoucanggedan">
			收藏歌单
		</navigator>
	</view>	
	
	<view class="icon1">
		<navigator url="/pages/ProfilePage/Add/Add">
			<uni-icons class="plusempty-icon" type="plusempty" size="15"></uni-icons>
		</navigator>
	</view>
	
	<view class="icon2">
		<navigator url="/pages/ProfilePage/Gedandaoru/Gedandaoru">
			<uni-icons class="upload-icon" type="upload" size="15"></uni-icons>
		</navigator>	
	</view>
	
	<view class="icon3">
		<navigator url="/pages/ProfilePage/Zijianheshoucang/Zijianheshoucang">
			<uni-icons class="forward-icon2" type="forward" size="15"></uni-icons>
		</navigator>
		
	</view>
</template>

<script setup>
	
	
</script>

<style>
	.all {
		display: inline;
	}

	.header {
		display: flex;
		justify-content: space-between;
	}

	.icons {
		display: flex;
		flex-direction: row;
		padding: 0px 14px 0 0;
	}

	.my {
		padding: 3px 0 0 10px;
		font-family: "黑体";
		color: black;
		font-size: 17px;
		font-weight: bold;
	}

	.message-icon {
		font-size: 20px;
	}

	.setting-icon {
		font-size: 20px;
	}

	.container {
		padding: 3px 10px;
	}

	.searchpic {
		position: relative;
		display: flex;
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

	.search-input {
		width: 100%;
		height: 70rpx;
		background: #f5f5f5;
		border-radius: 35rpx;
		padding: 0 20rpx 0 70rpx;
		font-size: 15px;
		font-family: "黑体";
		box-sizing: border-box;
	}

	.placeholder {
		color: #ccc;
	}

	.box {
		background: #f5f5f5;
		width: 85%;
		margin-left: 10px;
		margin-top: 5px;
		height: 80px;
		border-radius: 2px;
		padding: 10px 14px 22px 20px;
	}

	.user-container {
		display: flex;
		align-items: center;
	}

	.circle {
		width: 100rpx;
		height: 100rpx;
		border-radius: 50%;
		overflow: hidden;
		margin-top: 5px;

		image {
			width: 100%;
			height: 100%;
		}
	}

	.user {
		position: relative;
		font-size: 6px;
		font-family: "黑体";
		font-weight: bold;
		margin-top: -30px;
		margin-left: 10px;
	}

	.exit-icon {
		position: absolute;
		padding: 20px 0px 0px 130px;
	}

	.vip-icon {
		position: relative;
		margin-top: 10px;
		margin-left: -36px;
	}

	.medal-icon {
		position: relative;
		margin-top: 10px;
		margin-left: 10px;
	}

	.fan {
		font-size: 6px;
		font-family: "黑体";
		font-weight: bold;
		margin-top: 14px;
		margin-left: 180px;
	}

	.wallet-container {
		position: absolute;
		top: 150px;
		left: 30px;
		display: flex;
		align-items: center;
	}

	.wallet-text {
		font-size: 12px;
		font-family: "黑体";
		margin-left: 5px;
	}

	.wallet-icon {
		margin: 0;
	}

	.vipfill-container {
		position: absolute;
		top: 150px;
		left: 120px;
		display: flex;
		align-items: center;
	}

	.vipfill-text {
		font-size: 12px;
		font-family: "黑体";
		margin-left: 5px;
	}

	.vipfill-icon {
		margin: 0;
	}

	.shop-container {
		position: absolute;
		top: 150px;
		left: 205px;
		display: flex;
		align-items: center;
	}

	.shop-text {
		font-size: 12px;
		font-family: "黑体";
		margin-left: 5px;
	}

	.shop-icon {
		margin: 0;
	}

	.calendar-container {
		position: absolute;
		top: 150px;
		left: 290px;
		display: flex;
		align-items: center;
	}

	.calendar-text {
		font-size: 12px;
		font-family: "黑体";
		margin-left: 5px;
	}

	.calendar-icon {
		margin: 0;
	}

	.collect-container {
		position: absolute;
		top: 205px;
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
		top: 205px;
		left: 133px;
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

	.voice-container {
		position: absolute;
		top: 205px;
		left: 215px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.voice-text {
		font-size: 10px;
		margin-top: 4px;
		font-family: "黑体";
	}

	.cart-container {
		position: absolute;
		top: 205px;
		left: 300px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.cart-text {
		font-size: 10px;
		margin-top: 4px;
		font-family: "黑体";
	}
	
	.box3{
		font-family: "黑体";
		margin-top: 90px;
		margin-left: 20px;
	}
	
	.right-icon{
		font-weight: bold;
		margin-left: 250px;
	}
	
	.box4 {
	    width: 100%;
	    padding: 10px;
	    box-sizing: border-box;
	    margin-top: 4px;
		margin-left: 6px;
	}
	
	.music {
	    width: 100%;
	    white-space: nowrap; 
	}
	
	.Yinyue {
	    display: inline-block;
	    width: 90px; 
	    height: 90px; 
	    margin-right: 10px; 
	    border-radius: 8px; 
	    overflow: hidden; 
	}
	
	.Yinyue navigator {
	    display: block; 
	    width: 100%;
	    height: 100%;
	}
	
	.Yinyue:active {
	  opacity: 0.8;
	  transform: scale(0.98);
	  transition: all 0.1s ease;
	}
	
	.Yinyue image {
	    width: 100%;
	    height: 100%;
	    object-fit: cover; 
	}
	
	.box5{
		width: 19%;
		padding: 10px;
		box-sizing: border-box;
		margin-top: -4px;
		margin-left: 12px;
		font-family: "黑体";
		font-size: 7px;
	}
	
	.box6{
		width: 19%;
		padding: 10px;
		box-sizing: border-box;
		margin-top: -34px;
		margin-left: 95px;
		font-family: "黑体";
		font-size: 7px;
	}
	
	.icon1{
		width: 9%;
		padding: 10px;
		box-sizing: border-box;
		margin-top: -34px;
		margin-left: 250px;
		font-family: "黑体";
		font-weight: bold;
	}
	
	.icon2{
		width: 9%;
		padding: 10px;
		box-sizing: border-box;
		margin-top: -37px;
		margin-left: 290px;
		font-family: "黑体";
		font-weight: bold;
	}
	
	.icon3{
		width: 9%;
		padding: 10px;
		box-sizing: border-box;
		margin-top: -38px;
		margin-left: 330px;
		font-family: "黑体";
		font-weight: bold;
	}
</style>