var request = require('request');
import React from 'react';
import App from './client/src/components/App.jsx';
import Server from './index.js';

test('should return null if id does not exist', () => {
  request('http//127.0.0.1:3000/api/item/101', (err, res, body) => {
    var result = JSON.parse(body);
    expect(result).toBe(null);
  });
}