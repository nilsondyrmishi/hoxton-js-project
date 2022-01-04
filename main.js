
const state = {
    description:'',
    places:'',
    cars:[],
    user: null,
    pages: [],
    selectedPage: '',
    modal: '',
    search: '',
}

function fetchDataFromServer(){
    return fetch('http://localhost:3000/data')
        .then(function (resp){
            return resp.json()
        })
}



function getCarsFromServer (){

}

/*
* Scroll down when the users hits submit
* fetching all the cars
* Store the data in state
* Rendering the data
*
* */


function renderHeader(){
    const header = document.createElement('header')
    document.body.append(header)

    const anchorLogo = document.createElement('a')
    anchorLogo.setAttribute('class','logo')
    anchorLogo.setAttribute('href','#')
    const imageLogo = document.createElement('img')
    imageLogo.setAttribute('src','https://upload.wikimedia.org/wikipedia/commons/6/65/Circle-icons-car.svg')
    const divLogo = document.createElement('div')
    divLogo.setAttribute('class','bx bx-menu')
    divLogo.setAttribute('id','menu-icon')

    header.append(anchorLogo,divLogo)
    anchorLogo.append(imageLogo)




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
    anchorRideLi.setAttribute('href','#ride')
    anchorRideLi.textContent = 'Ride'

    rideLi.append(anchorRideLi)

    const servicesLi = document.createElement('li')
    navBar.append(servicesLi)
    const anchorServicesLi = document.createElement('a')
    anchorServicesLi.setAttribute('href','#services')
    anchorServicesLi.textContent = 'Services'

    servicesLi.append(anchorServicesLi)

    const aboutLi = document.createElement('li')
    navBar.append(aboutLi)
    const anchorAboutLi = document.createElement('a')
    anchorAboutLi.setAttribute('href','#about')
    anchorAboutLi.textContent = 'About'

    aboutLi.append(anchorAboutLi)

    const reviewsLi = document.createElement('li')
    navBar.append(reviewsLi)
    const anchorReviewsLi = document.createElement('a')
    anchorReviewsLi.setAttribute('href','#reviews')
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


function renderMain() {

    const mainSection = document.createElement('section')
    mainSection.setAttribute('class', 'home')
    mainSection.setAttribute('id', 'home')
    document.body.append(mainSection)

    const textEl = document.createElement('div')
    textEl.setAttribute('class', 'text')
    mainSection.append(textEl)

    const h1Text = document.createElement('h1')
    h1Text.textContent = 'Looking to rent a car'
    // const spanH1 = document.createElement('span')
    // spanH1.textContent = 'Looking'
    textEl.append(h1Text)
    // h1Text.append(spanH1)


    const formContainer = document.createElement('div')
    formContainer.setAttribute('class', 'form-container')

    mainSection.append(formContainer)

    const Form = document.createElement('from')
    formContainer.append(Form)

    const inputBoxLoc = document.createElement('div')
    inputBoxLoc.setAttribute('class', 'input-box')

    Form.append(inputBoxLoc)

    const spanForm = document.createElement('span')
    spanForm.textContent = 'Location'

    const inputForm = document.createElement('input')
    inputForm.setAttribute('type', 'search')
    inputForm.setAttribute('placeholder', 'Search Places')

    inputBoxLoc.append(spanForm, inputForm)

    const inputBoxPick = document.createElement('div')
    inputBoxPick.setAttribute('class', 'input-box')

    const spanFormPick = document.createElement('span')
    spanFormPick.textContent = 'Pick-Up Date'

    const inputFormPick = document.createElement('input')
    inputFormPick.setAttribute('type', 'date')

    Form.append(inputBoxPick)
    inputBoxPick.append(spanFormPick, inputFormPick)

    const inputBoxReturn = document.createElement('div')
    inputBoxReturn.setAttribute('class', 'input-box')
    Form.append(inputBoxReturn)

    const returnSpan = document.createElement('span')
    returnSpan.textContent = 'Return Date'
    const inputReturn = document.createElement('input')
    inputReturn.setAttribute('type', 'date')

    inputBoxReturn.append(returnSpan, inputReturn)

    const submitInput = document.createElement('input')
    submitInput.setAttribute('type', 'submit')
    submitInput.setAttribute('class', 'btn')

    Form.append(submitInput)


    /*******Ride SECTION*******************/

    const rideSection = document.createElement('section')
    rideSection.setAttribute('class', 'ride')
    rideSection.setAttribute('id', 'ride')

    document.body.append(rideSection)

    const rideHeading = document.createElement('div')
    rideHeading.setAttribute('class', 'heading')
    rideSection.append(rideHeading)

    const spanRideHeading = document.createElement('span')
    spanRideHeading.textContent = 'How it Works'
    const h1RideHeading = document.createElement('h1')
    h1RideHeading.textContent = 'Rent With 3 Easy Steps'
    rideHeading.append(spanRideHeading, h1RideHeading)

    const rideContainer = document.createElement('div')
    rideContainer.setAttribute('class', 'ride-container')
    rideSection.append(rideContainer)

    const divBox = document.createElement('div')
    divBox.setAttribute('class', 'box')
    rideContainer.append(divBox)

    const bxIEl = document.createElement('i')
    bxIEl.setAttribute('class', 'bx bxs-map')
    const h2DivBox = document.createElement('h2')
    h2DivBox.textContent = 'Choose a location'
    const pDivBox = document.createElement('p')
    pDivBox.textContent = 'Great Location'

    divBox.append(bxIEl, h2DivBox, pDivBox)

    const div2Box = document.createElement('div')
    div2Box.setAttribute('class', 'box')
    rideContainer.append(div2Box)

    const bxI2El = document.createElement('i')
    bxI2El.setAttribute('class', 'bx bxs-calendar-check')
    const h2El2DivBox = document.createElement('h2')
    h2El2DivBox.textContent = 'Pick-Up Date'
    const p2DivBox = document.createElement('p')
    p2DivBox.textContent = 'Great Pick up Date'
    div2Box.append(bxI2El, h2El2DivBox, p2DivBox)

    const div3Box = document.createElement('div')
    div3Box.setAttribute('class', 'box')
    rideContainer.append(div3Box)

    const bxI3El = document.createElement('i')
    bxI3El.setAttribute('class', 'bx bxs-calendar-star')
    const h2El3DivBox = document.createElement('h2')
    h2El3DivBox.textContent = 'Book a Car'
    const p3DivBox = document.createElement('p')
    p3DivBox.textContent = 'Great Car'

    div3Box.append(bxI3El, h2El3DivBox, p3DivBox)


    /******Services*************/

    const serviceSection = document.createElement('section')
    serviceSection.setAttribute('class', 'services')
    serviceSection.setAttribute('id', 'services')
    document.body.append(serviceSection)

    const servicesHeading = document.createElement('div')
    servicesHeading.setAttribute('class', 'heading')
    serviceSection.append(servicesHeading)

    const spanServicesHeading = document.createElement('span')
    spanServicesHeading.textContent = 'Best Services'
    const h1ServicesHeading = document.createElement('h1')
    h1ServicesHeading.textContent = 'Explore Out Top Deals'
    servicesHeading.append(spanServicesHeading, h1ServicesHeading)

    const servicesContainer = document.createElement('div')
    servicesContainer.setAttribute('class', 'services-container')
    serviceSection.append(servicesContainer)

    const servicesBox = document.createElement('div')
    servicesBox.setAttribute('class', 'box')
    const boxImage = document.createElement('div')
    boxImage.setAttribute('class', 'box-img')
    const imageBox1 = document.createElement('img')
    imageBox1.setAttribute('src', 'img/benz.jpg')
    const pBox1 = document.createElement('p')
    pBox1.textContent = '2019'
    const h3Box1 = document.createElement('h3')
    h3Box1.textContent = '2019 Mercedes-Benz A-Class'
    const h2Box1 = document.createElement('h2')
    h2Box1.textContent = '50$/day'
    const aBox1 = document.createElement('a')
    aBox1.setAttribute('href', '#')
    aBox1.setAttribute('class', 'btn')
    aBox1.textContent = 'Rent Now'

    servicesContainer.append(servicesBox)
    servicesBox.append(boxImage, imageBox1, pBox1, h3Box1, h2Box1, aBox1)

    const servicesBox2 = document.createElement('div')
    servicesBox2.setAttribute('class', 'box')
    const boxImage2 = document.createElement('div')
    boxImage2.setAttribute('class', 'box-img')
    const imageBox2 = document.createElement('img')
    imageBox2.setAttribute('src', 'img/AUDI.jpg')
    const pBox2 = document.createElement('p')
    pBox2.textContent = '2018'
    const h3Box2 = document.createElement('h3')
    h3Box2.textContent = '2019 AUDI A4'
    const h2Box2 = document.createElement('h2')
    h2Box2.textContent = '50$/day'
    const aBox2 = document.createElement('a')
    aBox2.setAttribute('href', '#')
    aBox2.setAttribute('class', 'btn')
    aBox2.textContent = 'Rent Now'

    servicesContainer.append(servicesBox2)
    servicesBox2.append(boxImage2, imageBox2, pBox2, h3Box2, h2Box2, aBox2)

    const servicesBox3 = document.createElement('div')
    servicesBox3.setAttribute('class', 'box')
    const boxImage3 = document.createElement('div')
    boxImage3.setAttribute('class', 'box-img')
    const imageBox3 = document.createElement('img')
    imageBox3.setAttribute('src', 'img/BMW.jpg')
    const pBox3 = document.createElement('p')
    pBox3.textContent = '2018'
    const h3Box3 = document.createElement('h3')
    h3Box3.textContent = '2019 BMW X5'
    const h2Box3 = document.createElement('h2')
    h2Box3.textContent = '50$/day'
    const aBox3 = document.createElement('a')
    aBox3.setAttribute('href', '#')
    aBox3.setAttribute('class', 'btn')
    aBox3.textContent = 'Rent Now'

    servicesContainer.append(servicesBox3)
    servicesBox3.append(boxImage3, imageBox3, pBox3, h3Box3, h2Box3, aBox3)

    const aboutSection = document.createElement('section')
    aboutSection.setAttribute('class', 'about')
    aboutSection.setAttribute('id', 'about')
    document.body.append(aboutSection)

    const aboutHeading = document.createElement('div')
    aboutHeading.setAttribute('class', 'heading')
    const spanHeadingAbout = document.createElement('span')
    spanHeadingAbout.textContent = 'About Us'
    const h1AboutHeading = document.createElement('h1')
    h1AboutHeading.textContent = 'Best Customer Experience'

    aboutSection.append(aboutHeading)
    aboutHeading.append(spanHeadingAbout, h1AboutHeading)

    const aboutContainer = document.createElement('div')
    aboutContainer.setAttribute('class', 'about-container')
    const aboutImage = document.createElement('div')
    aboutImage.setAttribute('class', 'about-img')
    const imageAbout = document.createElement('img')
    imageAbout.setAttribute('src', 'img/road-trip-feature.jpg')

    const aboutText = document.createElement('div')
    aboutText.setAttribute('class', 'about-text')
    const spanText = document.createElement('span')
    spanText.textContent = 'About Us'
    const p1About = document.createElement('p')
    p1About.textContent = 'Great Stuff'
    const anchorAbout = document.createElement('a')
    anchorAbout.setAttribute('class', 'btn')
    anchorAbout.setAttribute('href', '#')
    anchorAbout.textContent = 'Learn More'

    aboutSection.append(aboutContainer)
    aboutContainer.append(aboutImage, aboutText)
    aboutImage.append(imageAbout)
    aboutText.append(spanText, p1About, anchorAbout)


    const reviewsSection = document.createElement('section')
    reviewsSection.setAttribute('class', 'reviews')
    reviewsSection.setAttribute('id', 'reviews')
    document.body.append(reviewsSection)

    const reviewsHeading = document.createElement('div')
    reviewsHeading.setAttribute('class', 'heading')
    const spanReviews = document.createElement('span')
    spanReviews.textContent = 'Reviews'
    const h1HeadingReviews = document.createElement('h1')
    h1HeadingReviews.textContent = 'What our Customers Say'

    reviewsSection.append(reviewsHeading)
    reviewsHeading.append(spanReviews, h1HeadingReviews)

    const reviewContainer = document.createElement('div')
    reviewContainer.setAttribute('class', 'reviews-container')
    const reviewBox1 = document.createElement('div')
    reviewBox1.setAttribute('class', 'box')
    const revImg1 = document.createElement('div')
    revImg1.setAttribute('class', 'rev-img')
    const imageRev1 = document.createElement('img')
    imageRev1.setAttribute('src', 'img/person1.jpg')

    const h2BoxReview1 = document.createElement('h2')
    h2BoxReview1.textContent = 'Nilson Dyrmishi'

    const reviewStars1 = document.createElement('div')
    reviewStars1.setAttribute('class', 'stars')

    const star1 = document.createElement('i')
    star1.setAttribute('class', 'bx bxs-star')
    const star2 = document.createElement('i')
    star2.setAttribute('class', 'bx bxs-star')
    const star3 = document.createElement('i')
    star3.setAttribute('class', 'bx bxs-star')
    const star4 = document.createElement('i')
    star4.setAttribute('class', 'bx bxs-star')
    const star5 = document.createElement('i')
    star5.setAttribute('class', 'bx bxs-star-half')


    const pElReview1 = document.createElement('p')
    pElReview1.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n' +
        '                    eiusmod tempor incididunt ut labore et dolore magna aliqua. \n' +
        '                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'


    reviewsSection.append(reviewContainer)
    reviewContainer.append(reviewBox1)
    reviewBox1.append(revImg1,h2BoxReview1,reviewStars1,pElReview1)
    revImg1.append(imageRev1)
    reviewStars1.append(star1,star2,star3,star4,star5)
}
function renderFooter(){
const footer = document.createElement('section')
    footer.setAttribute('class','newsletter')
    document.body.append(footer)

    const h2Footer = document.createElement('h2')
    h2Footer.textContent = 'Subscribe to Newsletter'

    const footerBox = document.createElement('div')
    footerBox.setAttribute('class','box')

    const labelFooter = document.createElement('label')

    const inputFooter = document.createElement('input')
    inputFooter.setAttribute('type','email')
    inputFooter.setAttribute('placeholder','Enter Your Email...')

const anchorFooter = document.createElement('a')
    anchorFooter.setAttribute('class','btn')
    anchorFooter.setAttribute('href','#')
    anchorFooter.textContent = 'Subscribe'

    footer.append(h2Footer,footerBox)
    footerBox.append(labelFooter,inputFooter,anchorFooter)
}
function render() {
    document.body.innerHTML = ''

    renderHeader()
    renderMain()
    renderFooter()
}


function init() {
    fetchDataFromServer().then(function (carsData) {
        state.cars = carsData
        render()
    })
}
init()


