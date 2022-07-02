let form = document.querySelector('.form'),
    input = document.querySelector('.input'),
    forms = {},
    datas = [];
const Save = () => {
    datas = JSON.parse(atob(localStorage.getItem('data'))) || []
    // console.log(typeof atob(localStorage.getItem('data')));
    // cons ole.log(JSON.parse(atob(localStorage.getItem('data'))));
}
if (localStorage.getItem('data')) {
    datas = JSON.parse(atob(localStorage.getItem('data'))) || []
    console.log(datas);
}
form.addEventListener('submit', (e) => {
    e.preventDefault()
    if (localStorage.getItem('data')) {
        localStorage.setItem('data', btoa(JSON.stringify([...datas, { ...forms, value: input.value }])))
        Save()
    } else {
        localStorage.setItem('data', btoa(JSON.stringify([{ ...forms, value: input.value }])))
        Save()
    }
    input.value = ''
    cardsFun()
})





const cards = document.querySelector('.cards');

const cardsFun = () => {
    cards.innerHTML = ''
    datas.forEach((val, i) => {
        cards.innerHTML += `
        <div class='close'>
            <h1>${val.value}</h1>
            <button onclick='del(${i})'>x</button>
        </div>
        `
    })
}
cardsFun()

const del = (i) => {
    // console.log(i);
    console.log(datas[i].value);
    localStorage.setItem('data', btoa(JSON.stringify(datas.filter((val, index) => index !== i))))
    Save()
    cardsFun()
}   