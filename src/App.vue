<template>

	<div id="app">

		<!-- Navbar -->
		<div id="nav">

			<!-- Home Link -->
			<router-link to="/">Home</router-link>

			<!-- Spa Waiver Link -->
			<router-link to="/waiver?waiver=spa">Spa Waiver</router-link>

		</div>

		<!-- Router View -->
		<router-view/>

	</div>

</template>