// 获取所有的输入框input 和 提示信息div
var texts=document.getElementsByClassName('text')
var tips=document.getElementsByClassName('tip')
var btn=document.getElementById('btn')
// 文字字符串信息
var showT
var yjvg = function(){
	// 循环遍历input数组
	for(let i=0;i<texts.length;i++){
		// 获得焦点时的提示信息
		texts[i].onfocus=function(){
			tipShow(i)
		}
		// 失去焦点时的提示信息
		texts[i].onblur=function testIn(){
			if(texts[i].value==null||texts[i].value==""){
				// 输出xx不能为空
				texts[i].style.borderColor="red";
				tipShowN(i);
			}else{
				//判定格式是否符合要求
				//if true输出xx可用
				//else输出xx格式输入有误
				testFun(i,texts[i].value);
			} ;
		};
	};
	// 点击按钮全局验证#90ee90
	btn.onclick=function(){
		var c= "rgb(144, 238, 144)";
		var flag=(tips[0].style.color==c&&tips[1].style.color==c&&tips[2].style.color==c&&tips[3].style.color==c&&tips[4].style.color==c);
		if(flag){
			alert("输入正确");
		}else{
			alert("输入有误");
		};
	};
}
yjvg()
// 获取焦点后提示用户输入内容
function tipShow(i){
	switch(i)
	{
		case 0:
		showT="必填，长度为4~16个字符"
		break;
		case 1:
		showT="必填，请输入您的密码"
		break;
		case 2:
		showT="必填，再次输入相同密码"
		break;
		case 3:
		showT="必填，请输入常用邮箱"
		break;
		case 4:
		showT="必填，请输入您的手机号"
		break;
	}
	tips[i].innerHTML=showT;
}
// 失去焦点时输入数据为空
function tipShowN(i){
	switch(i)
	{
		case 0:
		showT="名称不能为空"
		break;
		case 1:
		showT="密码不能为空"
		break;
		case 2:
		showT="需要确认密码"
		break;
		case 3:
		showT="邮箱不能为空"
		break;
		case 4:
		showT="手机号不能为空"
		break;
	}
	tips[i].innerHTML=showT;
	tips[i].style.color="red";
}
// 失去焦点时输入数据验证正确
function tipShowT(i){
	switch(i)
	{
		case 0:
		showT="名称可用"
		break;
		case 1:
		showT="密码可用"
		break;
		case 2:
		showT="密码输入一致"
		break;
		case 3:
		showT="邮箱可用"
		break;
		case 4:
		showT="手机号可用"
		break;
	}
	tips[i].innerHTML=showT;
	tips[i].style.color="#90EE90";
	texts[i].style.borderColor="#90ee90";
}
// 失去焦点时输入数据验证有误
function tipShowF(i){
	switch(i)
	{
		case 0:
		showT="名称格式错误"
		break;
		case 1:
		showT="密码格式错误"
		break;
		case 2:
		showT="密码输入不一致"
		break;
		case 3:
		showT="邮箱格式错误"
		break;
		case 4:
		showT="手机号格式错误"
		break;
	}
	tips[i].innerHTML=showT;
	tips[i].style.color="red";
	texts[i].style.borderColor="red";
}
// 调用验证
function testFun(i,value){
	switch(i)
	{
		case 0:
		nameTest(value)
		break;
		case 1:
		psdTest(value)
		break;
		case 2:
		psdSame(value)
		break;
		case 3:
		mailTest(value)
		break;
		case 4:
		phoneTest(value)
		break;
	}
}
//验证名称
function nameTest(i){
	var excn=/[^\x00-\xff]{1,}/g;
	var exen=/\w{1,}/g;
	var cn=excn.exec(i);
	var en=exen.exec(i);
	if(cn==null){
		cn="";
	};
	if(en==null){
		en="";
	};
	var len=cn.toString().length*2+en.toString().length;
	if(len>3&&len<17){
		tipShowT(0);
	}else{
		tipShowF(0);
	};
}
//验证密码
function psdTest(i){
	var exen=/\w{1,}/g;
	var en=exen.exec(i);
	if(en==null){
		en="";
	};
	var len=en.toString().length;
	if(len>0){
		tipShowT(1);
	}else{
		tipShowF(1);
	};
}
//验证两次输入是否一致
function psdSame(i){
	if(i==texts[1].value){
		tipShowT(2);
	}else{
		tipShowF(2);
	}
}
//验证邮箱
function mailTest(i){
	var exen= /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/g;
	var en=exen.exec(i);
	if(en==null){
		en="";
	};
	var len=en.toString().length;
	if(len>0){
		tipShowT(3);
	}else{
		tipShowF(3);
	};
}
//验证手机号
function phoneTest(i){
var exen=/^1\d{10}$/g;
	var en=exen.exec(i);
	if(en==null){
		en="";
	};
	var len=en.toString().length;
	if(len>0){
		tipShowT(4);
	}else{
		tipShowF(4);
	};
}
