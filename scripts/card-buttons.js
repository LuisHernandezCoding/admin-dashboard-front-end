const buttons = document.querySelectorAll('.card_btn');
for (let i = 0; i < buttons.length; i += 1) {
  buttons[i].addEventListener('click', () => {
    buttons[i].classList.toggle('filled');
  });
}