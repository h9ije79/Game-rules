const continueBtn = document.getElementById('continue-btn');
const mainContent = document.querySelector('.main-content');
const rulesTab = document.getElementById('rules');
const adminsTab = document.getElementById('admins');

continueBtn.addEventListener('click', () => {
    document.querySelector('.welcome-screen').classList.add('hidden');
    mainContent.classList.remove('hidden');
    showTab('rules