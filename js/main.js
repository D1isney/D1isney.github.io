// 点击导航栏地图
function map(){
}


// 点击实时监控
function RTM(){
	var show = document.getElementById('section');
	var data = document.getElementById('data');
	var myself = document.getElementById('Myself');
	var shuffling = document.getElementById('shuffling');
	myself.style.display = data.style.display = shuffling.style.display = 'none';
	show.style.display = 'flex';
	
	// 下拉栏可选
	var select = document.getElementById('select');
	select.style.pointerEvents='';
	select.style.display='block';
	all()
}

// 点击导航栏数据
function data(){
	var show = document.getElementById('data');
	var section = document.getElementById('section');
	var myself = document.getElementById('Myself');
	var shuffling = document.getElementById('shuffling');
	myself.style.display = section.style.display = shuffling.style.display = 'none';
	show.style.display = 'flex';
	
	// 下拉栏不可选
	var select = document.getElementById('select');
	select.style.display='block';
	select.style.pointerEvents='none';
}

// 点击导航栏个人信息
function mySelfMsg(){
	var show = document.getElementById('Myself');
	var section = document.getElementById('section');
	var data = document.getElementById('data');
	var shuffling = document.getElementById('shuffling');
	data.style.display = section.style.display 
	= shuffling.style.display = 'none';
	show.style.display = 'block';
	
	// 隐藏下拉栏
	var select = document.getElementById('select');
	select.style.display='none';
	
}

