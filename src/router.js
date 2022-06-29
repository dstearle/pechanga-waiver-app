import { createWebHistory, createRouter } from 'vue-router';
import Home from '@/views/Home.vue';
import Waiver from '@/views/Waiver.vue';
import Submissions from '@/views/Submissions.vue';

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
	{
		path: '/submissions',
		name: 'Submissions',
		component: Submissions,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;