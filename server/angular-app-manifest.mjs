
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://Rekurt-116.github.io/test-header-task/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/test-header-task"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 15515, hash: '27c97d89856d69307fbecb8e19721b28d8d50d534090b44370d50e83b1e66334', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 15841, hash: 'f41ad88823f50c63f2a0697312f6a7a099f590fc870db2ad2f3dade17e52b7a5', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 19466, hash: 'a90a1b9c90ed27533b6ac6eb74009bc4de8b8d84a358a77b809ff517ef49505f', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-N7WG4XSE.css': {size: 62, hash: 'Trjnz+iowi4', text: () => import('./assets-chunks/styles-N7WG4XSE_css.mjs').then(m => m.default)}
  },
};
