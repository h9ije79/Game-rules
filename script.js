const continueBtn = document.getElementById('continue-btn');
const mainContent = document.querySelector('.main-content');
const rulesTab = document.getElementById('rules');
const adminsTab = document.getElementById('admins');

continueBtn.addEventListener('click', () => {
    document.querySelector('.welcome-screen').classList.add('hidden');
    mainContent.classList.remove('hidden');
    showTab('rules');
});

function showTab(tab) {
    rulesTab.classList.add('hidden');
    adminsTab.classList.add('hidden');
    if (tab === 'rules') {
        rulesTab.classList.remove('hidden');
    } else if (tab === 'admins') {
        adminsTab.classList.remove('hidden');
    }
}

function showSubTab(subTab) {
    const gameRules = document.getElementById('game-rules');
    const discordRules = document.getElementById('discord-rules');
    gameRules.classList.add('hidden');
    discordRules.classList.add('hidden');
    if (subTab === 'game-rules') {
        gameRules.classList.remove('hidden');
    } else if (subTab === 'discord-rules') {
        discordRules.classList.remove('hidden');
    }
}