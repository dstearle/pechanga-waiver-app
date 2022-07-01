<template>

    <!-- List of submissions -->
    <div :key="submission.id" v-for="submission in filteredSubmissionsList">

        <submission :submission="submission" />

    </div>

    <div class="text-center mt-8 mb-4">

        <div class="inline-flex">

            <!-- Newer Button -->
            <button 
                class="bg-violet-700 hover:bg-violet-800 text-white font-bold py-2 px-4 rounded-l"
            >
                Previous
            </button>

            <!-- Older Button -->
            <button 
                class="bg-violet-700 hover:bg-violet-800 text-white font-bold py-2 px-4 rounded-r"
            >
                Next
            </button>

        </div>

    </div>

</template>

<script>

	import Submission from './Submission';

	export default {

		name: 'SubmissionList',

		components: { 
			
			Submission,
			
		},

		props: {

			submissions: Array,
			submissionsLength: Number,

		},

		data() {

			return {

				// Current index for the shows list
				currentIndex: 0,
				// The limit of viewable shows
				limit: 7,
				// Determins if 'Older' button is visible
				boola: true,

			}

		},

		watch: {
			
			// Watches for any changes in the submissionsLength prop
			submissionsLength: {

				// Method for setting the initial value for boola after the data has loaded
				handler() { 
					
					// If submissionsLength prop is less than 8 items then hide the 'Older' button
					if(this.submissionsLength < 8) {

						this.boola = false

					}

				}
				
			}

		},

		computed: {

			// Paginates the list
			filteredSubmissionsList(){

				return this.limit ? this.submissions.slice(this.currentIndex, this.limit) : this.submissions

			},

		},

		methods: {

			// Method for showing older shows in the list
			older() {

				this. limit += 7;
				this.currentIndex += 7;
				this.boolaToggle();

			},

			// Method for showing newer shows in the list
			newer() {

				this. limit -= 7;
				this.currentIndex -= 7;
				this.boolaToggle();

			},

			// Shows or hides the 'Older' button
			boolaToggle(){

				// If the current index is at the end of the array then hide the 'Older' button
				if(this.currentIndex === (this.submissionsLength - 7 )) { return this.boola = false }
				if(this.currentIndex === (this.submissionsLength - 6 )) { return this.boola = false }
				if(this.currentIndex === (this.submissionsLength - 5 )) { return this.boola = false }
				if(this.currentIndex === (this.submissionsLength - 4 )) { return this.boola = false }
				if(this.currentIndex === (this.submissionsLength - 3 )) { return this.boola = false }
				if(this.currentIndex === (this.submissionsLength - 2 )) { return this.boola = false }
				if(this.currentIndex === (this.submissionsLength - 1 )) { return this.boola = false }

				// Else will show the 'Older' Button
				else { return this.boola = true }

			}

		}

	}

</script>