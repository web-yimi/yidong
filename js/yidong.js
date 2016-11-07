$(function(){
	var parent=$('.navigation')[0]
	var banner=$['.banner']
	var navigation=$('.navigation-a')
	for(var i=0;i<navigation.length;i++){
		navigation[i].index=i
		navigation[i].onmouseover=function(){
			var div=document.createElement('div')
			div.setAttribute('width','1200px')
			div.setAttribute('height','40px')
			parent.appendChild(div,banner)
		}
	}
	// banner轮播
 	var img=getClass('banner1');
 	var box=$('.banner-middle')[0];
 	var width=parseInt(getStyle(box,'width'));
 	var lis=$('.lis');
 	var left=$('.buttonLeft')[0];
 	var right=$('.buttonRight')[0];
 	var n=0;
 	var next=0;
 	var flag=true;
 	var t=setInterval(move,3000)
	function move(type){
		type=type||'right';
		if(!flag){
			return;
		}
		flag=false;
		if(type=='right'){
			next=n+1;
			if(next>=img.length){
				next=0;
			}
			img[next].style.left=width+'px';
			animate(img[n],{left:-width},600,Tween.Quad.easeInOut);
		}else if(type=='left'){
			next=n-1;
			if(next<0){
				next=img.length-1;
			}
			img[next].style.left=-width+'px';
			animate(img[n],{left:width},600,Tween.Quad.easeInOut);
		}
		animate(img[next],{left:0},600,Tween.Quad.easeInOut,function(){flag=true});
		lis[n].style.background="#DBE2EC";
		lis[next].style.background='#E72487';
		n=next;
	}
	box.onmouseover=function(){
		clearInterval(t)
	}
	box.onmouseout=function(){
		t=setInterval(move,2000);
	}
	left.onclick=function(){
		move('left')
	}
	right.onclick=function(){
		move('right');
	}
	for(var i=0;i<lis.length;i++){
		lis[i].index=i;
		lis[i].onclick=function(){
			if(this.index<n){
				if(!flag){
					return;
				}
				flag=false;
				img[this.index].style.left=-width+'px';
				animate(img[n],{left:width},600,Tween.Quad.easeInOut);
				
			}else if(this.index>n){
				if(!flag){
					return;
				}
				flag=false;
				img[this.index].style.left=width+'px';
				animate(img[n],{left:-width},600,Tween.Quad.easeInOut);
			}
			animate(img[this.index],{left:0},600,Tween.Quad.easeInOut,function(){flag=true});
			lis[n].style.background="#DBE2EC";
			lis[this.index].style.background='#E72487';
			n=this.index;
			next=this.index;
		}	
	}
	// banner右边
	var xinImg=$('.xinImg');
	for(var i=0;i<xinImg.length;i++){
		xinImg[i].index=i;
		xinImg[i].onmouseover=function(){
			animate(xinImg[this.index],{width:35,height:30,marginBottom:10},300)	
		}
		xinImg[i].onmouseout=function(){
			animate(xinImg[this.index],{width:32,height:27,marginBottom:13},300)
		}	
	}
	var xinImg2=$('.xinImg-last')[0];
	xinImg2.onmouseover=function(){
		animate(xinImg2,{width:47,height:43,marginBottom:10},300)	
	}
	xinImg2.onmouseout=function(){
		animate(xinImg2,{width:44,height:40,marginBottom:13},300)
	}	
	// 4G专区
	var pic=$('.zq-picture');
	for(var i=0;i<pic.length;i++){
		pic[i].index=i;
		pic[i].onmouseover=function(){
			animate(pic[this.index],{right:25},300)	
		}
		pic[i].onmouseout=function(){
			animate(pic[this.index],{right:14},300)
		}	
	}
	// 买手机
	var picMobile=$('.sj-1');
	for(var i=0;i<picMobile.length;i++){
		picMobile[i].index=i;
		picMobile[i].onmouseover=function(){
			animate(picMobile[this.index],{marginLeft:98},300)	
		}
		picMobile[i].onmouseout=function(){
			animate(picMobile[this.index],{marginLeft:118},300)
		}	
	}
	var buyMobile=$('.sj')[0];
	buyMobile.onmouseover=function(){
		animate(buyMobile,{marginLeft:139},300)	
	}
	buyMobile.onmouseout=function(){
		animate(buyMobile,{marginLeft:159},300)
	}
	// 业务推荐
	var businessimg=$('.businessimg');
	for(var i=0;i<businessimg.length;i++){
		businessimg[i].index=i;
		businessimg[i].onmouseover=function(){
			animate(businessimg[this.index],{right:15},300)	
		}
		businessimg[i].onmouseout=function(){
			animate(businessimg[this.index],{right:1},300)
		}	
	}
	var box2=$('.box')[0]	
	var boxImg=$('.gg-box')[0]
	var boxCon=$('.gg')[0];
	var ggWidth=parseInt(getStyle(boxCon,'width'));
	var ggLeft=$('.glan')[0];
	var ggRight=$('.gran')[0];
	var t=setInterval(lunbo,2000)
	function lunbo(){
		animate(boxImg,{left:-ggWidth},600,function(){
			var first=getFirstChild(boxImg);
			boxImg.appendChild(first);
			boxImg.style.left=0;
		})	
	}
	box2.onmouseover=function(){
		clearInterval(t);
	}
	box2.onmouseout=function(){
		t=setInterval(lunbo,2000);
	}
	ggLeft.onclick=function(){
		var first=getFirstChild(boxImg);
		var last=getLastChild(boxImg);
		boxImg.insertBefore(last,first);
		boxImg.style.left=-ggWidth+'px';
		animate(boxImg,{left:0},600);
	}
	ggRight.onclick=function(){
		lunbo();
	}
	// 导航
	var title=$(".navigation-a");
	var con=$('.dh-hidden');
	var a=$('.dh');
	for(var i=0;i<title.length;i++){
		title[i].index=i;
		title[i].onmouseover=function(){
			con[this.index].style.display='block';
			a[this.index].style.color='#2D85D6';
		}
		title[i].onmouseout=function(){
			con[this.index].style.display='none';
			a[this.index].style.color='#666666';
		}
	}
	for(var j=0;j<con.length;j++){
		con[j].index=j;
		con[j].onmouseover=function(){
			title[this.index].style.background='#F3F3F3';
			a[this.index].style.color='#2D85D6';	
		}
		con[j].onmouseout=function(){
			title[this.index].style.background='#E4E4E4';
			a[this.index].style.color='#666666';
		}
	}
	var enter=$('.enter')[0];
	var hidden=$('#hidden');
	var mobile=$('.mobile')[0];
	var img_hidden=$('#img-hidden');
	var enter=$('.enter-top')[0];
	enter.onmouseover=function(){
		hidden.style.display='block'
		enter.style.background='#fff'
	}
	enter.onmouseout=function(){
		hidden.style.display='none';
		enter.style.background='transparent'
	}
	mobile.onmouseover=function(){
		img_hidden.style.display='block';
		mobile.style.background='#fff'
	}
	mobile.onmouseout=function(){
		img_hidden.style.display='none';
		mobile.style.background='transparent'
	}

	// 选位置
	var body=$('body')[0]
	var box=$('#taiyuan');
	var back=$('#back');
	var shanxi=$('.shanxi')[0];
	var province=$('.province')[0];
	body.onclick=function(e){
		var e=e||window.event;
		var obj=e.target||e.srcElement;
		if(obj.className=='taiyuan'||obj.className=='shanxi'||obj.className=='province'){
			shanxi.style.display='block';
			return;
		}else{
			shanxi.style.display='none';
		}
		if(obj.className=='back'){
			province.style.display='block';
			shanxi.style.display='none';
			return;
		}else{
			province.style.display='none';
		}
	}
	// 公告
	var gonggao_left=$('.gonggao-left');
	var gonggao_right=$('.gonggao-right');
	var fh_left=$('.fh-left')[0];
	var fh_right=$('.fh-right')[0];
	var n=0;
	fh_left.onclick=function(){
		for(var i=0;i<gonggao_left.length;i++){
			gonggao_left[i].style.display='none';
			gonggao_right[i].style.display='none';
		}
		
		if(n>=gonggao_left.length){
			n=0;
		}
		gonggao_left[n].style.display='block';
		gonggao_right[n].style.display='block';
		n++;
	}
	fh_right.onclick=function(){
		for(var i=0;i<gonggao_left.length;i++){
			gonggao_left[i].style.display='none';
			gonggao_right[i].style.display='none';
		}
		
		if(n>=gonggao_left.length){
			n=0;
		}
		gonggao_left[n].style.display='block';
		gonggao_right[n].style.display='block';
		n++;
	}
	var fixed=$('.fixed')[0];
	console.log(fixed)
	var fixed_img=$('.fixed-img',fixed);
	for(var j=0;j<fixed_img.length;j++){
		fixed_img[j].index=j;
		fixed_img[j].onmouseover=function(){
			animate(fixed_img[this.index],{left:-60})
		}
		fixed_img[j].onmouseout=function(){
			animate(fixed_img[this.index],{left:2})
		}
	}

})