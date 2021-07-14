function birth(){
window.location="why.html";
}
function birthd(){
window.location="lim.html";
}
function lol(){
    window.location="pin.html";
    }
    function vol(){
        window.location="games.html";
        }
    
    function mol(){
        window.location="selfie.html";
        }
        function preload(){
        }
        function setup(){
        canvas=createCanvas(640,480);
        canvas.position(110,250);
        video=createCapture(VIDEO);
        video.hide();
        tint_colour="";
        }
        function draw(){
        image(video,0,0,640,480);
        tint(tint_colour);
        }
        function take_snapshot(){
        save('your filter image.png');
        }
        function filter_tint(){
        tint_colour=document.getElementById("colour name").value;
        }          
        function m(){
            window.location="last.html";
            }
            function btn12(){
                var synth = window.speechSynthesis;
            
                speak_data = "visit again soon. stay home stay safe. goodbye";
            
                var utterThis = new SpeechSynthesisUtterance(speak_data);
            
                synth.speak(utterThis);
            }
            function btn13(){
                var synth = window.speechSynthesis;
            
                speak_data = " hi, everyone you are welcome here. lets have fun and great time in this children party";
            
                var utterThis = new SpeechSynthesisUtterance(speak_data);
            
                synth.speak(utterThis);
            }
            function mlo(){
                window.location="index.html";
                }