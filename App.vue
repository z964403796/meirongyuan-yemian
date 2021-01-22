<script>
	import util from './common/util.js';
	export default {
		onLaunch: function() {
			// #ifdef APP-PLUS
			// 更新检测
			this.lib.Update();
			// #endif
		},
		onShow: function() {

			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
		computed: {},
		watch: {

		},
		methods: {


		}
	}
</script>

<style>
	image {
		will-change: transform
	}

	.btn:active {
		opacity: .8;
	}

	page {
		background: #FFFFFF;
	}

	.ellipsis {
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}

	.ellipsis2 {
		text-overflow: -o-ellipsis-lastline;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		line-clamp: 2;
		-webkit-box-orient: vertical;
	}

	/*每个页面公共css */
</style>
