import { helper } from '@ember/component/helper';
import { assert } from '@ember/debug';
import isKey from '../utils/is-key.js';
import listenerName from '../utils/listener-name.js';
import '../utils/keyboard-listener.js';
import '../_rollupPluginBabelHelpers-30c82890.js';
import '../utils/platform.js';
import '../fixtures/key-maps.js';
import '../fixtures/modifiers-array.js';
import '../utils/get-mouse-name.js';
import '@ember/utils';
import '../utils/get-cmd-key.js';

function ifKey([keyCombo, callback]
/*, named*/
) {
  return function (event) {
    assert('ember-keyboard: You must pass a function as the second argument to the `if-key` helper', typeof callback === 'function');
    assert('ember-keyboard: The `if-key` helper expects to be invoked with a KeyboardEvent', event instanceof KeyboardEvent);

    if (isKey(listenerName(event.type, keyCombo), event)) {
      callback(event);
    }
  };
}
var ifKey$1 = helper(ifKey);

export { ifKey$1 as default, ifKey };
