<?php

namespace App\Http\Controllers;
use App\Http\Controllers\Controller;

use Illuminate\Http\Request;
use app\Models\kategoria;

class KategoriaController extends Controller
{
    public function index(){
        $tabla=kategoria::select("id","nev");
        return response()->json($tabla->get());
    }
   
}
