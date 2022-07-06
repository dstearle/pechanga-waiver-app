<template>

    <!-- List of submissions -->
    <div :key="submission.id" v-for="submission in filteredSubmissionsList">

        <Submission :submission="submission" />

    </div>

    <div class="text-center mt-8 mb-4">

        <div class="inline-flex">

            <!-- Newer Button -->
            <button 
                class="bg-violet-700 hover:bg-violet-800 text-white font-bold py-2 px-4 rounded-l"
				@click="newer()"
                v-show="this.currentIndex > 19"
            >
                Previous
            </button>

            <!-- Older Button -->
            <button 
                class="bg-violet-700 hover:bg-violet-800 text-white font-bold py-2 px-4 rounded-r"
				@click="older()"
                v-show="this.boola"
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
			selectedCategory: String,

		},

		data() {

			return {

				// Current index for the submissions list
				currentIndex: 0,
				// The limit of viewable submissions
				limit: 20,
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
					if(this.submissionsLength < 21) {

						this.boola = false

					}

				}
				
			}

		},

		computed: {

			// Paginates the list
			filteredSubmissionsList() {

				return this.limit ? this.FilteredByWaivers.slice(this.currentIndex, this.limit) : this.FilteredByWaivers

			},

			// Filters the list by the waiver select box
			FilteredByWaivers() {

				// If the select box is set to "Spa", "Golf", or "Casino" then show all submissions for that category
				if(this.selectedCategory === "Spa" || this.selectedCategory === "Golf" || this.selectedCategory === "Casino") {

					return this.submissions.filter(submission => !submission.waiver.indexOf(this.selectedCategory))

				}

				// Else show all submissions
				else { return this.submissions }

			},

		},

		methods: {

			// Method for showing older shows in the list
			older() {

				this. limit += 20;
				this.currentIndex += 20;
				this.boolaToggle();

			},

			// Method for showing newer shows in the list
			newer() {

				this. limit -= 20;
				this.currentIndex -= 20;
				this.boolaToggle();

			},

			// Shows or hides the 'Older' button
			boolaToggle(){

				// If the current index is at the end of the array then hide the 'Older' button
				if(this.currentIndex >= this.submissionsLength - 19 && this.currentIndex <= this.submissionsLength - 1 ) { return this.boola = false }

				// Else will show the 'Older' Button
				else { return this.boola = true }

			}

		}

	}

</script>