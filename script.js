// FAQ ACCORDION

const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach(function(question) {
    question.addEventListener("click", function() {

        const faqItem = question.parentElement;
        faqItem.classList.toggle("active");

        const icon = question.querySelector("span");

        if (faqItem.classList.contains("active")) {
            icon.textContent = "−";
        } else {
            icon.textContent = "+";
        }
    });
});


// URL SHORTENER DEMO

const trimButton = document.getElementById("trim-url");

trimButton.addEventListener("click", function() {

    const longUrl = document.getElementById("long-url").value;
    const result = document.getElementById("shortened-result");

    if (longUrl === "") {
        result.textContent = "Please enter a URL first.";
        return;
    }

    try {
        new URL(longUrl);
        result.textContent =
            "Your URL is ready to be shortened by a URL-shortening service.";
    } catch (error) {
        result.textContent = "Please enter a valid URL.";
    }

});