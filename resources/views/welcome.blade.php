<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="../js/ajax.js"></script>
        <script src="../js/fo.js"></script>
        <script src="../js/TesztKerdes.js"></script>
        <link href="../css/welcome.css" rel="stylesheet" type="text/css" />
        <title>Laravel</title>
    </head>
    <body class="antialiased">
        <header>

        </header>
        <section>
            <select class="kategoria"></select>
            <div class="tesztek">
                <div class="teszt">
                    <div class="kerdes">kerdes1</div>
                   {{-- <p class="kerdes">kerdes1</p>  --}}
                   <div class="valasztasok">
                        <button id="valasz" class="valasz1" type="button">v1</button>
                        <button id="valasz"  class="valasz2" type="button">v2</button>
                        <button id="valasz"  class="valasz3" type="button">v3</button>
                        <button id="valasz"  class="valasz4" type="button">v4</button>
                   </div>
                   
                </div>
                <div class="teszt">
                    <div class="kerdes">kerdes1</div>
                   {{-- <p class="kerdes">kerdes1</p>  --}}
                   <div class="valasztasok">
                        <button id="valasz" class="valasz1" type="button">v1</button>
                        <button id="valasz"  class="valasz2" type="button">v2</button>
                        <button id="valasz"  class="valasz3" type="button">v3</button>
                        <button id="valasz"  class="valasz4" type="button">v4</button>
                   </div>
                   
                </div>
            </div>
        </section>
        <footer>
            <div class="teszt">
                <div class="kerdes">kerdes1</div>
               {{-- <p class="kerdes">kerdes1</p>  --}}
               <div class="valasztasok">
                    <button id="valasz" class="valasz1" type="button">v1</button>
                    <button id="valasz"  class="valasz2" type="button">v2</button>
                    <button id="valasz"  class="valasz3" type="button">v3</button>
                    <button id="valasz"  class="valasz4" type="button">v4</button>
               </div>
               
            </div>

        </footer>
    </body>
</html>
