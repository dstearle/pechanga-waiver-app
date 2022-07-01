<template>

    <div class="p-5">

        <div class="flex flex-col">

            <!-- Title -->
            <h2 class="text-3xl">Submissions</h2>

			<div class="submissions-container mx-auto">

				<!-- Submissions List -->
				<SubmissionsList :submissions="submissions" :submissionsLength="submissionsLength" />

			</div>

        </div>

    </div>

</template>

<script>

    import SubmissionsList from '../components/submissions/SubmissionsList';

    export default {

        name: 'SubmissionsPage',

        components: {
            // Header,
            SubmissionsList
        },
        
        data() {

            return {
                
                // The array for submissions
                submissions: [],
                // The length of the submissions array
                submissionsLength: 0,

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

            }

        }

	}

</script>

<style>

    .submissions-container {
        background-color: #D1D5DB;
        max-width: 1400px;
        overflow: auto;
        min-height: 300px;
        padding: 15px;
		border-radius: .25rem;
    }

</style>