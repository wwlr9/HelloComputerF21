// const axios = require('axios').default;

console.log("hello!");

const synth = window.speechSynthesis;

const SpeechRecognition = webkitSpeechRecognition;
console.log(SpeechRecognition);

const getSpeech = () =>{
  const recognition = new SpeechRecognition();
  recognition.lang = "en-US";
  recognition.start();

  recognition.onresult = (event) => {
    // when there is a result from the speech recognition, do sth.
    const speechResult = event.results[0][0].transcript;
    console.log(speechResult);
    document.querySelector("#speech-div").textContent = speechResult;

    const speech = String(speechResult);
    const words = speech.split(' ');
    // console.log(words);
    for (let i=0; i<words.length;i++){
      console.log(words[i]);
      getBird(words[i]);
    }

  }

  recognition.onend = () =>{
    console.log("it is over");
    recognition.stop();
  }
  recognition.onerror = (event) => {
    console.log("something went wrong: " + event.error);
  }

}

const getBird = (phrase) => {
  // speech = “talk” "to" "a" "sparrow"

  const url = "/bird?p=" + phrase;
  // const url = "https://www.xeno-canto.org/api/2/recordings?query=cnt:china.";
  // from https://www.xeno-canto.org/explore/api
    fetch(url, { mode: "cors" })
  		.then((response) => response.json())
  		.then((result) => {
        if (result.recordings.length === 0){
          console.log(url);
          return;
          }
        // console.log(url);
        let randomIndex = Math.floor(Math.random() * result.recordings.length);

        let birdRec = result.recordings[randomIndex]["file"];

        const birdRecPlayer = document.querySelector("#birdRec");
        birdRecPlayer.src = birdRec;
        birdRecPlayer.addEventListener("canplaythrough", () => {
          birdRecPlayer.play()
        })
      // for (let i = 0; i < result.recordings.length; i++) {
      //   // get the name of the bird （sp: the specific name (epithet) of the species）
      //   let birdName = result.recordings[i].sp;
      //   // get this bird's recordings
      //   let birdRec = result.recordings[i]["file-name"];
      //   // select one of the recordings and play this recording
      //
      //   if (phrase.includes(birdName)){
      //     console.log("match");
      //     document.querySelector("#bird").src = birdRec;
      //     const birdsong = Math.random(birdRec);
      //     // birdsong.play();
      //   }
      // }
    });


  // axios.get(url).then((result) => {
  //     console.log(result);
  //
  //     for (let i = 0; i < result.recordings.length; i++) {
  //       // get the name of the bird （sp: the specific name (epithet) of the species）
  //       let birdName = result.recordings[i].sp;
  //       // get this bird's recordings
  //       let birdRec = result.recordings[i].file-name;
  //       // select one of the recordings and play this recording
  //
  //     if (speechResult.includes(birdName)){
  //       console.log("match");
  //       document.querySelector("#bird").src = birdRec;
  //       const birdsong = random(birdRec);
  //       birdsong.play();
  //     }
  //   }
  // })
}

document.querySelector("#my-button").onclick = () => {
	getSpeech();
};
