let achievement = JSON.parse(localStorage.getItem('achievement')) || []
const button = document.querySelector('#add-btn')
const input = document.querySelector('input')
const list = document.querySelector('.habits-list')
const stats = document.querySelector('#stats')
const levelEl = document.querySelector('#level')
const xpBar = document.querySelector('#xp-bar')
const aboutBtn = document.querySelector('#about-btn')
const modal = document.querySelector('#modal')
const modalClose = document.querySelector('#modal-close')

aboutBtn.addEventListener('click', function() {
    modal.style.display = 'flex'
})

modalClose.addEventListener('click', function() {
    modal.style.display = 'none'
})

const modalCloseBtn = document.querySelector('#modal-close-btn')
modalCloseBtn.addEventListener('click', function() {
    modal.style.display = 'none'
})

const guideBtn = document.querySelector('#guide-btn')
const guideModal = document.querySelector('#guide-modal')
const guideModalClose = document.querySelector('#guide-modal-close')

guideBtn.addEventListener('click', function(){
    guideModal.style.display = 'flex'
})

guideModalClose.addEventListener('click', function(){
    guideModal.style.display = 'none'
})

function updateStats() {
    const total = habits.length
    const done = habits.filter(h => h.done).length
    stats.textContent = 'Выполнено: ' + done + ' из ' + total
}

function updateXp(){
    const done = habits.filter(h => h.done).length
    const xp = done * 10
    const level = Math.floor(xp / 50) + 1
    const xpInLevel = xp % 50
    const percent = (xpInLevel / 50) * 100
    levelEl.textContent = 'Уровень ' + level + ' - ' + xp + ' XP'
    if (level === 2 && !achievements.includes('level2')) {
        achievements.push('level2')
        localStorage.setItem('achievements', JSON.stringify(achievements))
        showAchievement('⚡ Уровень 2!')
    }
    xpBar.style.width =percent + '%'
}

function showAchievement(text) {
    const achievement = document.querySelector('#achievement')
    const achievementText = document.querySelector('#achievement-text')
    achievementText.textContent = text
    achievement.style.display = 'block'
    setTimeout(function(){
        achievement.style.display = 'none'
    }, 3000)
}

let habits = JSON.parse(localStorage.getItem('habits')) || []
let achievements = JSON.parse(localStorage.getItem('achievements')) || []

function createCard(habit) {
    const card = document.createElement('div')
    card.className = 'habits-card'

    const doneBtn = document.createElement('button')
    doneBtn.className = 'done-btn'
    doneBtn.textContent = '✔'

    const p = document.createElement('p')
    p.textContent = habit.text

    if (habit.done) {
        p.style.textDecoration = 'line-through'
        p.style.opacity = 0.5
        doneBtn.style.background = '#1a6a62'
        doneBtn.style.color = '#0f0f0f'
        card.style.background = '#0a0a0a'
        doneBtn.style.borderColor = '#2a8a82'
    }

    const deleteBtn = document.createElement('button')
    deleteBtn.className = 'delete-btn'
    deleteBtn.textContent = '✗'
    deleteBtn.style.background = '#5a0000'

    doneBtn.addEventListener('click', function() {
        habit.done = !habit.done
        p.style.textDecoration = habit.done ? 'line-through' : 'none'
        p.style.opacity = habit.done ? '0.5' : '1'
        doneBtn.style.background = habit.done ? '#1a6a62' : 'transparent'
        doneBtn.style.color = habit.done ? '#0f0f0f' : 'transparent'
        card.style.background = habit.done ? '#0a0a0a' : '#1a1a1a'
        doneBtn.style.borderColor = habit.done ? '#4ecdc4' : '#4ecdc4'
        deleteBtn.style.background = habit.done ? '#5a0000' : '#8b0000'
        localStorage.setItem('habits', JSON.stringify(habits))
        updateStats()
        updateXp()
        const done = habits.filter(h => h.done).length
        if (done === 3 && !achievements.includes('three')) {
            achievements.push('three')
            localStorage.setItem('achievements', JSON.stringify(achievements))
            showAchievement('🔥 На разогреве!')
        }
        if (done === 5 && !achievements.includes('five')) {
            achievements.push('five')
            localStorage.setItem('achievements', JSON.stringify(achievements))
        showAchievement('💪 Железная воля!')
        }
})

deleteBtn.addEventListener('click', function() {
    list.removeChild(card)
    updateStats()
    updateXp()
    habits = habits.filter(h => h.text !== habit.text)
    localStorage.setItem('habits', JSON.stringify(habits))
    updateStats()
    updateXp()
})

    card.appendChild(doneBtn)
    card.appendChild(p)
    card.appendChild(deleteBtn)
    list.appendChild(card)
}
button.addEventListener('click', function() {
    const text = input.value
    if (text === '') return
    const habit = {text: text, done: false}
    habits.push(habit)
    localStorage.setItem('habits', JSON.stringify(habits))
    createCard(habit)
    if (habits.length === 1 && !achievements.includes('first')) {
        achievements.push('first')
        localStorage.setItem('achievements', JSON.stringify(achievements))
        showAchievement('🥇 Первый шаг!')
    }
    updateStats()
    updateXp()
    input.value = ''
})

input.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        button.click()
    }
})

habits.forEach(function(habit) {
    createCard(habit)
})
updateStats()
updateXp()

document.addEventListener('DOMContentLoaded', function() {
const quotes = [
    "Маленькие шаги каждый день - большой путь за год.",
    "Дисциплина - это свобода.",
    "Не ищи мотивацию, строй привычки.",
    "Победи себя сегодня - завтра будет легче.",
    "Прогресс важнее совершенства."
];

function showRandomQuote() {
    const random = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote-text").textContent = "🔥 " + quotes[random];
}

showRandomQuote();
});

window.addEventListener('click', function(e) {
    if (e.target.classList.contains('modal')){
        e.target.style.display = 'none';
    }
});