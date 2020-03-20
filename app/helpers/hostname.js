import { helper } from '@ember/component/helper';

export default helper(function hostname(params/*, hash*/) {
  return new URL(params[0]).hostname;
});
