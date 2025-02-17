let form=document.getElementById("reg-form")
form.addEventListener("submit",(e)=>{
    let regdNo=document.getElementById("regd_no")
    if (regdNo.value.toString().length!==10){
        alert("Invalid Registration number")
        e.preventDefault()
        return
    }
})