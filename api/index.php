<?php

$file = json_decode(file_get_contents("json/tarot_card_data.json"));

$cards = $file->cards;

// Attach image url to each card
foreach($cards as $card) {
  $card->imageURL = "https://indiealchemy.com/plateau-tarot/api/images/".$card->name.".jpg";
}

// Apply Fisher-Yates shuffle to deck
for($i = 0; $i < sizeof($cards); ++$i) {
   $r = rand(0, $i);
   $tmp = $cards[$i];
   $cards[$i] = $cards[$r];
   $cards[$r] = $tmp;  
}

$file->cards = $cards;

echo json_encode($file);

?>