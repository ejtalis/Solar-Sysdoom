function travelToPlanet()
{
	planet=document.getElementById('actionInput').value;
	
	if (planet.toLowerCase()==='mercury') {
 	 	nextPage(2, 3); 
  		mercuryDoom();    
 	 }   

		else if (planet.toLowerCase()==='venus') {
           		nextPage(2,4);
			venusDoom();     
		}
	 
	 		else if (planet.toLowerCase()==='earth') {         
   	   			nextPage(2,5);
   	   			earthDoom();
 			}

  			 	else if (planet.toLowerCase()==='mars') {
					nextPage(2,6);
					marsDoom();
			 	}

				 	else if (planet.toLowerCase()==='jupiter') {  
          					 nextPage(2,7);
          					 jupiterDoom();
  				 	}
	 					else if (planet.toLowerCase()==='saturn') {
           						nextPage(2,8);
           						saturnDoom();
						}
							 else if (planet.toLowerCase()==='uranus') {   
   								 nextPage(2,9);
   								 uranusDoom();
 						 	 } 

							 	else if (planet.toLowerCase()==='neptune') {  
          								 nextPage(2,10)
          								 neptuneDoom();
        						 	}
									else if (planet.toLowerCase()==='sun') {             
	   							   		checkPlanetNumber();
								  	  }
										else {             
	   										displayPlanet('You cannot travel there!');           
								  		 }
}
        
        

function changeStoryDiv()
{
	document.getElementById('storyDiv').style.display = 'block';
	var playerInfo; 
	playerInfo= {
		teamname: document.getElementById('teamNameInput').value,
		spaceship: document.getElementById('shipNameInput').value
		};
	document.getElementById('storyDiv').innerHTML = 'The year is 3013 and the world is in grave danger. ' + playerInfo.teamname + ', the world as we know it and the entire solar system will be destroyed unless you collect all the pieces of a device that will keep the sun shining. Otherwise the sun will die out and the solar system, along with all its inhabitance, will cease to exist. As ' + playerInfo.teamname + ', you must to go to each planet in the solar system in your spaceship, ' + playerInfo.spaceship + ', and  answer a question about that planet in order to get each piece of the device, and upgrade the ' + playerInfo.spaceship + ', so you can prepare for the final voyage to the sun. Though if your team goes to the sun too early, ' + playerInfo.spaceship + ' will be disintegrated and you fail your mission. Otherwise, ' + playerInfo.teamname + ' is allowed to freely go to each planet in any order, and can retry the questions about each planet. Because of an unexpected chemical imbalance in the fusion reaction that the sun undergoes, it is up to ' + playerInfo.teamname + ' to save the solar system!';
}

 
function proceedFromPage0()
{
	numberOfPlanets=new Array(); 
	nextPage(0,1);
	changeStoryDiv();
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
	document.getElementById('outputDivTravel').innerHTML=message;  
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
document.getElementById('page0').style.display = 'block';
}


function addPlanet(planName)
{
	planetNumber=numberOfPlanets.length;
	nextPlanet=(planetNumber + 1);
	numberOfPlanets[planetNumber]=planName;
}


function checkPlanetNumber()
{
	
	if (planetNumber===7) {
		goToSun();
	}
	else {

		alert('You cannot travel to the sun yet, or you will be killed! Please visit each planet and collect all pieces of the device.');		
	}
}


function goToSun()
{
	nextPage(2,11);
}


function saveSolarSystem()
{
	nextPage(11,12);
}


function leaveSolarSystem()
{
	nextPage(11,13);
}


function giveLength(divName)
{
	theLength=numberOfPlanets.length;
	
	document.getElementById(divName).style.display = 'block';
	
	document.getElementById(divName).innerHTML=numberOfPlanets;
}


