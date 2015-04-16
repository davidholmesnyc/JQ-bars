## JQ Bars 
		
### A Handlebars wrapper for jQuery

I wrote this wrapper because I use jQuery and Handlebars in a lot of my personal projects and sometimes in enterprise development. 

The main thing I like about this wrapper is that it cache's the template markup that way you can always update the template.

## Example
Requirements 
```html
<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>

<script src="//cdnjs.cloudflare.com/ajax/libs/handlebars.js/3.0.1/handlebars.min.js"></script>
```

HTML
```html
	<div id="test">
		<h1>{{title}}</h1>
		<div class="body">
			{{body}}
		</div>
	</div>
```


Javascript
```javascript 
$("#test").handlebars({title: "My New Post", body: "This is my first post!"})

setTimeout(function(){
	$("#test").handlebars({title: "My Updated Post", body: "This is my first UPDATED post!"})
},2000)
```