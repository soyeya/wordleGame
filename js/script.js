const gameOverpage = document.getElementById("gameover");
gameOverpage.style.display = "none";

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

const wordleBox = document.querySelectorAll(".pieceBox");
const wordleStartBtn = document.getElementById("startBtn");
const wordleSubmit = document.getElementById("answer");
const restartBtn = document.querySelector(".retry");
const infoText = document.querySelector(".wordInfo");
const scoreBox = document.querySelectorAll(".tryCont em");
const totalScore = document.querySelector(".scroeCont em");

wordleBox[0].classList.remove("close");
wordleBox[1].classList.add("close");
wordleBox[2].classList.add("close");
wordleBox[3].classList.add("close");
wordleBox[4].classList.add("close");


/* wordle 단어함수 */

var wordle_array1 = [];

const wordleComponent1 = () => {

    const pieceInputList1 = document.querySelectorAll(".piece1");

    for(let i = 0; i < pieceInputList1.length; i++){
        
        var inputValue = pieceInputList1[i].value;

        if(inputValue == answer[0].letter[i]){

            pieceInputList1[i].classList.add("green");
            pieceInputList1[i].classList.remove("yellow");
            pieceInputList1[i].classList.remove("gray");
            wordle_array1.push(inputValue); //글자의 위치 혹은 글자가 일치할 때 array에 담기


        }else if(answer[0].letter.includes(inputValue || answer[0].letter.indexOf(inputValue))){
        
            pieceInputList1[i].classList.add("yellow");
            pieceInputList1[i].classList.remove("green");
            pieceInputList1[i].classList.remove("gray");

        }else if(answer[0].letter.indexOf(inputValue) == -1){

            pieceInputList1[i].classList.add("gray");
            pieceInputList1[i].classList.remove("green");
            pieceInputList1[i].classList.remove("yellow");

        }else{

            pieceInputList1[i].classList.remove("green");
            pieceInputList1[i].classList.remove("yellow");
            pieceInputList1[i].classList.remove("gray");
        }
    }

    //만약 value 값이 array값과 완전 일치한다면 -> 정답이라면 

    let result1 = wordle_array1.join("");
    let result_value1 = result1.match("adult");

    if( result_value1 != null){

      for(let i = 0; i < pieceInputList1.length; i++){

        pieceInputList1[i].classList.remove("yellow");
        pieceInputList1[i].classList.remove("gray");
        infoText.innerHTML = "sucess";
        wordleBox[0].classList.add("sucess");
        
        setTimeout(() => {

          wordleBox[1].classList.remove("close");
        
        },500);

        console.log('동작중1');

      };


    };

    wordle_array1 = []; //array_값을 비워준다. 

  };
  
  

var wordle_array2 = [];

const wordleComponent2 = () => {

    const pieceInputList2 = document.querySelectorAll(".piece2");

    for(let i = 0; i < pieceInputList2.length; i++){
        
        var inputValue = pieceInputList2[i].value;

        if(inputValue == answer[1].letter[i]){

            pieceInputList2[i].classList.add("green");
            pieceInputList2[i].classList.remove("yellow");
            pieceInputList2[i].classList.remove("gray");
            wordle_array2.push(inputValue); //글자의 위치 혹은 글자가 일치할 때 array에 담기


        }else if(answer[1].letter.includes(inputValue || answer[1].letter.indexOf(inputValue))){

            pieceInputList2[i].classList.add("yellow");
            pieceInputList2[i].classList.remove("green");
            pieceInputList2[i].classList.remove("gray");

        }else if(answer[1].letter.indexOf(inputValue) == -1){

            pieceInputList2[i].classList.add("gray");
            pieceInputList2[i].classList.remove("green");
            pieceInputList2[i].classList.remove("yellow");

        }else{

            pieceInputList2[i].classList.remove("green");
            pieceInputList2[i].classList.remove("yellow");
            pieceInputList2[i].classList.remove("gray");
        }

    }

    //만약 value 값이 array값과 완전 일치한다면 -> 정답이라면 

    let result2 = wordle_array2.join("");
    let result_value2 = result2.match("cloth");

    if( result_value2 != null){

      for(let i = 0; i < pieceInputList2.length; i++){

        pieceInputList2[i].classList.remove("yellow");
        pieceInputList2[i].classList.remove("gray");
        infoText.innerHTML = "sucess";
        wordleBox[1].classList.add("sucess");
        
        setTimeout(() => {

          wordleBox[2].classList.remove("close");
        
        },500)

        console.log('동작중2');

      };

    };

    wordle_array2 = []; //array_값을 비워준다. 


};


var wordle_array3 = [];

