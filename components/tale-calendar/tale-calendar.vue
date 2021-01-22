<template>
	<view class="content">
		<view>
			
			<view class="flex">
				<view  v-for="(item,i) in weeks" :key="i">
					<text class="week">{{item}}</text>
				</view>
			</view>
			<view class="flex year-month">
				<view @click="prevMonth"><image src="/static/images/left@2x.png" class="icon_img"></image> </view>
				<view>
					<picker mode="date" fields="month" @change="monthChange">
						<text class="bold">{{time.year}}年{{time.month + 1}}月</text>
					</picker>
				</view>
				<view @click="nextMonth"><image src="/static/images/right@2x.png" class="icon_img"></image></view>
			</view>
			<view class="flex-wrap">
				<template v-for="item in visibleDays" :Key="item.day">
					<view class="day-box " :style="{'border-top':isCurrentMonth(item.day)?'1upx solid #DDDDDD':''}">
						<!-- {notCurrentMonth: !isCurrentMonth(item.day)} -->
						<text
							class="day"
							@click="clickDate(item.day)"
							:style="[
							isToday(item.day) && todayObj,
							isClick(item.day) && selectedObj,
						]"
							:class="[
							{selected: isClick(item.day)},
							{notCurrentMonth: isTodayDay(item.day) ||item.data.active  } 
						]"
					 v-if=" isCurrentMonth(item.day)"	>{{item.day | dayFilter}}</text>
						<template v-if="showText">
							<text
								v-if="isCurrentMonth(item.day)"
								class="day-text"
								:style="{color: textColor,background:item.data.value?textbg:'#ffffff'}"
							>
								{{item.data.value || ''}}
							</text>
						</template>
						<template v-if="showDot">
							<text
								v-if="isCurrentMonth(item.day) && item.data.dot && item.data.active"
								class="day-dot"
							></text>
							<text
								v-if="isCurrentMonth(item.day) && item.data.dot && !item.data.active"
								class="day-dot dot-gray"
							></text>
						</template>
					</view>
				</template>
			</view>
		</view>
	</view>
</template>

<script>

	const getYearMonthDay = (date) => {
		let year = date.getFullYear();
		let month = date.getMonth();
		let day = date.getDate();
		return {
			year,
			month,
			day
		}
	}
	const getDate = (year, month, day) => {
		return new Date(year, month, day)
	}

	export default {
		data() {
			return {
				iArr: [1,2,3,4,5,6],
				jArr: [1,2,3,4,5,6,7],
				value: new Date(),
				weeks: ['日', '一', '二', '三', '四', '五', '六'],
				click_time: {},
				month_data: this.extraData,
				time: this.defaultTime,
				todayObj: {
					background: this.bgColor,
					color: '#BEAA6F'
				},
				selectedObj: {
					background: this.selColor,
					color: '#ffffff'
				}
			}
		},
		props: {
			bgColor: {
				type: String,
				default: '#ffffff'
			},
			selColor: {
				type: String,
				default: '#BEAA6F'
			},
			textColor: {
				type: String,
				default: '#ffffff'
			},
			textbg: {
				type: String,
				default: '#BEAA6F'
			},
			defaultTime: {
				type: Object,
				default: ()=> {
					return {
						year: getYearMonthDay(new Date()).year,
						month: getYearMonthDay(new Date()).month
					}
				}
			},
			extraData: {
				type: Array,
				default: ()=> {
					return [{date: '2020-12-26', value: '已满', dot: true, active: true},{date: '2020-12-27', value: '', dot: true, active: true}] // 
				}
			},
			showText: {
				type: Boolean,
				default: true
			},
			showDot: {
				type: Boolean,
				default: false
			},
			isShowClick: {
				type: Boolean,
				default: false
			},
			isTime:{
				type: String,
				default:""
			}
		},
		filters: {
			dayFilter(val) {
				return val.getDate();
			}
		},
		computed: {
			visibleDays() { // 计算当月展示日期
				let {time: {year, month}, month_data} = this;
				let currentFirstDay = getDate(year, month, 1);
				let week = currentFirstDay.getDay();
				
				let startDay = currentFirstDay - week * 60 * 60 * 1000 * 24;
				
				let arr = [];
				for(let i = 0; i < 42; i++) {
					let day = new Date(startDay + i * 60 * 60 * 1000 * 24);
					let {year: dayY, month: dayM, day: dayD} = getYearMonthDay(day);
					let data = {};
					for (let item of month_data) {
						let dateString = item.date;
						let dateArr = dateString.indexOf('-') !== -1
							? dateString.split('-')
							: dateString.indexOf('/') !== -1
								? dateString.split('/')
								: [];
						if (dateArr.length === 3
							&& Number(dateArr[0]) === Number(dayY)
							&& Number(dateArr[1]) === (Number(dayM) + 1)
							&& Number(dateArr[2]) === Number(dayD)) {
							data = item
						}
					}
					let obj = {
						day,
						data
					}
			
					arr.push(obj)
				}
				
				return arr
			}
		},
		
		mounted() {
			if(this.isShowClick){
				this.clickDate()
			}
			
		},
		methods: {
			isCurrentMonth(date) { // 是否当月
				let {year, month} = getYearMonthDay(getDate(this.time.year, this.time.month, 1));
				let {year: y, month:m} = getYearMonthDay(date);
				return year === y && month === m;
			},
			isTodayDay(date) { // 是否当天
				let {year, month, day} = getYearMonthDay(new Date());
				let {year: y, month: m, day: d} = getYearMonthDay(date);
				
				return year === y && month === m && day > d;
			},
			
			isToday(date) { // 是否当天
				let {year, month, day} = getYearMonthDay(new Date());
				let {year: y, month: m, day: d} = getYearMonthDay(date);
				return year === y && month === m && day === d;
			},
			
			isClick(date) { // 是否是点击日期
			
				let {click_time} = this;
				if (!click_time.day) return false;
				let {year, month, day} = getYearMonthDay(getDate(click_time.year, click_time.month, click_time.day));
				let {year: y, month: m, day: d} = getYearMonthDay(date);
				return year === y && month === m && day === d;
			},
			clickDate(date) { // 点击日期
			if(this.isShowClick){
				date = new Date(this.isTime)
			}
				let {year, month, day} = getYearMonthDay(date);
				this.click_time = {year, month, day};
				this.$emit('calendarTap', {year, month, day})
			},
			prevMonth() { // 上一月
				let { time: { year, month} } = this;
				let d = getDate(year, month, 1);
				d.setMonth(d.getMonth() - 1);
				this.time = getYearMonthDay(d);
				this.click_time = {};
			},
			nextMonth() { // 下一月
				// 获取当前的年月的日期
				let { time: { year, month} } = this;
				let d = getDate(year, month, 1);
				d.setMonth(d.getMonth() + 1);
				this.time = getYearMonthDay(d);
				this.click_time = {};
			},
			monthChange(e) {
				let {value} = e.detail;
				let timeArr = value.split('-');
				this.time = {year: timeArr[0], month: timeArr[1] - 1, day: 1};
			}
		}
	}
