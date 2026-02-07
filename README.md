## Menu Page (DOM Manipulation)

A small JavaScript project focused on updating the DOM dynamically without using HTML templates. The menu content is created and rendered entirely through JavaScript.

## Overview

This module generates a simple restaurant menu by:

* Clearing existing page content
* Creating new DOM elements programmatically
* Rendering a list of meals from a JavaScript data structure

It is intended as a learning exercise for understanding how JavaScript interacts directly with the DOM.

## How It Works

* The `menu()` function selects the main content container and resets it
* A header element is created and appended
* Menu items are defined as an array of objects
* Each item is rendered dynamically using `document.createElement`

All visible content is produced at runtime rather than written in static HTML.

## Key Concepts

* DOM selection and manipulation
* Dynamic element creation
* Data-driven rendering
* ES module export (`export default`)
* Webpack
