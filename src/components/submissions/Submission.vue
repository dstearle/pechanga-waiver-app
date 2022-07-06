<template>

    <div class="grid grid-cols-8 gap-4 p-3 justify-center items-center text-base font-light md:font-bold">

		<!-- Date -->
        <div class="col-span-1">
            
            <div class="p-auto flex justify-center items-center">{{ submission.waiver }}</div>
        
        </div>

		<!-- Date -->
        <div class="col-span-1">
            
            <div class="p-auto flex justify-center items-center">{{ submission.first }}</div>
        
        </div>

		<!-- Date -->
        <div class="col-span-1">
            
            <div class="p-auto flex justify-center items-center">{{ submission.last }}</div>
        
        </div>

		<!-- Date -->
        <div class="col-span-1">
            
            <div class="p-auto flex justify-center items-center">{{ submission.email }}</div>
        
        </div>

		<!-- Date -->
        <div class="col-span-1">
            
            <div class="p-auto flex justify-center items-center">{{ submission.phone }}</div>
        
        </div>

		<!-- Date -->
        <div class="col-span-1">
            
            <div class="p-auto flex justify-center items-center">{{ submission.consent }}</div>
        
        </div>

		<!-- Date -->
        <div class="col-span-1">
            
            <div class="p-auto flex justify-center items-center">{{ submission.createdAt }}</div>
        
        </div>

		<!-- Date -->
        <div class="col-span-1">
            
            <div class="p-auto flex justify-center items-center">{{ submission.waiver }}</div>
        
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