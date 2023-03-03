import Home from '-/pages/Home';
import Following from '-/pages/Following';
import Update from '-/pages/Live';
import { path } from './routeConfig';
import { UploadLayout, ProfileLayout } from '-/Layout';

const PublicRouter = [
  { path: path.home, component: Home, layout: null },
  { path: path.following, component: Following, layout: ProfileLayout },
  { path: path.update, component: Update, layout: UploadLayout },
  { path: path.nickname, component: Update, layout: ProfileLayout },
];

const PrivateRouter = [];

export { PublicRouter, PrivateRouter };
