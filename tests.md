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

