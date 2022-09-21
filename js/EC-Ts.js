// 主-副一交换
function Vs1_Show(){
	var ShowSrc;
	var ShowVs1;
	ShowSrc= show_src;
	ShowVs1 = vs1_src;
	var show_src = document.getElementById('Cd-Hs').src;
	var vs1_src = document.getElementById('Vs1').src;
	document.getElementById('Cd-Hs').src = vs1_src;
	document.getElementById('Vs1').src = show_src;
}

// 主-副二交换
function Vs2_Show(){
	var ShowSrc;
	var ShowVs2;
	ShowSrc= show_src;
	ShowVs2 = vs2_src;
	var show_src = document.getElementById('Cd-Hs').src;
	var vs2_src = document.getElementById('Vs2').src;
	document.getElementById('Cd-Hs').src = vs2_src;
	document.getElementById('Vs2').src = show_src;
}

// 主-副三交换
function Vs3_Show(){
	var ShowSrc;
	var ShowVs3;
	ShowSrc= show_src;
	ShowVs3 = vs3_src;
	var show_src = document.getElementById('Cd-Hs').src;
	var vs3_src = document.getElementById('Vs3').src;
	document.getElementById('Cd-Hs').src = vs3_src;
	document.getElementById('Vs3').src = show_src;
}