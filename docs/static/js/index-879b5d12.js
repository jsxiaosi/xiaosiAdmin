import {
  d as o,
  P as t,
  D as n,
  o as r,
  c as p,
  g as u,
  t as c,
  u as i,
} from './index-de615e01.js';
import { u as l } from './useDatailsInfo-9488b40b.js';
const B = o({
  name: 'RtDetailsInfo',
  __name: 'index',
  setup(m) {
    const e = t(),
      { params: a } = e,
      { toDatailsInfo: s } = l();
    return (
      n(() => {
        s(`${a.id}`, 'params');
      }),
      (f, d) => (r(), p('div', null, [u('span', null, 'page-params --- ' + c(i(a).id), 1)]))
    );
  },
});
export { B as default };
