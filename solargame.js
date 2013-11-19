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
        
    
       
      
           
function Correct()

{
alert('Correct! Type in another name of a Planet to get the next piece of the device!');
}      

function Wrong()

{
alert('Try Again!');
}  


  
function displayPlanet(message)

{
document.getElementById('outputDiv').innerHTML=message;  
}


function Mercury()

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

    //Hello Joe
