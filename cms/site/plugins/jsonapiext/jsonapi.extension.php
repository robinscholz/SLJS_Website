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

			// Collections
			foreach($data as $collection) {

				// Images
				$n = 0;
				$images = array();
				foreach($collection->imgselection()->yaml() as $img) {
					$n++;
					$image = $inventory->image($img);
					$imageRes = $image->resize(3000, 3000, 80);
					if($image) {
						$images[$n] = array(
							"url" => $imageRes->url(), 
							"num" => (string)$n,
							"uri" => $image->uri(),
							"orientation" => $image->orientation(),
							"ratio" => $image->ratio(),
							"imgtitle" => (string)$image->imgtitle(),
							"captioncolor" => (string)$image->captioncolor()

						);
					};
					$imagecount = $n;
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
					'imagecount' => $imagecount,
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

			//Residencies
			$n = 0;
			$residencies = array();
			foreach($contact->residencies()->toStructure() as $entry) {
				$n++;
				$residencies[$n] = array(
					"year" => (string)$entry->year(), 
					"gallery" => (string)$entry->gallery(),
					"city" => (string)$entry->city(),
				);
			};

			$json['1-contact'] = array(
				'phone' => (string)$contact->phone(),
				'email' => (string)$contact->mail(),
				'city' => (string)$contact->city(),
				'education' => $education,
				'groupshows' => $groupshows,
				'residencies' => $residencies,
				'title' => (string)site()->title(),
				'about' => (string)site()->text(),
				'abouthtml' => (string)site()->text()->kirbytext(),
				'image' => $inventory->images()->shuffle()->first()->url(),
				'photo' => $contact->photography()->split(',')
			);

			$json['3-misc']["total"] = $data->count();

			return json_encode($json);
		}
	],
]);
