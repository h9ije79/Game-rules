document.getElementById("continue-btn").addEventListener("click", function() {
    document.querySelector(".welcome-screen").classList.add("hidden");
    document.querySelector(".main-content").classList.remove("hidden");
});

function showTab(tabId) {
    document.querySelectorAll(".tab-content").forEach(el => el.classList.add("hidden"));
    document.getElementById(tabId).classList.remove("hidden");
}

function showSubTab(subTabId) {
    document.querySelectorAll(".sub-tab-content").forEach(el => el.classList.add("hidden"));
    document.getElementById(subTabId).classList.remove("hidden");
}