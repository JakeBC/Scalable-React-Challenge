# Scalable React Challenge

## Notes on solution

- I decided to use recharts to display 5 different aspects of the ufo data. I hadn't used this library before so a reasonable amount of time was spent familiarising myself with it.
- The csv data file was copied into the public folder to make sure it was included as an asset in the build. I used a `window.fetch` call to grab the data before parsing it with `papaparse` as suggested.
- There are a lot of data points so performance can be a bit sluggish when loading the page. I've not included any means for mitigating this but would consider using suspense or SSR to improve the UX here.
- There is also a fair amount of number crunching to format the data into the schemas required by the charts. My code here is quite verbose with some duplication in `useChartData`. In a real world scenario I would consider serving the ufo data in the structure required by the UI or condensing this code into a single more efficient but less readable `array.reduce` call if it needed to be done client side.
- I have tried as far as possible to encapsulate logic into custom hooks - fetching of ufo data and preparation of chart data.
- App state is handled by a context provider which wraps the whole App. I added a feature to allow a user to select a year form the first chart to filter the remaining charts by. I would have added this as a search param but did not get around to using react router or similar. This value is just persisted with a `useState` call instead.
- Some tests have been added by they are by no means exhaustive. More effort would be required to validate that various components and state integrate as expected. More complex jest tests and something like a screenshot test using playwright could be useful here.

## Features

- By default all data is displayed but this can be filtered by year by clicking on one of the data points in the top chart.
- I was hoping to do something a bit more interesting with the location data like overlay it on a world map or integrate with google maps (I've not used this before though so it would have probably taken me a while to figure things out).
- The layout is simple and should be mobile first.
- Dark mode is supported.

---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Challenge Overview

Welcome to the **Scalable React Challenge**! Your task is to create a simple data dashboard using the UFO sightings dataset, which is already included in this project under the `data/` folder. The goal is to visualise and summarise the data in a meaningful way, with a focus on how you code and how you handle data. The challenge is designed to take no longer than **2 hours**.

You can find a full description of the dataset and its columns [here on Kaggle](https://www.kaggle.com/datasets/NUFORC/ufo-sightings/data?select=complete.csv).

### What You Need to Do:

1. **Dataset Integration:** Use the UFO sightings dataset located in the `data/` folder of this project. You can parse the CSV file using any method you prefer (e.g., `papaparse`, native CSV handling, etc.) and load it into your React application.
2. **Dashboard Creation:** Build a dashboard that displays charts or summary values of interest from the dataset. You can choose which aspects of the data you find most interesting or relevant to visualise.
3. **Libraries & Styling:** Feel free to use any libraries or tools for data visualisation (e.g., Chart.js, D3.js, Recharts, etc.). The styling is up to you, so feel free to be creative and make the dashboard visually appealing.
4. **Time Constraint:** The task is expected to take **no longer than 2 hours**, so focus on delivering a functional and clean dashboard rather than an overly complex one.
5. **Clean and Maintainable Code:** Write clean, readable, and maintainable code. Structure your components well and ensure that your code is easy to follow and understand.
6. **Testing (Optional):** If time permits, please add a few tests to demonstrate your approach to testing. We do not expect extensive test coverage, but adding some basic tests will help us understand your thought process around testing.

### Acceptance Criteria:

1. **Data Integration:** The dashboard successfully loads and displays data from the UFO sightings dataset located in the `data/` folder.
2. **Visualisations or Summary:** The dashboard includes at least one chart or set of summary statistics derived from the dataset.
3. **Functionality:** The app runs without errors, and the charts or summaries are dynamically generated based on the dataset.
4. **Code Quality:** The code is well-structured, readable, and follows common best practices in React and TypeScript development.
5. **Styling and UX:** The dashboard is visually appealing and user-friendly. Though advanced styling is not a requirement, a well-designed and organised UI is appreciated.
6. **Testing:** If tests are added, they should be clear, meaningful, and demonstrate an understanding of testing concepts.

## Getting Started with the Project

In the project directory, you can run:

### `npm start`

Runs the app in development mode.  
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.  
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in interactive watch mode.  
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.  
It correctly bundles React in production mode and optimises the build for the best performance.

The build is minified and the filenames include the hashes.  
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc.) right into your project so you have full control over them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and medium deployments, and you shouldn’t feel obligated to use this feature. However, we understand that this tool wouldn’t be useful if you couldn’t customise it when you are ready for it.

## Submission

When you have completed the challenge, please submit the following:

1. **Code Repository:** A link to your repository (GitHub, GitLab, etc.) containing your code.
2. **Documentation:** If necessary, include any additional documentation on how to run your project or notes on your approach.

We look forward to seeing how you approach the challenge and handle data visualisation and React development. Good luck and have fun!

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
