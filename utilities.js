//Just some utility functions I use over and over again. 

//Javascript only

// Shuffle an array and return a new one
function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  }
  return array;
}

//utility: get random number within a range
function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


//Requires jQuery

// RoT13 Email Obfuscation
// Adapted from http://rot13.florianbersier.com/

<span id="obf" class="qbutton contact">
	<script>document.getElementById("obf")
		.innerHTML="<n uers=\"znvygb:uryyb@gvaljunyrperngvir.pbz?fhowrpg=Uryyb\">Pbagnpg Hf</n>"
		.replace(/[a-zA-Z]/g,function(c){return String.fromCharCode((c<="Z"?90:122)>=(c=c.charCodeAt(0)+13)?c:c-26);});
	</script>
	<noscript><span style="unicode-bidi:bidi-override;direction:rtl;">moc.evitaercelahwynit@olleh</span></noscript>
</span>