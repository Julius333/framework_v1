# Image Galary Enlarger Framework

Hello GitHub. I am a student at Fontys IMD and for our assignment we had to make a Javascript framework from scratch. This is my first attempt! With my framework I want to make it easy to have an image galery. You can insert images within the code. When hovering on the images, it will be displayed a lot larger in the centre of the screen.

## How To Install

You have to copy my CSS and JS folder (image folder is optional). Inside you HTML you have to refer to the css within the head tag like so:

```
<link rel="stylesheet" href="css/style.css">
```

And don't forget to make the Javascript link aswel (I recommend putting this script tag just above where your body closes)
```
<link rel="stylesheet" href="css/style.css">
```

## Examples

There are multiple visual options for the larger image displayer. You can easily change which visual effect you want by switching numbers of the function in your image tag inside your HTML. Change upDate1 and unDo1 to upDate2 and unDo2. (make sure the numbers match)

```
<img class="preview" alt="Hover text (optional)" src="images/vb1.png" onmouseover="upDate1(this)" onmouseout="unDo1()">
```

## Compatibility

I have tested my framework on a Macbook Pro on the following browsers: Chrome, Safari, Opera, Firefox. All of these browsers are 100% compatible!


## Demo

A Demo can be seen on my portfolio: 
* [JuliusNuijten.nl](http://juliusnuijten.nl/eigenframework.html) - My Portfolio (This is an edited version of my framework. The basic version can be seen in demo.html)
