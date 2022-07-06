<template>

    <div class="p-5">

        <div class="flex flex-col">

            <!-- Title -->
            <h1 class="text-3xl">Submissions</h1>

			<!-- Filters -->
			<div class="mt-7">

				<h2 class="text-xl">Filter By:</h2>

				<div class="flex flex-row mt-3">

					<!-- Location Filter -->
					<label for="waiver_select" class="flex flex-row items-center">
						
						Location:

						<!-- Select Box -->
						<select 
							id="waiver_select" 
							v-model="this.selectedCategory"
							class="ml-3 text-center bg-violet-50 border border-violet-300 text-violet-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-1 dark:bg-violet-700 dark:border-violet-600 dark:placeholder-violet-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500"
						>
							<option value="all">All</option>
							<option value="Spa">Spa</option>
							<option value="Golf">Golf</option>
							<option value="Casino">Casino</option>
						</select>

					</label>

				</div>

			</div>

			<div class="submissions-container bg-gray-300 mt-5 mx-auto">

				<!-- Header -->
        		<Header />

				<!-- Submissions List -->
				<SubmissionsList 
					:submissions="submissions" 
					:submissionsLength="submissionsLength" 
					:selectedCategory="selectedCategory"
				/>

			</div>

        </div>

    </div>

</template>

<script>

	import Header from '../components/submissions/Header';
    import SubmissionsList from '../components/submissions/SubmissionsList';

    export default {

        name: 'SubmissionsPage',

        components: {

            Header,
            SubmissionsList

        },
        
        data() {

            return {
                
                // The array for submissions
                submissions: [],
                // The length of the submissions array
                submissionsLength: 0,
				// The selected waiver to filter the list by
				selectedCategory: "all"

            }

        },

        mounted() {

            this.getSubmissions();

        },

        methods: {

            // Retrieves the submissions from API to populate the Submissions List
            getSubmissions() {

                // Array to hold the data retrieved from the API
                let submissionsArray = [];

                // The fetch for the POST method
				fetch("https://testapi.io/api/pechangarc/resource/waiver")
					.then((res) => res.json())
					.then((data) => {
                        
                        // Note: All of the submissions are stored in an object called "data" as well hence "data" twice...
                        // A forEach loop to retrieve each submission
                        data.data.forEach(submission => {

                            // Push the submission to the submissionsArray
                            submissionsArray.push(submission)
                            
                        });

                        // Sets the data to the calendar 
                        this.submissions = submissionsArray;

                        // The length of the shows array
                        this.submissionsLength = submissionsArray.length;

                    });

            },

        }

	}

</script>

<style>

    .submissions-container {
        max-width: 1400px;
        overflow: auto;
        min-height: 300px;
		border-radius: .25rem;
    }

</style>