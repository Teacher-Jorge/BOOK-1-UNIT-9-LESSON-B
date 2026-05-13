const play = document.getElementById('play')

const word4 = document.getElementById('word4')

const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const input3 = document.getElementById('input3')
const input4 = document.getElementById('input4')

play.addEventListener('click', function() {
    const video = document.getElementById('video').play()

})

input1.addEventListener('keyup', (e) => {
    if(input1.value === "Can") {
        input1.style.color = 'green'
        const audio = document.getElementById('right')
        audio.play()
        document.getElementById('input2').focus()
    }
})

input2.addEventListener('keyup', (e) => {
    if(input2.value === "swim") {
        word4.style.backgroundColor = 'lime'
        word4.style.color = 'red'
        word4.style.boxShadow = 'none'
        input2.style.color = 'green'
        const audio = document.getElementById('right')
        audio.play()
        document.getElementById('input3').focus()
    }
})

input3.addEventListener('keyup', (e) => {
    if(input3.value === "Yes" || input3.value === "No") {
        word2.style.backgroundColor = 'lime'
        word2.style.color = 'red'
        word2.style.boxShadow = 'none'
        input3.style.color = 'green'
        const audio = document.getElementById('right')
        audio.play()
        document.getElementById('input4').focus()
    }
})

input4.addEventListener('keyup', (e) => {
    if(input4.value === "can" || input4.value === "can't" || input4.value === "cant") {
        input4.style.color = 'green'
        const audio = document.getElementById('right')
        audio.play()
        const next = document.getElementById('next')
        next.style.visibility = 'visible'
    }
})








