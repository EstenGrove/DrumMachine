16-Pad Drum Machine

<img width="1279" alt="drummachine" src="https://user-images.githubusercontent.com/41505038/47568588-5da56c00-d8e6-11e8-9792-4ad772b84095.png">





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
