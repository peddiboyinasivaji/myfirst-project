var images=document.getElementsByClassName("a")
for(i=1;i<=images.length;i++)
{
    images[i-1].setAttribute("src","../a/astroides/"+i+".jpg")
    images[i-1].style.width="220px"
    images[i-1].style.height="220px"
}
console.log(images )
// this is for header
var indval=0;
var imagesarr=["blackhole1.jpg","blackhole2.jpg","blackhole3.jpg","blackhole4.jpg","blackhole5.jpg"]
function inc()
{
    indval++;   
    if(indval>=imagesarr.length)
    {
        indval=0;
    document.getElementById("header").style.backgroundImage="url(../a/astroides/"+imagesarr[indval]+")"
    }
    else
    {
        document.getElementById("header").style.backgroundImage="url(../a/astroides/"+imagesarr[indval]+")" 
    }
}
function dec()
{
    indval--;
    if(indval<0)
    {
        indval=imagesarr.length-1;
        document.getElementById("header").style.backgroundImage="url(../a/astroides/"+imagesarr[indval]+")"
    }
    else
    {
        document.getElementById("header").style.backgroundImage="url(../a/astroides/"+imagesarr[indval]+")" 
    }       
 }
 function openImg(pic,name,info)
 {
    document.getElementById("subWindow").removeAttribute("style")
    document.getElementById("subWindowImg").src='../a/astroides/'+pic+".jpg"
document.getElementById("imageHeading").innerHTML=name;
document.getElementById("imgpara").innerHTML=info;
 }
 function closeImg()
 {
    document.getElementById("subWindow").setAttribute("style","display:none")

 }