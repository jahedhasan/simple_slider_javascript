 var picture = [
 	'images/1.jpg',
 	'images/2.jpg',
 	'images/3.jpg',
 	'images/4.jpg'
 ];
index = 0;
var img = document.getElementById('img');
function Prev(){
	index = index === 0 ? picture.length -1 : index -1;
	img.setAttribute('src', picture[index]);
}

function Next(){
	index = index ===picture.length -1?0 : index +1;
	img.setAttribute('src', picture[index]);
}
<!-- setInterval( function(){Next()}, 100); -->
setInterval(Next, 800);