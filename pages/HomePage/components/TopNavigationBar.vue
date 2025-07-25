<template name="TopNavigationBar">
	<view class='bar-layout'>
		<view class="bar-layout-top">
			<scroll-view scroll-x="true" class="bar-layout-title">
				<view v-for="(item,index) in navList" class="nav-item">
					{{item}}
				</view>
			</scroll-view>
		</view>
		<view class="bar-layout-search">
			<uni-search-bar @confirm="" @input="" class="search-box" :radius="100" />
			<uni-icons type="wallet-filled" class="icon-box" size="28"></uni-icons>
			<uni-icons type="headphones" class="icon-box" size="28"></uni-icons>
		</view>
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue';
	const navList = ref(['推荐', '乐馆', '听书', 'AI唱', '会员', '金币', 'AI作歌', '明星博客', 'Dolby', '音乐人', '演出ing', '儿童', '原创', '校园',
		'睡眠疗愈', '疗愈', '博客'
	]);
</script>

<style lang='scss'>
	.bar-layout {
		display: inline;
	}

	.bar-layout-top {
		height: 20px;
	}

	.bar-layout-title {
		width: 100%;
		white-space: nowrap;
	}

	.nav-item {
		display: inline-block;
		padding: 0 10px;
	}

	.bar-layout-search {
		display: flex;
		align-items: center;
		justify-content: end;
		width: 100%;
		height: 50px;
	}

	.search-box {
		flex: 10;
	}

	.icon-box {
		flex: 1;
		text-align: center;
	}
</style>