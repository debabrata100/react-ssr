import { Counter } from "../src/components/Counter";
import { Home } from "../src/components/Home";
import { Posts } from "../src/components/Posts";
import { loadData } from "../src/utils/helper";

export const routes = [{
    path: "/",
    component: Home,
    exact: true,
    loadData: () => {}
},{
    path: "/counter",
    component: Counter,
},
{
    path: "/posts",
    component: Posts,
    loadData: () => loadData('posts')
}

];