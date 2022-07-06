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
					:submissions="getSubmissionsState" 
					:submissionsLength="getSubmissionsLengthState" 
					:selectedCategory="selectedCategory"
				/>

			</div>

        </div>

    </div>

</template>

<script>

	import { useStore } from "vuex";
	import { mapMutations } from 'vuex';
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
                
				// The selected waiver to filter the list by
				selectedCategory: "all"

            }

        },

        mounted() {

            this.getSubmissions();

        },

		computed: {

			// The state for "submissions"
			getSubmissionsState() {

				// Initialize use of Vuex store
				const store = useStore();

				return store.state.submissions

			},

			// The state for "submissionsLength"
			getSubmissionsLengthState() {

				// Initialize use of Vuex store
				const store = useStore();

				return store.state.submissionsLength

			}

		},

        methods: {

            ...mapMutations([

                'getSubmissions',
				'deleteSubmission'

            ]),

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