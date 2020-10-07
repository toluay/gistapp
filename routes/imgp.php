<?php

// Route::get('/', function () {
//     return 'Admin!';
// });
Route::get('profile/{person}', 'ImagesController@profilePicture');