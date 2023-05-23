const grammar =
  "#JSGF V1.0; grammar colors; public <color> = aqua | azure | beige | bisque | black | blue | brown | chocolate | coral | crimson | cyan | fuchsia | ghostwhite | gold | goldenrod | gray | green | indigo | ivory | khaki | lavender | lime | linen | magenta | maroon | moccasin | navy | olive | orange | orchid | peru | pink | plum | purple | red | salmon | sienna | silver | snow | tan | teal | thistle | tomato | turquoise | violet | white | yellow ;";

window.SpeechGrammarList = window.SpeechGrammarList || window.webkitSpeechGrammarList
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new window.SpeechRecognition();
const speechRecognitionList = new window.SpeechGrammarList();
speechRecognitionList.addFromString(grammar, 1);
recognition.grammars = speechRecognitionList;
recognition.continuous = true;
recognition.lang = "en-US";
recognition.interimResults = true;
recognition.maxAlternatives = 1;



const button1 = document.getElementById("mic")
const button2 = document.getElementById("transcribe")

var final_transcript="";
 

recognition.onresult = (event) => {
  // Create the interim transcript string locally because we don't want it to persist like final transcript
  let interim_transcript = "";
  final_transcript=""

  // Loop through the results from the speech recognition object.
  for (let i = event.resultIndex; i < event.results.length; ++i) {
    // If the result item is Final, add it to Final Transcript, Else add it to Interim transcript
    if (event.results[i].isFinal) {
      final_transcript += event.results[i][0].transcript;
    } else {
      interim_transcript += event.results[i][0].transcript;
    }
  }
};

button1.addEventListener("click", ()=>{
    recognition.start();
})
button2.addEventListener("click",()=>{
        /* Notification.requestPermission((permission)=>{
            if (permission==="granted"){
                var notification = new Notification("Microphone",{body:"Hello friend"})
                notification.close()
            }
            
        }) */
        recognition.stop();
        swal(final_transcript)
        
    }
) 

