import { createStore } from 'vuex';

export default createStore({

	state: {

		// The array for submissions
        submissions: [],
        // The length of the submissions array
        submissionsLength: 0,

	},

	mutations: {

        // Retrieves the submissions from API to populate the Submissions List
        getSubmissions(state) {

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
                    state.submissions = submissionsArray;

                    // The length of the shows array
                    state.submissionsLength = submissionsArray.length;

                });

        },

		// Deletes a submission from the API
		deleteSubmission(id) {
            
            // Array to hold the data retrieved from the API
            let submissionsArray = [];

            // The fetch for the DELETE method
            fetch("https://testapi.io/api/pechangarc/resource/waiver/{" + id + "}", { method: 'DELETE' })
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

})