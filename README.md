# Car World

> Car World is a family friendly fullstack web application that challenges users in their game driving ability. This application includes a full gamut of features including everything from authentication, public high score board, and collision detection of moving objects.

[![Build Status](http://img.shields.io/travis/badges/badgerbadgerbadger.svg?style=flat-square)](https://travis-ci.org/badges/badgerbadgerbadger) [![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org) 

<div align="center">
  <a href="https://bavarianrhino.github.io/mod-4-frontend-final-project/#/login"><img src="public/logo.png" title="Car World" alt="Car World"></a>
  <p>Login Credentials</p>
  <p>USERNAME: guest</p>
  <p>PASSWORD: 1234</p>
</div>

## 🌎 Motivation
>Full-Stack Web application that profiles game logic and collision detection using React and Ruby on Rails API. Backend code located in this [Github Repository](https://github.com/bavarianrhino/mod-4-backend-final-project). RESTfully persists user data with postgreSQL database via Active Record implementing a many to many model relationship along with full CRUD actions.


## 🎬 Demo
<!-- ![Recordit GIF](https://recordit.co/kHEtfAcsLN) -->
<!-- ![Recordit GIF](g.recordit.co/kHEtfAcsLN.gif) -->
<!-- [Imgur](https://i.imgur.com/yx9zN0H.gifv) -->
![Imgur](https://i.imgur.com/yx9zN0H.gifv)
[img]https://i.imgur.com/yx9zN0H.gif[/img]
[img]https://i.imgur.com/yx9zN0H.gif[/img]
![url=https://imgur.com/yx9zN0H][img]http://i.imgur.com/yx9zN0H.gif[/img][/url]
[url=https://imgur.com/yx9zN0H][img]http://i.imgur.com/yx9zN0H.gif[/img][/url]
<div align="center">
    <a href="https://imgur.com/yx9zN0H"><img src="https://i.imgur.com/yx9zN0H.gif" title="Car World Demo" /></a>
    <p>Login provided using Bcrypt and JWT authentication.</p>
</div>

## 👤 Team
- <a href="https://github.com/spikeburton">Spike Burton</a>
- <a href="https://github.com/bavarianrhino">Ryan Riesenberger</a>


## 🔬 Learning Objectives
* Architectural considerations of building a full stack app with collision detection and game logic.
* Connect a front-end <b>Create-React-App</b> server to a <b>Ruby on Rails backend</b>
* Communicate data via <b>RESTful API</b> from the <b>PostgreSQL</b> database to the Client React Application
* Understand how to route user requests on the front end with <b>React Router</b> and on the backend with <b>Active Record</b>
* Enhance authentication flows in the app with the Ruby gems <b>Bcrypt & JWT for Authentication</b>
<!-- * Build reusable user inputs with <b>Redux Form</b>, complete with navigation -->
<!-- * Handle credit cards and receive payments from users with <b>Stripe</b> -->
<!-- * Engage users with automated <b>emails</b> -->
<!-- * Separate production and development resources with advanced <b>API key handling techniques</b> -->
<!-- * Educate users on how to use the app with custom build landing pages -->


## 🛠 Tech/Framework Stack
🌖<b>Front-End</b>
- React.js, React-Router-Dom
- JavaScript, ES6
- Semantic-UI-React
- ****ADD HERE****

🌘<b>Back-End</b>
- PostgreSQL Database
- Served by Puma
- Active Record has a "many-to-many" database Schema
- Ruby, Ruby on Rails
- Rack CORS for handling Cross-Origin Resource Sharing (CORS) and AJAX
- Byebug and Pry-Rails used in Debugging Development

<!-- ☁️<b>API</b>
- [MarketCheck Automotive API](https://www.marketcheck.com/automotive) -->
  
🚀<b>Deployment</b>
- Ruby on Rails API hosted on [Heroku](https://carworld-api.herokuapp.com/users)
- React hosted on [Github Pages](https://bavarianrhino.github.io/mod-4-frontend-final-project/#/login)


## 💻 Local Env Installation

🔨 <b>Installation</b>
```shell
  $ git clone git@github.com:bavarianrhino/mod-4-backend-final-project.git
  $ cd mod-4-backend-final-project
  [server]$ bundle install
  [server]$ rails db:create
  [server]$ rails db:migrate
  [server]$ rails db:seed
```
```zsh
  $ git clone git@github.com:bavarianrhino/mod-4-frontend-final-project.git
  $ cd mod-4-frontend-final-project
  [server]$ npm install
```
<!-- 🔨 <b>Development Configuration</b>
- Sign up with [MarketCheck Automotive API](https://www.marketcheck.com/automotive) and save your api key in a newly created '.env' file at the root level of the client-react directory.
```javascript
  REACT_APP_MARKETCHECK_API_KEY=your_api_key_goes_here_with_no_quotes
``` -->

🔨 <b>Running the application</b>

- To serve the Ruby on Rails API navigate to the backend directory and execute command
```zsh
  [server]$ rails s
```
- To start the client side of the application, open a different tab within a terminal. Navigate to the frontend directory and execute command.
```zsh
  [client]$ npm start
```

## 🚧 TODO
- Host front and backend


<!-- ## 🛠 Tech Stack

- [GatsbyJS](https://www.gatsbyjs.org/) - Static site generation built on React and GraphQL
- [Emotion](https://emotion.sh/docs/introduction) - CSS in JS
- [FontAwesome](https://fontawesome.com/) - Social link icons
- [Netlify](https://www.netlify.com/) - Hosting and continuous deployment

## 🗺 Site Map

    /
    /landing

1. [Home](https:///)
1. [Login](https://) -->