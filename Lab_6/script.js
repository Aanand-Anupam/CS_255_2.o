const correct_ans = {
    "Q.1" : "option1",
    "Q.2" : "option2",
    "Q.3" : "option1",
    "Q.4" : "option3",
    "Q.5" : "option4",
    "Q.6" : "option2",
    "Q.7" : "option4",
    "Q.8" : "option3",
    "Q.9" : "option1"
}
function toggleselected(button) {
    
    let parentDiv = button.closest('div');

    let buttons = parentDiv.querySelectorAll('button');
    buttons.forEach(btn => btn.classList.remove('selected'));
    
  
    button.classList.add('selected');
}

let score = 0;

function update_score() {
    
    for(let i = 1; i < 10; i++){
        let selectedButton = document.querySelector(".Q"+ i +" button.selected");

    if (selectedButton) {
       
        let selectedClass = selectedButton.classList[0];

        
        if (selectedClass === correct_ans["Q."+i]) {
            console.log("Correct! Score = 1!");
            score += 1;
        } else {
            console.log("Wrong answer.");
        }
    } else {
        console.log("No option selected.");
    }
    }
    
}
function show_score(){
    document.body.innerHTML = "";
   document.body.setAttribute("class", "thankin");
   let parent_div = document.createElement("div");
    parent_div.setAttribute("class", "parent_div");
    document.body.appendChild(parent_div);
   let scorecard = document.createElement("div");
   scorecard.setAttribute("class", "score_card");
   scorecard.innerText = "Score : "+ score + "/10";
   parent_div.appendChild(scorecard);
   let link = document.createElement("a");
   link.setAttribute("href", "thankin.html");
   parent_div.appendChild(link);
    let btn = document.createElement("button");
    btn.setAttribute("type","submit");
    btn.setAttribute("class","btn_sub ");
    btn.innerText = "Finish";
    link.appendChild(btn);

}


