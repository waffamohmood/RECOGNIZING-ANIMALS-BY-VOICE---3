https://teachablemachine.withgoogle.com/models/u02fOYRBx/model.json
var cat=0;
var dog=0;
var lion=0;
var cow=0;

function start_classification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/u02fOYRBx/model.json",modelready);

}
function modelready(){
    classifier.classify(gotresults);
}
function gotresults(error,results){
    if (error){
        console.error(error);
    }
    else{
        console.log(results);
        random_r=Math.floor(Math.random()*255)+1;
        random_g=Math.floor(Math.random()*255)+1;
        random_b=Math.floor(Math.random()*255)+1;
        document.getElementById("result_label").innerHTML="Ditected cat-"+cat+" ,Ditected Dog-"+dog+" ,Ditected Lion-"+lion+" ,Ditected Cow-"+cow;
        document.getElementById("result_label").innerHTML="Ditected viose is of - "+results[0].label;
        
        img=document.getElementById("ear");
        
      if(results[0].label=="meowing"){
          img.src="cat.png";
          cat=cat+1;
          
      }
      else if (results[0].label=="barking"){
        img.src="dog.png";
        dog=dog+1;
    }
    else if(results[0].label=="roar"){
        img.src="lion.jpeg";
        lion=lion+1;
    }
    else if(results[0].label=="mooing"){
        img.src="cow.jpeg";
        cow=cow+1;
    }
    else{
        img.src="oreja.png"
    }
    }
    }