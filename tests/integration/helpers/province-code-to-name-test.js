import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Helper | province-code-to-name', function(hooks) {
  setupRenderingTest(hooks);

  test('it translates province codes', async function(assert) {
    this.set('inputValue', 'ON');

    await render(hbs`{{province-code-to-name inputValue}}`);

    assert.equal(this.element.textContent.trim(), 'Ontario');
  });
});
