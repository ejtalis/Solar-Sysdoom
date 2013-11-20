function mercuryDoom()

{
	var mercQuestions=new Array();
	mercQuestions[0]="How many moons does Mercury have? Enter a number (i.e. ’4’ not ’four’).";
	mercQuestions[1]="How many Earth days does it take for Mercury to rotate once around its axis? Enter a number (i.e. ‘4’, not ‘four’) and round your answer to the nearest whole number.";
	mercQuestions[2]="What is the polar diameter of Mercury, in km? Enter a number (i.e. ‘4’, not ‘four’) and do not include commas (i.e. ‘3997’, not ‘3,997’).";
	mercQuestions[3]="Mercury be observed, from Earth, passing across the face of the Sun. This event is called a transit. How many times per century does this transit of Mercury occur? Enter a number (i.e. ‘4’, not ‘four’).";

	var mercAnswers=["0","88","4879","17"];
	
	var pos=RandomInt(0,mercQuestions.length);
	
	var ques=mercQuestions[pos];
	
	var ans=mercAnswers[pos];
	
	document.getElementById('outputDiv').innerHTML=ques;
	
	userAns=document.getElementById('answerInput').value;
	
	if (userAns===ans) {
		 
		 correct();
	}
	else {
		wrong();
	}
	
	

