
var http = require('http');
var server;

function btnStartServer_click() {
	var host = $('#txtHost').val();
	var port = $('#txtPort').val();
	var content = $('#txtContent').val();

	startServer(host, port, content);

	$('#btnStartServer').hide();
	$('#btnStopServer').show();
	$('#message').html('Server running at <a target="_blank" href="http://' + host + ':'
		+ port +'/">http://' + host + ':' + port +'/</a>').show();
	$('#txtHost').attr('readonly', 'readlony');
	$('#txtPort').attr('readonly', 'readlony');
	$('#txtContent').attr('readonly', 'readlony');
}

function btnStopServer_click() {
	stopServer();
	
	$('#btnStopServer').hide();
	$('#btnStartServer').show();
	$('#message').hide();
	$('#txtHost').removeAttr('readonly');
	$('#txtPort').removeAttr('readonly');
	$('#txtContent').removeAttr('readonly');
}

function startServer(host, port, content) {
	server = http.createServer((function(content) {
		return function (req, res) {
			res.writeHead(200, {'Content-Type': 'text/html'});
			res.end(content);
		};
	})(content));
	server.listen(port, host);
}

function stopServer() {
	server.close();
}