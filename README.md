This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


Senior Design miniproject: Covid 19 Tracker App. Collaboratos: zamorai, sharithg.

## A description of what the project is for.

The desktop application includes the following functionality:

* **Track deaths of the top countries in the world** (You can reuse the repo description you used earlier because this section doesn’t have to be long.)
* **Checklist of possible symptoms that indicate Covid-19 presence**
* **Table with information from Covid-19 API that lists the stats of every country in the world**
* **Admin page that tracks community symptoms**  

You likely have the answer to many of these questions in your head and have discussed them with your team. It's helpful to write them down for people who find your repository. Not only will it be easier for developers to know how to fork the project or become involved with the project, but it will be easy for non-coders to understand what the code is designed to do, and how they, too, can become involved.

**Example:** The [README for 18F’s Midas project](https://github.com/18f/midas) starts out by answering the questions:

* What is Midas?
* How does Midas work?
* Who uses Midas?
* What is Midas’ goal?
* How can your organization benefit from using Midas?

## Instructions for how to develop, use, and test the code.

This should answer the question: **How do I get this project to work on my machine? How can I develop for this project?** We find it works really well if you follow a two-step approach to develop the content for this section: first, help someone setup the site who has never done it before, and then write down the exact instructions. Next, ask someone to follow those instructions and see if you’ve missed anything.

Important: If relevant code changes, it’s important to test to ensure these instructions continue to work. We also recommend separating the sections for using a project versus developing for it. (More detailed instructions are located [in our guidelines](https://pages.18f.gov/open-source-program/pages/maintainer_guidelines/#usage-documentation) for writing documentation for users, contributors, and developers.)

**Example:** The README for analytics.usa.gov contains detailed instructions for [developing the site](https://github.com/18f/analytics.usa.gov#setup) and [deploying the site](https://github.com/18f/analytics.usa.gov#deploying-to-staging-18f-specific).  

## Instructions for how people can help.

We [explicitly welcome outside contributors](https://github.com/18F/open-source-policy/blob/master/practice.md#accepting-contributions-from-the-public). It’s important to explicitly state how they can help and what they can help with. This part of the website should answer the question: **How can outside contributors become involved?** We include a [CONTRIBUTING.md](https://github.com/18F/open-source-policy/blob/master/CONTRIBUTING.md) file in each repo, which outlines the following:

* If there are any additional setup steps specific for development.
* Whether there are explicit Instructions for running tests before contributions are accepted.
* If there are any requirements for contribution, if any, e.g.
  * A Contributor License Agreement
    * CLAHub
    * http://oss-watch.ac.uk/resources/cla
    * http://contributoragreements.org/
  * If commits should be squashed
  * Whether there is a specific coding style to adhere to. (Generally contributors will match what they see within a project.)
* Whether potential contributors should ask before they make significant changes.
* Whether work-in-progress pull requests are ok.
* What 18F's [Code of Conduct](https://github.com/18F/code-of-conduct) states

**Example:** The README for Midas contains a section called “[How you can help.](https://github.com/18f/midas#how-you-can-help)” What we really like about this section is that it doesn’t assume helpers are developers and lists ways for lots of different people to contribute. (Our [guide to welcoming non-coders to hackathons](https://18f.gsa.gov/2015/04/03/how-to-welcome-new-coders-to-a-civic-hackathon/) also contains many suggestions for ways to involve people with different skillsets.)

We also recommend reading Midas’ [Contributor’s Guide](https://github.com/18F/midas/blob/dev/CONTRIBUTING.md), which orients new dev contributors and tells them the best ways to communicate with Midas’ dev team.

## List the licensing information for your project.

This part of the repo should answer the question: **What is the license for this project?** All 18F projects are developed in the international public domain whenever possible and contain a [LICENSE.md](https://github.com/18F/open-source-policy/blob/master/LICENSE.md) document, as well as a paragraph at the end of each README which contains information about the public domain. We post this information [in the README](https://github.com/18F/18f.gsa.gov#public-domain), so that users know the code can be adapted and reused, and so they can easily see this information instead of going to a second site.

### Include credit and licenses for embedded resources

If your project includes code or other resources (such as icons, fonts, or photos) from outside sources, your project's license description (in the README, LICENSE, and CONTRIBUTING files) should credit the authors of that work and include their license information.

It's polite to give full credit when reusing work, even if not legally required by the work's license, and this helps users who want to find the original source and use it.

We also have a legal responsibility to respect the licenses of work we use. When adapting or embedding outside work, check its license for instructions for complying with that license.

For example, see ["Licenses and attribution" in the U.S. Web Design Standards README](https://github.com/18F/web-design-standards#licenses-and-attribution). It starts with "A few parts of this project are not in the public domain", to prevent accidentally implying that all the project's files are in the public domain. It lists exceptions in this format: "The file *filename* is from *project name*, by *name of author* [or copyright *name of author*], under *name of license*." Then it has a section titled "The rest of this project is in the public domain", with the typical license information we put in READMEs. The project's [CONTRIBUTING file](https://github.com/18F/web-design-standards/blob/18f-pages-staging/CONTRIBUTING.md) includes the same sections. The [LICENSE file](https://github.com/18F/web-design-standards/blob/18f-pages-staging/LICENSE.md) has the same sections again, plus the full license text for some embedded works and our standard LICENSE information.

## List the contact information for your team as well as where to ask questions.

This part of the repo should make it easy for users to get in touch with the team developing the project. This is also where you should list any listservs, chat programs, or social media groups that have been created to keep contributors informed.

Any other information that you’d like to share with users can go in the Wiki section of your repository.


## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
