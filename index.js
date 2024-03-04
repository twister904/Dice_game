onload
{   
    var i=Math.random();
    var j=Math.random();
    i=Math.floor(i*6);
    j=Math.floor(j*6);
    var  img=[];
    img.push("/Dicee Challenge - Starting Files/Dicee Challenge - Starting Files/images/dice1.png");
    img.push("/Dicee Challenge - Starting Files/Dicee Challenge - Starting Files/images/dice2.png");
    img.push("/Dicee Challenge - Starting Files/Dicee Challenge - Starting Files/images/dice3.png");
    img.push("/Dicee Challenge - Starting Files/Dicee Challenge - Starting Files/images/dice4.png");
    img.push("/Dicee Challenge - Starting Files/Dicee Challenge - Starting Files/images/dice5.png");
    img.push("/Dicee Challenge - Starting Files/Dicee Challenge - Starting Files/images/dice6.png");

    const img1=document.getElementById("img1");
    const img2=document.getElementById("img2");
    img1.setAttribute("src",img[i]);
    img2.setAttribute("src",img[j]);
    var result=document.createElement("p");

    
    if(i>j)
    {
        result.textContent="player 1 win";
        
    }
    else if(i<j)
    {
        result.textContent="player 2 win";
    }
    else
    {
        result.textContent="It's a draw";
    }
    document.querySelector("h1").appendChild(result);

}