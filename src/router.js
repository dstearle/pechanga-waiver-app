import { createWebHistory, createRouter } from 'vue-router';
import Home from '@/views/Home.vue';
import Waiver from '@/views/Waiver.vue';

const routes = [
    {
		path: '/',
		name: 'Home',
		component: Home,
	},
	{
		path: '/waiver',
		name: 'Waiver',
		component: Waiver,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;