/**
 * Created with IntelliJ IDEA.
 * User: javierabanses
 * Date: 27/04/2015
 * Time: 22:04
 */
'use strict';

let Rx = require('rx-lite');
/*eslint-disable*/

Rx.Observable.fromSuperagent = function (req) {
    return Rx.Observable.create(function (observable) {
        req.end(function (err, res) {
            if (err) {
                observable.onError(err);
            } else {
                observable.onNext(res);
            }
            observable.onCompleted();
        })
    });
};

/*eslint-enable*/
