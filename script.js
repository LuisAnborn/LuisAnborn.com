document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll(".section");
    const navLinks = document.querySelectorAll(".nav-links a");

    navLinks.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            sections.forEach(section => {
                if (section !== targetSection) {
                    section.classList.remove("active");
                }
            });

            targetSection.classList.add("active");

            if (targetId === "home") {
                targetSection.classList.add("dragging");
                setTimeout(() => {
                    targetSection.classList.remove("dragging");
                }, 500);
            }
        });
    });
});
