// 点击首页
function Hg(){
	var show = document.getElementById('Hg');
	var Tp = document.getElementById('Tp');
	var Hm = document.getElementById('Hm');
	var Hs = document.getElementById('Hs');
	var Am = document.getElementById('Am');
	var Cd = document.getElementById('Cd');
	var PM1 = document.getElementById('PM1');
	var PM2 = document.getElementById('PM2');
	show.style.display ='';
	Tp.style.display = Hm.style.display
	= Hs.style.display = Am.style.display = Cd.style.display
	=PM1.style.display = PM2.style.display = 'none';
}

// 点击温度
function Tp(){
	var show = document.getElementById('Tp');
	var Hg = document.getElementById('Hg');
	var Hm = document.getElementById('Hm');
	var Hs = document.getElementById('Hs');
	var Am = document.getElementById('Am');
	var Cd = document.getElementById('Cd');
	var PM1 = document.getElementById('PM1');
	var PM2 = document.getElementById('PM2');
	show.style.display ='block';
	Hg.style.display = Hm.style.display
	= Hs.style.display = Am.style.display = Cd.style.display
	=PM1.style.display = PM2.style.display = 'none';
}

// 点击湿度
function Hm(){
	var show = document.getElementById('Hm');
	var Tp = document.getElementById('Tp');
	var Hg = document.getElementById('Hg');
	var Hs = document.getElementById('Hs');
	var Am = document.getElementById('Am');
	var Cd = document.getElementById('Cd');
	var PM1 = document.getElementById('PM1');
	var PM2 = document.getElementById('PM2');
	show.style.display ='block';
	Tp.style.display = Hg.style.display
	= Hs.style.display = Am.style.display = Cd.style.display
	=PM1.style.display = PM2.style.display = 'none';
}

// 点击硫化氢
function Hs(){
	var show = document.getElementById('Hs');
	var Tp = document.getElementById('Tp');
	var Hm = document.getElementById('Hm');
	var Hg = document.getElementById('Hg');
	var Am = document.getElementById('Am');
	var Cd = document.getElementById('Cd');
	var PM1 = document.getElementById('PM1');
	var PM2 = document.getElementById('PM2');
	show.style.display ='block';
	Tp.style.display = Hm.style.display
	= Hg.style.display = Am.style.display = Cd.style.display
	=PM1.style.display = PM2.style.display = 'none';
}

// 点击氨气
function Am(){
	var show = document.getElementById('Am');
	var Tp = document.getElementById('Tp');
	var Hm = document.getElementById('Hm');
	var Hs = document.getElementById('Hs');
	var Hg = document.getElementById('Hg');
	var Cd = document.getElementById('Cd');
	var PM1 = document.getElementById('PM1');
	var PM2 = document.getElementById('PM2');
	show.style.display ='block';
	Tp.style.display = Hm.style.display
	= Hs.style.display = Hg.style.display = Cd.style.display
	=PM1.style.display = PM2.style.display = 'none';
}

// 点击二氧化碳
function Cd(){
	var show = document.getElementById('Cd');
	var Tp = document.getElementById('Tp');
	var Hm = document.getElementById('Hm');
	var Hs = document.getElementById('Hs');
	var Am = document.getElementById('Am');
	var Hg = document.getElementById('Hg');
	var PM1 = document.getElementById('PM1');
	var PM2 = document.getElementById('PM2');
	show.style.display ='block';
	Tp.style.display = Hm.style.display
	= Hs.style.display = Am.style.display = Hg.style.display
	=PM1.style.display =PM2.style.display = 'none';
}

// 点击PM1.0
function PM1(){
	var show = document.getElementById('PM1');
	var Tp = document.getElementById('Tp');
	var Hm = document.getElementById('Hm');
	var Hs = document.getElementById('Hs');
	var Am = document.getElementById('Am');
	var Cd = document.getElementById('Cd');
	var Hg = document.getElementById('Hg');
	var PM2 = document.getElementById('PM2');
	show.style.display ='block';
	Tp.style.display = Hm.style.display
	= Hs.style.display = Am.style.display = Cd.style.display
	=Hg.style.display = PM2.style.display = 'none';
}


// 点击PM2.5
function PM2(){
	var show = document.getElementById('PM2');
	var Tp = document.getElementById('Tp');
	var Hm = document.getElementById('Hm');
	var Hs = document.getElementById('Hs');
	var Am = document.getElementById('Am');
	var Cd = document.getElementById('Cd');
	var Hg = document.getElementById('Hg');
	var PM1 = document.getElementById('PM1');
	show.style.display ='block';
	Tp.style.display = Hm.style.display
	= Hs.style.display = Am.style.display = Cd.style.display
	=Hg.style.display = PM1.style.display = 'none';
}