const wordleComponent3 = () => {

    const pieceInputList3 = document.querySelectorAll(".piece3");

    for(let i = 0; i < pieceInputList3.length; i++){
        
        var inputValue = pieceInputList3[i].value;

        if(inputValue == answer[2].letter[i]){

            pieceInputList3[i].classList.add("green");
            pieceInputList3[i].classList.remove("yellow");
            pieceInputList3[i].classList.remove("gray");
            wordle_array3.push(inputValue); //글자의 위치 혹은 글자가 일치할 때 array에 담기


        }else if(answer[2].letter.includes(inputValue || answer[2].letter.indexOf(inputValue))){

            pieceInputList3[i].classList.add("yellow");
            pieceInputList3[i].classList.remove("green");
            pieceInputList3[i].classList.remove("gray");

        }else if(answer[2].letter.indexOf(inputValue) == -1){

            pieceInputList3[i].classList.add("gray");
            pieceInputList3[i].classList.remove("green");
            pieceInputList3[i].classList.remove("yellow");

        }else{

            pieceInputList3[i].classList.remove("green");
            pieceInputList3[i].classList.remove("yellow");
            pieceInputList3[i].classList.remove("gray");
        }

    }

    //만약 value 값이 array값과 완전 일치한다면 -> 정답이라면 

    let result3 = wordle_array3.join("");
    let result_value3 = result3.match("world");

    if( result_value3 != null){

      for(let i = 0; i < pieceInputList3.length; i++){

        pieceInputList3[i].classList.remove("yellow");
        pieceInputList3[i].classList.remove("gray");
        infoText.innerHTML = "sucess";
        wordleBox[2].classList.add("sucess");
        
        setTimeout(() => {

          wordleBox[3].classList.remove("close");

        
        },500)

        console.log('동작중3');

      };

    };

    wordle_array3 = []; //array_값을 비워준다. 
    
};


var wordle_array4 = [];

const wordleComponent4 = () => {

    const pieceInputList4 = document.querySelectorAll(".piece4");

    for(let i = 0; i < pieceInputList4.length; i++){
        
        var inputValue = pieceInputList4[i].value;

        if(inputValue == answer[3].letter[i]){

            pieceInputList4[i].classList.add("green");
            pieceInputList4[i].classList.remove("yellow");
            pieceInputList4[i].classList.remove("gray");
            wordle_array4.push(inputValue); //글자의 위치 혹은 글자가 일치할 때 array에 담기


        }else if(answer[3].letter.includes(inputValue || answer[3].letter.indexOf(inputValue))){

            pieceInputList4[i].classList.add("yellow");
            pieceInputList4[i].classList.remove("green");
            pieceInputList4[i].classList.remove("gray");

        }else if(answer[3].letter.indexOf(inputValue) == -1){

            pieceInputList4[i].classList.add("gray");
            pieceInputList4[i].classList.remove("green");
            pieceInputList4[i].classList.remove("yellow");

        }else{

            pieceInputList4[i].classList.remove("green");
            pieceInputList4[i].classList.remove("yellow");
            pieceInputList4[i].classList.remove("gray");
        }

    }

    //만약 value 값이 array값과 완전 일치한다면 -> 정답이라면 

    let result4 = wordle_array4.join("");
    let result_value4 = result4.match("music");

    if( result_value4 != null){

      for(let i = 0; i < pieceInputList4.length; i++){

        pieceInputList4[i].classList.remove("yellow");
        pieceInputList4[i].classList.remove("gray");
        infoText.innerHTML = "sucess";
        wordleBox[3].classList.add("sucess");
        
        setTimeout(() => {

          wordleBox[4].classList.remove("close");
        
        },500)

        console.log('동작중4');

      };

    };

    wordle_array4 = []; //array_값을 비워준다. 
    
};


var wordle_array5 = [];

