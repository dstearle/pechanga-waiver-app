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

        name: 'Submissions',

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

	}

</script>