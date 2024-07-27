// src/App.js
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _pagesHome = require('./pages/Home');

var _pagesHome2 = _interopRequireDefault(_pagesHome);

// Ensure paths are correct

var _pagesAbout = require('./pages/About');

var _pagesAbout2 = _interopRequireDefault(_pagesAbout);

// Ensure paths are correct

function App() {
  return _react2['default'].createElement(
    _reactRouterDom.BrowserRouter,
    null,
    _react2['default'].createElement(
      _reactRouterDom.Routes,
      null,
      _react2['default'].createElement(_reactRouterDom.Route, { path: '/', element: _react2['default'].createElement(_pagesHome2['default'], null) }),
      _react2['default'].createElement(_reactRouterDom.Route, { path: '/about', element: _react2['default'].createElement(_pagesAbout2['default'], null) })
    )
  );
}

exports['default'] = App;
module.exports = exports['default'];