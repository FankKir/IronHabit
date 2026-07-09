const achievementsList = document.querySelector('#achievements-list')
const achievements = JSON.parse(localStorage.getItem('achievements')) || []

const allAchievements = [
    { id: 'first', icon: '<img src="icons/icons8-medal-100.png" style="width: 40px; height: 40px;">', name: 'Первый шаг', desc: 'Добавь первую привычку' },
    { id: 'fifth', icon: '<img src="icons/icons8-clipboard-100.png" style="width: 40px; height: 40px;">', name: 'Строитель', desc: 'Добавь 5 привычек' },
    { id: 'tenth', icon: '<img src="icons/icons8-crane-100.png" style="width: 40px; height: 40px;">', name: 'Архитектор', desc: 'Добавь 10 привычек' },
    { id: 'fiftieth', icon: '<img src="icons/icons8-star-100.png" style="width: 40px; height: 40px;">', name: 'Мастер', desc: 'Добавь 50 привычек' },
    { id: 'hundredth', icon: '<img src="icons/icons8-goat-100.png" style="width: 40px; height: 40px;">', name: 'GOAT', desc: 'Добавь 100 привычкек' },
    { id: 'three', icon: '<img src="icons/icons8-fire-100.png" style="width: 40px; height: 40px;">', name: 'На разогреве', desc: 'Выполни 3 привычки'},
    { id: 'five', icon: '<img src="icons/icons8-biceps-100.png" style="width: 40px; height: 40px;">', name: 'Железная воля', desc: 'Выполни 5 привычек'},
    { id: 'ten', icon: '<img src="icons/icons8-running-100.png" style="width: 40px; height: 40px;">', name: 'В ритме', desc: 'Выполни 10 привычек'},
    { id: 'twentytwo', icon: '<img src="icons/icons8-flash-100.png" style="width: 40px; height: 40px;">', name: 'Машина', desc: 'Выполни 25 привычек'},
    { id: 'fifty', icon: '<img src="icons/icons8-skull-100.png" style="width: 40px; height: 40px;">', name: 'Зверь', desc: 'Выполни 50 привычек'},
    { id: 'level2', icon: '<img src="icons/icons8-flash-100.png" style="width: 40px; height: 40px;">', name: 'Уровень 2', desc: 'Достигни 2-го уровня'},
    { id: 'level3', icon: '<img src="icons/icons8-fire-100.png" style="width: 40px; height: 40px;">', name: 'Огонь', desc: 'Достигни 3-го уровня'},
    { id: 'level5', icon: '<img src="icons/icons8-crown-100.png" style="width: 40px; height: 40px;">', name: 'Элита', desc: 'Достигни 5-го уровня'},
    { id: 'level10', icon: '<img src="icons/icons8-diamond-100.png" style="width: 40px; height: 40px;">', name: 'Легенда', desc: 'Достигни 10-го уровня'},
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