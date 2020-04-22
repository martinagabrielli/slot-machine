const SlotMachineFactory = function(element) {
    let root = null
    let container = null
    const items = ["apple", "banana", "kiwi", "pineapple", "strawberry", "watermelon", "avocado","lemon"]
    let firstSlot = null
    let secondSlot = null
    let thirdSlot = null
    let playBtn = null
    let slotsWrap = null
    let itemsWrap = null
    let result = null

    let play = () => {
        result.innerHTML = ""

        let randomFirst = items[Math.floor(Math.random() * items.length)];
        let randomSecond = items[Math.floor(Math.random() * items.length)];
        let randomThird = items[Math.floor(Math.random() * items.length)];

        firstSlot.className = `first-slot ${randomFirst}`
        secondSlot.className = `second-slot ${randomSecond}`
        thirdSlot.className = `third-slot ${randomThird}`

        if(randomFirst === randomSecond && randomSecond === randomThird) {
            result.innerHTML = "You Won!"
        }
    }

    if(element != "") {
        root = document.getElementById(element)
        container = document.getElementById("container")
        root.className = "slot-machine"
        slotsWrap = document.createElement("div")
        slotsWrap.className = "slots-wrap"
        itemsWrap = document.createElement("div")
        itemsWrap.className = "items-wrap"
        firstSlot = document.createElement("div")
        firstSlot.className = "first-slot"
        secondSlot = document.createElement("div")
        secondSlot.className = "second-slot"
        thirdSlot = document.createElement("div")
        thirdSlot.className = "third-slot"
        playBtn = document.createElement("button")
        playBtn.id = "play-btn"
        playBtn.innerHTML = "Play"
        playBtn.onclick = () => play()
        result = document.createElement("div")
        result.id = "result"
        root.appendChild(itemsWrap)
        container.appendChild(playBtn)
        itemsWrap.appendChild(slotsWrap)
        container.appendChild(result)
        slotsWrap.appendChild(firstSlot)
        slotsWrap.appendChild(secondSlot)
        slotsWrap.appendChild(thirdSlot)
        itemsWrap.appendChild(slotsWrap)
    }

    Object.defineProperty(this, "play", {
        get: () => play
    })
}