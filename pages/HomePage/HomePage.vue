<template>
	<view>
		<view class="home-layout">
			<view class="top">
				<TopNavigationBar></TopNavigationBar>
			</view>
			<view class="middle">
				<PageContent></PageContent>
			</view>
		</view>
	</view>
</template>

<script setup>
	import TopNavigationBar from './components/TopNavigationBar.vue';
	import PageContent from './components/PageContent.vue';
</script>

<style lang="scss">
.home-layout{
	display: flex;
	flex-direction: column;
}
</style>