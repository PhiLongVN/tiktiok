import Home from '-/pages/Home';
import Following from '-/pages/Following';

const PublicRouter = [
  { path: '/', component: Home },
  { path: '/following', component: Following },
];

const PrivateRouter = [];

export  { PublicRouter, PrivateRouter };
