// src/App.js
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

// Import necessary components

var _Home = require('./Home');

var _Home2 = _interopRequireDefault(_Home);

// Example component

var _About = require('./About');

var _About2 = _interopRequireDefault(_About);

// Example component

function App() {
  return _react2['default'].createElement(
    _reactRouterDom.BrowserRouter,
    null,
    _react2['default'].createElement(
      _reactRouterDom.Routes,
      null,
      _react2['default'].createElement(_reactRouterDom.Route, { path: '/', element: _react2['default'].createElement(_Home2['default'], null) }),
      _react2['default'].createElement(_reactRouterDom.Route, { path: '/about', element: _react2['default'].createElement(_About2['default'], null) })
    )
  );
}

exports['default'] = App;
module.exports = exports['default'];