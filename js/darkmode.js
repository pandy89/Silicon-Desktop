const darkmodeSwitch = document.querySelector('#darkmode-switch')
const hasDarkmode = localStorage.getItem('darkmode')

if(hasDarkmode == null){
    if(window.matchMedia('(prefers-color-scheme: dark)').matches){
        enableDarkMode()
    }
    else{
        disableDarkmode()
    }
} else if(hasDarkmode === 'on') {
    enableDarkMode()
} else if(hasDarkmode === 'off'){
    disableDarkmode()
}

darkmodeSwitch.addEventListener('change', () => {
    if(darkmodeSwitch.checked){
        enableDarkMode()
        localStorage.setItem('darkmode', 'on')
    }
    else{
        disableDarkmode()
        localStorage.setItem('darkmode', 'off')
    }
})

function enableDarkMode(){
    darkmodeSwitch.checked = true
    document.documentElement.classList.add('dark')
}
function disableDarkmode(){
    darkmodeSwitch.checked = false
    document.documentElement.classList.remove('dark')

}

