Webcam.set({
width:350,
height:300,
image_format : 'png',
png_quality:90
});
camera=document.getElementById( '#camera' );
Webcam.attach( '#camera' )
function take_snapshot(){
   Webcam.snap(function(data_uri){
     document.getElementById("result").innerHTML="<img id='captured_image' src='"+data_uri+"'>";
   }
   );
 }
console.log('ml5 version:',ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/63_ULkxmQ/model.json',modelLoaded)
 
function modelLoaded(){
    console.log("Model is Fully Loaded");
}
function ind(){
    img=document.getElementById('captured_image');
    classifier.classify(img,gotresult);
    
}
function  gotresult(error,results){
    if (error){
        console.log(error);
    }
     else{
       console.log(results); 
         option1=results[0].label;         
         document.getElementById("object_name").innerHTML=option1;
     }
}
