<template>

	<section class="flex flex-col justify-center my-5">

		<div class="p-5 bg-white rounded shadow">

			<!-- Asterisk -->
            <div class="flex flex-col md:flex-row">

                <label>* Denotes required field</label>

            </div>

			<!-- Fields -->
            <div class="flex flex-col">

                <!-- First Name -->
                <div class="form-group">

                    <label for="first">* First Name:</label>

                    <input type="text" id="first" v-model="entry.first">

                </div>

				<!-- Last Name -->
                <div class="form-group">

                    <label for="last">* Last Name:</label>

                    <input type="text" id="last" v-model="entry.last">

                </div>

				<!-- Email -->
                <div class="form-group">

                    <label for="email">* Email:</label>

                    <input type="text" id="email" v-model="entry.email">

                </div>

				<!-- Phone -->
                <div class="form-group">

                    <label for="phone">Phone:</label>

                    <input type="text" id="phone" v-model="entry.phone">

                </div>

				<!-- Consent -->
                <div class="mt-5">

					<input 
						class="mr-3" 
						type="checkbox" 
						id="consent" 
						value="1"
						v-model="entry.consent"
					>

                    <label for="phone">I agree to the following terms and conditions</label>

                </div>

				<!-- Waiver -->
                <div class="hidden">

                    <input type="text" id="waiver" v-model="entry.waiver">

                </div>

                <!-- Error Message -->
                <div 
                    v-show="errors.length != 0"
                    class="mt-5 p-5 bg-red-200 text-red-700 rounded-md"
                >

                    <!-- List of fields that need to be fixed -->
                    <div 
                        :key="index"
                        v-for="(error, index) in errors"
                    >
                        {{error}}
                    </div>

                </div>

                <!-- Success Message -->
                <div 
                    v-show="successMessage.length != 0"
                    class="mt-5 p-5 bg-green-200 text-green-700 rounded-md"
                >

                    {{successMessage}}

                </div>

            </div>

		</div>

	</section>

</template>

<script>

	export default {

    	name: 'EntryFields',

		props : [ 'entry', 'errors', 'successMessage' ],

	}

</script>