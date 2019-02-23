
let products = [{
    name: "DXN Vita Cafe",
    price: 63,
    description: "20 packs x 21 gr",
    precioVenta: 95,
    puntoValor: 6.20,
    img: "img/vitacafe.jpg"
},
{
    name: "DXN Lingzhi Tea Latte",
    price: 63,
    description: "12 packs x 30 gr",
    precioVenta: 95,
    puntoValor: 7,
    img: "img/tealatte.jpg"

},
{
    name: "DXN White Coffe Zhino",
    price: 63,
    description: "12 packs x 28 gr",
    precioVenta: 95,
    puntoValor:7,
    img: "img/whiteCoffeZhino.png"
},
{
    name: "DXN Linzhi Coffe 3 en 1",
    price: 50,
    description: "20 packs x 21 gr",
    precioVenta: 75,
    puntoValor: 4.60,
    img: "img/3in1.jpg"
},
{
    name: "DXN Spica Tea",
    price: 50,
    description: "20 packs x 5 gr",
    precioVenta: 75,
    puntoValor: 5.50,
    img: "img/spica_tea.jpg"
},
{
    name: "DXN Linzhi Black Coffe",
    price: 50,
    description: "20 packs x 4.5 gr",
    precioVenta: 75,
    puntoValor: 4.6,
    img: "img/blackCoffe.png"
},
{
    name: "DXN Cocozhi",
    price: 60,
    description: "20 packs x 32 gr",
    precioVenta: 90,
    puntoValor: 6,
    img: "img/cocozhi.jpg"
},
{
    name: "DXN Spirulina Cereal",
    price: 111,
    description: "30 packs x 30 gr",
    precioVenta: 167,
    puntoValor: 15.6,
    img: "img/spirulina_cereal.jpg"
},
{
    name: "DXN Zhi Mocha",
    price: 61,
    description: "20 packs x 21 gr",
    precioVenta: 92,
    puntoValor: 7,
    img: "img/zhimocha.jpg"
},
{
    name: "DXN Zhi Mint Plus",
    price: 107,
    description: "12 packs x 25 gr",
    precioVenta: 161,
    puntoValor: 12,
    img: "img/zhimint.jpg"
},
{
    name: "DXN Zhi Cafe Classic",
    price: 52,
    description: "20 packs x 20 gr",
    precioVenta: 78,
    puntoValor: 5.50,
    img: "img/zhicafe.jpg"
},
{
    name: "DXN Cordyceps Cereal",
    price: 126,
    description: "20 packs x 30 gr",
    precioVenta: 189,
    puntoValor: 19,
    img: "img/cordy_cereal.jpg"
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

