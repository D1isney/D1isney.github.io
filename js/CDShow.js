function all(){
	var allData = document.getElementById('allData');
	var allDom = echarts.init(allData);
	var optionAll;
	
optionAll = {
	title:{
		// text:'空气质量'
	},
  tooltip: {
    trigger: 'item'
  },
  legend: {
    top: '3%',
    left: 'center'
  },
  series: [
    {
      name: '空气质量',
      type: 'pie',
      radius: ['40%', '70%'],
      avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 10,
        borderColor: '#fff',
        borderWidth: 2
      },
     z : 1,
      label: {
        show: false,
        position: 'center'
      },
      emphasis: {
        label: {
          show: true,
          fontSize: '20',
          fontWeight: 'bold'
        }
      },
      grid: {
         left: '1%',
         right: '1%',
		 top: '2%',
         bottom: '2%',
         containLabel: true
      },
      labelLine: {
        show: false
      },
      data: [
        { value: 1048, name: '氧气'},
        { value: 735, name: '二氧化碳' },
        { value: 484, name: '氨气' },
        { value: 300, name: '硫化氢' }
      ]
    }
  ]
};
		allDom.setOption(optionAll);
}