//Zona validacion de formulario
(() => {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }

            form.classList.add('was-validated')

        }, false)
    })
})()


// zona de variable
let animacion = document.querySelector(".inicio");
let skills = document.querySelectorAll(".tecIcon");
let title = document.querySelector(".skill-text");
let bar = document.querySelector(".progress-bar");
let number = document.getElementById("porciento");


let skillSettings = {
    "HTML": { width: "100%", background: "linear-gradient(0deg, #e44d26, #f16529, #f4f4f4)" },
    "CSS": { width: "75%", background: "linear-gradient(0deg, #0478be, #009fe4, #f4f4f4)" },
    "Javascript": { width: "60%", background: "linear-gradient(0deg, #f7df1e, #0a0a0a)" },
    "React": { width: "50%", background: "linear-gradient(0deg, #0562b9, #61dafb)" },
    "Bootstrap": { width: "60%", background: "linear-gradient(0deg, #563d7c, #ffffff)" },
    "Git": { width: "90%", background: "linear-gradient(0deg, #f1502f, #ffffff)" },
    "GitHub": { width: "90%", background: "linear-gradient(0deg, #d3d3d3, #404040, #808080)" }
};


skills.forEach(index => {
    index.addEventListener("mouseover", () => {
        let alt = index.getAttribute("alt")
        title.textContent = index.getAttribute("alt");
        if (skillSettings[alt]) {
            number.textContent = skillSettings[alt].width;
            bar.style.transition = "width 0.5s ease-in-out";
            bar.style.width = skillSettings[alt].width;
            bar.style.background = skillSettings[alt].background;
        }
    });

    index.addEventListener("mouseout", () => {
        title.textContent = "Skills";
        bar.style.width = "0%";
        number.textContent = "0%";
    });
});



