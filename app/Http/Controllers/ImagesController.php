<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Intervention\Image\Facades\Image;

class ImagesController extends Controller {

    public function profilePicture($person)
    {
    
        $img = Image::make('public/profile/'.$person.'.png')->resize(300, 200);

    return $img->response('png');;
    }
}