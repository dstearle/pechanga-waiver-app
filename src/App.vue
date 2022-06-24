<template>

	<div class="p-5">

		<!-- Form -->
		<form @submit.prevent="handleSubmit">

			<div class="flex flex-col md:flex-row">

				<!-- Title -->
				<h2 class="text-3xl">Title</h2>

			</div>

			<!-- Entries -->
			<EntryFields 
				:key="entryIndex"
                :entry="entry"
				:entryIndex="entryIndex"
			/>

			<div class="flex">

				<!-- Submit -->
				<button 
					:disabled="this.loading"
					type="submit"
					class="mx-auto px-24 py-1 rounded text-3xl text-white bg-green-500 border-2 border-green-500 hover:text-green-500 hover:bg-white"
					:class="{'bg-white text-green-500' : this.loading, 'bg-green-500' : !this.loading }"
				>{{ this.submitText }}</button>

			</div>

		</form>

	</div>

</template>

<script>

	import EntryFields from './components/EntryFields';

	export default {

		name: 'App',

		components: {

            EntryFields
			
        },

		data() {

            return {

				loading: false,
				submitText: "Submit"

            }

        },
		
	}

</script>

<style>

	.form-group {
		margin-top: 20px;
		font-size: 20px;
		color: #9e9e9e;
	}
	.form-group input,
	.form-group select {
		width: 100%;
		padding: 5px;
		font-size: 18px;
		border: 1px solid rgba(128, 128, 128, 0.199);
	}

</style>