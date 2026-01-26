document.addEventListener('DOMContentLoaded', () => {
    initFormListener();
})

function initFormListener() {
    const form = document.getElementById("contactForm");
    const button = document.getElementById("sendButton")
    const buttonText = document.querySelector(".sendButtonText");

    const sendIcon = document.getElementById("sendIcon");
    const checkIcon = document.getElementById("checkIcon");
    const loadIndicator = document.getElementById("sendLoadingIndicator");

    const icons = [sendIcon, checkIcon, loadIndicator];

    if(!form || !buttonText) return;
    form.addEventListener("submit", async e => {
        e.preventDefault()
        buttonText.textContent = "Sending..."; //Add also a loading widget
        sendIcon.classList.add("hidden");
        loadIndicator.classList.remove("hidden");

        const data = new FormData(form);

        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: data
            })

            const result = await res.json();
            if(result.success){
                buttonText.textContent = "Message sent";
                button.disabled = true;
                loadIndicator.classList.add("hidden");
                checkIcon.classList.remove("hidden");
            } else{
                buttonText.textContent = "Something went wrong"
            }
        } catch {
            buttonText.textContent = "Network error"
        }
    })

}