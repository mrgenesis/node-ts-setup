
const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, '../static/product/index.html'), 'utf8');

jest.dontMock('fs');

describe('',  function() {
  beforeEach(() => {
    console.log(html);
    console.log(window);
  });
  test('xxx', function() {
    const t = fetch;
  });
});