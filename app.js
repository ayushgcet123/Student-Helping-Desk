/*app.jss for home and all pages*/

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick =() => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};




//scroll section active link
let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    section.forEach(sec => {
        let top=window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    //sticky navbar
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    /*remove toogle icon and navbar when click navbar link (scroll)*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

/*scroll reveal*/
ScrollReveal({
    reset: true,
    distance:'80px',
    duration:2000,
    delay:200
});

ScrollReveal().reveal('.home-content, .heading', { origin:'top'});
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin:'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img', { origin:'left'});
ScrollReveal().reveal('.home-content p, .about-content', { origin:'right'});

/*typed js
const typed = new Typed('.multiple-text', {
    strings:['Frontend Developer', 'Graphics Designer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});*/

/*contact form*/
function send(){
    var name=document.getElementById("Full Name").value;
    var email=document.getElementById("Email Address").value;
    var number=document.getElementById("Mobile Number").value;
    var subject=document.getElementById("Email Subject").value;
    var message=document.getElementById("Your Message").value;

    var body= "Name: " + name + 
    "<br/> Email:" + email + 
    "<br/> Mobile Number:" + number + 
    "<br/> Email Subject:" + subject + 
    "<br/> Your Message:" + message;

    console.log(body);

Email.send({
        Host : "smtp.elasticemail.com",
        Username : "thelearninglab28@gmail.com",
        Password : "ACED81D0FC1B8CF25B9458D14D28C4C51C5F",
        To : 'thelearninglab28@gmail.com',
        From : "thelearninglab28@gmail.com",
        Subject : subject,
        Body : body
    }).then(
      message => {
        if (message=='OK'){
            swal("Successfull", "Your Data Successfull Received!", "success");
        }
        else{
            swal("Something Wrong", "Your Data is not Received!", "error");
        }
      }
    );
    
}