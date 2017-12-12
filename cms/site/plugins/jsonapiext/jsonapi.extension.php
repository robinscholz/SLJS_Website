<?php

jsonapi()->register([
	[
		'method' => 'GET',
		'pattern' => "data",
		'action' => function () {

			$collections = page("collections");
			$inventory = page("inventory");
			$data = $collections->children()->visible();
			$contact = page("contact");
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
							"uri" => $image->uri(),
							"orientation" => $image->orientation(),
							"ratio" => $image->ratio(),
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

				$json['2-collections'][$collection->uid()] = array(
					'url' => (string)$collection->url(),
					'uri' => (string)$collection->uri(),
					'uid' => (string)$collection->uid(),
					'number' => (string)$collection->num(),
					'title' => (string)$collection->title(),
					'images' => $images,
					'thumbs' => $thumbs				
				);
			};


			//Education
			$n = 0;
			$education = array();
			foreach($contact->education()->toStructure() as $entry) {
				$n++;
				$education[$n] = array(
					"from" => (string)$entry->from(), 
					"until" => (string)$entry->until(),
					"school" => (string)$entry->school(),
					"city" => (string)$entry->city(),
				);
			};

			//Groupshows
			$n = 0;
			$groupshows = array();
			foreach($contact->groupshows()->toStructure() as $entry) {
				$n++;
				$groupshows[$n] = array(
					"year" => (string)$entry->year(), 
					"showtitle" => (string)$entry->showtitle(),
					"gallery" => (string)$entry->gallery(),
					"city" => (string)$entry->city(),
				);
			};

			$json['2-contact'] = array(
				'phone' => (string)$contact->phone(),
				'email' => (string)$contact->mail(),
				'education' => $education,
				'groupshows' => $groupshows
			);

			$json['3-misc']["total"] = $data->count();

			return json_encode($json);
		}
	],
]);
