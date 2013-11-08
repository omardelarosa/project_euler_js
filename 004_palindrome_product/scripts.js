function pal(){
	var b = 997799;
	for(var x = 0; x < 10; x++) {
		level1 = b - (x * 100001)
		for(var y = 0; y < 10; y++) {
			level2 = level1 - (y * 10010)
			for(var z = 0; z < 10; z++) {
				level3 = level2 - (z * 1100)
				for(var i = 100; i < 1000; i++) {
					if (level3 / i > 100 && level3 % i === 0 && level3 / i < 1000){
						return [level3, i];
					}
				}
			}
		}
	}
}