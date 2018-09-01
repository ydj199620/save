<template>
	<div class="main">
		<div>
		 <!--放置首页头部的组件-->
      <fchead></fchead>
		</div>
		<!--首页内容部分的组件-->
		<div class="index_body">
		    <!-- 快捷按钮 -->
		    <div class="quick_links">
		       <div class="quicklinks_one">
		       	<h1>课程列表</h1>
		       	<h2>Course List</h2>
		       	<div class="icon_wrap"><i class="fa fa-th-large"></i></div>
		       	<p>查询现有课程，添加课程，挂你课程</p>
		      </div>
		      <div class="quicklinks_one">
		       	<h1>课程添加</h1>
		       	<h2>Course ADD</h2>
		       	<div class="icon_wrap"><i class="fa fa-plus"></i></div>
		       	<p>查询现有课程，添加课程，挂你课程</p>
		       </div>
		      <div class="quicklinks_one">
		       	<h1>用户注册</h1>
		       	<h2>Course List</h2>
		       	<div class="icon_wrap"><i class="fa fa-arrow-up"></i></div>
		       	<p>查询现有课程，添加课程，挂你课程</p>
		       </div>
		      <div class="quicklinks_one">
		       	<h1>视频管理</h1>
		       	<h2>Video Manage</h2>
		       	<div class="icon_wrap"><i class="fa fa-youtube-play"></i></div>
		       	<p>查询现有课程，添加课程，挂你课程</p>
		       </div>
		      <div class="quicklinks_one">
		       	<h1>用户注册</h1>
		       	<h2>Course List</h2>
		       	<div class="icon_wrap"><i class="fa fa-th-large"></i></div>
		       	<p>查询现有课程，添加课程，挂你课程</p>
		       </div>
		      <div class="quicklinks_one">
		       	<h1>用户注册</h1>
		       	<h2>Course List</h2>
		       	<div class="icon_wrap"><i class="fa fa-th-large"></i></div>
		       	<p>查询现有课程，添加课程，挂你课程</p>
		      </div>
		    </div>
		    <div class="charts_wrap">
          <div style="background-color: #fff;padding-top:20px;height: 340px;">
              <!-- 里面有宽度的DIV 用来放置表格插件 -->
              <div  style="width: 400px;height: 370px;background-color: white;" ref="cli1"></div>
          </div>
          <div style="background-color: #fff;padding-top:20px;height: 340px;">
              <div style="width: 530px;height: 370px;background-color: white;" ref="cli2"></div>
          </div>   
          <!--<div style="background-color: #fff;padding-top:20px;height: 340px;">-->
          <div style="width: 580px;height: 370px;background-color: white;" ref="cli3"></div>
        </div>
		</div>
	</div>
</template>

