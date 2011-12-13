var bouncy = require('bouncy');

bouncy(function (req, bounce) {
    if (req.headers.host === 'eightbitbeats.com') {
        bounce(7777);
    }
    else if (req.headers.host === 'grooveclock.com') {
        bounce(8000)
    }
    else if (req.headers.host === 'classofkhan.com') {
        bounce(3000)
    }
    else if (req.headers.host === 'keepitrealtime.com') {
		bounce(3001)
	}
}).listen(80);
