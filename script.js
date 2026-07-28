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
/*=========================
      STICKY HEADER
=========================*/

const header = document.querySelector("header");

if (header) {

    let lastScroll = 0;

    window.addEventListener("scroll", () => {

        const currentScroll = window.pageYOffset;

        // Header Background
        if (currentScroll > 50) {

            header.style.background = "rgba(2,107,53,.96)";
            header.style.padding = "0px";

        } else {

            header.style.background = "rgba(2,107,53,.90)";
            header.style.padding = "0px";

        }

        // Hide / Show Header
        if (currentScroll > lastScroll && currentScroll > 120) {

            header.style.transform = "translateY(-100%)";

        } else {

            header.style.transform = "translateY(0)";

        }

        lastScroll = currentScroll;

    });

}
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
