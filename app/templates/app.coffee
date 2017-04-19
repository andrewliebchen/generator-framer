{ color } = require 'fb-color'

Framer.Device.customize
	screenWidth: 1440
	screenHeight: 1024

Framer.Defaults.Animation =
	curve: Spring(damping: 1)
	time: 0.3

Canvas.backgroundColor = color 'light30'

c =
	textStyle:
		fontFamily: '-apple-system, BlinkMacSystemFont'
		fontSize: 12
		color: color 'light50'

document.body.style.cursor = 'auto'
