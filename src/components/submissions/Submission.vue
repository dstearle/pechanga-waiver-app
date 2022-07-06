<template>

    <div class="grid grid-cols-8 gap-4 p-3 justify-center items-center text-base font-light md:font-bold">

		<!-- Waiver -->
        <div class="col-span-1">
            
            <div class="p-auto flex justify-center items-center">{{ submission.waiver }}</div>
        
        </div>

		<!-- First -->
        <div class="col-span-1">
            
            <div class="p-auto flex justify-center items-center">{{ submission.first }}</div>
        
        </div>

		<!-- Last -->
        <div class="col-span-1">
            
            <div class="p-auto flex justify-center items-center">{{ submission.last }}</div>
        
        </div>

		<!-- Email -->
        <div class="col-span-1">
            
            <div class="p-auto flex justify-center items-center">{{ submission.email }}</div>
        
        </div>

		<!-- Phone -->
        <div class="col-span-1">
            
            <div class="p-auto flex justify-center items-center">{{ submission.phone }}</div>
        
        </div>

		<!-- Consent -->
        <div class="col-span-1">
            
            <div class="p-auto flex justify-center items-center">{{ submission.consent }}</div>
        
        </div>

		<!-- Created At -->
        <div class="col-span-1">
            
            <div class="p-auto flex justify-center items-center">{{ submission.createdAt }}</div>
        
        </div>

		<!-- Actions -->
        <div class="col-span-1">
            
            <div class="flex flex-col w-full">
				
				<!-- Edit -->
				<button
					class="py-1 mt-1 rounded text-white border-4 border-violet-700 bg-violet-700 hover:bg-violet-500"
				>
					Edit
				</button>

				<!-- Delete -->
				<button
					class="py-1 my-1 rounded text-white border-4 border-violet-700 bg-violet-700 hover:bg-violet-500"
				>
					Delete
				</button>

			</div>
        
        </div>

	</div>

</template>

<script>

    export default {

        name: 'Submission',

        props: {

            submission: Object,

        },

    }

</script>