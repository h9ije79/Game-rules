document.getElementById('continue-btn').addEventListener('click', () => {
    document.querySelector('.welcome-screen').classList.add('hidden');
    document.querySelector('.main-content').classList.remove('hidden');
    showTab('rules');
});

function showTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(tab => tab.classList.add('hidden'));
    document.getElementById(tabId).classList.remove('hidden');
}

function showSubTab(subTabId) {
    document.querySelectorAll('.sub-tab-content').forEach(subTab => subTab.classList.add('hidden'));
    document.getElementById(subTabId).classList.remove('hidden');
}