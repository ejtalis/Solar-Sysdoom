function mercuryDoom()

{
	mercQuestions=new Array();
	mercQuestions[0]="How many moons does Mercury have? Enter a number (i.e. ’4’ not ’four’).";
	mercQuestions[1]="How many Earth days does it take for Mercury to rotate once around its axis? Enter a number (i.e. ‘4’, not ‘four’) and round your answer to the nearest whole number.";
	mercQuestions[2]="What is the polar diameter of Mercury, in km? Enter a number (i.e. ‘4’, not ‘four’) and do not include commas (i.e. ‘3997’, not ‘3,997’).";
	mercQuestions[3]="Mercury be observed, from Earth, passing across the face of the Sun. This event is called a transit. How many times per century does this transit of Mercury occur? Enter a number (i.e. ‘4’, not ‘four’).";

	mercAnswers=["0","88","4879","17"];
	
	mercPos=RandomInt(0,mercQuestions.length);
	
	mercRandomQues=mercQuestions[pos];
	
	mercRandomQAns=mercAnswers[pos];
	
	document.getElementById('outputDiv').innerHTML=mercRandomQues;
}
	
function mercuryCheckAnswer()
{
	userAns=document.getElementById('answerInput').value;
	
	if (userAns===mercRandomQAns) {
		 correct();
	}
	else if (userAns==='') {
		alert('Please type in your answer!');
	}
	else {
		wrong();
	}
	
	

