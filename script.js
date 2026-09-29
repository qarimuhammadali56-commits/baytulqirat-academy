/*=========================
      Scroll To Top
=========================*/

const topBtn = document.getElementById("topBtn");

if (topBtn) {

    window.addEventListener("scroll", () => {

        topBtn.style.display =
            window.scrollY > 300 ? "block" : "none";

    });

    topBtn.addEventListener("click", () => {

        window.scrollTo({

            top: 0,
            behavior: "smooth"

        });

    });

}


/*=========================
        Counter
=========================*/

window.addEventListener("load", () => {

    document.querySelectorAll(".counter").forEach(counter => {

        const target = Number(counter.dataset.target);

        let count = 0;

        const speed = Math.max(1, target / 100);

        function updateCounter() {

            count += speed;

            if (count < target) {

                counter.innerHTML = Math.ceil(count);

                requestAnimationFrame(updateCounter);

            } else {

                counter.innerHTML = target + "+";

            }

        }

        updateCounter();

    });

});


/*=========================
    Skills Animation
=========================*/

window.addEventListener("load", () => {

    document.querySelectorAll(".progress-bar").forEach(bar => {

        const width = bar.getAttribute("data-width");

        if (width) {

            bar.style.width = width;

        }

    });

});
/*=================================
   MOBILE THREE DOTS MENU
=================================*/

document.addEventListener("DOMContentLoaded", function () {

    const menuButton =
        document.querySelector(".mobile-menu-btn");

    const mobileNav =
        document.querySelector("header nav");

    const whatsappButton =
        document.querySelector(".header-btn");


    if (menuButton && mobileNav) {

        menuButton.addEventListener("click", function () {

            mobileNav.classList.toggle(
                "mobile-menu-open"
            );

            if (whatsappButton) {

                whatsappButton.classList.toggle(
                    "mobile-whatsapp-open"
                );

            }

        });

    }


    /* Menu link دبانے پر menu بند */

    const menuLinks =
        document.querySelectorAll(
            "header nav a"
        );

    menuLinks.forEach(function (link) {

        link.addEventListener(
            "click",
            function () {

                mobileNav.classList.remove(
                    "mobile-menu-open"
                );

                if (whatsappButton) {

                    whatsappButton.classList.remove(
                        "mobile-whatsapp-open"
                    );

                }

            }
        );

    });

});
/*=========================
      Loading Bar
=========================*/

const loadingBar = document.querySelector(".loading-bar");

if (loadingBar) {

    window.addEventListener("load", () => {

        loadingBar.style.width = "100%";

        setTimeout(() => {

            loadingBar.style.opacity = "0";

        }, 400);

    });

}
/*=================================
    ADMISSION FORM TO WHATSAPP
=================================*/

document.addEventListener("DOMContentLoaded", function () {

    const admissionForm = document.getElementById("admissionForm");

    if (!admissionForm) return;

    admissionForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const father = document.getElementById("father").value.trim();
        const age = document.getElementById("age").value.trim();
        const country = document.getElementById("country").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const course = document.getElementById("course").value;

        const message =
`Assalamu Alaikum

📚 New Admission Request

👤 Name: ${name}
👨 Father Name: ${father}
🎂 Age: ${age}
🌍 Country: ${country}
📱 WhatsApp: ${phone}
📖 Course: ${course}`;

        const whatsappURL =
            "https://wa.me/923392466941?text=" + encodeURIComponent(message);

        window.location.href = whatsappURL;

    });

});
/*==========================
      PREMIUM CURSOR
==========================*/

const dot = document.querySelector(".cursor-dot");
const ring = document.querySelector(".cursor-ring");

if(dot && ring){

document.addEventListener("mousemove",(e)=>{

dot.style.left=e.clientX+"px";
dot.style.top=e.clientY+"px";

ring.style.left=e.clientX+"px";
ring.style.top=e.clientY+"px";

});

}
/*=========================
          FAQ
=========================*/

