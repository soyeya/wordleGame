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
    },
];

console.log(answer[0].letter[0]);


const pieceWrap = document.getElementById("pieceWrap");
const wordleInfo = document.querySelector(".wordInfo p");
const value_box =  pieceWrap.getElementsByTagName("input");

const disabled_box = () => {

for(let i = 0; i < value_box.length; i++){

    value_box[i].setAttribute("disabled" , true);
    
};

};

// function value_abled() {

//     for(let i = 0; i < value_box.length; i++){

//         value_box[i].setAttribute("disabled" , false);
        
//     };
// };


const pieceComponent1 = () => {

    let question1 = document.querySelectorAll(".piece1");

    for(let i = 0; i < question1.length; i++){

        if(question1[i].value == answer[0].letter || question1[i].value == answer[0].letter[i]){

                question1[i].style.background = "green";

            }else if(answer[0].letter.includes(question1[i].value)){

                question1[i].style.background = 'yellow';

            }else{
                question1[i].style.background = "lightgray";
            }
};

};
const pieceComponent2 = () => {

    let question2 = document.querySelectorAll(".piece2");

    for(let i = 0; i < question2.length; i++){

        if(question2[i].value == answer[1].letter || question2[i].value == answer[1].letter[i]){

                question2[i].style.background = "green";

            }else if(answer[1].letter.includes(question2[i].value)){

                question2[i].style.background = 'yellow';

            }else{
                question2[i].style.background = "lightgray";
            }
};

};

const pieceComponent3 = () => {

    let question3 = document.querySelectorAll(".piece3");

    for(let i = 0; i < question3.length; i++){

        if(question3[i].value == answer[2].letter || question3[i].value == answer[2].letter[i]){

                question3[i].style.background = "green";

            }else if(answer[2].letter.includes(question3[i].value)){

                question3[i].style.background = 'yellow';

            }else{
                question3[i].style.background = "lightgray";
            }
};

};

const pieceComponent4 = () => {

    let question4 = document.querySelectorAll(".piece4");

    for(let i = 0; i < question4.length; i++){

        if(question4[i].value == answer[3].letter || question4[i].value == answer[3].letter[i]){

                question4[i].style.background = "green";

            }else if(answer[3].letter.includes(question4[i].value)){

                question4[i].style.background = 'yellow';

            }else{
                question4[i].style.background = "lightgray";
            }
};

};

const pieceComponent5 = () => {

    let question5 = document.querySelectorAll(".piece5");

    for(let i = 0; i < question5.length; i++){

        if(question5[i].value == answer[4].letter || question5[i].value == answer[4].letter[i]){

                question5[i].style.background = "green";

            }else if(answer[4].letter.includes(question5[i].value)){

                question5[i].style.background = 'yellow';

            }else{
                question5[i].style.background = "lightgray";
            }
};

};



const wordelSubmit = document.getElementById("answer");
const wordelStartBtn = document.getElementById("startBtn");
const wordBox1 = document.querySelectorAll(".pieceBox");

wordelSubmit.addEventListener("click" , function(){

        if(wordleInfo.getAttribute("id", "InfoBox0")){

            pieceComponent1();

        }else if(wordleInfo.getAttribute("id","InfoBox1")){

            pieceComponent2();

        }else if(wordleInfo.getAttribute("id","InfoBox2")){

            pieceComponent3();

        }else if(wordleInfo.getAttribute("id","InfoBox3")){

            pieceComponent4();

        }else if(wordleInfo.getAttribute("id","InfoBox4")){

            pieceComponent5();

        }else{

        }

});

wordelStartBtn.addEventListener("click" , function(){

    wordelStartBtn.innerHTML = `Reset`;
    wordleInfo.innerHTML = "Choose Spot";
    add();
 
});

let wordleRandom = Math.floor(Math.random() * 5);
console.log(wordleRandom)


const disabled_list1 = () => {

    for(let i = 0; i < answer.length; i++){

    let piece_disabled1 = document.querySelectorAll(`.piece-container1 input`);

    piece_disabled1[i].setAttribute("disabled" , false);

    }

};

const disabled_list2 = () => {

    for(let i = 0; i < answer.length; i++){

    let piece_disabled2 = document.querySelectorAll(`.piece-container2 input`);

    piece_disabled2[i].setAttribute("disabled" , false);

    }

};
const disabled_list3 = () => {

    for(let i = 0; i < answer.length; i++){

    let piece_disabled3 = document.querySelectorAll(`.piece-container3 input`);

    piece_disabled3[i].setAttribute("disabled" , false);

    }

};
const disabled_list4 = () => {

    for(let i = 0; i < answer.length; i++){

    let piece_disabled4 = document.querySelectorAll(`.piece-container4 input`);

    piece_disabled4[i].setAttribute("disabled" , false);

    }

};
const disabled_list5 = () => {

    for(let i = 0; i < answer.length; i++){

    let piece_disabled5 = document.querySelectorAll(`.piece-container5 input`);

    piece_disabled5[i].setAttribute("disabled" , false);

    }

};


function add(){

    for(let i = 0; i < answer.length; i++){

    wordBox1[i].addEventListener("click" , function(){

       wordleInfo.innerHTML = answer[i].info;
       let wordBox = wordleInfo.setAttribute("id" , `InfoBox${i}`);   

       if(i == 0){

        disabled_list2();
        disabled_list3();
        disabled_list4();
        disabled_list5();

       }else if(i == 1){

        disabled_list1();
        disabled_list3();
        disabled_list4();
        disabled_list5();

       }else if(i == 2){

        disabled_list1();
        disabled_list2();
        disabled_list4();
        disabled_list5();

       }else if(i == 3){

        disabled_list1();
        disabled_list2();
        disabled_list3();
        disabled_list5();
        
       }else if(i == 4){

        disabled_list1();
        disabled_list2();
        disabled_list3();
        disabled_list4();
        
       }else{}

  });

};
          
};
