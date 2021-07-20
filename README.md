# Vue 3 QuickStart

Simple SPA-like Vue 3 template for quick start. 
No CLI/Webpack/Node required.

Contains 4 sample pages, and 4 components. Following that pattern, you can add as many as you want. Every page or component is in separate file. Also, this starter template contains simple routing and simple store.

Online demo: http://vue3quickstart.rf.gd/


### Prerequisites

None.


### Installation

Just copy files and run ;)


### Upgrade Vue version

Find Vue 3 CDN link in index.html and change it to new version.
Then check that everything is working properly, and if it does, you successfully upgraded ;)

This is development build, make sure to use the production build (vue.global.prod.js) when deploying for production.


## Project Description

## Main files

Index.html loads app.js which is main Vue application. Then it loads pages from ./pages folder. 

In app.js are core functions for store and URL management (usually you don't need to modify this). At the end is html template with navigation and main content.

Components are located in ./components folder. You can add them as many as you want and load in pages.


## Routing

As you change pages, URL changes as well. Also works browser back button. Routes are simply page names. No option for custom routes, for that you must use specialized router. For this simple router to work, .htaccess file is required (for Apache web server). 


## Store

Template include simple store where you can declare global variables that are visible in entire application. On new page, just reference store and you can use that global variables. When variable begins with dollar sign (like in PHP), it is automatically saved in local storage. So, if you close application and open it again, values are restored.

## Functions

There is file functions.js in which you can store global function that you will need in several places.


## Pages

Pages are in ./pages folder. Every page is in single file.
If you want to add new page, just follow same pattern (create file and write to ./pages/index.js).



## Components

There are 4 components (one for each page). Every component is in single file.

* Component 1: Simple counter that is saved locally, so if you close tab/browser, it will be saved and restored on next load.
* Component 2: Clone text from input field and get URL parameter from Page 2.
* Component 3: Data table with sample JSON Api fetched data and with simple sorting and search.
* Component 4: Pass data to child component (with props) and pass data from child to parent component (with emit).

With these 4 components you can see how this works and following same pattern you can add as many components you want.


## Styling

Template have reference to Water.css "no class" CSS library. You can remove this and add your custom styling. 



## Development

Since this project contains single-file components without bundling, html part of component is held in ES6 "template literals".
To have code highlighting and intellisense inside template literals, I suggest to install VSCode extension "Vue Inline Template".



## Other

Check out similar project but with Quasar Framework  
GitHub: https://github.com/SaleCar/Quasar-UMD-Template  
Demo: http://quasar.rf.gd/

