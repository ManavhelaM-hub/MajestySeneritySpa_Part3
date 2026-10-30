document.body.classList.add("js-enabled");

// Fill in the footer year when a page includes the current-year element.
var currentYearElement = document.getElementById("currentYear");
if (currentYearElement) {
    currentYearElement.textContent = new Date().getFullYear();
}

// Service data used to build and filter the home page's service cards.
var services = [
    {
        name: "Swedish Massage",
        description: "A relaxing full-body massage that relieves tension and promotes overall well-being.",
        category: "massage"
    },
    {
        name: "Deep Tissue Massage",
        description: "A therapeutic massage that targets deeper layers of muscle and connective tissue.",
        category: "massage"
    },
    {
        name: "Hot Stone Massage",
        description: "A soothing massage that uses heated stones to relax muscles and improve circulation.",
        category: "massage"
    },
    {
        name: "Facial Treatment",
        description: "A facial treatment to cleanse, exfoliate, and nourish the skin.",
        category: "facial"
    },
    {
        name: "Body Treatments",
        description: "Exfoliating and hydrating treatments to improve skin texture and appearance.",
        category: "body"
    },
    {
        name: "Manicures and Pedicures",
        description: "Nail care treatments to keep your hands and feet looking their best.",
        category: "nails"
    }
];

var servicesList = document.getElementById("servicesList");
var searchInput = document.getElementById("searchInput");
var filterSelect = document.getElementById("filterSelect");
var noResultsMessage = document.getElementById("noResultsMessage");

// Rebuild the visible service cards whenever the search or category changes.
function displayServices() {
    if (!servicesList) {
        return;
    }

    var searchTerm = searchInput ? searchInput.value.trim().toLowerCase() : "";
    var selectedCategory = filterSelect ? filterSelect.value : "";
    var filteredServices = services.filter(function (service) {
        var matchesSearch = service.name.toLowerCase().includes(searchTerm) ||
            service.description.toLowerCase().includes(searchTerm);
        var matchesCategory = !selectedCategory || service.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    // Clear old results before adding the cards that match both controls.
    servicesList.textContent = "";
    filteredServices.forEach(function (service) {
        var card = document.createElement("article");
        card.className = "service-card";

        var title = document.createElement("h3");
        title.textContent = service.name;

        var description = document.createElement("p");
        description.textContent = service.description;

        card.appendChild(title);
        card.appendChild(description);
        servicesList.appendChild(card);
    });

    if (noResultsMessage) {
        noResultsMessage.hidden = filteredServices.length > 0;
        noResultsMessage.style.display = filteredServices.length > 0 ? "none" : "block";
    }
}

if (servicesList) {
    displayServices();
    if (searchInput) {
        searchInput.addEventListener("input", displayServices);
    }
    if (filterSelect) {
        filterSelect.addEventListener("change", displayServices);
    }
}

// Keep the selected tab button and its content panel in sync.
var tabButtons = document.querySelectorAll(".tab-button");
tabButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        var selectedTab = button.getAttribute("data-tab");
        var selectedContent = selectedTab ? document.getElementById(selectedTab) : null;
        if (!selectedContent) {
            return;
        }

        tabButtons.forEach(function (tabButton) {
            tabButton.classList.remove("active");
            tabButton.setAttribute("aria-selected", "false");
        });
        document.querySelectorAll(".tab-content").forEach(function (content) {
            content.classList.remove("active");
        });

        button.classList.add("active");
        button.setAttribute("aria-selected", "true");
        selectedContent.classList.add("active");
    });
});

// Toggle accordion content and expose its expanded state to assistive technology.
document.querySelectorAll(".accordion-header, .accordion-button").forEach(function (button) {
    button.addEventListener("click", function () {
        var item = button.closest(".accordion-item");
        var content = item ? item.querySelector(".accordion-content") : button.nextElementSibling;
        if (!content) {
            return;
        }

        var expanded = button.getAttribute("aria-expanded") !== "true";
        content.classList.toggle("active", expanded);
        button.setAttribute("aria-expanded", String(expanded));
        if (item) {
            item.classList.toggle("active", expanded);
        }
    });
});

var revealElements = document.querySelectorAll(".reveal, .animate-on-scroll");
if ("IntersectionObserver" in window) {
    // Animate elements as they enter the viewport, then stop observing them.
    var revealObserver = new IntersectionObserver(function (entries, observer) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible", "animate");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    revealElements.forEach(function (element) {
        revealObserver.observe(element);
    });
} else {
    // Show elements immediately in browsers without IntersectionObserver.
    revealElements.forEach(function (element) {
        element.classList.add("is-visible", "animate");
    });
}

