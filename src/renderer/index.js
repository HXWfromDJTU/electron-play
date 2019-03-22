// Initial welcome page. Delete the following line to remove it.
'use strict';

import Vue from 'vue';

import Antd from 'ant-design-vue'

import 'ant-design-vue/dist/antd.css'

import App from '../App.vue';
Vue.use(Antd)
new Vue({
    data:{
        versions:{
            electron:process.versions.electron,
            electronWebpack:require('electron-webpack/package.json').version
        }
    },
    methods:{
        open(b){require('electron').shell.openExternal(b)}
    },
    template:`<div><App/></div>`,
    components:{
        App
    }
}).$mount('#app')
