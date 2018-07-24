
export const findParent = (el, matchParentCB) => {
  var parent = el.parentElement;
  if (document.body === el || el.parentElement === null) return null;

  if (matchParentCB(el)) return el;

  return findParent(el.parentElement, matchParentCB);
};


// * FORMS
// ----------------------------------



export const validateField = (field) => {
  if(field.value){

    field.classList.remove('invalid-missing')
  } else {
    field.classList.add('invalid-missing')
  }

  if (field.getAttribute('type') === 'email'){
    validateEmailField(field)
  }
  console.log(field)
}

const validateEmailField = (emailField) => {
  if(!validateEmailValue(emailField.value)){
    emailField.classList.add('invalid-value')
  } else {
    emailField.classList.remove('invalid-value')
  }
}
const validateEmailValue = (emailValue) => {
emailValue = emailValue.trim();
var match = emailValue.match(/@/g)

if(!match || match.length !== 1){
  return false;
}

if(emailValue[0] === '@' || emailValue[emailValue.length - 1] === '@') {
  return false;
}
return true

}
export const validateForm = (formValues) => {
  var form = document.querySelector('form')
  var requiredFields = [].slice.call(form.querySelectorAll('[required]'))

  requiredFields.forEach( (field) => {
    validateField(field)
  })

  return requiredFields.every((field) => {
    return field.className.indexOf('invalid') === -1;
  })
}


// * Util function to increase opacity on downwards scroll
/* ----------------------------------
const opacityOnScroll = () => {
  window.onscroll =()=>{
    const newScrollHeight = Math.ceil(window.scrollY / 50) *50;
    var maxScrollHeight = Math.ceil(window.innerHeight);
    const currentOpacity = Math.min( (this.state.currentScrollHeight/maxScrollHeight) , 1);
    if (currentOpacity === 1){null}
    if (this.state.currentScrollHeight !== newScrollHeight){
        this.setState({currentScrollHeight: newScrollHeight})
    }
  }
}
// maxScrollHeight is the adjustment for when you'd like the scroll function to start effecting opacity
var maxScrollHeight = Math.ceil(window.innerHeight-200);
const backgroundOpacity = Math.min( (this.state.currentScrollHeight/maxScrollHeight) , 1) || 0

// ----------------------------------
*/
