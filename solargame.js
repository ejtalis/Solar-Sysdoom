function travelToPlanet()
{
	planet=document.getElementById('actionInput').value;
 
	if (planet.toLowerCase()==='mercury') {
 	 	displayPlanet( 'To Mercury!'); 
  		mercuryDoom();    
 	 }   

		else if (planet.toLowerCase()==='venus') {
           		displayPlanet( 'To Venus!');
			venusDoom();     
		}
	 
	 		else if (planet.toLowerCase()==='earth') {         
   	   			displayPlanet( 'To Earth!');   
 			}

  			 	else if (planet.toLowerCase()==='mars') {
					displayPlanet('To Mars!');	 
			 	}

				 	else if (planet.toLowerCase()==='jupiter') {  
          					 displayPlanet('To Jupiter!');  
  				 	}
	 					else if (planet.toLowerCase()==='saturn') {
           						displayPlanet( 'To Saturn!');           
						}
							 else if (planet.toLowerCase()==='uranus') {   
   								 displayPlanet( 'To Uranus!');          
 						 	 } 

							 	else if (planet.toLowerCase()==='neptune') {  
          								 displayPlanet('To Neptune!');   
        						 	}
									  else {             
	   									displayPlanet('You cannot travel there!');           
								  	  }
}
        
    
function correct()
{
	alert('Correct! Type in another name of a Planet to get the next piece of the device!');
}      

function wrong()
{
	alert('Try Again!');
}   
   
  
function displayPlanet(message)
{
	document.getElementById('outputDiv0').innerHTML=message;  
}


function mercuryDoom()
{
	mercQuestions=new Array();
	mercQuestions[0]="How many moons does Mercury have? Enter a number (i.e. ’4’ not ’four’).";
	mercQuestions[1]="How many Earth days does it take for Mercury to rotate once around its axis? Enter a number (i.e. ‘4’, not ‘four’) and round your answer to the nearest whole number.";
	mercQuestions[2]="What is the polar diameter of Mercury, in km? Enter a number (i.e. ‘4’, not ‘four’) and do not include commas (i.e. ‘3997’, not ‘3,997’).";
	mercQuestions[3]="Mercury be observed, from Earth, passing across the face of the Sun. This event is called a transit. How many times per century does this transit of Mercury occur? Enter a number (i.e. ‘4’, not ‘four’).";
  
	mercAnswers=["0","88","4879","17"];
	
	mercPos=RandomInt(0,3);
	
	mercRandomQues=mercQuestions[mercPos];
	
	mercRandomQAns=mercAnswers[mercPos];
	
	document.getElementById('outputDiv1').innerHTML=mercRandomQues;	
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
}

function venusDoom()
{
	venusQuestions=new Array();
	venusQuestions[0]="Venus is the second brightest object in the night sky after what other object?";
	venusQuestions[1]="How many Earth days does it take for Venus to rotate once around its axis? Enter a number (i.e. '4', not 'four') and round your answer to the nearest whole number.";
	venusQuestions[2]="How many moons does Venus have? Enter a number (i.e. '4', not 'four').";
	venusQuestions[3]="What was the first country to land a man-made spacecraft on Venus?";
  
	venusAnswers=["moon","225","0","soviet union"];
	
	venusPos=RandomInt(0,3);
	
	venusRandomQues=venusQuestions[venusPos];
	
	venusRandomQAns=venusAnswers[venusPos];
	
	document.getElementById('outputDiv1').innerHTML=venusRandomQues;	
}

function venusCheckAnswer()
{
   	userAns=document.getElementById('answerInput').value;
	
		if (userAns===venusRandomQAns) { 
			 correct();
		}
		else if (userAns==='') {
			alert('Please type in your answer!');
		}
		else {
			wrong();
		}
}

function earthDoom()
{
	earthQuestions=new Array();
	earthQuestions[0]="The Earth's rotation is known to be changing. Is it slowing down or speeding up?";
	earthQuestions[1]="Earth is the only planet not named after a ____. Fill in the blank.";
	earthQuestions[2]="What is the equatorial diameter of Earth, in km? Enter a number (i.e. '4', not 'four') and do not include commas (i.e. '3997', not '3,997').";
	earthQuestions[3]="What is the equatorial circumference of Earth, in km? Enter a number (i.e. '4', not 'four') and do not include commas (i.e. '3997', not '3,997').";
  
	earthAnswers=[“slowing down”,”god”,”12756”,”40030”];
	
	earthPos=RandomInt(0,3);
	
	earthRandomQues=earthQuestions[earthPos];
	
	earthRandomQAns=earthAnswers[earthPos];
	
	document.getElementById('outputDiv1').innerHTML=earthRandomQues;	
}

function earthCheckAnswer()
{
   	userAns=document.getElementById('answerInput').value;
	
		if (userAns===earthRandomQAns) { 
			 correct();
		}
		else if (userAns==='') {
			alert('Please type in your answer!');
		}
		else {
			wrong();
		}
}