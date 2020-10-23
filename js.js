function func1()
{
	document.getElementById("calculate").disabled = true;
}
let height=0;
let weight=0;
let hu='';
let wu='';
function Height()
{
	height=document.getElementById('h').value;
	hu=document.getElementById('unit').value;
	result();
}
function Weight()
{
	weight=document.getElementById('w').value;
	wu=document.getElementById('units').value;
	result();
}
function result()
{
		if(height>0 && weight>0)
	{
		document.getElementById("calculate").disabled = false;
		console.log("bvhvhgvhb");
		if(hu=='Meters')
		{
			height=height;	
		}
		else if(hu=='Feets')
		{
			height=height*0.3048;		
		}
	}
	else
	{
		document.getElementById("calculate").disabled = true;
	}
}
function showresult()
{
	document.getElementById("result").disabled = false;
	var a=weight/(height*height);
	a=a.toFixed(2);
	document.getElementById("result").value = a;
	document.getElementById("result").disabled = true;
}