<script>
import fchead from './fchead'
import echarts from 'echarts'
	export default {
    components:{
      fchead
    },
		data(){
			return{}
    },
    mounted:function(){
      var myCharts =echarts.init(this.$refs.cli1)
      var myCharts1 =echarts.init(this.$refs.cli2)
      var myCharts2 =echarts.init(this.$refs.cli3)
      var option ={
        tooltip : {
          formatter: "{a} <br/>{b} : {c}%"
        },
        toolbox: {
          feature: {
              restore: {},
              saveAsImage: {}
          }
        },
        series:[
          {
            name: '业务指标',
            type: 'gauge',
            detail: {formatter:'{value}%'},
            data: [{value: 50, name: '完成率'}]
          }
        ]
      }
      var option1={
        color: ['#3398DB'],
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis : [
            {
                type : 'category',
                data : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                axisTick: {
                    alignWithLabel: true
                }
            }
        ],
        yAxis : [
            {
                type : 'value'
            }
        ],
        series : [
            {
                name:'直接访问',
                type:'bar',
                barWidth: '60%',
                data:[10, 52, 200, 334, 390, 330, 220]
            }
        ]
      }
      var option2={
        xAxis: {
          scale: true
        },
        yAxis: {
          scale: true
        },
        series: [{
          type: 'effectScatter',
          symbolSize: 20,
          data: [
              [172.7, 105.2],
              [153.4, 42]
          ]
        }, {
          type: 'scatter',
          data: [[161.2, 51.6], [167.5, 59.0], [159.5, 49.2], [157.0, 63.0], [155.8, 53.6],
                [170.0, 59.0], [159.1, 47.6], [166.0, 69.8], [176.2, 66.8], [160.2, 75.2],
                [172.5, 55.2], [170.9, 54.2], [172.9, 62.5], [153.4, 42.0], [160.0, 50.0],
                [147.2, 49.8], [168.2, 49.2], [175.0, 73.2], [157.0, 47.8], [167.6, 68.8],
                [159.5, 50.6], [175.0, 82.5], [166.8, 57.2], [176.5, 87.8], [170.2, 72.8],
                [174.0, 54.5], [173.0, 59.8], [179.9, 67.3], [170.5, 67.8], [160.0, 47.0],
                [154.4, 46.2], [162.0, 55.0], [176.5, 83.0], [160.0, 54.4], [152.0, 45.8],
                [162.1, 53.6], [170.0, 73.2], [160.2, 52.1], [161.3, 67.9], [166.4, 56.6],
                [168.9, 62.3], [163.8, 58.5], [167.6, 54.5], [160.0, 50.2], [161.3, 60.3],
                [167.6, 58.3], [165.1, 56.2], [160.0, 50.2], [170.0, 72.9], [157.5, 59.8],
                [167.6, 61.0], [160.7, 69.1], [163.2, 55.9], [152.4, 46.5], [157.5, 54.3],
                [168.3, 54.8], [180.3, 60.7], [165.5, 60.0], [165.0, 62.0], [164.5, 60.3],
                [156.0, 52.7], [160.0, 74.3], [163.0, 62.0], [165.7, 73.1], [161.0, 80.0],
                [162.0, 54.7], [166.0, 53.2], [174.0, 75.7], [172.7, 61.1], [167.6, 55.7],
                [151.1, 48.7], [164.5, 52.3], [163.5, 50.0], [152.0, 59.3], [169.0, 62.5],
                [164.0, 55.7], [161.2, 54.8], [155.0, 45.9], [170.0, 70.6], [176.2, 67.2],
                [170.0, 69.4], [162.5, 58.2], [170.3, 64.8], [164.1, 71.6], [169.5, 52.8],
                [163.2, 59.8], [154.5, 49.0], [159.8, 50.0], [173.2, 69.2], [170.0, 55.9],
                [161.4, 63.4], [169.0, 58.2], [166.2, 58.6], [159.4, 45.7], [162.5, 52.2],
                [159.0, 48.6], [162.8, 57.8], [159.0, 55.6], [179.8, 66.8], [162.9, 59.4],
                [161.0, 53.6], [151.1, 73.2], [168.2, 53.4], [168.9, 69.0], [173.2, 58.4],
                [171.8, 56.2], [178.0, 70.6], [164.3, 59.8], [163.0, 72.0], [168.5, 65.2],
                [166.8, 56.6], [172.7, 105.2], [163.5, 51.8], [169.4, 63.4], [167.8, 59.0],
                [159.5, 47.6], [167.6, 63.0], [161.2, 55.2], [160.0, 45.0], [163.2, 54.0],
                [162.2, 50.2], [161.3, 60.2], [149.5, 44.8], [157.5, 58.8], [163.2, 56.4],
                [172.7, 62.0], [155.0, 49.2], [156.5, 67.2], [164.0, 53.8], [160.9, 54.4],
                [162.8, 58.0], [167.0, 59.8], [160.0, 54.8], [160.0, 43.2], [168.9, 60.5],
                [158.2, 46.4], [156.0, 64.4], [160.0, 48.8], [167.1, 62.2], [158.0, 55.5],
                [167.6, 57.8], [156.0, 54.6], [162.1, 59.2], [173.4, 52.7], [159.8, 53.2],
                [170.5, 64.5], [159.2, 51.8], [157.5, 56.0], [161.3, 63.6], [162.6, 63.2],
                [160.0, 59.5], [168.9, 56.8], [165.1, 64.1], [162.6, 50.0], [165.1, 72.3],
                [166.4, 55.0], [160.0, 55.9], [152.4, 60.4], [170.2, 69.1], [162.6, 84.5],
                [170.2, 55.9], [158.8, 55.5], [172.7, 69.5], [167.6, 76.4], [162.6, 61.4],
                [167.6, 65.9], [156.2, 58.6], [175.2, 66.8], [172.1, 56.6], [162.6, 58.6],
                [160.0, 55.9], [165.1, 59.1], [182.9, 81.8], [166.4, 70.7], [165.1, 56.8],
                [177.8, 60.0], [165.1, 58.2], [175.3, 72.7], [154.9, 54.1], [158.8, 49.1],
                [172.7, 75.9], [168.9, 55.0], [161.3, 57.3], [167.6, 55.0], [165.1, 65.5],
                [175.3, 65.5], [157.5, 48.6], [163.8, 58.6], [167.6, 63.6], [165.1, 55.2],
                [165.1, 62.7], [168.9, 56.6], [162.6, 53.9], [164.5, 63.2], [176.5, 73.6],
                [168.9, 62.0], [175.3, 63.6], [159.4, 53.2], [160.0, 53.4], [170.2, 55.0],
                [162.6, 70.5], [167.6, 54.5], [162.6, 54.5], [160.7, 55.9], [160.0, 59.0],
                [157.5, 63.6], [162.6, 54.5], [152.4, 47.3], [170.2, 67.7], [165.1, 80.9],
                [172.7, 70.5], [165.1, 60.9], [170.2, 63.6], [170.2, 54.5], [170.2, 59.1],
                [161.3, 70.5], [167.6, 52.7], [167.6, 62.7], [165.1, 86.3], [162.6, 66.4],
                [152.4, 67.3], [168.9, 63.0], [170.2, 73.6], [175.2, 62.3], [175.2, 57.7],
                [160.0, 55.4], [165.1, 104.1], [174.0, 55.5], [170.2, 77.3], [160.0, 80.5],
                [167.6, 64.5], [167.6, 72.3], [167.6, 61.4], [154.9, 58.2], [162.6, 81.8],
                [175.3, 63.6], [171.4, 53.4], [157.5, 54.5], [165.1, 53.6], [160.0, 60.0],
                [174.0, 73.6], [162.6, 61.4], [174.0, 55.5], [162.6, 63.6], [161.3, 60.9],
                [156.2, 60.0], [149.9, 46.8], [169.5, 57.3], [160.0, 64.1], [175.3, 63.6],
                [169.5, 67.3], [160.0, 75.5], [172.7, 68.2], [162.6, 61.4], [157.5, 76.8],
                [176.5, 71.8], [164.4, 55.5], [160.7, 48.6], [174.0, 66.4], [163.8, 67.3]
            ],
        }]
      }
      setInterval(function () {
        option.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0;
        myCharts.setOption(option, true);
      },2000);
      myCharts1.setOption(option1)
      myCharts2.setOption(option2)
    }
	}
