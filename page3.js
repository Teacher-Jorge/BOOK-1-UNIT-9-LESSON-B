const play = document.getElementById('play')

const word3 = document.getElementById('word3')

const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const input3 = document.getElementById('input3')
const input4 = document.getElementById('input4')

play.addEventListener('click', function() {
    const video = document.getElementById('video').play()

})

input1.addEventListener('keyup', (e) => {
    if(input1.value === "Does") {
        input1.style.color = 'green'
        const audio = document.getElementById('right')
        audio.play()
        document.getElementById('input2').focus()
    }
})

input2.addEventListener('keyup', (e) => {
    if(input2.value === "text") {
        word3.style.backgroundColor = 'lime'
        word3.style.color = 'red'
        word3.style.boxShadow = 'none'
        input2.style.color = 'green'
        const audio = document.getElementById('right')
        audio.play()
        document.getElementById('input3').focus()
    }
})

input3.addEventListener('keyup', (e) => {
    if(input3.value === "Yes" || input3.value === "Yes") {
        input3.style.color = 'green'
        const audio = document.getElementById('right')
        audio.play()
        document.getElementById('input4').focus()
    }
})

input4.addEventListener('keyup', (e) => {
    if(input4.value === "does" || input4.value === "does" || input4.value === "does") {
        input4.style.color = 'green'
        const audio = document.getElementById('right')
        audio.play()
        const next = document.getElementById('next')
        next.style.visibility = 'visible'
    }
})








