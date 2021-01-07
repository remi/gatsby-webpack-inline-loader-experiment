# Gatsby.js + Webpack inline loader experiment

### Build the project

```
$ git clone https://github.com/remi/gatsby-webpack-inline-loader-experiment.git
$ cd gatsby-webpack-inline-loader-experiment
$ npm install
$ gatsby build
```

### The project is built, let’s take a look at the two `<img>` elements

```
$ cat public/index.html
…
<p>Image in base64:</p>
<img src="data:image/png;base64,…"/>
<p>Image loaded with file-loader:</p>
<img src="/c1be617a6588b4607ae1f40e58258a5f.png" width="32" alt=""/>
…
```

### Great, let’s take a look at that PNG file now…

```
$ cat public/c1be617a6588b4607ae1f40e58258a5f.png
module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA5NpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNU…"
```

### What?
