import { createApp } from 'vue';
import App from './App.vue';
import mdiVue from 'mdi-vue/v3';
import * as mdijs from '@mdi/js';
import { createRouter, createWebHistory } from 'vue-router'

import { createStore } from 'vuex';

const store = createStore({
    state() {
        return {
            hunger: 100,
            cleanliness: 100,
            happiness: 100,
            energy: 100,
        }
    },
    mutations: {
        changeHunger(state, amount) {
            if (state.hunger + amount >= 100) {
                state.hunger = 100;
            } else {
                if (state.hunger <= 0) {
                    state.hunger = 0;
                } else {
                    state.hunger += amount;
                }
            }
        },
        changeCleanliness(state, amount) {
            if (state.cleanliness + amount >= 100) {
                state.cleanliness = 100;
            } else {
                if (state.cleanliness <= 0) {
                    state.cleanliness = 0;
                } else {
                    state.cleanliness += amount;
                }
            }
        },
        changeHappiness(state, amount) {
            if (state.happiness + amount >= 100) {
                state.happiness = 100;
            } else {
                if (state.happiness <= 0) {
                    state.happiness = 0;
                } else {
                    state.happiness += amount;
                }
            }
        },
        changeEnergy(state, amount) {
            if (state.energy + amount >= 100) {
                state.energy = 100;
            } else {
                if (state.energy <= 0) {
                    state.energy = 0;
                } else {
                    state.energy += amount;
                }
            }
        },
    }
})

const Kitchen = () => import('./components/PageKitchen.vue');

const Bathroom = () => import('./components/PageBathroom.vue');

const Playroom = () => import('./components/PagePlayroom.vue');

const Bedroom = () => import('./components/PageBedroom.vue');

const routes = [
    { path: '/kitchen', component: Kitchen },
    { path: '/bathroom', component: Bathroom },
    { path: '/playroom', component: Playroom },
    { path: '/bedroom', component: Bedroom },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

const app = createApp(App);

app.use(store);
app.use(router);
app.use(mdiVue, { icons: mdijs, });
app.mount('#app');