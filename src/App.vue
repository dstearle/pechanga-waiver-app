<template>

	<div id="app">

		<!-- Navbar -->
		<div id="nav" class="mt-5 mx-5">

			<!-- Home Link -->
			<router-link 
				to="/" 
				class="mr-3 px-3 py-1 rounded text-white text-xl border-4 border-violet-700 bg-violet-700 hover:bg-violet-500"
			>Home</router-link>

			<!-- Spa Waiver Link -->
			<router-link 
				to="/waiver?waiver=Spa"
				class="mr-3 px-3 py-1 rounded text-white text-xl border-4 border-violet-700 bg-violet-700 hover:bg-violet-500"
			>Spa Waiver</router-link>

			<!-- Golf Waiver Link -->
			<router-link 
				to="/waiver?waiver=Golf"
				class="mr-3 px-3 py-1 rounded text-white text-xl border-4 border-violet-700 bg-violet-700 hover:bg-violet-500"
			>Golf Waiver</router-link>

			<!-- Casino Waiver Link -->
			<router-link 
				to="/waiver?waiver=Casino"
				class="mr-3 px-3 py-1 rounded text-white text-xl border-4 border-violet-700 bg-violet-700 hover:bg-violet-500"
			>Casino Waiver</router-link>

			<!-- Submissions Link -->
			<router-link 
				to="/submissions"
				class="mr-3 px-3 py-1 rounded text-white text-xl border-4 border-violet-700 bg-violet-700 hover:bg-violet-500"
			>Submissions</router-link>

		</div>

		<!-- Router View -->
		<router-view/>

	</div>

</template>