class Billete
{
    constructor(v, c){
        this.valor = v;
        this.cantidad = c;
    }
}


function entregarDinero()
{
    var t = document.getElementById("number");
    dinero = parseInt(t.value);
    for(var bi of caja)
    {
        if(dinero > 0)
        {
            div = Math.floor(dinero / bi.valor);
            
            if(div > bi.cantidad)
            {
                papeles = bi.cantidad;
            }
            else 
            {
                papeles = div;
            }
            entregado.push( new Billete(bi.valor, papeles) );
            dinero = dinero - (bi.valor * papeles);
        }
    }
    if(dinero > 0)
        {
            resultado.innerHTML = "<p>I'm a poor ATM :c</p>";
        }
        else 
        {
            for(var e of entregado)
            {
                resultado.innerHTML =  resultado.innerHTML + "<p>" + e.cantidad + " $" + e.valor + " dollar bills" + "</p>" + "<br>";
            }
        }
    }
    
    var caja = [];
    var entregado = [];
    caja.push( new Billete(50, 3) );
    caja.push( new Billete(20, 2) );
    caja.push( new Billete(10, 2) );
    var dinero = 1000;
    var div = 0;
    var papeles = 0;
    
var resultado = document.getElementById("resultado")
var b = document.getElementById("withdraw");
b.addEventListener("click", entregarDinero);
