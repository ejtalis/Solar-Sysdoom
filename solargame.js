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
        
    
       
      
           
        


  
function displayPlanet(message)

{


document.getElementById('outputDiv').innerHTML=message;  

}


function Mercury(answer)

{
	return RandomOneOf([]);
	
	if (answer.charAt(0)===)
}

    //Hello Joe
