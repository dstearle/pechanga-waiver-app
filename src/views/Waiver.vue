<template>

	<div class="p-5">

		<!-- Form -->
		<form @submit.prevent="checkForm">

			<div class="flex flex-col md:flex-row">

				<!-- Title -->
				<h2 class="text-3xl">{{ entry.waiver }} Waiver</h2>

			</div>

			<!-- Entries -->
			<EntryFields 
                :entry="entry"
				:errors="errors"
				:successMessage="successMessage"
			/>

			<div class="flex">

				<!-- Submit -->
				<button 
					:disabled="this.loading"
					type="submit"
					class="mx-auto px-24 py-1 rounded text-3xl border-2 border-green-500 hover:text-green-500 hover:bg-white"
					:class="{'bg-white text-green-500' : this.loading, 'bg-green-500 text-white' : !this.loading }"
				>{{ this.submitText }}</button>

			</div>

		</form>

	</div>

</template>

<script>

	import EntryFields from '../components/waiver/EntryFields';

	export default {

		name: 'Waiver',

		components: {

            EntryFields

        },

		data() {

            return {

				errors: [],
				loading: false,
				submitText: "Submit",
				successMessage: "",
				regEmail: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,
				regPhone: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im,
				entry: {
					first: null,
					last: null,
					email: null,
					phone: '',
					consent: null,
					waiver: "",
				}

            }

        },

		created() {

			// Sets the parameter for the form when first visited
			this.entry.waiver = this.$route.query.waiver;
			
		},

		watch: {

			// Watcher for when the waiver query param is changed
			"$route.query.waiver": {

				handler: function() {

					// Sets the query parameter for the form when after each visit
					this.entry.waiver = this.$route.query.waiver;

				},

			},

		},

		methods: {

			// Checks the form for user errors and submits when all fields are valid
			checkForm() {

				// Boolean to temporarily disable the submit button
				this.loading = true;

				// Text to tell user action is being made
				this.submitText = "Submitting....";

				// If there are no form errors then submit the form
				if(this.entry.first && this.entry.last && this.entry.email && this.entry.consent) { 

					// If user does not provide a phone number give a default value
					if(this.entry.phone == '') {

						this.entry.phone = 'n/a';

					}

					// Set errors array back to empty
					this.errors = [];

					// Run the POST method
					return this.handleSubmit(); 

				}

				// Else inform user of form errors
				else {

					// Boolean to temporarily disable the submit button
					this.loading = false;

					// Text to tell user action is being made
					this.submitText = "Try Again";

					// Array of errors to be displayed to user in case of invalid form
					this.errors = [];

					// Clears out the success message
					this.successMessage = ""

					//*** Error messages ***

						// Check First Name
						if (!this.entry.first) {
							this.errors.push('Please provide your first name.');
						}

						// Check Last Name
						if (!this.entry.last) {
							this.errors.push('Please provide your last name.');
						}

						// Check Email
						if (!this.entry.email) {
							this.errors.push('Please provide your email.');
						}
						else if(!this.regEmail.test(this.entry.email)){
							this.errors.push("Please enter a valid email");
						}

						// Check Phone
						if(this.entry.phone.length > 0) {

							if(!this.regPhone.test(this.entry.phone)){
								this.errors.push("Please enter a valid phone number");
							}

						}

						// Check Consent
						if (!this.entry.consent) {
							this.errors.push('Your consent is required.');
						}

				}

			},

			// Method for sending data to API
			handleSubmit() {

				// POST request options to be used in fetch
				const requestOptions = {

					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(
						{ 
							first: this.entry.first,
							last: this.entry.last,
							email: this.entry.email,
							phone: this.entry.phone,
							consent: this.entry.consent,
							waiver: this.entry.waiver,
						}
					)

				};

				// The fetch for the POST method
				fetch("https://testapi.io/api/pechangarc/resource/waiver", requestOptions)
					.then(res => {

						// Resets the fields and re-enables the submit button
						setTimeout(()=>{

							// Reset fields
							this.entry.first = null;
							this.entry.last = null;
							this.entry.email = null;
							this.entry.phone = '';
							this.entry.consent = null;

							// Success message
							this.successMessage = "Success! Your form has been submitted."

							this.loading = false
							this.submitText = "Submit";
							
						}, 2000);

						// The mapped JSON
						return res.json();
							
					})
					.then(data => { console.log(data) });

			},

		}
		
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