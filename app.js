var page;


page = 1;


document.getElementById('choice-1').addEventListener('click', (event) => {
  if (page == 1) {
    let element_text = document.getElementById('text');
    element_text.innerText = 'You come across a big scary monster and he eats you. The end.';
    let element_buttons = document.getElementById('buttons');
    element_buttons.replaceChildren();
  } else if (page == 2) {
    let element_text2 = document.getElementById('text');
    element_text2.innerText = 'You survived...for now...but once again there are two paths to choose from...';
    page = 3;
  } else if (page == 3) {
    let element_text3 = document.getElementById('text');
    element_text3.innerText = 'A monkey beats you to death...game over...';
    let element_buttons2 = document.getElementById('buttons');
    element_buttons2.replaceChildren();
  } else if (page == 4) {
    let element_text4 = document.getElementById('text');
    element_text4.innerText = 'A shark eats you...on land...yes weird but...the end...';
    let element_buttons3 = document.getElementById('buttons');
    element_buttons3.replaceChildren();
  }

});

document.getElementById('choice-2').addEventListener('click', (event) => {
  if (page == 1) {
    let element_text5 = document.getElementById('text');
    element_text5.innerText = 'You are safe. But now there are two more paths in front of you. Which one do you take?';
    page = 2;
  } else if (page == 2) {
    let element_text6 = document.getElementById('text');
    element_text6.innerText = 'A hobo kills you with a knife and takes your money. You are dead. The end.';
    let element_buttons4 = document.getElementById('buttons');
    element_buttons4.replaceChildren();
  } else if (page == 3) {
    let element_text7 = document.getElementById('text');
    element_text7.innerText = 'You\'re alive! Awesome! but oh no...two paths again...';
    page = 4;
  } else if (page == 4) {
    let element_text8 = document.getElementById('text');
    element_text8.innerText = 'You found the exit to the maze! Hooray!';
    element_text8.style.color = '#ff0000';
    let element_buttons5 = document.getElementById('buttons');
    element_buttons5.replaceChildren();
  }

});