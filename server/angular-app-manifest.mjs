
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: false,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/vat-utility/vat-reg-uility"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 837, hash: '5a06dfe50b7f13a8412acc4429ad38d3447a9c9a1813fd2f16d91887734a6746', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1377, hash: '9abc734c75340b9a158859c9241b295af651ca58bf545f2c45c57951ca4e7e25', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 6943, hash: 'd93e119a1dbb593316617fc477013d8f5438b5e4e0b9bdeeb57c8074c7280e58', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'vat-utility/vat-reg-uility/index.html': {size: 14843, hash: '25439cb68ba08c516c07d3eedb52f7c419b332d9ada35f9233e53097c43fed93', text: () => import('./assets-chunks/vat-utility_vat-reg-uility_index_html.mjs').then(m => m.default)}
  },
};
