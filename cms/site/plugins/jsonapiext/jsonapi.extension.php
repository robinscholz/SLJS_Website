<?php

jsonapi()->register([
	[
		'method' => 'GET',
		'pattern' => "data",
		'action' => function () {

			$collections = page("collections");
			$inventory = page("inventory");
			$data = $collections->children()->visible();
			$studio = page("studio");
			$json = array();

			// About


			// Collections
			foreach($data as $collection) {

				// Images
				$n = 0;
				$images = array();
				foreach($collection->imgselection()->yaml() as $img) {
					$n++;
					$image = $inventory->image($img);
					if($image) {
						$images[$n] = array(
							"url" => $image->url(), 
							"num" => (string)$n,
							"orientation" => $image->orientation(),
							"imgtitle" => (string)$image->imgtitle(),
							"caption" => (string)$image->caption()
						);
					};
				};

				// Thumbs
				$n = 0;
				$thumbs = array();
				foreach($collection->imgselection()->yaml() as $img) {
					$n++;
					$image = $inventory->image($img);
					if($image) {
						$thumbs[$n] = array(
							"url" => $image->height('550')->url(), 
							"num" => (string)$n,
							"orientation" => $image->orientation()
						);
					};
				};

				$json['2-collections'][$collection->num()] = array(
					'url' => (string)$collection->url(),
					'uri' => (string)$collection->uri(),
					'number' => (string)$collection->num(),
					'title' => (string)$collection->title(),
					'images' => $images,
					'thumbs' => $thumbs				
				);
			};

			$json['3-misc']["total"] = $data->count();

			return json_encode($json);
		}
	],
]);
