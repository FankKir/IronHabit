const achievementsList = document.querySelector('#achievements-list')
const achievements = JSON.parse(localStorage.getItem('achievements')) || []

const allAchievements = [
    { id: 'first', icon: '🥇', name: 'Первый шаг', desc: 'Добавь первую привычку' },
    { id: 'three', icon: '🔥', name: 'На разогреве', desc: 'Выполни 3 привычки'},
    { id: 'five', icon: '💪', name: 'Железная воля', desc: 'Выполни 5 привычек'},
    { id: 'level2', icon: '⚡', name: 'Уровень 2', desc: 'Достигни 2-го уровня'},
]

allAchievements.forEach(function(ach){
    const card = document.createElement('div')
    const unlocked = achievements.includes(ach.id)
    card.className = unlocked ? 'ach-card unlocked' : 'ach-card locked'
    card.innerHTML = '<span class="ach-icon">' + ach.icon + '</span><div><p class="ach-name">' + ach.name + '</p><p class="ach-desc">' + ach.desc + '</p></div>'
    achievementsList.appendChild(card)
})