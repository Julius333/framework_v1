// Effect 1: Box Border toevoegen. Kleuren zijn aan te passen in de laatse regels van beide functies
// Effect 1: Adds box border. The color of the border can be changed in the last line of the functions

function upDate1(previewPic)
{
  document.getElementById("image").innerHTML = previewPic.alt;
  document.getElementById("image").style.backgroundImage = "url("+previewPic.src+")"; 
  document.getElementById("image").style.border="10px solid white";
}

function unDo1()
{
    document.getElementById("image").innerHTML = "Hover over een poster.";
    document.getElementById("image").style.backgroundImage = "url('')";
    document.getElementById("image").style.border="0px solid lightgrey";
}


// Effect 2: Box Shadow toevoegen
// Effect 2: Adds box shadow

function upDate2(previewPic)
{
    document.getElementById("image").innerHTML = previewPic.alt;
    document.getElementById("image").style.backgroundImage = "url("+previewPic.src+")"; 
    document.getElementById("image").style.boxShadow="-1px 15px 69px -4px rgba(87,87,87,1)";
}

function unDo2()
{
    document.getElementById("image").innerHTML = "Hover over een poster.";
    document.getElementById("image").style.backgroundImage = "url('')";
    document.getElementById("image").style.boxShadow="0px 0px 0px 0px rgba(0,0,0,0)";
}


// Effect 3: Hoeken ronder maken dmv een border-radius
// Effect 3: Rounded corners with a bix radius

function upDate3(previewPic)
{
    document.getElementById("image").innerHTML = previewPic.alt;
    document.getElementById("image").style.backgroundImage = "url("+previewPic.src+")"; 
    document.getElementById("image").style.borderRadius = "40px";
}

function unDo3()
{
    document.getElementById("image").innerHTML = "Hover over een poster.";
    document.getElementById("image").style.backgroundImage = "url('')";
    document.getElementById("image").style.borderRadius = "0px";
}

// Effect 4: Alles in een
// Effect 4: Everything combined

function upDate4(previewPic)
{
    document.getElementById("image").innerHTML = previewPic.alt;
    document.getElementById("image").style.backgroundImage = "url("+previewPic.src+")"; 
    document.getElementById("image").style.border="10px solid white";
    document.getElementById("image").style.boxShadow="-1px 15px 69px -4px rgba(87,87,87,1)";
    document.getElementById("image").style.borderRadius = "40px";
}

function unDo4()
{
    document.getElementById("image").innerHTML = "Hover over een poster.";
    document.getElementById("image").style.backgroundImage = "url('')";
    document.getElementById("image").style.borderRadius = "0px";
    document.getElementById("image").style.border="0px solid lightgrey"
    document.getElementById("image").style.boxShadow="0px 0px 0px 0px rgba(0,0,0,0)";
}




