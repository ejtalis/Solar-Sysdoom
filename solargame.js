function travelToPlanet()
{
	planet=document.getElementById('actionInput').value;
 
	if (planet.toLowerCase()==='mercury') {
 	 	nextPage(1, 2); 
  		mercuryDoom();    
 	 }   

		else if (planet.toLowerCase()==='venus') {
           		nextPage(1,3);
			venusDoom();     
		}
	 
	 		else if (planet.toLowerCase()==='earth') {         
   	   			nextPage(1,4);
   	   			earthDoom();
 			}

  			 	else if (planet.toLowerCase()==='mars') {
					nextPage(1,5);
					marsDoom();
			 	}

				 	else if (planet.toLowerCase()==='jupiter') {  
          					 nextPage(1,6);
          					 jupiterDoom();
  				 	}
	 					else if (planet.toLowerCase()==='saturn') {
           						nextPage(1,7);
           						saturnDoom();
						}
							 else if (planet.toLowerCase()==='uranus') {   
   								 nextPage(1,8);
   								 uranusDoom();
 						 	 } 

							 	else if (planet.toLowerCase()==='neptune') {  
          								 nextPage(1,9)
          								 neptuneDoom();
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


function nextPage(curr,next)
{
      
	var currPage, nextPage;

	currPage = document.getElementById('page' + curr);
        nextPage = document.getElementById('page' + next);
      
	currPage.style.display = 'none';
	nextPage.style.display = 'block';

}


function startScreen()
{
document.getElementById('page10').style.display = 'block';
}

   
//var playerInfo = {
	//teamname:document.getElementById('teamNameInput').value;
	//spaceship:document.getElementById('shipNameInput').value;
//};
    

function mercuryDoom()
{
	mercQuestions=new Array();
	mercQuestions[0]="How many moons does Mercury have? Enter a number (i.e. '4' not 'four').";
	mercQuestions[1]="How many Earth days does it take for Mercury to rotate once around its axis? Enter a number (i.e. '4', not 'four') and round your answer to the nearest whole number.";
	mercQuestions[2]="What is the polar diameter of Mercury, in km? Enter a number (i.e. '4', not 'four') and do not include commas (i.e. '3997', not '3,997').";
	mercQuestions[3]="Mercury be observed, from Earth, passing across the face of the Sun. This event is called a transit. How many times per century does this transit of Mercury occur? Enter a number (i.e. '4', not 'four').";
  
	var mercAnswers=["0","88","4879","17"];
	
	var mercPos=RandomInt(0,3);
	
	var mercRandomQues=mercQuestions[mercPos];
	
	 mercRandomQAns=mercAnswers[mercPos];
	
	document.getElementById('outputMercury').style.display = 'block';
	
	document.getElementById('outputMercury').innerHTML=mercRandomQues;	
}


function mercuryCheckAnswer()
{
   	var userAns=document.getElementById('answerInputMercury').value;
	
		if (userAns===mercRandomQAns) { 
			 correct();
			nextPage(2,1);
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
	var venusQuestions=new Array();
	venusQuestions[0]="Venus is the second brightest object in the night sky after what other object?";
	venusQuestions[1]="How many Earth days does it take for Venus to rotate once around its axis? Enter a number (i.e. '4', not 'four') and round your answer to the nearest whole number.";
	venusQuestions[2]="How many moons does Venus have? Enter a number (i.e. '4', not 'four').";
	venusQuestions[3]="What was the first country to land a man-made spacecraft on Venus?";
  
	var venusAnswers=["moon","225","0","soviet union"];
	
	var venusPos=RandomInt(0,3);
	
	var venusRandomQues=venusQuestions[venusPos];
	
	 venusRandomQAns=venusAnswers[venusPos];
	
	document.getElementById('outputVenus').style.display = 'block';
	
	document.getElementById('outputVenus').innerHTML=venusRandomQues;	

}

function venusCheckAnswer()
{
   	var userAns=document.getElementById('answerInputVenus').value;
	
		if (userAns===venusRandomQAns) { 
			 correct();
			nextPage(3,1);
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
	var earthQuestions=new Array();
	earthQuestions[0]="The Earth's rotation is known to be changing. Is it slowing down or speeding up?";
	earthQuestions[1]="Earth is the only planet not named after a ____. Fill in the blank.";
	earthQuestions[2]="What is the equatorial diameter of Earth, in km? Enter a number (i.e. '4', not 'four') and do not include commas (i.e. '3997', not '3,997').";
	earthQuestions[3]="What is the equatorial circumference of Earth, in km? Enter a number (i.e. '4', not 'four') and do not include commas (i.e. '3997', not '3,997').";
  
	var earthAnswers=["slowing down","god","12756","40030"];
	
	var earthPos=RandomInt(0,3);
	
	var earthRandomQues=earthQuestions[earthPos];
	
	 earthRandomQAns=earthAnswers[earthPos];
	
	document.getElementById('outputEarth').style.display = 'block';
	
	document.getElementById('outputEarth').innerHTML=earthRandomQues;
}


		
function earthCheckAnswer()
{
   	var userAns=document.getElementById('answerInputEarth').value;
	
		if (userAns===earthRandomQAns) { 
			 correct();
			nextPage(4,1);
		}
		else if (userAns==='') {
			alert('Please type in your answer!');
		}
		else {
			wrong();
		}
}


function marsDoom()
{
	var marsQuestions=new Array();
	marsQuestions[0]="How many missions to Mars have been successful? Enter a number (i.e. '4', not 'four').";
	marsQuestions[1]="Mars takes its name from the Roman god of what?";
	marsQuestions[2]="How many moons does Mars have? Enter a number (i.e. '4', not 'four').";
	marsQuestions[3]="Mars has the largest ____ storms in the solar system. Fill in the blank.";
  
	var marsAnswers=["16","war","2","dust"];
	
	var marsPos=RandomInt(0,3);
	
	var marsRandomQues=marsQuestions[marsPos];
	
	 marsRandomQAns=marsAnswers[marsPos];
	
	document.getElementById('outputMars').style.display = 'block';
	
	document.getElementById('outputMars').innerHTML=marsRandomQues;	
}


function marsCheckAnswer()
{
   	var userAns=document.getElementById('answerInputMars').value;
	
		if (userAns===marsRandomQAns) { 
			 correct();
			nextPage(5,1);
		}
		else if (userAns==='') {
			alert('Please type in your answer!');
		}
		else {
			wrong();
		}
}


function jupiterDoom()
{
	var jupQuestions=new Array();
	jupQuestions[0]="Jupiter, along with the other 4 outer planets, is a ____ giant. Fill in the blank.";
	jupQuestions[1]="How many moons does Jupiter have? Enter a number (i.e. '4', not 'four').";
	jupQuestions[2]="Which moon if Jupiter's is the largest moon in the solar system?";
	jupQuestions[3]="What is the equatorial circumference of Jupiter, in km? Enter a number (i.e. '4', not 'four') and do not include commas (i.e. '3997', not '3,997').";
  
	var jupAnswers=["gas","67","ganymede","439264"];
	
	var jupPos=RandomInt(0,3);
	
	var jupRandomQues=jupQuestions[jupPos];
	
	 jupRandomQAns=jupAnswers[jupPos];
	
	document.getElementById('outputJupiter').style.display = 'block';
	
	document.getElementById('outputJupiter').innerHTML=jupRandomQues;	
}


function jupiterCheckAnswer()
{
   	var userAns=document.getElementById('answerInputJupiter').value;
	
		if (userAns===jupRandomQAns) { 
			 correct();
			nextPage(6,1);
		}
		else if (userAns==='') {
			alert('Please type in your answer!');
		}
		else {
			wrong();
		}
}


function saturnDoom()
{
	var satQuestions=new Array();
	satQuestions[0]="Saturn is the second largest planet in the solar system. What is the largest planet in the solar system?";
	satQuestions[1]="How many moons does Jupiter have? Enter a number (i.e. '4', not 'four').";
	satQuestions[2]="Who first observed Saturn's rings?";
	satQuestions[3]="How many rings does Saturn have? Enter a number (i.e. '4', not 'four').";
  
	var satAnswers=["jupiter","62","galileo","7"];
	
	var satPos=RandomInt(0,3);
	
	var satRandomQues=satQuestions[satPos];
	
	 satRandomQAns=satAnswers[satPos];
	
	document.getElementById('outputSaturn').style.display = 'block';
	
	document.getElementById('outputSaturn').innerHTML=satRandomQues;	
}


function saturnCheckAnswer()
{
   	var userAns=document.getElementById('answerInputSaturn').value;
	
		if (userAns===satRandomQAns) { 
			 correct();
			nextPage(7,1);
		}
		else if (userAns==='') {
			alert('Please type in your answer!');
		}
		else {
			wrong();
		}
}


function uranusDoom()
{
	var uranusQuestions=new Array();
	uranusQuestions[0]="Uranus was the first planet to be observed using a __________. Fill in the blank.";
	uranusQuestions[1]="How many moons does Uranus have?";
	uranusQuestions[2]="In what year was Uranus discovered?";
	uranusQuestions[3]="All of Uranus\' moons are named after characters from the works of William Shakespeare and Alexander ____. Fill in the blank.";
  
	var uranusAnswers=["telescope","27","1781","pope"];
	
	var uranusPos=RandomInt(0,3);
	
	var uranusRandomQues=uranusQuestions[uranusPos];
	
	 uranusRandomQAns=uranusAnswers[uranusPos];
	
	document.getElementById('outputUranus').style.display = 'block';
	
	document.getElementById('outputUranus').innerHTML=uranusRandomQues;
}

function uranusCheckAnswer()
{
   	var userAns=document.getElementById('answerInputUranus').value;
	
		if (userAns===uranusRandomQAns) { 
			 correct();
			nextPage(8,1);
		}
		else if (userAns==='') {
			alert('Please type in your answer!');
		}
		else {
			wrong();
		}
}


function neptuneDoom()
{
	var nepQuestions=new Array();
	nepQuestions[0]="How many moons does Neptune have? Enter a number (i.e. '4', not 'four').";
	nepQuestions[1]="What is the name of Neptune's major moon?";
	nepQuestions[2]="Although smaller in diameter to Uranus, Neptune has a greater _____. Fill in the blank.";
	nepQuestions[3]="Neptune has only been passed by one spacecraft, Voyager 2 which flew by on the 25th of August ____. Fill in the blank";
  
	var nepAnswers=["14","tritan","mass","1989"];
	
	var nepPos=RandomInt(0,3);
	
	var nepRandomQues=nepQuestions[nepPos];
	
	 nepRandomQAns=nepAnswers[nepPos];
	
	document.getElementById('outputNeptune').style.display = 'block';
	
	document.getElementById('outputNeptune').innerHTML=nepRandomQues;
}


function neptuneCheckAnswer()
{
   	var userAns=document.getElementById('answerInputNeptune').value;
	
		if (userAns===nepRandomQAns) { 
			 correct();
			nextPage(9,1);
		}
		else if (userAns==='') {
			alert('Please type in your answer!');
		}
		else {
			wrong();
		}
}
