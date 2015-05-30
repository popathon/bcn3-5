'use strict';

let React = require('react')
    , Rx = require('rx-lite')
    , Router = require('react-router')
    , _ = require('lodash');


require('./main.less');

let {Route, DefaultRoute, NotFoundRoute, RouteHandler} = Router;

/*
 *
 *
 *
 * main app
 * */

let WelcomeComponent = require('./views/welcome/welcomeComponent');
let StadiumComponent = require('./views/stadiumView/stadiumView');
let TweetView = require('./views/tweetView/tweetView');
let MainMenu = require('./views/mainMenu/mainMenu');
let NotFound = require('./views/notFound');


let App = React.createClass({
    onWordSelected: function (word) {
        this.setState({tag: word});
    }

    , getInitialState: function () {
        return {
            state: '' //['welcome', 'tweet', 'stadium']
            , tag: ''
        };
    }
    , render: function () {
        return ( <div className='Main'>
            <MainMenu/>
            <RouteHandler model={model} state={this.state} onWordSelected={this.onWordSelected}/>
        </div> );
    }
});


let tags = ['FACupFinal'
    , '#copadelrey'
    , '#finalcopadelrey'
    , '#finalcopa'
    , '#barcelona'
    , '#bilbao'
    , '#fcb'
    , '#athleticbilbao'
    , '#AthleticGuGara'
    , '#athlive'
    , '#fcb'
    , '#athletic'
    , '#barcelonafutbolclub'
    , '#futbol'
    , '#fútbol'
    , '#fútbolfotos'
    , '#soccer'
    , '#Barcelonafutbol'
    , '#fcblive'
    , '#denokbatera athleticclub'
    , '#FIFA'
    , '#crispacion'
    , '#independencia'
    , '#independència'
    , '#denokbatera'
    , '#independentzia'
    , '#españa'
    , '#spain'
    , '#independence'
    , '#pitadaconcausa'
    , '#porquepitas'
    , '#ChiringuitoPitos'
    , '#Pitadahimno'
    , '#marchem'
    , '#denokbatera'
    , '#himno'
    , '#rey'];


let model = {
    posibleTags: tags
};

var routes = (
    <Route handler={App} path="/">
        <DefaultRoute handler={WelcomeComponent} />
        <Route name="welcome" handler={WelcomeComponent} />
        <Route name="tweet" handler={TweetView}/>
        <Route name="stadium" handler={StadiumComponent}/>
        <NotFoundRoute handler={NotFound}/>
    </Route>
);

Router.run(routes, function (Handler) {
    React.render(<Handler/>, document.body);
});



