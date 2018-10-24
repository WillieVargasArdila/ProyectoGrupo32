
var play = 0;
function reproduciraudio(id){
	if(play==0){
		$("#"+id)[0].play();
         play=1;
     }else{
     	$("#"+id)[0].pause();
         play=0;
     }

}

  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.dropdown-trigger');
    var instances = M.Dropdown.init(elems, options);
  });

  // Or with jQuery

  $('.dropdown-trigger').dropdown();