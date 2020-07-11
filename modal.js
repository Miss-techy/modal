//add a click event to the bg-modal
document.getElementById('button').addEventListener('click', function(){
	document.querySelector('.bg-modal').style.display = 'flex';   //change the default display of none to flex
})

//add a close event to the modal
document.getElementById('close').addEventListener('click', function(){
	document.querySelector('.bg-modal').style.display = 'none' ;
})
