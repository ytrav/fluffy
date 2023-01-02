import { createApp } from 'vue';
import App from './App.vue';
import mdiVue from 'mdi-vue/v3';
import * as mdijs from '@mdi/js';
import { createRouter, createWebHistory } from 'vue-router'

import { createStore } from 'vuex';

const store = createStore({
    state() {
        return {
            hunger: 80,
            cleanliness: 70,
            happiness: 100,
            energy: 15,
            foodList: [
                {
                    name: 'Apple',
                    icon: 'food-apple',
                    value: 10,
                },
                {
                    name: 'Quaso',
                    icon: 'food-croissant',
                    value: 25,
                },
                {
                    name: 'Coffee',
                    icon: 'coffee',
                    value: 10,
                },
                {
                    name: 'Noodles',
                    icon: 'noodles',
                    value: 55,
                },
                {
                    name: 'Baguette',
                    icon: 'baguette',
                    value: 35,
                },
                {
                    name: 'Cake',
                    icon: 'cake-variant',
                    value: 65,
                },
                {
                    name: 'Candy',
                    icon: 'candy',
                    value: 5,
                },
                {
                    name: 'Coffee',
                    icon: 'coffee',
                    value: 10,
                },
                {
                    name: 'Hamburger',
                    icon: 'hamburger',
                    value: 40,
                },
                {
                    name: 'Turkey',
                    icon: 'food-turkey',
                    value: 70,
                },
                {
                    name: 'Tea',
                    icon: 'tea',
                    value: 10,
                },
                {
                    name: 'Tea',
                    icon: 'tea',
                    value: 10,
                },
                {
                    name: 'Sugar',
                    icon: 'cube-outline',
                    value: 40,
                },
                {
                    name: 'Sugar',
                    icon: 'cube-outline',
                    value: 40,
                },
                {
                    name: 'Chili',
                    icon: 'chili-mild',
                    value: -15,
                },
                {
                    name: 'Chili',
                    icon: 'chili-mild',
                    value: -15,
                },
                {
                    name: 'Chili',
                    icon: 'chili-mild',
                    value: -15,
                },
                {
                    name: 'Cupcake',
                    icon: 'cupcake',
                    value: 25,
                },
                {
                    name: 'Beer',
                    icon: 'glass-mug',
                    value: 5,
                },
                {
                    name: 'Beer',
                    icon: 'glass-mug',
                    value: 5,
                },
                {
                    name: 'Wine',
                    icon: 'glass-wine',
                    value: 10,
                },
                {
                    name: 'Cupcake',
                    icon: 'cupcake',
                    value: 25,
                },
                {
                    name: 'Wine',
                    icon: 'glass-wine',
                    value: 10,
                },

            ],
        }
    },
    actions: {
        loadFoodList(context, foodList) {
            context.commit('setFoodList', foodList);
        },
    },

    mutations: {
        setFoodList(state, foodList) {
            state.foodList = foodList;
        },


        changeHunger(state, amount) {
            if (state.hunger + amount >= 100) {
                state.hunger = 100;
            } else {
                if (state.hunger < 0) {
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
                if (state.cleanliness < 0) {
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
                if (state.happiness < 0) {
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
                if (state.energy < 0) {
                    state.energy = 0;
                } else {
                    state.energy += amount;
                }
            }
        },
        setHunger(state, value) {
            state.hunger = value;
        },
        setCleanliness(state, value) {
            state.cleanliness = value;
        },
        setHappiness(state, value) {
            state.happiness = value;
        },
        setEnergy(state, value) {
            state.energy = value;
        },
        removeFood(state, index) {
            state.foodList.splice(index, 1);
        }
    }
})

const Kitchen = () => import('./components/PageKitchen.vue');

const Bathroom = () => import('./components/PageBathroom.vue');

const Playroom = () => import('./components/PagePlayroom.vue');

const Bedroom = () => import('./components/PageBedroom.vue');

const routes = [
    {path: '/', redirect: '/kitchen'},
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