Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach(camera);
function takepic(){
    Webcam.snap(function (datauri){
        document.getElementById("result").innerHTML="<img id='snapshot' src="+datauri+">";

    });
}
console.log ("ml5 version:",ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/fPETREhCy/model.json",modelloaded);
function modelloaded(){
    console.log ("model is loaded");
    
}
function identify(){
    img=document.getElementById("snapshot");
    classifier.classify(img,got_result);
}

function got_result(error,result){
    if(error){
        console.log(error);
    
    }
    else{
        console.log(result);
        label=result[0].label;
        accuracy=result[0].confidence.toFixed(2);
        document.getElementById("obj_name").innerHTML=label;
        document.getElementById("obj_accuracy").innerHTML=accuracy;
    }
}