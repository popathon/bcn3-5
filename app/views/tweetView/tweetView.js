'use strict';

let React = require('react');

/*
 *
 * */
require('./tweetView.less');
/*
 *
 * */

let Gauge = require('./gauge/gauge')
    , DoTweet = require('./doTweet/doTweet')
    , GetMicrophone = require('./getMicrophone/getMicrophone');

let tweetView = React.createClass({

    // The object returned by this method sets the initial value of this.state
    getInitialState: function () {
        return {};
    },

    // The object returned by this method sets the initial value of this.props
    // If a complex object is returned, it is shared among all component instances
    propTypes: {}
    , getDefaultProps: function () {
        return {};
    },

    // Returns the jsx markup for a component
    // Inspects this.state and this.props create the markup
    // Should never update this.state or this.props
    render: function () {

        //< GetMicrophone/>
        return (
            < div className = 'TweetView' >
                <img src='./images/tweet.jpg'/>
                Tou are tweeting {this.props.state.tag}



                < Gauge/>
                < DoTweet onTweetDone={this.props.onTweetDone} {...this.props}/>
            </div>
        );
    },

    // An array of objects each of which can augment the lifecycle methods
    mixins: [],

    // Functions that can be invoked on the component without creating instances
    statics: {
        aStaticFunction: function () {
        }
    },

    // -- Lifecycle Methods --

    // Invoked once before first render
    componentWillMount: function () {
        // Calling setState here does not cause a re-render
    },

    // Invoked once after the first render
    componentDidMount: function () {
        // You now have access to this.getDOMNode()
    },

    // Invoked whenever there is a prop change
    // Called BEFORE render
    componentWillReceiveProps: function (nextProps) {
        // Not called for the initial render
        // Previous props can be accessed by this.props
        // Calling setState here does not trigger an an additional re-render
    },

    // Determines if the render method should run in the subsequent step
    // Called BEFORE a render
    // Not called for the initial render
    shouldComponentUpdate: function (nextProps, nextState) {
        // If you want the render method to execute in the next step
        // return true, else return false
        return true;
    },

    // Called IMMEDIATELY BEFORE a render
    componentWillUpdate: function (nextProps, nextState) {
        // You cannot use this.setState() in this method
    },

    // Called IMMEDIATELY AFTER a render
    componentDidUpdate: function (prevProps, prevState) {
    },

    // Called IMMEDIATELY before a component is unmounted
    componentWillUnmount: function () {
    }

});

module.exports = tweetView;

/* eslint-disable */
let data = {
    'name': 'flare',
    'children': [
        {
            'name': 'analytics',
            'children': [
                {
                    'name': 'cluster',
                    'children': [
                        {'name': '#democracia', 'size': 528 , mensajepre:'#YoPitoPor', mensajepost:'Y tú, ¿por qué pitas? Participa aquí: http://media-attack.tv/yopitopor/pitada.html'},
                        {'name': '#independencia', 'size': 200 , mensajepre:'#YoPitoPor', mensajepost:'Y tú, ¿por qué pitas? Participa aquí: http://media-attack.tv/yopitopor/pitada.html'},
                        {'name': '#justiciasocial', 'size': 745 , mensajepre:'#YoPitoPor', mensajepost:'Y tú, ¿por qué pitas? Participa aquí: http://media-attack.tv/yopitopor/pitada.html'},
                        {'name': '#república', 'size': 380 , mensajepre:'#YoPitoPor', mensajepost:'Y tú, ¿por qué pitas? Participa aquí: http://media-attack.tv/yopitopor/pitada.html'},
                        {'name': '#deshaucios', 'size': 380 , mensajepre:'#YoPitoPor', mensajepost:'Y tú, ¿por qué pitas? Participa aquí: http://media-attack.tv/yopitopor/pitada.html'},
                        {'name': '#pobreza', 'size': 380 , mensajepre:'#YoPitoPor', mensajepost:'Y tú, ¿por qué pitas? Participa aquí: http://media-attack.tv/yopitopor/pitada.html'},
                        {'name': '#sanidadpública', 'size': 380 , mensajepre:'#YoPitoPor', mensajepost:'Y tú, ¿por qué pitas? Participa aquí: http://media-attack.tv/yopitopor/pitada.html'},
                        {'name': '#educaciónpública', 'size': 380 , mensajepre:'#YoPitoPor', mensajepost:'Y tú, ¿por qué pitas? Participa aquí: http://media-attack.tv/yopitopor/pitada.html'},
                        {'name': '#culturalibre', 'size': 380 , mensajepre:'#YoPitoPor', mensajepost:'Y tú, ¿por qué pitas? Participa aquí: http://media-attack.tv/yopitopor/pitada.html'},
                        {'name': '#desigualdadesdegénero', 'size': 380 , mensajepre:'#YoPitoPor', mensajepost:'Y tú, ¿por qué pitas? Participa aquí: http://media-attack.tv/yopitopor/pitada.html'},
                        {'name': '#libreexpresión', 'size': 380 , mensajepre:'#YoPitoPor', mensajepost:'Y tú, ¿por qué pitas? Participa aquí: http://media-attack.tv/yopitopor/pitada.html'},
                        {'name': '#jugarlimpio', 'size': 380 , mensajepre:'#YoPitoPor', mensajepost:'Y tú, ¿por qué pitas? Participa aquí: http://media-attack.tv/yopitopor/pitada.html'},
                        {'name': '#naciólliure', 'size': 380 , mensajepre:'#YoPitoPor', mensajepost:'Y tú, ¿por qué pitas? Participa aquí: http://media-attack.tv/yopitopor/pitada.html'},
                        {'name': '#sociedadjusta', 'size': 380 , mensajepre:'#YoPitoPor', mensajepost:'Y tú, ¿por qué pitas? Participa aquí: http://media-attack.tv/yopitopor/pitada.html'},
                        {'name': '#independentzia', 'size': 380 , mensajepre:'#YoPitoPor', mensajepost:'Y tú, ¿por qué pitas? Participa aquí: http://media-attack.tv/yopitopor/pitada.html'}

                    ]
                }
            ]
        }

    ]
};
/* eslint-enable */
