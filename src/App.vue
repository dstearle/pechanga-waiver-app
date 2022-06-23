<template>

	<div class="p-5">

		<!-- Form -->
		<form @submit.prevent="handleSubmit">

			<div class="flex flex-col md:flex-row">

				<!-- Title -->
				<h2 class="text-3xl">Title</h2>

			</div>

			<!-- Entries -->

			<div class="flex">

				<!-- Submit -->
				<button 
					type="submit"
					class="mx-auto px-24 py-1 rounded text-3xl text-white border-2 border-green hover:text-green hover:bg-white"
				>Submit</button>

			</div>

		</form>

	</div>

</template>

<script>

	export default {

		name: 'App',
		
	}

</script>

<style></style>