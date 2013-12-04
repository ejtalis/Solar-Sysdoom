function travelToPlanet()
{
	var planet
	planet=document.getElementById('actionInput').value;
	
	if (planet.toLowerCase()==='mercury') {
 		 planetGo(' Mercury', 'mercuryDoom', 'mercuryPicture', '3');
 	 }   

		else if (planet.toLowerCase()==='venus') {
           		planetGo(' Venus', 'venusDoom', 'venusPicture', '4');  
		}
	 
	 		else if (planet.toLowerCase()==='earth') {         
   	   			planetGo(' Earth', 'earthDoom', 'earthPicture', '5');
 			}

  			 	else if (planet.toLowerCase()==='mars') {
					planetGo(' Mars', 'marsDoom', 'marsPicture', '6');
			 	}

				 	else if (planet.toLowerCase()==='jupiter') {  
          					 planetGo(' Jupiter', 'jupiterDoom', 'jupiterPicture', '7');
  				 	}
	 					else if (planet.toLowerCase()==='saturn') {
           						planetGo(' Saturn', 'saturnDoom', 'saturnPicture', '8');
						}
							 else if (planet.toLowerCase()==='uranus') {   
   								planetGo(' Uranus', 'uranusDoom', 'uranusPicture', '9');
 						 	 } 

							 	else if (planet.toLowerCase()==='neptune') {  
          								 planetGo(' Neptune', 'neptuneDoom', 'neptunePicture', '10');
        						 	}
									else if (planet.toLowerCase()==='sun') {             
	   							   		checkPlanetNumber();
										changeSunDiv();
								  	  }
										else {             
	   										displayPlanet('You cannot travel there!');           
								  		 }
}
        

function planetGo(element, doomFunction, picture, pageNum)
{
	var theIndex
	theIndex=numberOfPlanets.indexOf(element);
	if (theIndex===-1) {
		showDiv(picture);
		nextPage(2, pageNum);
		window[doomFunction]();
	}
	else {
		alert('You have already been to this planet. Please enter another planet name or, if you have collected all the pieces of the device, proceed to the sun.');
	}
}


function showDiv(divName)
{
	document.getElementById(divName).style.display = 'block';
}


function changeStoryDiv()
{
	showDiv('storyDiv');
	showDiv('pictureDiv');
	
	playerInfo= {
		teamname: document.getElementById('teamNameInput').value,
		spaceship: document.getElementById('shipNameInput').value
		};
		
	document.getElementById('storyDiv').innerHTML = 'The year is 3013 and the world is in grave danger. ' + playerInfo.teamname + ', the world as we know it and the entire solar system will be destroyed unless you collect all the pieces of a device that will keep the sun shining. Otherwise the sun will die out and the solar system, along with all its inhabitance, will cease to exist. As ' + playerInfo.teamname + ', you must to go to each planet in the solar system in your spaceship, ' + playerInfo.spaceship + ', and  answer a question about that planet in order to get each piece of the device, and upgrade the ' + playerInfo.spaceship + ', so you can prepare for the final voyage to the sun. Though if your team goes to the sun too early, ' + playerInfo.spaceship + ' will be disintegrated and you fail your mission. Otherwise, ' + playerInfo.teamname + ' is allowed to freely go to each planet in any order, and can retry the questions about each planet. Because of an unexpected chemical imbalance in the fusion reaction that the sun undergoes, it is up to ' + playerInfo.teamname + ' to save the solar system!';
}


