<?php

namespace App\Http\Controllers;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use app\Models\teszt;

class TesztController extends Controller
{
    public function index(){
        $tabla=teszt::join('kategorias','kategorias.id','teszts.id')
        ->select('*','ingatlans.id as ingatlanId');
        return response()->json($tabla->get());
    }
}
