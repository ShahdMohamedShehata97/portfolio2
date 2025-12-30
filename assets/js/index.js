// ^ Write your JavaScript code here

var navLink = document.querySelectorAll(".nav-links a");
var gear = document.getElementById("settings-toggle");
var sideBar = document.getElementById("settings-sidebar");
var closeSideBar = document.getElementById("close-settings");
var colorBtn = document.querySelectorAll(".grid button");
var restBtn = document.getElementById("reset-settings");
var fontBtn = document.querySelectorAll(".space-y-3 button");
var modeBtn = document.getElementById("theme-toggle-button");
var html = document.querySelector("html");
var filterBtn = document.querySelectorAll("#portfolio button");
var portfolioItem = document.querySelectorAll(
  "#portfolio-grid .portfolio-item"
);
var nextTestimonial=document.getElementById('next-testimonial')

var prevTestimonial=document.getElementById('prev-testimonial');
var indecators=Array.from(document.querySelectorAll('.carousel-indicator'));
var testimonialsCard=Array.from(document.querySelectorAll('#testimonials-carousel .testimonial-card '));

//click and add active

navLink.forEach(function (link) {
  link.addEventListener("click", function (e) {
    for (var i = 0; i < navLink.length; i++) {
      navLink[i].classList.remove("active");
    }
    e.target.classList.add("active");
  });
});




//gear

//display Sidebar
gear.addEventListener("click", function () {
  // console.log('lll')
  sideBar.classList.replace("translate-x-full", "translate-x-0");
});

//close sidebar

closeSideBar.addEventListener("click", function () {
  sideBar.classList.replace("translate-x-0", "translate-x-full");
});

//color-theme
colorBtn.forEach(function (color) {
  color.addEventListener("click", function (e) {
    console.log("click");

    var primary = color.getAttribute("data-primary");
    var secondary = color.getAttribute("data-secondary");
    var accent = secondary;
    console.log(primary);
    console.log(secondary);

    document.documentElement.style.setProperty("--color-primary", primary);

    document.documentElement.style.setProperty("--color-secondary", secondary);
    document.documentElement.style.setProperty("--color-accent", accent);
  });
});

//restBtn
restBtn.addEventListener("click", function () {
  var primary = "#6366f1";
  var secondary = "#8b5cf6";
  var accent = secondary;
  console.log(primary);
  console.log(secondary);

  document.documentElement.style.setProperty("--color-primary", primary);

  document.documentElement.style.setProperty("--color-secondary", secondary);
  document.documentElement.style.setProperty("--color-accent", accent);
  sideBar.classList.replace("translate-x-0", "translate-x-full");
  document.body.classList.remove(
      "font-alexandria",
      "font-tajawal",
      "font-cairo"
    );
  document.body.classList.add(`font-tajawal`);
});

//change font
fontBtn.forEach(function (font) {
  font.addEventListener("click", function (e) {
    e.stopPropagation();
    var fontName = e.currentTarget.getAttribute("data-font");
    console.log(fontName);
    document.body.classList.remove(
      "font-alexandria",
      "font-tajawal",
      "font-cairo"
    );

    document.body.classList.add(`font-${fontName}`);
  });
});

////dark mode


modeBtn.addEventListener("click", function (e) {
  e.preventDefault();

  html.classList.toggle("dark");
});

//projectFiltration



filterBtn.forEach(function (filter) {
  filter.addEventListener("click", function (e) {
    // console.log("filter");

    for (var i = 0; i < filterBtn.length; i++) {
      filterBtn[i].classList.remove('active','from-primary','to-secondary');
    }
    e.target.classList.add('active','from-primary','to-secondary','bg-linear-to-r')
    
    var projectFiled = e.currentTarget.getAttribute("data-filter");
    portfolioItem.forEach(function (item) {
      var category = item.getAttribute("data-category");

      if (category === projectFiled || projectFiled === "all") {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
});


/// testimonials carousel


var start=0
function getcard(){

    for(var i=0;i<testimonialsCard.length;i++){
        if(i>=start){
            testimonialsCard[i].style.display='block'
        }
        else{
            testimonialsCard[i].style.display='none'
        }
    }
    editIndecator()
}

getcard()
nextTestimonial.addEventListener('click',function(e){
 console.log('curr')
 if (start +3< testimonialsCard.length) {
    start++;
    getcard();
  }

  else {
    start=0
    getcard()
  }

})

prevTestimonial.addEventListener('click',function(e){

 if (start > 0) {
    start--;
    getcard();
  }
  else{
    start=3
    getcard()
  }

})


function editIndecator(){
    for(var i=0;i<indecators.length;i++){
        if (i === start) {
            indecators[i].classList.add('bg-accent');
            indecators[i].classList.remove('bg-slate-400', 'dark:bg-slate-600');
            indecators[i].setAttribute('aria-selected', 'true');
        } else {
            indecators[i].classList.remove('bg-accent');
            indecators[i].classList.add('bg-slate-400');
            indecators[i].setAttribute('aria-selected', 'false');
        }
    }
}
editIndecator()


indecators.forEach(function(indicator, index){
    indicator.addEventListener('click', function(){
        start = index; 
        getcard();
        editIndecator()     
    });
});




////sections and scrollling
var sections = document.querySelectorAll('section');

window.addEventListener('scroll', function() {
  var scrollPos = window.scrollY || window.pageYOffset;

  sections.forEach(function(section) {
    var top = section.offsetTop;
    var bottom = top + section.offsetHeight;
    var id = section.getAttribute('id');

    if (scrollPos >= top && scrollPos < bottom) {
     for (var i = 0; i < navLink.length; i++) {
      navLink[i].classList.remove("active");
    };
      var activeLink = document.querySelector('nav a[href="#' + id + '"]');
      if (activeLink) activeLink.classList.add('active');
    }
  });
});





var main=document.getElementById('hero-section')
var scrollToTop=document.getElementById('scroll-to-top');

scrollToTop.addEventListener('click',function(){
  main.scrollIntoView({ behavior: 'smooth' })
  scrollToTop.classList.toggle('opacity-0','invisable')
})