var lightboxModal = document.getElementById("galleryLightbox");
var lightboxImage = document.getElementById("lightboxImage");
var lightboxCaption = document.getElementById("lightboxCaption");
if (lightboxModal && lightboxImage && lightboxCaption) {
    // Populate and open the image viewer when a gallery image is selected.
    document.querySelectorAll(".spa-lightbox-trigger, .lightbox-trigger").forEach(function (trigger) {
        trigger.addEventListener("click", function (event) {
            event.preventDefault();
            var caption = trigger.getAttribute("data-caption") || "";
            lightboxImage.setAttribute("src", trigger.getAttribute("data-image-src") || trigger.getAttribute("href") || "");
            lightboxImage.setAttribute("alt", caption || "Enlarged image");
            lightboxCaption.textContent = caption;

            if (window.jQuery && typeof window.jQuery.fn.modal === "function") {
                window.jQuery(lightboxModal).modal("show");
            } else {
                lightboxModal.style.display = "block";
                lightboxModal.classList.add("show");
            }
        });
    });

    // Use Bootstrap's modal API when available, otherwise toggle the modal directly.
    function closeLightbox() {
        if (window.jQuery && typeof window.jQuery.fn.modal === "function") {
            window.jQuery(lightboxModal).modal("hide");
        } else {
            lightboxModal.style.display = "none";
            lightboxModal.classList.remove("show");
        }
    }

    var closeButton = lightboxModal.querySelector(".close");
    if (closeButton) {
        closeButton.addEventListener("click", closeLightbox);
    }

    lightboxModal.addEventListener("click", function (event) {
        if (event.target === lightboxModal) {
            closeLightbox();
        }
    });

    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape" && lightboxModal.classList.contains("show")) {
            closeLightbox();
        }
    });
}

var enquireForm = document.getElementById("enquireForm");
if (enquireForm) {
    var nameInput = document.getElementById("name");
    var emailInput = document.getElementById("email");
    var messageInput = document.getElementById("message");
    var submitButton = document.getElementById("submitButton");
    var formStatus = document.getElementById("formStatus");

    // Display a field-level validation message and error styling.
    function showError(input, errorId, message) {
        var errorElement = document.getElementById(errorId);
        if (errorElement) {
            errorElement.textContent = message;
            errorElement.style.display = "block";
        }
        input.classList.add("input-error");
    }

    // Remove validation feedback after the field becomes valid.
    function clearError(input, errorId) {
        var errorElement = document.getElementById(errorId);
        if (errorElement) {
            errorElement.textContent = "";
            errorElement.style.display = "none";
        }
        input.classList.remove("input-error");
    }

    // Validate the required fields before allowing the enquiry to be sent.
    function validateName() {
        var value = nameInput.value.trim();
        if (!value) {
            showError(nameInput, "nameError", "Name is required.");
            return false;
        }
        if (value.length < 2) {
            showError(nameInput, "nameError", "Name must be at least 2 characters long.");
            return false;
        }
        clearError(nameInput, "nameError");
        return true;
    }

    function validateEmail() {
        var value = emailInput.value.trim();
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
            showError(emailInput, "emailError", value ? "Please enter a valid email address." : "Email is required.");
            return false;
        }
        clearError(emailInput, "emailError");
        return true;
    }

    function validateMessage() {
        var value = messageInput.value.trim();
        if (value.length < 10) {
            showError(messageInput, "messageError", value ? "Message must be at least 10 characters long." : "Message is required.");
            return false;
        }
        clearError(messageInput, "messageError");
        return true;
    }

    nameInput.addEventListener("input", validateName);
    emailInput.addEventListener("input", validateEmail);
    messageInput.addEventListener("input", validateMessage);
    // Submit valid enquiries asynchronously and restore the button in all cases.
    enquireForm.addEventListener("submit", async function (event) {
        event.preventDefault();
        if (!validateName() || !validateEmail() || !validateMessage()) {
            return;
        }

        if (submitButton) {
            submitButton.disabled = true;
            submitButton.textContent = "Submitting...";
        }

        try {
            var response = await fetch(enquireForm.action, {
                method: "POST",
                body: new FormData(enquireForm),
                headers: { Accept: "application/json" }
            });
            if (!response.ok) {
                throw new Error("Form submission failed with status " + response.status);
            }

            if (formStatus) {
                formStatus.textContent = "Form submitted successfully!";
                formStatus.style.color = "green";
                formStatus.style.display = "block";
            }
            enquireForm.reset();
            clearError(nameInput, "nameError");
            clearError(emailInput, "emailError");
            clearError(messageInput, "messageError");
        } catch (error) {
            if (formStatus) {
                formStatus.textContent = "There was a problem submitting the form. Please try again later.";
                formStatus.style.color = "red";
                formStatus.style.display = "block";
            }
            console.error(error);
        } finally {
            if (submitButton) {
                submitButton.disabled = false;
                submitButton.textContent = "Submit";
            }
        }
    });
}
