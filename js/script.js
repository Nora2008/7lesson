const second = document.querySelector('.s')
const minutes = document.querySelector('.m')
const hours = document.querySelector('.h')
const hoursBottom = document.querySelector('.hours')
const minutesBottom = document.querySelector('.minutes')




function clock() {
    let time = new Date()
    let sec = time.getSeconds() * 6
    let min = time.getMinutes() * 6
    let hour = time.getHours() * 30

    second.style = `transform: rotate(${sec}deg)`
    minutes.style = `transform: rotate(${min}deg)`
    hours.style = `transform: rotate(${hour + (min / 12)}deg)`
    setTimeout(() => {
        clock()
    }, 1000); 
}
clock()






function watch() {
    let mnt = time.getMinutes()
    if (mnt < 10 || mnt == 0 ) {
        mnt = '0' + mnt
    } else {
        mnt = mnt
    }
    if (hos < 10 || hos ==0) { 
        hos = '0' + hos
    } else {
        hos = hos
    }
    hoursBottom.innerText = hos
    minutesBottom.innerText = mnt
    
    let time = new Date()
    let hos = time.getHours()


    setTimeout(() => {
        watch()
    }, 1000);
    
}
watch()

