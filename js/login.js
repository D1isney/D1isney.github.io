// 登陆按钮
function UserLogin(){
	// Id.value;
	// // document.getElementById("Id").value;
	// Password.value;
	if(Id.value == ""){
		// alert("用户账号不能为空！");
		msg.style.display = "block";
		msg.innerText = "账号不能为空！";
		msg.style.color = "red";
		return;
	}
	if(Password.value == ""){
		msg.style.display = "block";
		msg.innerText = "密码不能为空！";
		msg.style.color = "red";
		return;
	}
	
	if(Id.value == "root" && Password.value == "1"){
		msg.style.display = "block";
		msg.innerText = "登陆成功！";
		msg.style.color = "green";
		
		// // 登陆成功跳转
		// setTimeout(function(){
		// 	window.location.href = "./main/main.html";
		// },1500);

	}
	else{
		msg.style.display = "block";
		msg.innerText = "账号或密码错误！";
		msg.style.color = "red";
		return;
	}
}

// 重置按钮
function UserReset(){
	Id.value = "";
	Password.value = "";
}