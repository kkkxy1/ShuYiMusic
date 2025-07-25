<template name="PageContent">
	<view>
		<scroll-view scroll-y="true" class="content-layout">
			<view v-for="(item,index) in contentList" style="margin-bottom: 10px;">
				<uni-card :isFull="true" :border="false" :shadow="false">
					<template v-slot:title>
						<view v-if="item.name!=='dna'" class="small-title">
							<text class="small-title-text">{{item.title}}</text>
							<uni-icons type="closeempty" size="5px"></uni-icons>
						</view>
						<view v-if="item.name==='dna'" class="small-title">
							<view style="display: flex;gap: 3px;">
								<image src="/static/logo.png" class="avatar"></image>
								<text class="small-title-text">QQ</text>
							</view>
							<view>
								<text class="small-title-text">查看我的音乐DNA</text>
								<uni-icons type="right" size="5px"></uni-icons>
							</view>
						</view>
					</template>
					<text class="uni-body">内容待填写</text>
				</uni-card>
			</view>
		</scroll-view>

	</view>
</template>

<script setup>
	import {
		onMounted,
		ref
	} from 'vue';
	import {
		onLoad
	} from '@dcloudio/uni-app';

	const scrollViewHeight = ref('100%');
	onLoad(() => {
		const res = uni.getSystemInfoSync();
		scrollViewHeight.value = `${res.windowHeight - 70}px`;
	});

	const contentList = ref([{
		name: "dna",
		title: "我的音乐DNA"
	}, {
		name: "supply",
		title: "你的歌单补给站"
	}, {
		name: "everyone",
		title: "大家都在听"
	}, {
		name: "love",
		title: "从你的红心歌曲开始探索"
	}, {
		name: "charts",
		title: "排行榜"
	}, {
		name: "vip",
		title: "VIP专属歌曲推荐"
	}, {
		name: "hot",
		title: "热门节目，听点不一样的"
	}, {
		name: "ai",
		title: "为你精选的AI歌单"
	}, {
		name: "zhen",
		title: "至臻专辑"
	}]);
</script>

<style>
	.content-layout {
		height: v-bind(scrollViewHeight);
		width: 100%;
	}

	.small-title {
		display: flex;
		justify-content: space-between;
		width: 100%;
	}

	.small-title-text {
		font-size: 5px;
	}

	.avatar {
		width: 16px;
		height: 16px;
		border-radius: 50%;

		image {
			width: 100%;
			height: 100%;
		}
	}
</style>