/**
 * Created with IntelliJ IDEA.
 * User: javierabanses
 * Date: 30/05/2015
 * Time: 13:21
 */

'use strict';

let React = require('react')
    , d3 = require('d3');

/*
 *
 * */
require('./stadiumView.less');
/*
 *
 * */

let stadiumView = React.createClass({

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
        return (
            <div className='StadiumView'>
                <div><button onClick={this.props.onStartAgain}>otra vez</button></div>
                <div ref='paper'>
                    Gauge data
                </div>
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
        // You now have access to this.getDOMNode()
        var diameter = 960,
            format = d3.format(',d'),
            color = d3.scale.category20c();

        var bubble = d3.layout.pack()
            .sort(null)
            .size([diameter, diameter])
            .padding(1.5);

        var svg = d3.select(this.refs.paper.getDOMNode()).append('svg')
            .attr('width', diameter)
            .attr('height', diameter)
            .attr('class', 'bubble');

        var node = svg.selectAll('.node')
            .data(bubble.nodes(classes(data))
                .filter(function (d) {
                    return !d.children;
                }))
            .enter().append('g')
            .attr('class', 'node')
            .attr('transform', function (d) {
                return 'translate(' + d.x + ',' + d.y + ')';
            });

        node.append('title')
            .text(function (d) {
                return d.className + ': ' + format(d.value);
            });

        node.append('circle')
            .attr('r', function (d) {
                return d.r;
            })
            .style('fill', function (d) {
                return color(d.packageName);
            });

        node.append('text')
            .attr('dy', '.3em')
            .style('text-anchor', 'middle')
            .text(function (d) {
                return d.className.substring(0, d.r / 3);
            });

// Returns a flattened hierarchy containing all leaf nodes under the root.
        function classes(root) {
            var _classes = [];

            function recurse(name, _node) {
                if (_node.children) {
                    _node.children.forEach(function (child) {
                        recurse(_node.name, child);
                    });
                }
                else {
                    _classes.push({packageName: name, className: _node.name, value: _node.size});
                }
            }

            recurse(null, root);
            return {children: _classes};
        }

        d3.select(self.frameElement).style('height', diameter + 'px');

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

module.exports = stadiumView;


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
                        {'name': 'AgglomerativeCluster', 'size': 3938},
                        {'name': 'CommunityStructure', 'size': 3812},
                        {'name': 'HierarchicalCluster', 'size': 6714},
                        {'name': 'MergeEdge', 'size': 743}

                    ]
                }
            ]
        }

    ]
};
/* eslint-enable */
