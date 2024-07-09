let search = document.querySelector(".searchbar")

document.querySelector("#searchicon").onclick = () => {
    searchbar.classlist.toggle('active');
    favourite.classlist.remove('active');
   checkout.classlist.remove('active');
    login.classlist.remove('active');
}



let favourite = document.querySelector('.favourite');

document.querySelector('#favourite').onclick = () => {
    favourite.classlist.toggle('active')
   search.classlist.remove('active');
    checkout.classlist.remove('active');
}

let checkout = document.querySelector('.checkout');
document.querySelector('#checkout').onclick = () =>{
    checkout.classlist.toggle('active');
    search.classlist.remove('active');
    login.classlist.remove('active');
    favourite.classlist.remove('active');
}


let login = document.querySelector('.login');
document.querySelector('#login').onclick = () =>{
    login.classlist.toggle('login');
}
window.onscroll = () => {
    search.classlist.remove('active');
   favourite.classlist.remove('active');
   checkout.classlist.remove('active');
    login.classlist.remove('active');
    
}