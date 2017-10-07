/**
 * Vue + Vue Router
 */
import Vue from 'vue'
import VueRouter from 'vue-router'


/**
 * ベース Component
 */
import Page1 from '../components/Page1.vue'
import Page2 from '../components/Page2.vue'
import Page3 from '../components/Page3.vue'

/**
 * Buefy を使う
 */
import Buefy from 'buefy'

/**
 * IE 対策
 */
import 'whatwg-fetch'

/**
 * カスタマイズした saas
 */
import '../sass/bulma.custom.sass';

/**
 * メインの less File
 */
import '../less/main.less';


/**
 * Vue Router と Buefy を有効にする
 */
Vue.use(VueRouter);
Vue.use(Buefy);


/**
 * Route Component ここで定義してもOK
 * @type {{template: string}}
 */
const Home = { template: '<div>Home</div>' };

/**
 * history モードで Router 定義
 * @type {VueRouter}
 */
const router = new VueRouter({
    mode: 'history',
    base: ".",
    routes: [
        { path: '/', component: Home },
        { path: '/page1', component: Page1, props: { propMessage: "Test" }},
        { path: '/page2', component: Page2 },
        { path: '/page3', component: Page3 }
    ]
});

/**
 * Mount する
 */
new Vue({
    router,
    template: `
    <div id="app">
    <div class="tabs">
    <ul>
    <router-link tag="li" to="/" exact-active-class="is-active">
        <a>Home</a>
    </router-link>
    <router-link tag="li" to="/page1" exact-active-class="is-active">
        <a>Page 1</a>
    </router-link>
    <router-link tag="li" to="/page2" exact-active-class="is-active">
        <a>Page 2</a>
    </router-link>
    <router-link tag="li" to="/page3" exact-active-class="is-active">
        <a>Page 3</a>
    </router-link>
    </ul>
    </div>
    <div>
        <router-view class="view"></router-view>
    </div>
    </div>
  `
}).$mount('#app');
