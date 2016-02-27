Express as “a minimal and flexible node.js web application
framework, providing a robust set of features for building single and multipage
and hybrid web applications.”

1. Minimal - The Express philosophy is to provide the
             minimal layer between your brain and the server

2. Flexible- Another key aspect of the Express philosophy is that Express is extensible. Express
              provides you a very minimal framework, and you can add in different parts of
              Express functionality as needed, replacing whatever doesn’t meet your needs

3. SPA - Integerate Express with AngularJS , ReactJS, EmberJS
4. MultiPage - Integerate express with Jade, handlebars, ejs (template engines)

History of Express
Express as a web framework inspired by
Sinatra, which is a web framework based on Ruby


Scaffolding is not a new idea, but many people (myself included) were introduced to
the concept by Ruby. The idea is simple: most projects require a certain amount of socalled
“boilerplate” code, and who wants to recreate that code every time you begin a
new project? A simple way is to create a rough skeleton of a project, and every time you
need a new project, you just copy this skeleton, or template

To Use Express
npm install --save express



Node JS and Other Servers
Another major difference between Node and more traditional web servers is that Node
is single threaded. At first blush, this may seem like a step backward. As it turns out, it
is a stroke of genius. Single threading vastly simplifies the business of writing web apps,
and if you need the performance of a multithreaded app, you can simply spin up more
instances of Node, and you will effectively have the performance benefits of multithreading.


the JavaScript engine that Node uses (Google’s
V8) does compile JavaScript to native machine code (much like C or C++),
NodeJS is Platform independent
Node Based on Apache 2.0 License