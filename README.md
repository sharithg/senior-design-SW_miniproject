This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


Senior Design miniproject: Covid 19 Tracker App.
Collaborator's github accounts: [zamorai](https://github.com/zamorai), [sharithg](https://github.com/sharithg) 

## Project Description.

The desktop application includes the following functionality:

* **Track deaths of the top countries in the world** 
* **Checklist of possible symptoms that indicate Covid-19 presence**
* **Table with information from Covid-19 API that lists the stats of every country in the world**
* **Admin page that tracks community symptoms**  

Simply log into the app using google auth or create your own account with email and password. The information is sent to our firebase and we log the information on the back-end. Once you log into the application, you can check the checkboxes that represent your symptoms you may be having and click the blue submit button on the bottom left corner. That will automatically send your symptoms to the database and update our admin page to reflect the changes. At the bottom of the app you can also input any country in the world (countries with spaces may be differend, like United States of America can be found by inputing united-states) to get today's new Covid cases and total cases and more. 

**Here is the project hosted on netlify:** [CovidTrack](https://5f63d15bcfe63e0008233746--heuristic-meninsky-b6057c.netlify.app/) 

To run locally:


``` bash
npm i -g yarn
cd /to/project/directory/containing/package.json/
yarn
```
once packages are installed:
``` bash
yarn start
```

## Admin Info

To access the admin page please use the below credentials:

* username: jdcovidad@gmail.com
* password: CovidAdmin123

## Tests

### Login page
- [x] SSO: redirects to home after login, saves in db
- [x] Regular: redirects to home after login, saves in db
- [x] If signed in already redirects to home
### Register page
- [x] Redirects to home after login, saves in db
### Home page
- [x] Only allows logged in users access
- [x] Header: username and covid status shows up properly
- [x] Top body: Logout button click redirects to login and cannot access home anymore
- [x] Top body: Covid API shows data
- [x] Main body: Submit form &#8594; saves in database with proper structure
- [x] Main body: Submit form repeatedly &#8594; overrites existing info
- [x] Main body: Submit form &#8594; shows colors for covid status
- [x] Bottom body: Shows country info when typed
- [ ] Bottom body: Shows error when wrong country
### Admin page
- [x] only allows specified users access
- [x] Table: shows completed/incomplete froms for the day
- [x] Table: correctly updates to new user responses
- [x] Percentage: correctly calculate percentage with symptoms