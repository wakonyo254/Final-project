const passwordField = document.getElementById('password');
const pandaHands = document.getElemenetById('panda-hands');
passwordField.addEventListener('focus', ()=> {
    pandaHands.style.transform ='translate(-50%, 30px)';
});
passwordField.addEventListener('blur', ()=> {
    pandaHands.style.transform = 'translate(-50%, 0px)';
});