const kimlien = document.querySelector('.one')

const handleChange = (event) => {
    console.log(event.target.value);
    if (event.target.value == 'kimlien') {
        kimlien.style.flexFlow = 'column-reverse'
    } else {
        kimlien.style.flexFlow = 'column'
    }
}