</script>

<style scoped lang="scss">
	.content {
		width: 750rpx;
		margin: 0 auto;
	}
	.flex {
		padding: 0 24upx;
		// width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex-direction: row;
	}
	.flex-wrap {
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-between;
		flex-direction: row;
	}
	.flex-column {
		width: 100%;
		height: 106rpx;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
	}
	.flex-item {
		flex: 1;
	}
	.bold {
		font-weight: bold;
		// font-size: 28rpx;
		
		font-size: 36upx;
		font-family: PingFangSC-Medium, PingFang SC;
		font-weight: 500;
		color: #333333;
		line-height: 50upx;

	}
	.year-month {
		// width: 400rpx;
		
		margin: 0 auto 20rpx;
		padding-top: 30rpx;
	}
	.week {
		margin: 30rpx 0 20rpx 0;
		// width: 60rpx;
		// text-align: center;
		// color: #999999;
		// display: flex;
		// align-items: center;
		// justify-content: space-between;
		
		font-size: 24upx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #666666;
		line-height: 34upx;

	}
	.day-box {
		width: 107rpx;
		text-align: center;
		// display: flex;
		// flex-direction: column;
		// width: 100%;
		height: 106rpx;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		position: relative;
		
	}
	.day {
		width: 60rpx;
		height: 60rpx;
		line-height: 60rpx;
		border-radius: 50%;
		text-align: center;
		
		
		font-size: 32upx;
		font-family: PingFangSC-Medium, PingFang SC;
		font-weight: 500;
		color: #333333;
		

	}
	.day-text {
		// font-size: 22rpx;
	
		border-radius: 16upx;
		padding: 6upx 8upx;

		
		font-size: 14upx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		// color: #FFFFFF;
		line-height: 18upx;
		position: absolute;
bottom: 4upx;
	}
	.day-dot {
		width: 12rpx;
		height: 12rpx;
		border-radius: 50%;
		background: #4cd964;
		&.dot-gray {
			background: gray;
		}
	}
	.today, .selected {
		background: #4198f8;
		color: #ffffff;
	}
	.notCurrentMonth {
		color: #999999;
		pointer-events: none;
		background: none;
	}
	.icon_img{
		width: 20upx;
		height: 30upx;
	}
</style>