</script>
<style scoped>
  .index_body {
    background: url(../assets/images/index_body_bg.jpg);
    padding-top: 65px;
    color: #fff;
    min-width: 1100px;
  }

  .quick_links {
    overflow: hidden;
  }

  .quicklinks_one {
    width: 12%;
    height: 202px;
    background: url(../assets/images/white_opacity_bg.png);
    position: relative;
    text-align: center;
    cursor: pointer;
    float: left;
    margin-left: 4%;
    margin-bottom: 54px;
  }

  .quicklinks_one h1 {
    font-size: 24px;
    font-family: "方正大标宋", "宋体";
    padding-top: 38px;
  }

  .quicklinks_one h2 {
    font-size: 12px;
    font-family: Arial, Helvetica, sans-serif;
    padding-top: 12px;
    font-weight: normal;
  }

  .quicklinks_one p {
    font-size: 12px;
    padding: 5px 22px 0;
    display: none;
    line-height: 21px;
  }

  .quicklinks_one .icon_wrap {
    position: absolute;
    top: 130px;
    left: 0;
    width: 100%;
  }

  .quicklinks_one i {
    font-size: 40px;
  }

  .quicklinks_one i {
    border: none;
    height: 20px;
  }

  .quicklinks_one .icon-plus {
    border: 4px solid #fff;
    border-radius: 2px;
  }

  .quicklinks_one .icon::before {
    position: absolute;
    left: -25px;
    top: -10px;
  }

  .quicklinks_one .icon-plus:before {
    width: 20px;
    border: 4px solid #fff;
    border-radius: 2px;
    left: -13px;
    top: 5px;

  }

  .quicklinks_one:hover {
    background-color: #27a9e3;
    transition: all 0.5s ease 0s;
  }

  .quicklinks_one:hover .icon_wrap {
    top: 22px;
    transition: all 0.5s ease 0s;
  }

  .quicklinks_one:hover h1 {
    padding-top: 78px;
    transition: all 0.5s ease 0s;
  }

  .quicklinks_one:hover h2 {
    display: none;
    transition: all 0.5s ease 0s;
  }

  .quicklinks_one:hover p {
    display: block;
    transition: all 0.5s ease 0s;
  }

  .quicklinks_one.disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  /*图表*/
  .charts_wrap {
    margin-left: 4%;
    margin-right: 4%;
    background: url(../assets/images/white_opacity_bg.png);
    padding-top: 50px;
    overflow: hidden;
  }

  .charts_wrap > div {
    float: left;
    margin-left: 4%;
    overflow: hidden;
    margin-bottom: 50px;
  }

</style>