document.addEventListener("DOMContentLoaded", () => {

    const faqs = document.querySelectorAll(".faq-item");

    faqs.forEach(faq => {

        const question = faq.querySelector(".faq-question");
        const answer = faq.querySelector(".faq-answer");
        const icon = question.querySelector("span");

        question.addEventListener("click", () => {

            const isOpen = faq.classList.contains("active");

            // سب FAQ بند کریں
            faqs.forEach(item => {

                item.classList.remove("active");

                item.querySelector(".faq-answer").style.maxHeight = null;

                item.querySelector(".faq-question span").style.transform = "rotate(0deg)";

            });

            // اگر یہ پہلے بند تھا تو کھول دیں
            if (!isOpen) {

                faq.classList.add("active");

                answer.style.maxHeight = answer.scrollHeight + "px";

                icon.style.transform = "rotate(180deg)";

            }

        });

    });

});
/*=========================
      BLOG CARD ANIMATION
=========================*/

document.addEventListener("DOMContentLoaded", () => {

    const blogCards = document.querySelectorAll(".blog-card");

    if (!blogCards.length) return;

    const blogObserver = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("blog-visible");

                blogObserver.unobserve(entry.target);

            }

        });

    }, {
        threshold: 0.15
    });


    blogCards.forEach(card => {

        blogObserver.observe(card);

    });

});
/*=========================
      COURSE CARD ANIMATION
=========================*/

document.addEventListener("DOMContentLoaded", () => {

    const courseCards = document.querySelectorAll(".courses .card");

    if (!courseCards.length) return;

    const courseObserver = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("course-visible");

                courseObserver.unobserve(entry.target);

            }

        });

    }, {
        threshold: 0.15
    });


    courseCards.forEach(card => {

        courseObserver.observe(card);

    });

});
/*=========================
   COUNTRY CARD ANIMATION
=========================*/

document.addEventListener("DOMContentLoaded", () => {

    const countryCards = document.querySelectorAll(".country-card");

    if (!countryCards.length) return;

    const countryObserver = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("country-visible");

                countryObserver.unobserve(entry.target);

            }

        });

    }, {
        threshold: 0.15
    });

    countryCards.forEach(card => {
        countryObserver.observe(card);
    });

});
/*=========================
        ABOUT ANIMATION
=========================*/

document.addEventListener("DOMContentLoaded", () => {

    const aboutSection = document.querySelector(".about");

    if (!aboutSection) return;

    const aboutObserver = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("about-visible");

                aboutObserver.unobserve(entry.target);

            }

        });

    }, {
        threshold: 0.15
    });

    aboutObserver.observe(aboutSection);

});
/*=========================
   TEACHER & SKILLS ANIMATION
=========================*/

document.addEventListener("DOMContentLoaded", () => {

    const sections = document.querySelectorAll(".teacher, .skills");

    if (!sections.length) return;

    const sectionObserver = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                if (entry.target.classList.contains("teacher")) {
                    entry.target.classList.add("teacher-visible");
                }

                if (entry.target.classList.contains("skills")) {
                    entry.target.classList.add("skills-visible");
                }

                sectionObserver.unobserve(entry.target);
            }

        });

    }, {
        threshold: 0.15
    });

    sections.forEach(section => {
        sectionObserver.observe(section);
    });

});
function openPayment() {
    document.getElementById("paymentPopup").style.display = "flex";
}

function closePayment() {
    document.getElementById("paymentPopup").style.display = "none";
}

window.addEventListener("click", function(event) {

    const popup = document.getElementById("paymentPopup");

    if (event.target === popup) {
        closePayment();
    }

});
/*=================================
   COURSE CARD LANGUAGE SWITCH
=================================*/

function showCourseLang(button, lang) {

    const card = button.closest(".card");

    const english = card.querySelector(".course-en");
    const urdu = card.querySelector(".course-ur");

    if (lang === "ur") {

        english.style.display = "none";
        urdu.style.display = "block";

    } else {

        urdu.style.display = "none";
        english.style.display = "block";

    }

}