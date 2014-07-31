$(document).ready(function(){


	$('#sandbox-container .input-group.date').datepicker({
		language: 'en',
		format: 'dd/mm/yyyy',
	    autoclose: true,
	    todayHighlight: true,
	    clearBtn:true,
	    todayBtn:'linked',
	    forceParse:true,
	    weekStart: 1
	}).on('hide', function(e){
		date=$('#txt-date').val();
		if (date){
			alert('You click this date:'+date);	
		}
    });

	$('#btn-show-date').click(function(){
		date=$('#txt-date').val();
		if (date){
			alert('Today:'+date);	
		}
	});

	$('#sandbox-container2 .input-daterange').datepicker({
		language: 'en',
		format: 'dd/mm/yyyy',
	    autoclose: true,
	    todayHighlight: true,
	    clearBtn:true,
	    todayBtn:'linked',
	    forceParse:true,
	    weekStart: 1
	});

});