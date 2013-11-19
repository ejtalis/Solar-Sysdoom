function mercuryDoom()

{
	var mercQuestions= [1. How many moons does Mercury have? Enter a number (i.e. '4', not 'four').,
2. How many Earth days does it take for Mercury to rotate once around its axis? Enter a number (i.e. '4', not 'four') and round your answer to the nearest whole number.,
3. What is the polar diameter of Mercury, in km? Enter a number (i.e. '4', not 'four') and do not include commas (i.e. '3997', not '3,997').,
4. Mercury be observed, from Earth, passing across the face of the Sun. This event is called a transit. How many times per century does this transit of Mercury occur? Enter a number (i.e. '4', not 'four').,]
  
	var mercAnswers= [0,88,4879,17]
	
	return RandomOneOf(mercQuestions);
	
	if (mercQuestions.indexOf(0)===mercAnswers.indexOf(0)) {
	
	Correct();
	}
	else if (mercQuestions.indexOf(1)===mercAnswers.indexOf(1)) {
	
	Correct();
	}
	else if (mercQuestions.indexOf(2)===mercAnswers.indexOf(2)) {
	
	Correct();
	}
	else if (mercQuestions.indexOf(3)===mercAnswers.indexOf(3)) {
	
	Correct();
	}
	
	else {
	Wrong();
	}

}
