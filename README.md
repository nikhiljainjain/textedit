<!DOCTYPE html>
<html>
<meta charset="utf-8">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<body><br><br><center>
<button type='button' id='b1'><b>B</b></button>
<button type='button' id='i1'><i>I</i></button>
<button type='button' id='ul1'><small><ul><li>Item 1</li><li>Item2</li></ul></small></button>
<button type='button' id='c1'><strong>Code</strong></button>
<button type='button' id='ol1'><small><ol><li>Item 1</li><li>Item 2</li></ol></small></button>
<button type='button' id='l1'><strong>Link</strong></button><br><br>
<textarea autofocus id='nikhil1' style='width : 50%'></textarea>
<input id='nikhil' type='submit' value='submit'><div></div></center>
<script>var x1=0;
$('input').on('keydown',function(event){
	if (event.which == 17)
	{ x1 = 17;}
	if (x1 === 17 && event.which == 73)
	{x1=0;$('#nikhil1').val($('#nikhil1').val() + '**' + " " + '**' );}//itallic
	if (x1 === 17 && event.which === 66)
	{x1=0;$('#nikhil1').val($('#nikhil1').val() + '*' +  " " + '*' );}//bold
	/*if (event.which == 13)
	{$('#nikhil1').val(x2 + '<br>' );}enter*/})
$('#b1').click(function(){$('#nikhil1').val($('#nikhil1').val() + '*' +  " " + '*' );})
$('#i1').click(function(){$('#nikhil1').val($('#nikhil1').val() + '**' +  " " + '**' );})
$('#c1').click(function(){$('#nikhil1').val($('#nikhil1').val() + '***' +  " " + '***' );})
$('#l1').click(function(){$('#nikhil1').val($('#nikhil1').val() + '$' +  " " + '$' );})
$('#ul1').click(function(event){$('#nikhil1').val($('#nikhil1').val() +'<br> &&' +  "<br>" + '&& <br>' );})
$('#nikhil').click(function(){
$('div').html($('div').html() + $('#nikhil1').val());
})
/*$('input').on('keydown',function(event){
	if (event.which == 17)
	{ x1 = 17;}
	if (x1 === 17 && event.which == 73)
	{x1=0;$('#nikhil1').val($('#nikhil1').val() + '<i>' + " " + '</i>' );}//itallic
	if (x1 === 17 && event.which === 66)
	{x1=0;$('#nikhil1').val($('#nikhil1').val() + '<b>' +  " " + '</b>' );}//bold
	
$('#b1').click(function(){$('#nikhil1').val($('#nikhil1').val() + '<b>' +  " " + '</b>' );})
$('#i1').click(function(){$('#nikhil1').val($('#nikhil1').val() + '<i>' +  " " + '*</i>' );})
$('#c1').click(function(){$('#nikhil1').val($('#nikhil1').val() + '<code>' +  " " + '</code>' );})
$('#l1').click(function(){$('#nikhil1').val($('#nikhil1').val() + '<a href=' +  " Enter link here " + "><strong style='color : red'>"+' Enter link name that you want '+'</strong></a>' );})
$('#ul1').click(function(event){$('#nikhil1').val($('#nikhil1').val() +'<br> &&' +  "<br" + '&& <br>' );})*/
</script></body></html>
