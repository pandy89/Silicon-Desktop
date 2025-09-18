/*var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}*/

/* Select Elements from the DOM */

const questions = document.querySelectorAll('.question');

questions.forEach((question) => 
    question.addEventListener('click', () => {
        if (question.parentNode.classList.contains('active')) {
            question.parentNode.classList.toggle('active');
        } else {
            questions.forEach((q) => q.parentNode.classList.remove('active'));
            question.parentNode.classList.add('active');
        }
    })
);