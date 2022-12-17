// get card
const doc = window.document
const cardContainer = doc.getElementById('container')
const card = doc.getElementById('card')

cardContainer.addEventListener('mousemove', (e) => {
    let treshold = 20

    const rect = cardContainer.getBoundingClientRect()
    const { x, y } = rect
    const half = {
        w: rect.width / 2,
        h: rect.height / 2
    }

    const posX = (e.clientY - y - (half.h)) / treshold * -1
    const posY = (e.clientX - x - (half.w)) / treshold

    console.log(`
        card position :
        x : ${x},
        y : ${y},
        -
        card dimension :
        width (relatif to 0,0) : ${rect.width}
        heigth : ${y + rect.height}
        half width : ${half.w}
        half height : ${half.h}
        -
        mouse position :
        x : ${e.clientX},
        y : ${e.clientY}
        -
        rotation: 
        x : ${posX},
        y : ${posY},
    `)

    console.log(`
        calculation:
        ${e.clientY} - ${y} = ${e.clientY - y}
        ${e.clientY - y} - ${half.h} = ${e.clientY - y - half.h}
        ${e.clientY - y - half.h} / ${treshold} = ${posX}
    `)

    card.style.transform = `rotateY(${posY}deg) rotateX(${posX}deg)`
    // if (posX <= half.w && posY >= half.h || posY <= half.h) {
    //     card.style.transform = `rotateX(${posX / 10}deg) rotateY(-${y / 10}deg)`
    //     return
    // } else if (posY >= half.h) {
    //     card.style.transform = `rotateX(-${posX / 10}deg) rotateY(${y / 10}deg)`
    //     return
    // } else {
    //     card.style.transform = `rotateX(${posX / 10}deg) rotateY(${y / 10}deg)`
    // }
})