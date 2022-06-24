<template>

	<section class="flex flex-col justify-center my-5">

		<div class="p-5 bg-white rounded shadow">

            <div class="flex flex-col md:flex-row">

                <!-- Entry Title -->
                <h2 class="underline">Entry</h2>

            </div>

            <div class="flex flex-col md:flex-row">

                <!-- First Name -->
                <div class="form-group">

                    <label for="first_name">First Name:</label>

                    <input type="text" id="first_name" v-model="entry.firstName">

                </div>

            </div>

		</div>

	</section>

</template>

<script>

	export default {

    	name: 'EntryFields',

	}

</script>