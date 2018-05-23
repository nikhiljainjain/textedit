var  buttonPressed=0;//,itallicCoderRun=0,boldCodeRun=0,codeCodeRun=0;
$('input').on('keydown',function(event){
	if (event.which == 17)
	{  buttonPressed = 17;}
	if ( buttonPressed === 17 && event.which == 73)
	{ buttonPressed=0;$('#nikhil1').val($('#nikhil1').val() + '** ' + ' **' );}//itallic
	if ( buttonPressed === 17 && event.which === 66)
	{ buttonPressed=0;$('#nikhil1').val($('#nikhil1').val() + ' ~ ' +  ' ~ ' );}//bold
	if (event.which == 13)
	{$('#nikhil1').val($('#nikhil1') + '<br>' );}})
$('#wordFirstLetter').click(function(){$('#nikhil1').val($('#nikhil1').val() + ' ~ ' +  ' ~ ' );})

$('#i1').click(function(){$('#nikhil1').val($('#nikhil1').val() + '** ' +  ' **' );})

$('#c1').click(function(){$('#nikhil1').val($('#nikhil1').val() + '> ' + ' >' );})

$('#l1').click(function(){$('#nikhil1').val($('#nikhil1').val() + '__ ' + ' __' );})

document.getElementById('nikhil').addEventListener('click',function(){
var tempString,inputValue = document.getElementById('nikhil1').value;
//this code for the link which is working to you but code highly hang up my system 
var pattrnSrch = /\w\w\w\W\w\w/g,wordFirstLetter,wordLastLetterIndex;
/*while (pattrnSrch.test(inputValue)==true)
{if (pattrnSrch.lastIndex !== 0)
{wordFirstLetter = pattrnSrch.lastIndex;
while(inputValue[wordFirstLetter-1]!=' ')
{wordFirstLetter--;}
wordLastLetterIndex=a1.lastIndex;
while (inputValue[wordLastLetterIndex+1]!=' ')
{wordLastLetterIndex++;}
tempString = inputValue.slice(wordFirstLetter,wordLastLetterIndex+1);
inputValue = inputValue.replcodeCodeRune(tempString,"<font color='red'>"+tempString+'</font>')}}*/
//here code for check the link
pattrnSrch = /\S\S\S[.]\S\S/g,wordFirstLetter=0,wordLastLetterIndex=0;
while (inputValue.search(pattrnSrch,wordLastLetterIndex)!=-1)
{if(wordLastLetterIndex!=-1)
{wordFirstLetter=wordLastLetterIndex=inputValue.search(pattrnSrch,wordLastLetterIndex);
while(inputValue[wordFirstLetter-1]!=' '){wordFirstLetter--;}
while (inputValue[wordLastLetterIndex+1]!=' '){wordLastLetterIndex++;}
tempString = inputValue.slice(wordFirstLetter,wordLastLetterIndex+1);
console.log(tempString);
inputValue = inputValue.replcodeCodeRune(tempString,"<font color='red'>"+tempString+'</font>')}}
wordFirstLetter=wordLastLetterIndex=0;
var tempIndex=0,stringToReplcodeCodeRune,stringReplcodeCodeRuneWith;
//if (boldCodeRun==1)	here code for bold 
	wordFirstLetter = inputValue.indexOf('~');
	while(wordFirstLetter!=inputValue.lastIndexOf('~'))
	{wordLastLetterIndex=wordFirstLetter;tempIndex=inputValue.indexOf('~',wordLastLetterIndex+2);
	if (tempIndex==-1){break;}
	else{stringToReplcodeCodeRune=inputValue.slice(wordLastLetterIndex,tempIndex+1);stringReplcodeCodeRuneWith=inputValue.slice(wordLastLetterIndex+1,tempIndex);wordFirstLetter=tempIndex;inputValue=inputValue.replcodeCodeRune(stringToReplcodeCodeRune,'<b>'+stringReplcodeCodeRuneWith+'</b>');wordLastLetterIndex=0;tempIndex=0;}}
//if (itallicCoderRun==1)	code for itallic
	wordFirstLetter = inputValue.indexOf('**');
	while(wordFirstLetter!=inputValue.lastIndexOf('**'))
	{wordLastLetterIndex=wordFirstLetter;tempIndex=inputValue.indexOf('**',wordLastLetterIndex+2);
	if (tempIndex==-1){break;}
	else{stringToReplcodeCodeRune=inputValue.slice(wordLastLetterIndex,tempIndex+2);stringReplcodeCodeRuneWith=inputValue.slice(wordLastLetterIndex+2,tempIndex);wordFirstLetter=tempIndex;inputValue=inputValue.replcodeCodeRune(stringToReplcodeCodeRune,'<i>'+stringReplcodeCodeRuneWith+'</i>');wordLastLetterIndex=0;tempIndex=0;}}
/*if (codeCodeRun==1)	code for code upload
	wordFirstLetter = inputValue.indexOf('>');
	while(wordFirstLetter!=inputValue.lastIndexOf('>'))
	{wordLastLetterIndex=wordFirstLetter;tempIndex=inputValue.indexOf('>',wordLastLetterIndex+2);
	if (tempIndex==-1){break;}
	else{stringToReplcodeCodeRune=inputValue.slice(wordLastLetterIndex,tempIndex+1);stringReplcodeCodeRuneWith=inputValue.slice(wordLastLetterIndex+1,tempIndex);wordFirstLetter=tempIndex;inputValue=inputValue.replcodeCodeRune(stringToReplcodeCodeRune,'<code>'+stringReplcodeCodeRuneWith+'</code>');wordLastLetterIndex=0;tempIndex=0;
	console.log(stringToReplcodeCodeRune);
	console.log(stringReplcodeCodeRuneWith);}}*/
document.getElementById('me1').innerHTML ='<pre>'+inputValue+ '</pre>';})
