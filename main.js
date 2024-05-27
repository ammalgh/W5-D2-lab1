let string=document.getElementById("text");

// q1

let btn=document.getElementById("button");
btn.addEventListener("click",() =>{

  string.innerHTML="wellcom";
})

// q2

let btn2=document.getElementById("size");
btn2.addEventListener("click",() =>{

    string.style.fontSize = "x-large";
  })

//   q3
let btn3=document.getElementById("smallSize");
btn3.addEventListener("click",() =>{

    string.style.fontSize = "xx-small";
  })

//   q4
let btn4=document.getElementById("color");
btn4.addEventListener("click",() =>{

    string.style.color = "blue";
  })

//   q5

let btn5=document.getElementById("background");
btn5.addEventListener("click",() =>{

    string.style.backgroundColor = "grey";
  })

//   q6


let images = [
    "https://cdn.pixabay.com/photo/2024/04/18/19/56/leaves-8704937_640.png",
    "https://cdn.pixabay.com/photo/2024/03/15/18/53/magnolia-flower-8635583_1280.jpg"
];

let currentIndex = 0;

document.getElementById("imge").addEventListener("click", function() {
    let displayedImage = document.getElementById("displayedImage");
    
    displayedImage.src = images[currentIndex];
    
    currentIndex = (currentIndex + 1) % images.length; // تحديث الفهرس للدورة على الصور
});
