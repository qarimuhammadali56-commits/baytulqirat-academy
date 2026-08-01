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