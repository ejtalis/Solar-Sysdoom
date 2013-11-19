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



    //Hello Joe
