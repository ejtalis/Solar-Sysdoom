function travelToPlanet(planet)

{

planet=document.getElementById('actionInput').value;
 
 if   (planet==='mercury') {
  
  displayPlanet( 'To Mercury!'); 
    
	}   
	 else if (planet==='venus') {
 
           displayPlanet( 'To Venus!');      
	}
	 else if ( planet==='earth') {
         
    displayPlanet( 'To Earth!');
    
 	}
     else if (planet==='mars') {

	 displayPlanet('To Mars!')
	 
	}
	 else if (planet==='jupiter') {
  
           displayPlanet('To Jupiter!');
   
    }
	 else if (planet==='saturn') {
 
           displayPlanet( 'To Saturn!');
           
	}
	 else if ( planet==='uranus') {
    
    displayPlanet( 'To Uranus!');
          
 	} 
	 else if (planet==='neptune') {
  
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