function mercuryDoom()
{
	giveLength('mercuryL');
	
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
			addPlanet('mercury');
			nextPage(3,2);
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
	giveLength('venusL');

	var venusQuestions=new Array();
	venusQuestions[0]="Venus is the second brightest object in the night sky after what other object? Enter an all-lowercase word";
	venusQuestions[1]="How many Earth days does it take for Venus to rotate once around its axis? Enter a number (i.e. '4', not 'four') and round your answer to the nearest whole number.";
	venusQuestions[2]="How many moons does Venus have? Enter a number (i.e. '4', not 'four').";
	venusQuestions[3]="What was the first country to land a man-made spacecraft on Venus? Enter an all-lowercase word";
  
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
			addPlanet('venus');
			nextPage(4,2);
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
	giveLength('earthL');
	
	var earthQuestions=new Array();
	earthQuestions[0]="The Earth's rotation is known to be changing. Is it slowing down or speeding up?";
	earthQuestions[1]="Earth is the only planet, besides for Uranus, not named after a ____. Fill in the blank. Enter an all-lowercase word";
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
			addPlanet('earth');
			nextPage(5,2);
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
	giveLength('marsL');
	
	var marsQuestions=new Array();
	marsQuestions[0]="How many missions to Mars have been successful? Enter a number (i.e. '4', not 'four').";
	marsQuestions[1]="Mars takes its name from the Roman god of what? Enter an all-lowercase word";
	marsQuestions[2]="How many moons does Mars have? Enter a number (i.e. '4', not 'four').";
	marsQuestions[3]="Mars has the largest ____ storms in the solar system. Fill in the blank. Enter an all-lowercase word";
  
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
			addPlanet('mars');
			nextPage(6,2);
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
	giveLength('jupiterL');	
	
	var jupQuestions=new Array();
	jupQuestions[0]="Jupiter, along with the other 4 outer planets, is a ____ giant. Fill in the blank. Enter an all-lowercase word";
	jupQuestions[1]="How many moons does Jupiter have? Enter a number (i.e. '4', not 'four').";
	jupQuestions[2]="Which moon of Jupiter's is the largest moon in the solar system? Enter an all-lowercase word";
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
			addPlanet('jupiter');
			nextPage(7,2);
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
	giveLength('saturnL');
	
	var satQuestions=new Array();
	satQuestions[0]="Saturn is the second largest planet in the solar system. What is the largest planet in the solar system? Enter an all-lowercase word";
	satQuestions[1]="How many moons does Saturn have? Enter a number (i.e. '4', not 'four').";
	satQuestions[2]="Who first observed Saturn's rings? Enter an all-lowercase word";
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
			addPlanet('saturn');
			nextPage(8,2);
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
	giveLength('uranusL');	
	
	var uranusQuestions=new Array();
	uranusQuestions[0]="Uranus was the first planet to be observed using a __________. Fill in the blank. Enter an all-lowercase word";
	uranusQuestions[1]="How many moons does Uranus have? Enter a number (i.e. '4', not 'four').";
	uranusQuestions[2]="In what year was Uranus discovered?";
	uranusQuestions[3]="All of Uranus' moons are named after characters from the works of William Shakespeare and Alexander ____. Fill in the blank. Enter an all-lowercase word";
  
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
			addPlanet('uranus');
			nextPage(9,2);
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
	giveLength('neptuneL');	
	
	var nepQuestions=new Array();
	nepQuestions[0]="How many moons does Neptune have? Enter a number (i.e. '4', not 'four').";
	nepQuestions[1]="What is the name of Neptune's major moon? Enter an all-lowercase word";
	nepQuestions[2]="Although smaller in diameter to Uranus, Neptune has a greater _____. Fill in the blank. Enter an all-lowercase word";
	nepQuestions[3]="Neptune has only been passed by one spacecraft, Voyager 2 which flew by on the 25th of August ____. Fill in the blank. Enter an all-lowercase word";
  
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
			addPlanet('neptune');
			nextPage(10,2);
		}
		else if (userAns==='') {
			alert('Please type in your answer!');
		}
		else {
			wrong();
		}
}
