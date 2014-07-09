webkit-web-server
=================

Simple webserver using node-webkit.

You need to install [node-webkit](https://github.com/rogerwang/node-webkit) first.

Then you need to install [bower](http://bower.io/) to fetch dependencies (Bootstrap and jQuery) with the the command:

```
bower install
```

To build the application, simple zip all files to _webkit-web-server.nw_ (for example) :

```
zip webkit-web-server.nw *
```

Then open the file with the _node-webkit_ executable, e.g.: `nodewebkit webkit-web-server.nw`