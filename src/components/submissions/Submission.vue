<template>

    <div class="show-style grid grid-cols-5 gap-3 pb-3 my-3">

		<!-- Date -->
        <div class="col-span-5 lg:col-span-1 mt-3 mx-3">
            
            <div class="p-auto flex justify-center items-center show-type text-xl show-date font-extrabold">{{ submission.waiver }}</div>
        
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