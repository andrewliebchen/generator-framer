# Generator-Framer

A [Yeoman](http://yeoman.io) generator for [FramerJS](https://framer.com) project boilerplate.

## Set up

This generator is not registered on NPM. To use, you have to clone it locally and link it manually.

First, install Yeoman via NPM. This whole damn party runs on Yeoman:

```
npm i -g yo
```

Then, clone this repo:

```
git clone git@github.com:andrewliebchen/generator-framer.git
```

`cd` into the cloned repo and link the package:

```
npm link
```

The generator should be available globally on your system.

## Usage

To generate Framer boilerplate, `cd` to a parent directory for the prototype, then run...

```
yo framer [YOUR_PROTOTYPE_NAME]
```

...obviously, you'll want to give it your own project name. Boom, you've got yourself a scaffolded prototype.

## What's included

In the `app.coffee` (the main Framer file), you'll notice some helpful little bits.

* The device size is set to the "DesktopHD" artboard size in Sketch. It's the one I always use
* The default animation is quite a bit faster
* I've set up a `c` (for "config") object. Place all global configurations variables here.
* A `textStyle` for use with your `TextLayers`, to give you the system font (SF UI) out of the gate. Use it like this:

```
text = new TextLayer
text.props = _.assign {}, c.textStyle,
  text: 'Styled text'
```

ALSO!

* A handy color function for common FIG colors. For instance, if you'd like a layer with a background color of FIG blue:

```
button = new Layer
  backgroundColor: color 'blue'
```

The `color` function includes the FIG `light-` series palette, as well as `blue`, `blueAccent`, and others. NEATO!

## Questions?

Hit me up on Messenger.
