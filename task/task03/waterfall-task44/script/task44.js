window.onload = function(){
	var main = document.getElementById('main');

	waterFall('main','imgWrap');
	window.onscroll = function(){
		 if(checkScroll()){
			picLoad();
		 }
	}
}   


function waterFall(mainClass,pinClass){

	var main = document.getElementById(mainClass);	
	var imgWrap = getClass(pinClass);
	var pWidth = imgWrap[0].offsetWidth;
	var col = Math.floor(document.body.clientWidth/pWidth);
	main.style.cssText='width:'+pWidth*col+'px;margin:0 auto;';

	//取出数组中最小值，将图片添加到对应位置，并更新数组值
	var arry = [];
	for(var i=0;i < imgWrap .length;i++){
		if(i < col){
			arry.push(imgWrap [i].offsetHeight);
		}else{
			var min = Math.min.apply(null,arry);
			var minIndex = getMinIndex(arry,min);
			imgWrap [i].style.position = 'absolute';
			imgWrap [i].style.left = pWidth*minIndex+'px';
			imgWrap [i].style.top = arry[minIndex]+'px';
			arry[minIndex] += imgWrap [i].offsetHeight;		     
		}
	}
}

//滚动到底部是加载图片
//当滚动条滚动与视口距离和大于页面高度与最后一张图片一半时加载
function checkScroll(){
	var imgWrap = getClass('imgWrap');
    var sTop = document.documentElement.scrollTop||document.body.scrollTop;
    var cHeight = document.documentElement.clientHeight;
    var iHeight = imgWrap[imgWrap.length-1].offsetHeight/2 + imgWrap[imgWrap.length-1].offsetTop;

    return iHeight < (sTop + cHeight)?true:false;
}

//加载图片
function picLoad(){
	var date = {'src':['1.jpg','2.jpg','3.jpg','4.jpg']}
	var dataInt={'data':[{'src':'1.jpg'},{'src':'2.jpg'},{'src':'3.jpg'},{'src':'4.jpg'}]};

	for(var i=0;i < dataInt.data.length;i++){		
		var oImgWrap = document.createElement('div');
		oImgWrap.className = 'imgWrap';
        main.appendChild(oImgWrap);
        var oPic = document.createElement('div');
		oPic.className = 'pic';
		oImgWrap.appendChild(oPic);
        var oImg = document.createElement('img');
        oImg.src='./images/'+dataInt.data[i].src;
        oPic.appendChild(oImg);
        waterFall('main','imgWrap');
	}
}

//getElementsByClassName
function getClass(className){
   var arry=[];
   var tag = document.getElementsByTagName('*');

   for(var i = 0;i < tag.length; i++){
   	 if(tag[i].className == className){
   		arry.push(tag[i]);
   	 }
   }  
   return arry;
}

//获取数组中最小值的Index
function getMinIndex(arry,min){
    for(var j in arry){
    	if(arry[j] == min){
           return j;
    	}
    }
}
