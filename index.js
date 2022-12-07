const pwd = document.querySelector('#password');
const mail = document.querySelector('#email');

mail.addEventListener('input', ({target: {value}}) => {
   if (value.length === 0) {
        mail.style.borderColor = '#ddd'
   }
   else if (!value.includes('@')) {
    mail.style.borderColor = 'red'
   } else {
      mail.style.borderColor = '#01df38'
   }
})

pwd.addEventListener('input', ({target: {value}}) => {
    if (value.length === 0) {
        pwd.style.borderColor = '#ddd'
   }
   else if (value.length < 8) {
    pwd.style.borderColor = 'red'
   } else {
      pwd.style.borderColor = '#01df38'
   }
})