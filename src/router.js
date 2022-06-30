import { createWebHistory, createRouter } from 'vue-router';
import Home from '@/views/Home.vue';
import Waiver from '@/views/Waiver.vue';
import SubmissionsList from '@/views/SubmissionsList.vue';

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
		name: 'SubmissionsList',
		component: SubmissionsList,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;