var varx=0;//,ai=0,ab=0,ac=0;
$('input').on('keydown',function(event){
	if (event.which == 17)
	{ varx = 17;}
	if (varx === 17 && event.which == 73)
	{varx=0;$('#nikhil1').val($('#nikhil1').val() + '** ' + ' **' );}//itallic
	if (varx === 17 && event.which === 66)
	{varx=0;$('#nikhil1').val($('#nikhil1').val() + ' ~ ' +  ' ~ ' );}//bold
	if (event.which == 13)
	{$('#nikhil1').val($('#nikhil1') + '<br>' );}})
$('#var1').click(function(){$('#nikhil1').val($('#nikhil1').val() + ' ~ ' +  ' ~ ' );})

$('#i1').click(function(){$('#nikhil1').val($('#nikhil1').val() + '** ' +  ' **' );})

$('#c1').click(function(){$('#nikhil1').val($('#nikhil1').val() + '> ' + ' >' );})

$('#l1').click(function(){$('#nikhil1').val($('#nikhil1').val() + '__ ' + ' __' );})

document.getElementById('nikhil').addEventListener('click',function(){
var txtTemp,txt = document.getElementById('nikhil1').value;
 this code for the link which is working to you but code highly hang up my system 
var pattrn = /\w\w\w\W\w\w/g,var1,var2;
/*while (pattrn.test(txt)==true)
{if (pattrn.lastIndex !== 0)
{var1 = pattrn.lastIndex;
while(txt[var1-1]!=' ')
{var1--;}
var2=a1.lastIndex;
while (txt[var2+1]!=' ')
{var2++;}
txtTemp = txt.slice(var1,var2+1);
txt = txt.replace(txtTemp,"<font color='red'>"+txtTemp+'</font>')}}*/
//here code for check the link
pattrn = /\S\S\S[.]\S\S/g,var1=0,var2=0;
while (txt.search(pattrn,var2)!=-1)
{if(var2!=-1)
{var1=var2=txt.search(pattrn,var2);
while(txt[var1-1]!=' '){var1--;}
while (txt[var2+1]!=' '){var2++;}
txtTemp = txt.slice(a3,a4+1);
console.log(a5);
txt = txt.replace(a5,"<font color='red'>"+a5+'</font>')}}
var1=var2=0;
var var3=0,var4,var5;
//if (ab==1)	here code for bold 
	var1 = txt.indexOf('~');
	while(var1!=txt.lastIndexOf('~'))
	{var2=var1;var3=txt.indexOf('~',var2+2);
	if (var3==-1){break;}
	else{var4=txt.slice(var2,var3+1);var5=txt.slice(var2+1,var3);var1=var3;txt=txt.replace(var4,'<b>'+var5+'</b>');var2=0;var3=0;}}
//if (ai==1)	code for itallic
	var1 = txt.indexOf('**');
	while(var1!=txt.lastIndexOf('**'))
	{var2=var1;var3=txt.indexOf('**',var2+2);
	if (var3==-1){break;}
	else{var4=txt.slice(var2,var3+2);var5=txt.slice(var2+2,var3);var1=var3;txt=txt.replace(var4,'<i>'+var5+'</i>');var2=0;var3=0;}}
/*if (ac==1)	code for code upload
	var1 = txt.indexOf('>');
	while(var1!=txt.lastIndexOf('>'))
	{var2=var1;var3=txt.indexOf('>',var2+2);
	if (var3==-1){break;}
	else{var4=txt.slice(var2,var3+1);var5=txt.slice(var2+1,var3);var1=var3;txt=txt.replace(var4,'<code>'+var5+'</code>');var2=0;var3=0;
	console.log(var4);
	console.log(var5);}}*/
document.getElementById('me1').innerHTML ='<pre>'+txt+ '</pre>';})
