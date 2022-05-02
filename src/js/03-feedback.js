import throttle from 'lodash.throttle';

const refs = {
    form: document.querySelector('.feedback-form'),
    textarea: document.querySelector('[name="message"]'),
    input: document.querySelector('[name="email"]'),
}
const STORAGE_KEY = 'feedback-form-state';

let formData={
    email: '',
    message: '',
};

refs.form.addEventListener("submit", onFormSubmit);
refs.form.addEventListener('input', throttle (onInput),500
);
onPageStart();
function onInput(evt){
    formData[evt.target.name]=evt.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(evt){
    evt.preventDefault();
evt.target.reset();
localStorage.removeItem(STORAGE_KEY);
console.log(formData);
formData.email='';
formData.message='';
};
function onPageStart(){
const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));
if(savedData){
    refs.input.value=savedData.email;
    refs.textarea.value= savedData.message;
    
    formData.email=savedData.email;
    formData.message= savedData.message;
}
};