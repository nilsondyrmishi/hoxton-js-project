
const state = {
    places:'',
    cars: '',
    user: null,
    pages: [],
    selectedPage: '',
    modal: '',
    search: '',
    selectedItem: null
}

function fetchDataFromServer(){
    return fetch('http://localhost:3000/data')
        .then(function (resp){
            return resp.json()
        })
}

function filterSearchedElements() {
    let elementsToDisplay = state.cars
    if (state.search !== '') {

        elementsToDisplay = elementsToDisplay.filter(items => {
            return items.type.toLowerCase().includes(state.search.toLocaleLowerCase()
            )
        })
    }
    return filterSearchedElements()
}



function renderHeader(){
    const header = document.createElement('header')
    document.body.append(header)

    const navBar = document.createElement('ul')
    navBar.setAttribute('class','navbar')
    header.append(navBar)

    const homeLi = document.createElement('li')
    navBar.append(homeLi)
    const anchorHomeLi = document.createElement('a')
    anchorHomeLi.setAttribute('href','#')
    anchorHomeLi.textContent = 'Home'

    homeLi.append(anchorHomeLi)

    const rideLi = document.createElement('li')
    navBar.append(rideLi)
    const anchorRideLi = document.createElement('a')
    anchorRideLi.setAttribute('href','#')
    anchorRideLi.textContent = 'Ride'

    rideLi.append(anchorRideLi)

    const servicesLi = document.createElement('li')
    navBar.append(servicesLi)
    const anchorServicesLi = document.createElement('a')
    anchorServicesLi.setAttribute('href','#')
    anchorServicesLi.textContent = 'Services'

    servicesLi.append(anchorServicesLi)

    const aboutLi = document.createElement('li')
    navBar.append(aboutLi)
    const anchorAboutLi = document.createElement('a')
    anchorAboutLi.setAttribute('href','#')
    anchorAboutLi.textContent = 'About'

    aboutLi.append(anchorAboutLi)

    const reviewsLi = document.createElement('li')
    navBar.append(aboutLi)
    const anchorReviewsLi = document.createElement('a')
    anchorReviewsLi.setAttribute('href','#')
    anchorReviewsLi.textContent = 'Reviews'

    reviewsLi.append(anchorReviewsLi)

    const SignInUp = document.createElement('div')
    SignInUp.setAttribute('class','header-btn')
    header.append(SignInUp)

    const SignUp = document.createElement('a')
    SignUp.setAttribute('class','sign-up')
    SignUp.setAttribute('href', '#')
    SignUp.textContent = 'Sign Up'
    SignInUp.append(SignUp)

    const signIn = document.createElement('a')
    signIn.setAttribute('class','sign-in')
    signIn.setAttribute('href','#')
    signIn.textContent = 'Sign In'
    signIn.addEventListener('click',function (){
        state.modal = 'sign in'

    })
    SignInUp.append(signIn)
}
function signInModal (){




}


function renderMain(){

const mainSection = document.createElement('section')
    mainSection.setAttribute('class','home')
    mainSection.setAttribute('id','home')
    document.body.append(mainSection)

    const textEl = document.createElement('div')
    textEl.setAttribute('class','text')
    mainSection.append(textEl)

    const h1Text = document.createElement('h1')
    h1Text.textContent = 'Looking to rent a car'
    // const spanH1 = document.createElement('span')
    // spanH1.textContent = 'Looking'
    textEl.append(h1Text)
    // h1Text.append(spanH1)


    const formContainer = document.createElement('div')
    formContainer.setAttribute('class','form-container')

    mainSection.append(formContainer)

    const Form = document.createElement('from')
    formContainer.append(Form)

    const inputBoxLoc = document.createElement('div')
    inputBoxLoc.setAttribute('class','input-box')

    Form.append(inputBoxLoc)

    const spanForm = document.createElement('span')
    spanForm.textContent = 'Location'

    const inputForm = document.createElement('input')
    inputForm.setAttribute('type','search')
    inputForm.setAttribute('placeholder','Search Places')

    inputBoxLoc.append(inputForm,spanForm)

    const inputBoxPick = document.createElement('div')
    inputBoxPick.setAttribute('class','input-box')

    const spanFormPick = document.createElement('span')
    spanFormPick.textContent = 'Pick-Up Date'

    const inputFormPick = document.createElement('input')
    inputFormPick.setAttribute('type','date')

    Form.append(inputBoxPick)
    inputBoxPick.append(spanFormPick,inputFormPick)

    const inputBoxReturn = document.createElement('div')
    inputBoxReturn.setAttribute('class','input-box')
    Form.append(inputBoxReturn)

    const returnSpan = document.createElement('span')
    returnSpan.textContent = 'Return Date'
    const inputReturn = document.createElement('input')
    inputReturn.setAttribute('type','date')

    inputBoxReturn.append(returnSpan,inputReturn)
}


function renderFooter(){


}
function render() {
    document.body.innerHTML = ''

    renderHeader()
    renderMain()
    renderFooter()
}


function init() {

    fetchDataFromServer().then(carsData => state.cars = carsData)
    fetchDataFromServer().then(function (carsData) {
        state.cars = carsData
        render()
    })
}
init()


