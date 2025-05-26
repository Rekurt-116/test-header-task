
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/test-header-task/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/test-header-task"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 15487, hash: 'b1cea1a76c803c74d50da0db30532681db2fc33431f9db3d8375639e8c6ad747', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 15813, hash: 'e61b9a008ffac6babffb111146d84ec2c6cdc53fab055790f4baba79ac951674', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 19438, hash: '6abda28a82f1d52b200269e53f71672d1fc5bf9c9952480ce4b5af0b028ba88c', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-N7WG4XSE.css': {size: 62, hash: 'Trjnz+iowi4', text: () => import('./assets-chunks/styles-N7WG4XSE_css.mjs').then(m => m.default)}
  },
};
