//Store the audio tags in order to get src

var audioTags = document.querySelectorAll('audio');


//store pads for event handler

var pads = document.querySelectorAll('.col-1');


 





//loop thru pads and addEventListener
for (j = 1; j < pads.length; j++) {

    console.log(pads[j]);

    pads[j].addEventListener('click', triggerSample);


}

function triggerSample() {


    for (i = 0; i < audioTags.length; i++) {

        //    console.log(audioTags[i]);

        audioTags[i].getAttribute('src');

        audioTags[i].play();

    }


    
}





//loop thru pads and addEventListener
for (j = 1; j < pads.length; j++) {

    console.log(pads[j]);

    //consider switching back to pads[j]
    pads[j].addEventListener('click', triggerSample);


}

function triggerSample() {


    for (i = 0; i < audioTags.length; i++) {

            console.log(audioTags[i]);

//        audioTags[i].getAttribute('src');
       audioTags.src;

        audioTags[i].play();
        
    }

   
    
}
**This seems to only play all the samples more or less**