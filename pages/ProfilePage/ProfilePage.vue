<template>
	<view class="header">
		<view class="my">
			我的
		</view>
	 <text class="message-icon">✉️</text>
	<text class="setting-icon">⚙️</text>
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
</template>

<script>
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
</style>