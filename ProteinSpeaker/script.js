console.log("hello!");

const synth = window.speechSynthesis;

document.querySelector("#my-button").onclick = () => {
	console.log("button clicked");

	let letterInput = document.querySelector("#letter-input").value;

	if(letterInput == "a" || letterInput == "A"){
		let name = "here is actin";
		speak(name);
	}

	if(letterInput == "b" || letterInput == "B"){
		let name = "here is Beta amyloid";
		speak(name);
	}

	if(letterInput == "c" || letterInput == "C"){
		let name = "here is Cathepsin";
		speak(name);
	}

	if(letterInput == "d" || letterInput == "D"){
		let name = "here is Dynein";
		speak(name);
	}

	if(letterInput == "e" || letterInput == "E"){
		let name = "here is E two ubiquitin ligase ";
		speak(name);
	}

	if(letterInput == "f" || letterInput == "F"){
		let name = "here is Formin";
		speak(name);
	}

	if(letterInput == "g" || letterInput == "G"){
		let name = "here is GPCR";
		speak(name);
	}

	if(letterInput == "h" || letterInput == "H"){
		let name = "here is Hemoglobin";
		speak(name);
	}

	if(letterInput == "i" || letterInput == "I"){
		let name = "here is Ion channels ";
		speak(name);
	}

	if(letterInput == "j" || letterInput == "J"
	|| letterInput == "v" || letterInput == "V"
  || letterInput == "w" || letterInput == "W"
  || letterInput == "x" || letterInput == "X"
	|| letterInput == "y" || letterInput == "Y"
	|| letterInput == "z" || letterInput == "Z" ){
		let name = "Please give me more time";
		speak(name);
	}

	if(letterInput == "k" || letterInput == "K"){
		let name = "here is kinesin";
		speak(name);
	}

	if(letterInput == "l" || letterInput == "L"){
		let name = "here is ligase";
		speak(name);
	}

	if(letterInput == "M" || letterInput == "m"){
		let name = "here is myosin";
		speak(name);
	}

	if(letterInput == "n" || letterInput == "N"){
		let name = "here is nicotinic acetylcholine receptor";
		speak(name);
	}

	if(letterInput == "o" || letterInput == "O"){
		let name = "here is opsin";
		speak(name);
	}

	if(letterInput == "p" || letterInput == "P"){
		let name = "here is protease";
		speak(name);
	}

	if(letterInput == "q" || letterInput == "Q"){
		let name = "here is Q ten";
		speak(name);
	}

	if(letterInput == "r" || letterInput == "R"){
		let name = "here is rhodopsin";
		speak(name);
	}

	if(letterInput == "s" || letterInput == "S"){
		let name = "here is sonic hedgehog";
		speak(name);
	}

	if(letterInput == "t" || letterInput == "T"){
		let name = "here is tubulin";
		speak(name);
	}

	if(letterInput == "u" || letterInput == "U"){
		let name = "here is ubiquitin";
		speak(name);
	}


};

const speak = (name) => {
	if (synth.speaking) {
		console.error("it's speaking already");
		return;
	}

	let utterThis = new SpeechSynthesisUtterance(name);
	// utterThis.lang = "en-US";
	synth.speak(utterThis);
};
