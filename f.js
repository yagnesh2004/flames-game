const relation =['Friends','Love','Atraction','Marrige','Enimy','Sister','Bestie'];


relationText = document.querySelector(".result span");
inputField_one =document.querySelector(".input-1 input");
inputField_two =document.querySelector(".input-2 input")
const flamesButoon = document.querySelector(".flame-button");


const flameIT = () => {
    let word_1 = inputField_one.value.toLowerCase().split(" ");
    let word_2 = inputField_two.value.toLowerCase().split(" ");
    let final_array=[];

    alert(word_1);
    alert(word_2);
    for(let i;i<word_1.length ;i++){
        final_array.appendchild(word_1[i])
        alert(final_array[i]);
       
    }
    alert(final_array);

}

flamesButoon.addEventListener('click',flameIT);