function changeSunDiv()
{
	showDiv('sunDiv');
	document.getElementById('sunDiv').innerHTML = 'Now ' + playerInfo.teamname + ' has a choice. Save the solar system as intended, or start civilization over again on another near by solar system that can also sustain life, using the device as an energy source to power the ' + playerInfo.spaceship + ' and get to the new solar system. What will you do?';
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


function addPlanet(planName)
{
	var nextPlanet
	
	planetNumber=numberOfPlanets.length;
	nextPlanet=(planetNumber + 1);
	numberOfPlanets[planetNumber]=planName;
}


function checkPlanetNumber()
{
	if (planetNumber===7) {
		nextPage(2,11);
	}
	else {
		alert('You cannot travel to the sun yet, or you will be killed! Please visit each planet and collect all pieces of the device.');		
	}
}


function saveSolarSystem()
{
	nextPage(11,12);
	showDiv('goodChoiceDiv');
	document.getElementById('goodChoiceDiv').innerHTML = 'Having successfully collected all the pieces of the devicew ' + playerInfo.teamname + ' has saved the solar system! The sun is saved and ' + playerInfo.teamname + ', and their ship the ' + playerInfo.spaceship + ', have made history as the saviors of the solar system. Game Over!';
}


function leaveSolarSystem()
{
	nextPage(11,13);
	showDiv('badChoiceDiv');
	document.getElementById('badChoiceDiv').innerHTML = 'Leaving behind their previous civilization, ' + playerInfo.teamname + ', with their ship the ' + playerInfo.spaceship + ', start a new civilization as they have imagined it, using what they thought worked best on Earth, their previous home. Game Over!';
}


function giveLength(divNames, divLength)
{
	var theLength
	
	theLength=numberOfPlanets.length;
	
	showDiv(divNames);
	showDiv(divLength);
	
	document.getElementById(divNames).innerHTML=numberOfPlanets;
	document.getElementById(divLength).innerHTML=theLength;
}


function checkAnswer(div, randomQA, element, pageNum)
{
   	var userAns
   	userAns=document.getElementById(div).value;
	
		if (userAns===randomQA) { 
			 correct();
			addPlanet(element);
			nextPage(pageNum,2);
		}
		else if (userAns==='') {
			alert('Please type in your answer!');
		}
		else {
			wrong();
		}
}


function mercuryDoom()
{
	var mercQuestions, mercAnswers, mercPos, mercRandomQues
	
	giveLength('mercuryN', 'mercuryL');
	
	mercQuestions=new Array();
	mercQuestions[0]="How many moons does Mercury have? Enter a number (i.e. '4' not 'four').";
	mercQuestions[1]="How many Earth days does it take for Mercury to rotate once around its axis? Enter a number (i.e. '4', not 'four') and round your answer to the nearest whole number.";
	mercQuestions[2]="What is the polar diameter of Mercury, in km? Enter a number (i.e. '4', not 'four') and do not include commas (i.e. '3997', not '3,997').";
	mercQuestions[3]="Mercury be observed, from Earth, passing across the face of the Sun. This event is called a transit. How many times per century does this transit of Mercury occur? Enter a number (i.e. '4', not 'four').";
  
	mercAnswers=["0","88","4879","17"];
	
	mercPos=RandomInt(0,3);
	
	mercRandomQues=mercQuestions[mercPos];
	
	mercRandomQAns=mercAnswers[mercPos];
	
	showDiv('outputMercury');
	
	document.getElementById('outputMercury').innerHTML=mercRandomQues;	
}


function venusDoom()
{
	var venusQuestions, venusAnswers, venusPos, venusRandomQues
	
	giveLength('venusN', 'venusL');

	venusQuestions=new Array();
	venusQuestions[0]="Venus is the second brightest object in the night sky after what other object? Enter an all-lowercase word.";
	venusQuestions[1]="How many Earth days does it take for Venus to rotate once around its axis? Enter a number (i.e. '4', not 'four') and round your answer to the nearest whole number.";
	venusQuestions[2]="How many moons does Venus have? Enter a number (i.e. '4', not 'four').";
	venusQuestions[3]="What was the first country to land a man-made spacecraft on Venus? Enter an all-lowercase word.";
  
	venusAnswers=["moon","225","0","soviet union"];
	
	venusPos=RandomInt(0,3);
	
	venusRandomQues=venusQuestions[venusPos];
	
	venusRandomQAns=venusAnswers[venusPos];

	showDiv('outputVenus');
	
	document.getElementById('outputVenus').innerHTML=venusRandomQues;	

}


function earthDoom()
{	
	var earthQuestions, earthAnswers, earthPos, earthRandomQues
	
	giveLength('earthN', 'earthL');
	
	earthQuestions=new Array();
	earthQuestions[0]="The Earth's rotation is known to be changing. Is it slowing down or speeding up?";
	earthQuestions[1]="Earth is the only planet, besides for Uranus, not named after a ____. Fill in the blank. Enter an all-lowercase word.";
	earthQuestions[2]="What is the equatorial diameter of Earth, in km? Enter a number (i.e. '4', not 'four') and do not include commas (i.e. '3997', not '3,997').";
	earthQuestions[3]="What is the equatorial circumference of Earth, in km? Enter a number (i.e. '4', not 'four') and do not include commas (i.e. '3997', not '3,997').";
  
	earthAnswers=["slowing down","god","12756","40030"];
	
	earthPos=RandomInt(0,3);
	
	earthRandomQues=earthQuestions[earthPos];
	
	earthRandomQAns=earthAnswers[earthPos];
	
	showDiv('outputEarth');
	
	document.getElementById('outputEarth').innerHTML=earthRandomQues;
}


function marsDoom()
{	
	var marsQuestions, marsAnswers, marsPos, marsRandomQues
	
	giveLength('marsN', 'marsL');
	
	marsQuestions=new Array();
	marsQuestions[0]="How many missions to Mars have been successful? Enter a number (i.e. '4', not 'four').";
	marsQuestions[1]="Mars takes its name from the Roman god of what? Enter an all-lowercase word.";
	marsQuestions[2]="How many moons does Mars have? Enter a number (i.e. '4', not 'four').";
	marsQuestions[3]="Mars has the largest ____ storms in the solar system. Fill in the blank. Enter an all-lowercase word";
  
	marsAnswers=["16","war","2","dust"];
	
	marsPos=RandomInt(0,3);
	
	marsRandomQues=marsQuestions[marsPos];
	
	marsRandomQAns=marsAnswers[marsPos];
	
	showDiv('outputMars');
	
	document.getElementById('outputMars').innerHTML=marsRandomQues;	
}


function jupiterDoom()
{	
	var jupQuestions, jupAnswers, jupPos, jupRandomQues
	
	giveLength('jupiterN', 'jupiterL');	
	
	jupQuestions=new Array();
	jupQuestions[0]="Jupiter, along with the other 4 outer planets, is a ____ giant. Fill in the blank. Enter an all-lowercase word.";
	jupQuestions[1]="How many moons does Jupiter have? Enter a number (i.e. '4', not 'four').";
	jupQuestions[2]="Which moon of Jupiter's is the largest moon in the solar system? Enter an all-lowercase word.";
	jupQuestions[3]="What is the equatorial circumference of Jupiter, in km? Enter a number (i.e. '4', not 'four') and do not include commas (i.e. '3997', not '3,997').";
  
	jupAnswers=["gas","67","ganymede","439264"];
	
	jupPos=RandomInt(0,3);
	
	jupRandomQues=jupQuestions[jupPos];
	
	jupRandomQAns=jupAnswers[jupPos];
	
	showDiv('outputJupiter');
	
	document.getElementById('outputJupiter').innerHTML=jupRandomQues;	
}


function saturnDoom()
{	
	var satQuestions, satAnswers, satPos, satRandomQues
	
	giveLength('saturnN', 'saturnL');
	
	satQuestions=new Array();
	satQuestions[0]="Saturn is the second largest planet in the solar system. What is the largest planet in the solar system? Enter an all-lowercase word.";
	satQuestions[1]="How many moons does Saturn have? Enter a number (i.e. '4', not 'four').";
	satQuestions[2]="Who first observed Saturn's rings? Enter an all-lowercase word.";
	satQuestions[3]="How many rings does Saturn have? Enter a number (i.e. '4', not 'four').";
  
	satAnswers=["jupiter","62","galileo","7"];
	
	satPos=RandomInt(0,3);
	
	satRandomQues=satQuestions[satPos];
	
	satRandomQAns=satAnswers[satPos];
	
	showDiv('outputSaturn');
	
	document.getElementById('outputSaturn').innerHTML=satRandomQues;	
}


function uranusDoom()
{
	var uranusQuestions, uranusAnswers, uranusPos, uranusRandomQues
	
	giveLength('uranusN', 'uranusL');	
	
	uranusQuestions=new Array();
	uranusQuestions[0]="Uranus was the first planet to be observed using a __________. Fill in the blank. Enter an all-lowercase word.";
	uranusQuestions[1]="How many moons does Uranus have? Enter a number (i.e. '4', not 'four').";
	uranusQuestions[2]="In what year was Uranus discovered?";
	uranusQuestions[3]="All of Uranus' moons are named after characters from the works of William Shakespeare and Alexander ____. Fill in the blank. Enter an all-lowercase word.";
  
	uranusAnswers=["telescope","27","1781","pope"];
	
	uranusPos=RandomInt(0,3);
	
	uranusRandomQues=uranusQuestions[uranusPos];
	
	uranusRandomQAns=uranusAnswers[uranusPos];
	
	showDiv('outputUranus');
	
	document.getElementById('outputUranus').innerHTML=uranusRandomQues;
}


function neptuneDoom()
{	
	var nepQuestions, nepAnswers, nepPos, nepRandomQues
	
	giveLength('neptuneN', 'neptuneL');	
	
	nepQuestions=new Array();
	nepQuestions[0]="How many moons does Neptune have? Enter a number (i.e. '4', not 'four').";
	nepQuestions[1]="What is the name of Neptune's major moon? Enter an all-lowercase word.";
	nepQuestions[2]="Although smaller in diameter to Uranus, Neptune has a greater _____. Fill in the blank. Enter an all-lowercase word.";
	nepQuestions[3]="Neptune has only been passed by one spacecraft, Voyager 2 which flew by on the 25th of August ____. Fill in the blank. Enter an all-lowercase word.";
  
	nepAnswers=["14","tritan","mass","1989"];
	
	nepPos=RandomInt(0,3);
	
	nepRandomQues=nepQuestions[nepPos];
	
	nepRandomQAns=nepAnswers[nepPos];
	
	showDiv('outputNeptune');
	
	document.getElementById('outputNeptune').innerHTML=nepRandomQues;
}
