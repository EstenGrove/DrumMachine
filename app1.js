

//var myArray = [
//    "drumsamples/A-ClosedSnare.wav",
//    "drumsamples/A-ClosedSnare1.wav",
//    "drumsamples/A-Hat.wav",
//    "drumsamples/A-Hat1.wav",
//    "drumsamples/A-Kick.wav",
//    "drumsamples/A-KickClose.wav",
//    "drumsamples/A-KickFlam.wav",
//    "drumsamples/A-OpenHat.wav",
//    "drumsamples/A-Snare.wav",
//    "drumsamples/A-Vinyl.wav",
//    "drumsamples/A-Vinyl1.wav",
//    "drumsamples/A-Vinyl2.wav",
//    "drumsamples/A-Vinyl3.wav",
//    "drumsamples/A-Vinyl4.wav",
//    "drumsamples/A-KickClose.wav",
//    "drumsamples/A-Kick.wav"
//
//];


//store drum machine
var drumMachine = document.querySelector('.container');

//var pads = document.querySelectorAll('[id^="pad-"]');


drumMachine.addEventListener('click', function(e) {
   
    let pads = document.querySelectorAll('.col-1');
    let sample; 
    
    
    
  
    
    
    for(let i = 0; i < pads.length; i++) {
        
        sample = pads[i].getElementsByTagName('audio')[0].play();

    }
    
    
});