const wordleComponent5 = () => {

    const pieceInputList5 = document.querySelectorAll(".piece5");

    for(let i = 0; i < pieceInputList5.length; i++){
        
        var inputValue = pieceInputList5[i].value;

        if(inputValue == answer[4].letter[i]){

            pieceInputList5[i].classList.add("green");
            pieceInputList5[i].classList.remove("yellow");
            pieceInputList5[i].classList.remove("gray");
            wordle_array5.push(inputValue); //글자의 위치 혹은 글자가 일치할 때 array에 담기


        }else if(answer[4].letter.includes(inputValue || answer[4].letter.indexOf(inputValue))){

            pieceInputList5[i].classList.add("yellow");
            pieceInputList5[i].classList.remove("green");
            pieceInputList5[i].classList.remove("gray");

        }else if(answer[4].letter.indexOf(inputValue) == -1){

            pieceInputList5[i].classList.add("gray");
            pieceInputList5[i].classList.remove("green");
            pieceInputList5[i].classList.remove("yellow");

        }else{

            pieceInputList5[i].classList.remove("green");
            pieceInputList5[i].classList.remove("yellow");
            pieceInputList5[i].classList.remove("gray");
        }

    }

    //만약 value 값이 array값과 완전 일치한다면 -> 정답이라면 

    let result5 = wordle_array5.join("");
    let result_value5 = result5.match("plate");

    if(result_value5 != null){

      for(let i = 0; i < pieceInputList5.length; i++){

        pieceInputList5[i].classList.remove("yellow");
        pieceInputList5[i].classList.remove("gray");
        infoText.innerHTML = "sucess";
        wordleBox[4].classList.add("sucess");
        
        setTimeout(() => {

          gameOverpage.style.display = "flex";
        
        },500)

        console.log('동작중5');

      };

    };

    wordle_array5 = []; //array_값을 비워준다. 
    
};


//wordledBox 클릭시 힌트제공 함수

const infoContent = () => {

   for(let i = 0; i < wordleBox.length; i++){

      wordleBox[i].addEventListener("click" , function(){

        infoText.textContent = answer[i].info;
          
      });
   }
};

// score 카운트 함수

var count1 = 0;
var count2 = 0;
var count3 = 0;
var count4 = 0;
var count5 = 0;

var countBox1 = "";
var countBox2 = "";
var countBox3 = "";
var countBox4 = "";
var countBox5 = "";

const counting = () => {

  if(!wordleBox[0].classList.contains("sucess")){

    wordleComponent1();
    count1++;
    console.log(count1);
    countBox1 = count1;
    scoreBox[0].innerHTML = countBox1;
    

  }else if(!wordleBox[1].classList.contains("sucess")){
   
    wordleComponent2();
    count2++;
    console.log(count2);
    countBox2 = count2;
    scoreBox[1].innerHTML = countBox2;

  }else if(!wordleBox[2].classList.contains("sucess")){

    wordleComponent3();
    count3++;
    console.log(count3);
    countBox3 = count3;
    scoreBox[2].innerHTML = countBox3;

  }else if(!wordleBox[3].classList.contains("sucess")){

    wordleComponent4();
    count4++;
    console.log(count4);
    countBox4 = count4;
    scoreBox[3].innerHTML = countBox4;

  }else if(!wordleBox[4].classList.contains("sucess")){

    wordleComponent5();
    count5++;
    console.log(count5);
    countBox5 = count5;
    scoreBox[4].innerHTML = countBox5;

   }else{

  };

  totalScore.innerHTML = countBox1 + countBox2 + countBox3 + countBox4 + countBox5;


}

//스타트 버튼 클릭시 함수

wordleStartBtn.addEventListener("click" , function(e){
  e.preventDefault();
  count1 = 0; //count값을 '0'으로 재정의
  count2 = 0;
  count3 = 0;
  count4 = 0;
  count5 = 0;
  wordleStartBtn.classList.add("start");
  infoText.textContent = "Click Blanks";
  infoContent();
  wordleSubmit.addEventListener("click" ,  counting); //시작버튼을 클릭해야 subMit버튼 작동

});

const pieceInputList1 = document.querySelectorAll(".piece1");
const pieceInputList2 = document.querySelectorAll(".piece2");
const pieceInputList3 = document.querySelectorAll(".piece3");
const pieceInputList4 = document.querySelectorAll(".piece4");
const pieceInputList5 = document.querySelectorAll(".piece5");

//input value값, 배경색, 섹션 보이기 디폴트값

const valueDefault = () => {

  for(let i = 0; i <  pieceInputList1.length; i++){

    pieceInputList5[i].classList.remove("green");
    pieceInputList1[i].classList.remove("green");
    pieceInputList2[i].classList.remove("green");
    pieceInputList3[i].classList.remove("green");
    pieceInputList4[i].classList.remove("green");
    pieceInputList1[i].value = "";
    pieceInputList2[i].value = "";
    pieceInputList3[i].value = "";
    pieceInputList4[i].value = "";
    pieceInputList5[i].value = "";
    wordleBox[0].classList.remove("close");
    wordleBox[i].classList.add("close");
    wordleBox[i].classList.remove("sucess");

 };


}

//재시작 버튼 

restartBtn.addEventListener("click", function(){

  gameOverpage.style.display = "none";
  infoText.innerHTML = "";
  wordleStartBtn.classList.remove("start");
  valueDefault();
  wordleSubmit.removeEventListener("click" , counting);

});