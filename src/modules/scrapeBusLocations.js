const axios = require("axios");
const { load } = require("cheerio");

module.exports = () => {
	const url = `${process.env.COLLEGE_WEBSERVICES_URL}/bus/busdepartures.aspx`;

	return new Promise((resolve, reject) => {
		axios(url)
			.then((response) => {
				const html = response.data;
				const $ = load(html);
				const busObjects = [];

				// Add an object containing the bus number (_id) and location to busObjects for each bus
				// Not an arrow function because you cannot use 'this' in arrow functions I believe
				$("td:first-child").each(function () {
					const location = $(this).nextAll().last().text();
					let correctedLocation;

					// If the location is blank, replace it with -
					if (!/\S/.test(location)) {
						correctedLocation = "-";
					} else {
						correctedLocation = location;
					}

					busObjects.push({
						_id: $(this).text(),
						location: correctedLocation
					});
				});

				if (busObjects.length === 0) {
					reject("Scrape Failed (table missing from website)");
				} else {
					resolve(busObjects);
				}
			})
			.catch((err) => reject(err));
	});
};
