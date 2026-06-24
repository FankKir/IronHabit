const achievementsList = document.querySelector('#achievements-list')
const achievements = JSON.parse(localStorage.getItem('achievements')) || []

const allAchievements = [
    { id: 'first', icon: '<img src="icons/icons8-medal-100.png" style="width: 40px; height: 40px;">', name: 'Первый шаг', desc: 'Добавь первую привычку' },
    { id: 'three', icon: '<img src="icons/icons8-fire-100.png" style="width: 40px; height: 40px;">', name: 'На разогреве', desc: 'Выполни 3 привычки'},
    { id: 'five', icon: '<img src="icons/icons8-flexed-biceps-100.png" style="width: 40px; height: 40px;">', name: 'Железная воля', desc: 'Выполни 5 привычек'},
    { id: 'level2', icon: '<img src="icons/icons8-flash-100.png" style="width: 40px; height: 40px;">', name: 'Уровень 2', desc: 'Достигни 2-го уровня'},
]

allAchievements.forEach(function(ach){
    const card = document.createElement('div')
    const unlocked = achievements.includes(ach.id)
    card.className = unlocked ? 'ach-card unlocked' : 'ach-card locked'
    card.innerHTML = '<span class="ach-icon">' + ach.icon + '</span><div><p class="ach-name">' + ach.name + '</p><p class="ach-desc">' + ach.desc + '</p></div>'
    achievementsList.appendChild(card)
})

const statsEl = document.getElementById('achievements-stats');
if (statsEl) {
    const total = allAchievements.length;
    const unlocked = achievements.length;
    statsEl.textContent = 'Получено: ' + unlocked + ' из ' + total;
}