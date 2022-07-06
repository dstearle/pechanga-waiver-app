<template>

    <div class="p-5">

        <div class="flex flex-col">

            <!-- Title -->
            <h1 class="text-3xl">Home</h1>

            <!-- Welcome -->
            <div class="mt-7">

				<h2 class="text-xl">Welcome!</h2>

                <p class="mt-3">Welcome to the "Pechanga Waiver App" made by Dallas Earle for Pechanga Resort Casino!</p>

            </div>

            <!-- About -->
            <div class="mt-7">

				<h2 class="text-xl">About</h2>

                <p class="mt-3">
                    
                    This project was an interview project given by the Software Development team at Pechanga Resort Casino to verify my skills as a Software/Web Developer.

                    The project features three waiver forms to be used by different areas of the Resort and Casino that submit to an in-house API. 
                    
                    All of the data sent to that API is then displayed on another page for a user to view and interact with the data submitted by the forms.

                    The buttons above will take you to these waivers (Spa Waiver, Golf Waiver, Casino Waiver) and also to the list of submitted waivers (Submissions).

                    I built this project using Vue.js and Tailwind CSS which are both wonderful frameworks to build with (although I am not dependent on).
                    
                </p>

            </div>

            <!-- More About the Waivers -->
            <div class="mt-7">

				<h2 class="text-xl">More About the Waivers</h2>

                <p class="mt-3">
                    
                    All three of the waivers use a single reusable component to help ensure that maintaining or reusing the code for other projects is as easy as possible.

                    By clicking the buttons in the app or simply by visitng the "/waiver" with the set of provided query params the app is able to determine which location the waiver is for.

                    The waivers also have standard form validation along with other visual cues to prevent invalid submissions and help the user fix any errors.

                    The waiver component that is used by all of the waiver locations is also responsive so that it can easily be used on phones and tablets if needed.
                    
                </p>

            </div>

            <!-- More About the Submissions Page -->
            <div class="mt-7">

				<h2 class="text-xl">More About the Submissions Page</h2>

                <p class="mt-3">

                    The Submissions Page initially lists all of the submitted waiver forms and paginates through the list by twenty at a time most recent to oldest.

                    Users can filter the list by waiver type so that they can see only the submissions for a specific location.

                    Currently the component for the Submissions Page is not fully responsive but that is mainly due to the amount of columns used to show all of the necessary data.

                </p>

            </div>

        </div>

    </div>

</template>