// =====================================================
//                    MOBILE MENU
// =====================================================

const menuBtn =
    document.querySelector(".menu-btn");

const navLinks =
    document.querySelector(".nav-links");


menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});


// =====================================================
//                 CLOSE MOBILE MENU
// =====================================================

document
    .querySelectorAll(".nav-links a")
    .forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("active");

        });

    });


// =====================================================
//                    CONTACT FORM
// =====================================================

const contactForm =
    document.getElementById("contactForm");


contactForm.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();

        alert(
            "Thank you for contacting Vaibhav!"
        );

        contactForm.reset();

    }
);