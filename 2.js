var size_i_want = "9.5";

function fRun()
{
	// Select size option.
	var sizesList=document.getElementsByName("skuAndSize")[0];
	for(var i=0; i<sizesList.length; i++)
	{
		if(sizesList.options[i].text.trim() == size_i_want)
		{
			sizesList.selectedIndex = i;
		}
	}

	var aButtons = document.getElementsByTagName("button");
	for(var i = 0; i < aButtons.length; ++i)
	{
		if(aButtons[i].className.indexOf("add-to-cart") > -1)
		{
			aButtons[i].click();
		}
	}
}

function fTick()
{
	if(document.getElementsByName("skuAndSize")[0] != undefined)
	{
		setTimeout("fRun()", 600);
		//fRun();
	}else{
		setTimeout("fTick()", 300);
	}
}
setTimeout("fTick()", 300);