

let feature_list = document.querySelectorAll("li");
let textares = document.querySelector("#text-pad");
let able = document.querySelector(".able");
let copy_content = document.querySelector(".copy");
let fontColor = document.querySelector("#font-color");
let fontnumber = document.querySelector("#fontnumber");
let select = document.querySelector("#font-family");
let options = document.querySelectorAll("option");

let size = 10;

// console.log(feature_list);

feature_list.forEach((item) => {
  item.addEventListener("click", (e) => {
    if (item.classList.contains("italic")) {
      textares.classList.toggle("italic-text");
    }
     else if (item.classList.contains("text-underline")) {
      textares.classList.toggle("textline");
    }
     else if (item.classList.contains("bold")) {
      textares.classList.toggle("textbold");
    }
     else if (item.classList.contains("text-change")) {
      textares.classList.toggle("small_big");
    } 
    else if (item.classList.contains("text-cut")) {
      textares.classList.toggle("middle-cut");
    }
    else if (item.classList.contains("align-left")) {
     
        textares.classList.remove("center");
        textares.classList.remove("right");
        textares.classList.add("left");

    } else if (item.classList.contains("align-right")) {
     
        textares.classList.remove("left");
        textares.classList.remove("center");
        textares.classList.add("right");

    }
    else if (item.classList.contains("align-center")) {
     
        textares.classList.remove("left");
        textares.classList.remove("right");
        textares.classList.add("center");

    } 
    
    else if (item.classList.contains("line-justify")) {
      textares.classList.toggle("justify");
    }
    
    else if (item.classList.contains("font-increase")) {
      if (size < 81) {
        size += 2;
        textares.style.fontSize = `${size}px`;
        fontnumber.value = size;
      }
    } else if (item.classList.contains("font-decrease")) {
      if (size > 10) {
        size -= 2;
        textares.style.fontSize = `${size}px`;
        fontnumber.value = size;
      }
    } else if (item.classList.contains("font-color")) {
      fontColor.addEventListener("input", () => {
        textares.style.color = fontColor.value;
      });
    }
  });
});

// textares.addEventListener('input' , ()=>{
//     console.log(textares.value)
//    })

copy_content.addEventListener("click", () => {
  navigator.clipboard.writeText(textares.value);
  // console.log(textares.value);
});

fontColor.addEventListener("input", () => {
  textares.style.color = fontColor.value;
});

fontnumber.addEventListener("input", () => {
  textares.style.fontSize = `${fontnumber.value}px`;
});


select.addEventListener('click' , ()=>{

  let fontStyle = select.options[select.selectedIndex].value;

  textares.style.fontFamily = `${fontStyle}`;
  console.log(fontStyle);
})

