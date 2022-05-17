$(function () {
    console.log("hali");
    const myAjax = new MyAjax();
    let apitesztek= "/api/teszt";
    let apikategoriak= "/api/kategoria";
    myAjax.adatbeolvas(apitesztek, false, teszt);
    function teszt(tesztek) {
        console.log(ingatlanok);
        const szuloElem = $(".tesztek");
        const sablonElem = $("footer .teszt ");
        sablonElem.show();
        szuloElem.empty();
        tesztek.forEach(function (elem) {
            let node = sablonElem.clone().appendTo(szuloElem);
            new Ingatlan(node, elem);
        });
        sablonElem.hide();
        $("footer .szemely").hide();
    }
    myAjax.adatbeolvas(apikategoriak, false, kategoriaValasztas);
    function kategoriaValasztas(kategoriak){
        let seged=['<option value="1">aaa</option>'];
        for (let index = 0; index < kategoriak.length; index++) {
            seged+='<option value="'+kategoriak[index].id+'">'+kategoriak[index].kategorianev+'</option>';
        }
        $(".kategoria").html(seged)
    }
    /* function egyszerKattintas{

    } */
    $('.valasz2').disabled = "true";
    console.log($('.valasz1'));
    $('.valasz1').style.backgroundColor = 'salmon';
    $('.valasz2').style.color = 'white';
    $(window).on('kivalaszt1', (event) => {
        console.log("kivalaszt1");
        console.log();
        $('.valasz2').disabled = "true";
      });
    
    
});