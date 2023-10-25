let answer = [

    {
      letter : "adult",
      info : "만 19세 이상 성인을 일컫는 말",
    },
    {
      letter : "cloth",
      info : "주변의 위험이나 환경으로부터 몸을 보호하기 위해 걸치는 것",
    },
    {
      letter : "world",
      info : "지구촌, 모든 나라를 통칭하는 말",
    },
    {
      letter : "music",
      info : "전자기기 혹은 악기를 통해 듣는 것",
    },
    {
      letter : "plate",
      info : "음식을 담기 위해 쓰이는 도구",
    }

];

const pieceWrap = document.getElementById("pieceWrap");
const wordleInfo = document.querySelector(".wordInfo p");
const value_box =  pieceWrap.getElementsByTagName("input");
const wordBox = document.querySelectorAll(".pieceBox");

wordBox[1].classList.add("close");
wordBox[2].classList.add("close");
wordBox[3].classList.add("close");
wordBox[4].classList.add("close");


var countScore1 = [];

const pieceComponent1 = () => {

    let question1 = document.querySelectorAll(".piece1");

    for(let i = 0; i < question1.length; i++){

        countScore1.push(question1[i].value);

        if(question1[i].value  == answer[0].letter[i]){

                question1[i].classList.add("green");
                question1[i].classList.remove("yellow");
                question1[i].classList.remove("gray");
            
            }else if(answer[0].letter.includes(question1[i].value || answer[0].letter.indexOf(question1[i].value) != -1)){

                question1[i].classList.add("yellow");
                question1[i].classList.remove("green");
                question1[i].classList.remove("gray");

            }else{
                question1[i].classList.add("gray");
                question1[i].classList.remove("green");
                question1[i].classList.remove("yellow");
            }

        };

        var plus_result = countScore1.join("");
        console.log(plus_result);
        const result1 = plus_result.match("adult");

            if(result1 != null){

                    wordBox[0].classList.add("success");
                    wordBox[1].classList.remove("close");
                    pieceComponent2();
            
                }else{

                    return;
                };

            
            

};

var countScore2 = [];

const pieceComponent2 = () => {

    let question2 = document.querySelectorAll(".piece2");

    for(let i = 0; i < question2.length; i++){

        countScore2.push(question2[i].value);
   
         if(question2[i].value == answer[1].letter[i]){

                question2[i].classList.add("green");
                question2[i].classList.remove("yellow");
                question2[i].classList.remove("gray");
            
            }else if(answer[1].letter.includes(question2[i].value || answer[1].letter.indexOf(question2[i].value) != -1)){

                question2[i].classList.add("yellow");
                question2[i].classList.remove("green");
                question2[i].classList.remove("gray");

            }else{

                question2[i].classList.add("gray");
                question2[i].classList.remove("green");
                question2[i].classList.remove("yellow");

            }
        };

        var plus_result2 = countScore2.join("");
        console.log(plus_result2);
        const result2 = plus_result2.match("cloth");
        console.log(result2);

            if(result2 != null){
    
                    wordBox[1].classList.add("success");
                    wordBox[2].classList.remove("close");
                    pieceComponent3();
    
                }else{

                    return;
                };
          

};

var countScore3 = [];

const pieceComponent3 = () => {

    let question3 = document.querySelectorAll(".piece3");

    for(let i = 0; i < question3.length; i++){

        countScore3.push(question3[i].value);

        if(question3[i].value == answer[2].letter[i]){

                question3[i].classList.add("green");
                question3[i].classList.remove("yellow");
                question3[i].classList.remove("gray");
            
            }else if(answer[2].letter.includes(question3[i].value || answer[2].letter.indexOf(question3[i].value) != -1)){

                question3[i].classList.add("yellow");
                question3[i].classList.remove("green");
                question3[i].classList.remove("gray");

            }else{
                question3[i].classList.add("gray");
                question3[i].classList.remove("green");
                question3[i].classList.remove("yellow");
            }

        };

        var plus_result3 = countScore3.join("");
        console.log(plus_result3);
        const result3 = plus_result3.match("world");

            if(result3 != null){

                    wordBox[2].classList.add("success");
                    wordBox[3].classList.remove("close");   
                    pieceComponent4();
                
                }else{

                    return;
                };

};

var countScore4 = [];

const pieceComponent4 = () => {

    let question4 = document.querySelectorAll(".piece4");

    for(let i = 0; i < question4.length; i++){

        countScore4.push(question4[i].value);

        if(question4[i].value == answer[3].letter[i]){

                question4[i].classList.add("green");
                question4[i].classList.remove("yellow");
                question4[i].classList.remove("gray");
            
            }else if(answer[3].letter.includes(question4[i].value || answer[3].letter.indexOf(question4[i].value) != -1)){

                question4[i].classList.add("yellow");
                question4[i].classList.remove("green");
                question4[i].classList.remove("gray");

            }else{
                question4[i].classList.add("gray");
                question4[i].classList.remove("green");
                question4[i].classList.remove("yellow");
            }

        };

        var plus_result4 = countScore4.join("");
        console.log(plus_result4);
        const result4 = plus_result4.match("music");
        console.log(result4);

            if(result4 != null){

                    wordBox[3].classList.add("success");
                    wordBox[4].classList.remove("close");
                    pieceComponent5();

                }else{

                    return;
                };
          

};


var countScore5 = [];

const pieceComponent5 = () => {

    let question5 = document.querySelectorAll(".piece5");

    for(let i = 0; i < question5.length; i++){

        countScore5.push(question5[i].value);

        if(question5[i].value == answer[4].letter[i]){

                question5[i].classList.add("green");
                question5[i].classList.remove("yellow");
                question5[i].classList.remove("gray");
            
            }else if(answer[4].letter.includes(question5[i].value || answer[4].letter.indexOf(question5[i].value) != -1)){

                question5[i].classList.add("yellow");
                question5[i].classList.remove("green");
                question5[i].classList.remove("gray");

            }else{
                question5[i].classList.add("gray");
                question5[i].classList.remove("green");
                question5[i].classList.remove("yellow");
            }

        };

        var plus_result5 = countScore5.join("");
        console.log(plus_result5);
        const result5 = plus_result5.match("plate");

            if(result5 != null){

                    wordBox[4].classList.add("success");

                }else{

                    return;
                };
          

};


const wordelSubmit = document.getElementById("answer");
const wordelStartBtn = document.getElementById("startBtn");



wordelStartBtn.addEventListener("click" , function(){

    wordleInfo.innerHTML = 'Click the Blank';
    this.classList.add("start");
    playWordle();
    worlde_submit();

});

function worlde_submit(){


wordelSubmit.addEventListener("click" , function(){

    pieceComponent1();


});

};

function playWordle(){

for(let i = 0; i < wordBox.length; i++){

    wordBox[i].addEventListener("click" , function(){

        wordleInfo.innerHTML = answer[i].info;

        if(wordBox[i].classList.contains("success")){

           wordleInfo.innerHTML = `Done`;

        }

     });

};
    
};