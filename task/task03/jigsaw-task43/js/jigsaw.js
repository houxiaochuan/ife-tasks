window.onload = function(){
    var a = document.getElementById('a');
    jigsaw(a);
}

function jigsaw(imgBox){
    var imgs = imgBox.getElementsByTagName('img');

    switch(imgs.length){
    	case 1: 
    	imgBox.className = 'one';
    	break;
    	case 2: 
    	imgBox.className = 'two';
    	break;
    	case 3: 
    	imgBox.className = 'three';
    	break;
    	case 4: 
    	imgBox.className = 'four';
    	break;
    	case 5: 
    	imgBox.className = 'five';
    	break;
    }
}