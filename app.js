const subjectObject = {
    "Front-end": {
      "HTML": ["Links", "Images", "Tables", "Lists"],
      "CSS": ["Borders", "Margins", "Backgrounds", "Float"],
      "JavaScript": ["Variables", "Operators", "Functions", "Conditions"]    
    },
    "Back-end": {
      "PHP": ["Variables", "Strings", "Arrays"],
      "SQL": ["SELECT", "UPDATE", "DELETE"]
    }
  }


// select options
let subject= document.getElementById('subject')
let topic= document.getElementById('topic')
let chapter= document.getElementById('chapter')
window.onload = function() {

    for (const sub in subjectObject) {
        
        subject.options[subject.options.length]= new Option( sub, sub)

    }



}

subject.onchange=function(){
    topic.length=1;
    chapter.length=1;
    for (const sub2 in subjectObject[this.value]) {

        topic.options[topic.options.length]= new Option( sub2, sub2)
    }

}
topic.onchange= function(){
    const chapterO=subjectObject[subject.value][this.value];
    chapter.length=1;
    chapterO.forEach(sub3 => {
        chapter.options[chapter.options.length]= new Option( sub3, sub3);
    });

}


console.log(chapterO);