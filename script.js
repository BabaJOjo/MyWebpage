//roatateY() toggles the medal to roatate on the y axis once

function roatateY()
{
	var roatateObj = document.getElementById("mark");

	if (roatateObj.className !== "toggledR") 
	{
		roatateObj.className = "toggledR";
	}

	else
	{
		roatateObj.className = " ";
	}
}


//operateNav() toggles the side navigation to be hidden or viewable

function operateNav() 
{
	var nCon = document.getElementById("n-container");
	var hCon = document.getElementById("h-container");
	var mCon = document.getElementById("m-container");

	if (nCon.className !== "toggled" && hCon.className !== 
		"toggled" && mCon.className !== "toggled") 
	{
		nCon.className = "toggled";
		hCon.className = "toggled";
		mCon.className = "toggled";
	} 
	else 
	{
		nCon.className = " ";
		hCon.className = " ";
		mCon.className = " ";
	}
}

//sildeShow() goes through text

var index = 0;
slideShow();

function slideShow() 
{
	var i;
	var s = document.getElementsByClassName('quotes');

	for (i = 0; i < s.length; i++) 
	{
		s[i].style.display = "none";
	}

	index++;
	if (index > s.length) 
	{
		index = 1;
	} 
	s[index-1].style.display = "block";
	setTimeout(slideShow, 10000);
}