import Home from '-/pages/Home';
import Following from '-/pages/Following';
import Update from '-/pages/Live';

import {  UploadLayout, ProfileLayout } from '-/Layout';

const PublicRouter = [
  { path: '/', component: Home, layout: null },
  { path: '/following', component: Following, layout: ProfileLayout },
  { path: '/update', component: Update, layout: UploadLayout },
  { path: '/:nickname', component: Update, layout: ProfileLayout },
];

const PrivateRouter = [];

export { PublicRouter, PrivateRouter };
