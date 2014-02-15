/**
 * @title ClockJS
 * @author Jorge Regidor
 * @website jorgeregidor.blogspot.com
 * @version 1.0
 */

//Create the function clock
function clock()
{
	// take the current date and time
	var dateNow = new Date();

	// take de hours,minutes and seconds
	var hours = dateNow.getHours();
	var min = dateNow.getMinutes();
	var sec = dateNow.getSeconds();

	// If it only have one digit will add a 0
    if(hours < 10) { hours = '0' + hours; }
	if(min < 10) { min = '0' + min; }
	if(sec < 10) { sec = '0' + sec; }
	
	// add pm & am mode
	var AmPm = ' am';
	if(hours > 12) 
		{
  		hours = hours - 12;
  		AmPm = ' pm';
		}
 
	var timeNow = hours+':'+min+':'+sec+AmPm;
 
 	// insert the clock in de div "clock" *
	document.getElementById("clock").innerHTML = timeNow

}

// repeat every second
window.onload = function() 
{
  setInterval(clock, 1000);
}

//IMPORTANT * you need to create a <div id="clock"></div> where you want to put the clock