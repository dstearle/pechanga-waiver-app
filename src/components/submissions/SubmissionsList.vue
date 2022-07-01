<template>

    <!-- List of shows -->
    <!-- <div :key="show.id" v-for="show in filteredShowsList">

        <Show :show="show" />

    </div> -->

    <div class="text-center mt-8">

        <div class="inline-flex">

            <!-- Newer Button -->
            <button 
                class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
            >
                Previous
            </button>

            <!-- Older Button -->
            <button 
                class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
            >
                Next
            </button>

        </div>

    </div>

</template>