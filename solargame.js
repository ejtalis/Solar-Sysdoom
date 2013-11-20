function travelToPlanet(planet)
{

planet=document.getElementById('actionInput').value;
 
 if   (planet.toLowerCase()==='mercury') {
  
  displayPlanet( 'To Mercury!'); 
    
	}   
	 else if (planet.toLowerCase()==='venus') {
 
           displayPlanet( 'To Venus!');      
	}
	 else if (planet.toLowerCase()==='earth') {
         
    displayPlanet( 'To Earth!');
    
 	}
     else if (planet.toLowerCase()==='mars') {

	 displayPlanet('To Mars!')
	 
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
      
	  else{ 
            
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
document.getElementById('outputDiv').innerHTML=message;  
}


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

    //Hello Joe
