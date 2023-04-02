function getData (){
    const name = document.getElementById('name').value
    localStorage.setItem('name', JSON.stringify(name))
    
    const surName = document.getElementById('surname').value
    localStorage.setItem('surname', JSON.stringify(surName))
    
    const dateOfBirth = document.getElementById('age').value
    localStorage.setItem('age', JSON.stringify(dateOfBirth))
    
    const pol = document.getElementById('pol').value
    localStorage.setItem('pol', JSON.stringify(pol))    
}
document.getElementById('btn').addEventListener('click', () => {
    getData()
})