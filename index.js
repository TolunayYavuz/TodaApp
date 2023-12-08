
const btn = document.getElementById('btn');
const box = document.getElementById('box');


let veri = [];

const cards = (veris) => {
    veris.forEach((deneme) => {
        var html = `<div class="card me-2 mt-2" style="width: 14rem;">
        <div class="card-body ">
          <h5 class="card-title">${deneme.Names}</h5>
          <p class="card-text">${deneme.Email}</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>`;
        
      box.insertAdjacentHTML("beforeend",html);
    })

 
    // if(veris.lenght > 10){
    //     console.log('Fazla Değer Girilmez')
    // }
}



btn.addEventListener("click",() => {
   
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    
    let data = [
        {
            Names:name,
            Email:email,

        }
    ]
     veri.push(data);
     cards(data);
  

})