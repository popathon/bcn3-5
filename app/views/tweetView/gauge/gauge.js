'use strict';

let React = require('react')
    , d3 = require('d3');

/*
 *
 * */
require('./gauge.less');
/*
 *
 * */

let gauge = React.createClass({

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
            <div className='Gauge'>
                <div ref='gauge' className='gauge'>

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
        /* eslint-disable */


            var Needle, arc, arcEndRad, arcStartRad, barWidth, chart, chartInset, degToRad, el, endPadRad, height, i, margin, needle, numSections, padRad, percToDeg, percToRad, percent, radius, ref, sectionIndx, sectionPerc, startPadRad, svg, totalPercent, width;

            percent = .65;

            barWidth = 40;

            numSections = 3;

            sectionPerc = 1 / numSections / 2;

            padRad = 0.05;

            chartInset = 10;

            totalPercent = .75;

            el = d3.select('.gauge');

            margin = {
                top: 20,
                right: 20,
                bottom: 30,
                left: 20
            };

            width = el[0][0].offsetWidth - margin.left - margin.right;

            height = width;

            radius = Math.min(width, height) / 2;

            percToDeg = function (perc) {
                return perc * 360;
            };

            percToRad = function (perc) {
                return degToRad(percToDeg(perc));
            };

            degToRad = function (deg) {
                return deg * Math.PI / 180;
            };

            svg = el.append('svg').attr('width', width + margin.left + margin.right).attr('height', height + margin.top + margin.bottom);

            chart = svg.append('g').attr('transform', 'translate(' + ((width + margin.left) / 2) + ', ' + ((height + margin.top) / 2) + ')');

            for (sectionIndx = i = 1, ref = numSections; 1 <= ref ? i <= ref : i >= ref; sectionIndx = 1 <= ref ? ++i : --i) {
                arcStartRad = percToRad(totalPercent);
                arcEndRad = arcStartRad + percToRad(sectionPerc);
                totalPercent += sectionPerc;
                startPadRad = sectionIndx === 0 ? 0 : padRad / 2;
                endPadRad = sectionIndx === numSections ? 0 : padRad / 2;
                arc = d3.svg.arc().outerRadius(radius - chartInset).innerRadius(radius - chartInset - barWidth).startAngle(arcStartRad + startPadRad).endAngle(arcEndRad - endPadRad);
                chart.append('path').attr('class', 'arc chart-color' + sectionIndx).attr('d', arc);
            }

            Needle = (function () {
                function Needle(len, radius1) {
                    this.len = len;
                    this.radius = radius1;
                }

                Needle.prototype.drawOn = function (el, perc) {
                    el.append('circle').attr('class', 'needle-center').attr('cx', 0).attr('cy', 0).attr('r', this.radius);
                    return el.append('path').attr('class', 'needle').attr('d', this.mkCmd(perc));
                };

                Needle.prototype.animateOn = function (el, perc) {
                    var self;
                    self = this;
                    return el.transition().delay(500).ease('elastic').duration(3000).selectAll('.needle').tween('progress', function () {
                        return function (percentOfPercent) {
                            var progress;
                            progress = percentOfPercent * perc;
                            return d3.select(this).attr('d', self.mkCmd(progress));
                        };
                    });
                };

                Needle.prototype.mkCmd = function (perc) {
                    var centerX, centerY, leftX, leftY, rightX, rightY, thetaRad, topX, topY;
                    thetaRad = percToRad(perc / 2);
                    centerX = 0;
                    centerY = 0;
                    topX = centerX - this.len * Math.cos(thetaRad);
                    topY = centerY - this.len * Math.sin(thetaRad);
                    leftX = centerX - this.radius * Math.cos(thetaRad - Math.PI / 2);
                    leftY = centerY - this.radius * Math.sin(thetaRad - Math.PI / 2);
                    rightX = centerX - this.radius * Math.cos(thetaRad + Math.PI / 2);
                    rightY = centerY - this.radius * Math.sin(thetaRad + Math.PI / 2);
                    return 'M ' + leftX + ' ' + leftY + ' L ' + topX + ' ' + topY + ' L ' + rightX + ' ' + rightY;
                };

                return Needle;

            })();

            needle = new Needle(90, 15);

            needle.drawOn(chart, 0);

            needle.animateOn(chart, percent);



        /* eslint-enable */

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

module.exports = gauge;


