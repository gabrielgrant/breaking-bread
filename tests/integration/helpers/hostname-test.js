import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Helper | hostname', function(hooks) {
  setupRenderingTest(hooks);

  test('it strips everything except hostname', async function(assert) {
    this.set('inputValue', 'http://me.com:32/path?this=that');

    await render(hbs`{{hostname inputValue}}`);

    assert.equal(this.element.textContent.trim(), 'me.com');
  });

});
