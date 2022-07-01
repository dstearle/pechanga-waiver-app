<template>

    <div class="show-style grid grid-cols-5 gap-3 pb-3 my-3">

        <!-- Date -->
        <div class="col-span-5 lg:col-span-1 mt-3 mx-3">
            
            <div class="p-auto flex justify-center items-center show-type text-xl show-date font-extrabold">{{ show.day.toUpperCase() }} - {{ monthDate }} {{ dayDate }}</div>
        
        </div>

        <div class="col-span-5 lg:col-span-4 ml-3 lg:font-bold">
            
            <!-- Bands List -->
            <div class="grid-rows-1" :key="band.id" v-for="band in filteredBandsList">
                
                <div class="col-span-5 lg:col-span-4 grid grid-cols-5 gap-3 my-3">
            
                    <!-- Name -->
                    <div v-if="band.name" class="col-span-3">{{ band.name.toUpperCase() }}</div>

                    <div v-else class="col-span-3">COMING SOON</div>

                    <!-- Floor -->
                    <div v-if="band.floor" class="col-span-1">{{ band.floor.toUpperCase() }}</div>

                    <div v-else class="col-span-1"></div>

                    <!-- Start -->
                    <div v-if="band.start && band.start !== 'NaNPM'" class="col-span-1">{{ band.start.toUpperCase() }}</div>

                    <div v-else class="col-span-1">N/A</div>
                    
                </div>

            </div>

        </div>

    </div>

</template>