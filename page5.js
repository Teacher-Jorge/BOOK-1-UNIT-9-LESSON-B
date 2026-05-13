const play = document.getElementById('play')

const word5 = document.getElementById('word5')

const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const input3 = document.getElementById('input3')
const input4 = document.getElementById('input4')

play.addEventListener('click', function() {
    const video = document.getElementById('video').play()

})

input1.addEventListener('keyup', (e) => {
    if(input1.value === "Do") {
        input1.style.color = 'green'
        const audio = document.getElementById('right')
        audio.play()
        document.getElementById('input2').focus()
    }
})

input2.addEventListener('keyup', (e) => {
    if(input2.value === "like") {
        word5.style.backgroundColor = 'lime'
        word5.style.color = 'red'
        word5.style.boxShadow = 'none'
        input2.style.color = 'green'
        const audio = document.getElementById('right')
        audio.play()
        document.getElementById('input3').focus()
    }
})

input3.addEventListener('keyup', (e) => {
    if(input3.value === "Yes" || input3.value === "No") {
        input3.style.color = 'green'
        const audio = document.getElementById('right')
        audio.play()
        document.getElementById('input4').focus()
    }
})

input4.addEventListener('keyup', (e) => {
    if(input4.value === "do" || input4.value === "don't" || input4.value === "dont") {
        input4.style.color = 'green'
        const audio = document.getElementById('right')
        audio.play()
        const next = document.getElementById('next')
        next.style.visibility = 'visible'
    }
})








