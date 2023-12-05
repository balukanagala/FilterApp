var image;
var canvas1; // for input
var canvas2=document.getElementById("canvas2"); // for output
function upload(){
    canvas1=document.getElementById("canvas1");
    var imgFile=document.getElementById("fileInput");
    image=new SimpleImage(imgFile); //Creating object for image input
    image.drawTo(canvas1);
}
function Filter(){
    var choice=document.getElementById("filters").value;
    switch(choice){
        case "purple":
            purpleFilter();
            break;
        case "gray":
            grayFilter();
            break;
        case "blue":
            blueFilter();
            break;
        case "green":
            greenFilter();
            break;
        case "red":
            redFilter();
            break; 
        case "fade":
            fadeFilter();
            break;
        /*case "nofilter":
            none();
            break;  */             
        defualt:
            break;
    }
}
function purpleFilter(){
    var purpleImage=image; //creating a copy of original image so that original img remains same
    for(var pixel of purpleImage.values()){
        pixel.setGreen(0);
    }
    purpleImage.drawTo(canvas2);
}
function grayFilter(){
    var grayImage=image;
    for(var pixel of grayImage.values()){
        var x=(pixel.getGreen() + pixel.getRed() + pixel.getBlue())/3.0;
        pixel.setRed(x);
        pixel.setGreen(x);
        pixel.setRed(x);
    }
    grayImage.drawTo(canvas2);
 }
function blueFilter(){
    var blueImage=image; //creating a copy of original image so that original img remains same
    for(var pixel of blueImage.values()){
        pixel.setBlue(255);
    }
    blueImage.drawTo(canvas2);
}
function greenFilter(){
    var greenImage=image; //creating a copy of original image so that original img remains same
    for(var pixel of greenImage.values()){
        pixel.setGreen(255);
    }
    greenImage.drawTo(canvas2);
}
function redFilter(){
    var redImage=image; //creating a copy of original image so that original img remains same
    for(var pixel of redImage.values()){
        pixel.setRed(255);
    }
    redImage.drawTo(canvas2);
}
function fadeFilter(){
    var fadeImage=image; //creating a copy of original image so that original img remains same
    for(var pixel of fadeImage.values()){
        pixel.setAlpha(100);
    }
    fadeImage.drawTo(canvas2);
}
/*function none(){
    //Applies no filter
    //var Img=image;
    image.drawTo(canvas2);
}*/