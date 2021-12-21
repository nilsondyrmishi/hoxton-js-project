
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


