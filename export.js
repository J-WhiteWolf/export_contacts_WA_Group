(function () {
	let infoClass = "ggj6brxn gfz4du6o r7fjleex lhj4utae le5p0ye3 _11JPr selectable-text copyable-text";
  let elements = document.getElementsByClassName(infoClass);
  if (elements.length > 0) {
  		let rawText = elements[0].innerText;
      let arr = rawText.split(", ");
      for(let i = 0; i < arr.length; i++){
      		let newstr = arr[i].replace(/\s/g,"");
          console.log(newstr);
      }
  }
  else {
    console.log("Group Info Element not found.");
  }
})();
