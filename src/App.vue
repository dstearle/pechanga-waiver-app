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
				to="/waiver?waiver=spa"
				class="mr-3 px-3 py-1 rounded text-white text-xl border-4 border-violet-700 bg-violet-700 hover:bg-violet-500"
			>Spa Waiver</router-link>

		</div>

		<!-- Router View -->
		<router-view/>

	</div>

</template>