$("#salary-slider").noUiSlider({
	range: {
		'min': [ 0 ],
		'max': [ 50 ]
	},
	start: [ 10 ],
	serialization: {
		lower: [
		
			new Link({	
				target: $("#salary")
			})

		]	
	}
});
