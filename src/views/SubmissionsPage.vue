<template>

    <div class="p-5">

        <div class="flex flex-col md:flex-row">

            <!-- Title -->
            <h2 class="text-3xl">Submissions</h2>

        </div>

    </div>

</template>

<script>

    export default {

        name: 'SubmissionsPage',

        // components: {
        //     Header,
        //     SubmissionsList
        // },
        
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

                    });

                    console.log(submissionsArray)

            }

        }

	}

</script>