var navBar= document.getElementById("navBar");
        function togglebtn(){
            navBar.classList.toggle("hidemenu");
        }
document.addEventListener("DOMContentLoaded", function () {
    // Check if we are on confirmation.html
    if (window.location.pathname.includes("confirmation.html")) {
        const params = new URLSearchParams(window.location.search);

        // Fill values into confirmation page
        const guestName = document.getElementById("guestName");
        const guestEmail = document.getElementById("guestEmail");
        const checkinDate = document.getElementById("checkinDate");
        const checkoutDate = document.getElementById("checkoutDate");
        const guestCount = document.getElementById("guestCount");

        if (guestName) guestName.textContent = params.get("name") || "N/A";
        if (guestEmail) guestEmail.textContent = params.get("email") || "N/A";
        if (checkinDate) checkinDate.textContent = params.get("checkin") || "N/A";
        if (checkoutDate) checkoutDate.textContent = params.get("checkout") || "N/A";
        if (guestCount) guestCount.textContent = params.get("guests") || "1";
    }
});