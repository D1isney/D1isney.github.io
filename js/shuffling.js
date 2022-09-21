function shuffling(){
	var chartDom = document.getElementById('shuffling');
	var myChart = echarts.init(chartDom);
	var option;
	option = {
	  graphic: {
	    elements: [
	      {
	        type: 'text',
	        left: 'center',
	        top: 'center',
	        style: {
	          text: '智慧畜牧业平台',
	          fontSize: 80,
	          fontWeight: 'bold',
	          lineDash: [0, 200],
	          lineDashOffset: 0,
	          fill: 'transparent',
	          stroke: '#fff',
	          lineWidth: 1
	        },
	        keyframeAnimation: {
	          duration: 3000,
	          loop: true,
	          keyframes: [
	            {
	              percent: 0.7,
	              style: {
	                fill: 'transparent',
	                lineDashOffset: 200,
	                lineDash: [200, 0]
	              }
	            },
	            {
	              // Stop for a while.
	              percent: 0.8,
	              style: {
	                fill: 'transparent'
	              }
	            },
	            {
	              percent: 1,
	              style: {
	                fill: '#transparent'
	              }
	            }
	          ]
	        }
	      }
	    ]
	  }
	};
	
	option && myChart.setOption(option);
}