import { createStore } from 'vuex';

export default createStore({

	state: {

		entries: [

			{
				date: '',
				day: '',
				bands: [

					{
						name: '',
						start: '',
						floor: ''
					}
					
				]
			}
			
		],

	},

	mutations: {

		// Fetches data from firebase
		async getEvents(state) {

			// The snapshot of the data collection
			let snapshot = await db.collection('calEvent').get();

			// Array to hold the data retrieved from firebase
			let eventsArray = [];

			// Foreach loop for the data in the firestore
			snapshot.forEach(doc => {

				// The data stored in firebase, except the id
				let appData = doc.data();

				// Sets the id to the retrieved data
				appData.id = doc.id;

				// Pushes the retrieved data to the events array
				eventsArray.push(appData);

			});

			// Checks if user device uses an apple product
			let isIOS = /iPad|iPhone|iPod|Macintosh/.test(navigator.userAgent) && !window.MSStream;

			// If isIOS is true then format dates specifically for apple products
			if(isIOS) { 

				// Formats the dates for iOS
				eventsArray.forEach(event => {

					// If date string is less than eight characters, add a '0' to the front of the month
					if(event.date.length < 8) {

						// Gets the year
						const eventYear = event.date.slice(-2);
						// Gets the month and day
						const eventMonthDay = event.date.substr(0, 5);
						// Reformats the date into an iOS friendly format
						const iOSString = '20' + eventYear + '-0' + eventMonthDay + 'T16:20:19Z';

						// Provides the object with new formatted date
						return event.iOSdate = iOSString

					}

					// Else continue format
					else {

						// Gets the year
						const eventYear = event.date.slice(-2);
						// Gets the month and day
						const eventMonthDay = event.date.substr(0, 5);
						// Reformats the date into an iOS friendly format
						const iOSString = '20' + eventYear + '-' + eventMonthDay + 'T16:20:19Z';

						// Provides the object with new formatted date
						return event.iOSdate = iOSString

					}

				})
				
				// Sorts the eventsArray by the date
				const sortedArray = eventsArray.sort(function(a,b) { 

					return new Date(a.iOSdate).getTime() - new Date(b.iOSdate).getTime() 

				});

				// Sets the data to the calendar 
				state.entries = sortedArray.reverse();
				
			}

			// Else use the regular format the rest of the world uses
			else {

				// Sorts the eventsArray by the date
				const sortedArray = eventsArray.sort(function(a,b) { 

					return new Date(a.date).getTime() - new Date(b.date).getTime() 

				});


				// Sets the data to the calendar 
				state.entries = sortedArray.reverse();

			}

		}

	}

})