var x1=0;//,ai=0,ab=0,ac=0;
$('input').on('keydown',function(event){
	if (event.which == 17)
	{ x1 = 17;}
	if (x1 === 17 && event.which == 73)
	{x1=0;$('#nikhil1').val($('#nikhil1').val() + '** ' + ' **' );ai=1;}//itallic
	if (x1 === 17 && event.which === 66)
	{x1=0;$('#nikhil1').val($('#nikhil1').val() + ' ~ ' +  ' ~ ' );ab=1;}//bold
	if (event.which == 13)
	{$('#nikhil1').val($('#nikhil1') + '<br>' );}})
$('#b1').click(function(){$('#nikhil1').val($('#nikhil1').val() + ' ~ ' +  ' ~ ' );})

$('#i1').click(function(){$('#nikhil1').val($('#nikhil1').val() + '** ' +  ' **' );})

$('#c1').click(function(){$('#nikhil1').val($('#nikhil1').val() + '> ' + ' >' );})

$('#l1').click(function(){$('#nikhil1').val($('#nikhil1').val() + '__ ' + ' __' );})

document.getElementById('nikhil').addEventListener('click',function(){
var a5,a2 = document.getElementById('nikhil1').value;
/* this code for the link which is working to you but code highly hang up my system 
var a1 = /\w\w\w\W\w\w/g;
while (a1.test(a3)==true)
{if (a1.lastIndex !== 0)
{var a2 = a1.lastIndex;
while(a3[a2-1]!=' ')
{a2--;}
var a4=a1.lastIndex;
while (a3[a4+1]!=' ')
{a4++;}
a5 = a3.slice(a2,a4+1);
a3 = a3.replace(a5,"<font color='red'>"+a5+'</font>')}}*/
//here code for check the link
var a1 = /\S\S\S[.]\S\S/g,a4=0,a3=0;
while (a2.search(a1,a4)!=-1)
{if(a4!=-1)
{a4=a3=a2.search(a1,a4);
while(a2[a3-1]!=' '){a3--;}
while (a2[a4+1]!=' '){a4++;}
a5 = a2.slice(a3,a4+1);
console.log(a5);
a2 = a2.replace(a5,"<font color='red'>"+a5+'</font>')}}
var b3=0,b1=0,b2=0,b4,b5;
//if (ab==1)	here code for bold 
	b1 = a2.indexOf('~');
	while(b1!=a2.lastIndexOf('~'))
	{b2=b1;b3=a2.indexOf('~',b2+2);
	if (b3==-1){break;}
	else{b4=a2.slice(b2,b3+1);b5=a2.slice(b2+1,b3);b1=b3;a2=a2.replace(b4,'<b>'+b5+'</b>');b2=0;b3=0;}}
//if (ai==1)	code for itallic
	b1 = a2.indexOf('**');
	while(b1!=a2.lastIndexOf('**'))
	{b2=b1;b3=a2.indexOf('**',b2+2);
	if (b3==-1){break;}
	else{b4=a2.slice(b2,b3+2);b5=a2.slice(b2+2,b3);b1=b3;a2=a2.replace(b4,'<i>'+b5+'</i>');b2=0;b3=0;}}
/*if (ac==1)	code for code upload
	b1 = a2.indexOf('>');
	while(b1!=a2.lastIndexOf('>'))
	{b2=b1;b3=a2.indexOf('>',b2+2);
	if (b3==-1){break;}
	else{b4=a2.slice(b2,b3+1);b5=a2.slice(b2+1,b3);b1=b3;a2=a2.replace(b4,'<code>'+b5+'</code>');b2=0;b3=0;
	console.log(b4);
	console.log(b5);}}*/
document.getElementById('me1').innerHTML ='<pre>'+a2+ '</pre>';})
