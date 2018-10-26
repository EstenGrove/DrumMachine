////print the pad 
//var currentPad = document.querySelector('#currentPad');

//create audio sample array
var myArray = [
    "drumsamples/A-ClosedSnare.wav",
    "drumsamples/A-ClosedSnare1.wav",
    "drumsamples/A-Hat.wav",
    "drumsamples/A-Hat1.wav",
    "drumsamples/A-Kick.wav",
    "drumsamples/A-KickClose.wav",
    "drumsamples/A-KickFlam.wav",
    "drumsamples/A-OpenHat.wav",
    "drumsamples/A-Snare.wav",
    "drumsamples/A-Vinyl.wav",
    "drumsamples/A-Vinyl1.wav",
    "drumsamples/A-Vinyl2.wav",
    "drumsamples/A-Vinyl3.wav",
    "drumsamples/A-Vinyl4.wav",
    "drumsamples/A-KickClose.wav",
    "drumsamples/A-Kick.wav"

];

var drumMachine = document.getElementById('drumMachine');

var pads = document.getElementsByClassName('.col-1');

//Store the audio tags in order to get src
var audioTags = document.getElementsByTagName('audio');


var samples = [];

for (var i = 0; i <= audioTags.length; i++) {

           audioTags[i].src.play(); 

    

    samples.push(audioTags[i].src);
    console.log(samples);

}

for (j = 0; j < samples.length; j++) {
        
        samples[i].play();
        
    }


function playSample(e) {

    
    


}

drumMachine.addEventListener('click', playSample);


