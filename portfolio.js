document.querySelector('.wing').style.display='none';
document.querySelector('.hamberger').addEventListener("click",()=>{
    document.querySelector('.sidebar').classList.toggle('sidebargo')
    if(document.querySelector('.sidebar').classList.contains('sidebargo')){
        document.querySelector('.ham').style.display="inline"
        document.querySelector('.wing').style.display="none"
    }
    else{
        document.querySelector('.ham').style.display="none"
        setTimeout(()=>{
            document.querySelector('.wing').style.display="inline"

        },400)
    }
})
