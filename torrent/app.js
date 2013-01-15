// var torrentSearch = require('torrent-search'),
// 	torrent = torrentSearch.create();

// torrent.find('batman', console.log);

var Client = require('node-torrent'),
	client = new Client(),
	torrent = client.addTorrent('asd.torrent');

torrent.on('complete', function() {
    console.log('complete!');
    torrent.files.forEach(function(file) {
        var newPath = '/new/path/' + file.path;
        fs.rename(file.path, newPath);
        // while still seeding need to make sure file.path points to the right place
        file.path = newPath;
    });
});