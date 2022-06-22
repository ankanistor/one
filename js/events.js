let firstName = '';
let lastName = '';

const changeHandlerFN = (event) => {
    firstName = event.target.value;
}
const changeHandlerLN = (event) => {
    lastName = event.target.value;
}

const hoverHandler = (event) => {

    // console.log(event.target)
      console.log('hover test')
}

const clickHandler = (event) => {
    event.preventDefault();

    ( ()=> { console.log(' execute some code...', firstName,' ', lastName) })();
}