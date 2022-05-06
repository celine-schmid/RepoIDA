let mouse = []
let max = 500

document.onmousemove = function(e) {
    let pos_x = e.clientX
    let pos_y = e.clientY

    //console.log(pos_x, pos_y)

    let object = { x: pos_x, y: pos_y }
        //     mouse.push(object)
        //     console.log(mouse)

    if (mouse.length < max) { //damit nicht unendlich daten gesammelt werden
        mouse.push(object)
    } else { console.log('too many data points') }
    console.log(mouse)

}

let pointer = document.getElementById('pointer')
pointer.style.position = 'fixed'
console.log(pointer)

//animate our collected data
let index = 0
window.requestAnimationFrame(animate)

function animate() {
    window.requestAnimationFrame(animate) //unendlicher loop, aber memory wird gelöscht

    // console.log(mouse[index])
    // console.log(index)
    if (mouse.length > 0) {



        pointer.style.left = mouse[index].x + 'px'
        pointer.style.top = mouse[index].y + 'px'
    }

    index++

    if (index >= mouse.length) {
        index = 0
    }

}