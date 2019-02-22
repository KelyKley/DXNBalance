
let products = [{
    name: "DXN Vita Cafe",
    price: 63,
    description: "20 packs x 21 gr",
    precioVenta: 95,
    puntoValor: 6.20,
    img: "img/vitaCafe.png"
},
{
    name: "DXN Lingzhi Tea Latte",
    price: 63,
    description: "12 packs x 30 gr",
    precioVenta: 95,
    puntoValor: 7,
    img: "img/cocozhi.png"

},
{
    name: "DXN White Coffe Zhino",
    price: 63,
    description: "12 packs x 28 gr",
    precioVenta: 95,
    puntoValor:7,
    img: "img/creamCafe.png"
},
{
    name: "DXN Linzhi Coffe 3 en 1",
    price: 50,
    description: "20 packs x 21 gr",
    precioVenta: 75,
    puntoValor: 4.6,
    img: "img/cafe3en1.png"
}
];


 for (let i = 0; i < products.length; i++){

    let tableHTML = `
    <div class="card cards-grandes col-md-3 col-sm-12" >
  <img class="card-img-top" src=${products[i].img} alt="Cafe">
  <div class="card-body">
    <h6 class="card-title font-weight-bold">${products[i].name}</h6>
    <label class="card-text" id="display">0</label>
  </div>
 
  <div id="accordion">

  <div class="card">
    <div class="card-header">
      <a class="card-link font-weight-bold" data-toggle="collapse" href="#collapseOne${i}">
        Detalles
      </a>
    </div>
    <div id="collapseOne${i}" class="collapse" data-parent="#accordion">
      <div class="card-body">
      <ul class="list-group list-group-flush">
      <li class="list-group-item">${products[i].description}</li>
      <li class="list-group-item">Precio Distribuidor: S/ ${products[i].price}.00</li>
      <li class="list-group-item">Precio Menudeo: S/ ${products[i].precioVenta}.00</li>
      <li class="list-group-item">Punto Valor: ${products[i].puntoValor}</li>
    </ul>
      </div>
    </div>
  </div>
  </div>

  <div class="row card-body">
    <button id="disminuye" class="col btn btn-danger btn-block">Eliminar</button>
    <button id="incrementa" class="col btn btn-primary">Agregar</button>
  </div>
</div>`

$('#cardsCafe').append(tableHTML)
 }

