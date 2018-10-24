# “Where’s The Party At!?” Proposal


## Background and Overview
“Where’s The Party At” is a membership software site that allows users to rate, categorize, upload pictures of and anonymously chat about parties that are currently occurring. The app’s main interface uses google maps with pins displaying currently active parties. Users can click on these pins to see pictures of the event and a chat stream of what people are saying about the party, reminiscent of Twitch’s interface. Parties can be tagged with a mood and type of music.  Finally, pins of parties will be animated with their animations related to how highly a party is rated as well as the M:F ratio

Allowed moods and music types will be sourced from the moods employed by Google Play music:
・ Aggressive
・ Angry
・ Calm
・ Cheesy
・ Celebratory
・ Confident
・ Dark
・ Energetic
・ Fancy
・ Funky
・ Happy
・ Introspective
・ Mellow
・ Pumped-up
・ Romantic
・ Rowdy
・ Sad
・ Sexy
・ Spacey
・ Trippy

## Functionality and MVP
1. User Authentication
- New user can sign up and optionally do so with their phone number
・ Returning users can Log in and Log out
- Demo Login available 
- Users are not allowed to use certain features without logging in 
2. Main Interface and Eventbrite Seed Data
- Our main page is a google maps view given the user’s current location along with events from Eventbrite that are currently occurring at locations in view on the map
- Clicking a pin on google maps opens a modal view that has the Eventbrite image of the event in the top-right if available

3. Submit Data and Pin Styling
- Users can add pictures of a party and picture uploads are only accepted if user is logged in and location sharing shows the user is at the location of the party within an acceptable margin of error. Pictures are added to the modal with the most recent first.
- Users can add a party thumbs up/down, mood, music type and M:F ratio
- Submission data averages across user submissions is displayed in the modal for each party
- Pins on google map pulsate (a CSS animation) based on percentage of Eventbrite attendee number thumbs ups and ratio of likes/dislikes 

4. Chat Stream (Bonus)
- Text data can be received and streamed to a party’s chat window
- Add a chat stream on the right of an event modal
## Technologies and Technical Challenges
HTML5 / SCSS / MongoDB / Express.js / React.js / Redux / Node / JavaScript / Twilio / Google Maps API / Animate CSS / Eventbrite API / AWS 
#### Anticipated Challenges:
- Getting up to speed with the MERN stack 
- Integrating the MERN stack with Twilio (especially websockets ), Google maps API and AWS
- CSS styling for our modals and especially specific CSS animations we want for our pins
- Getting seed data from Eventbrite’s API
## Things Accomplished Over the Weekend
- Set up file tree structure
- MERN front and backend user Authentication  
- Created wireframe
## Group Members and Work Breakdown

|                   |                                                                                                                       |
|-------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 09.22 - Monday    | **Dirk and Blake:**  Connect the main page with Google Maps API. Query Eventbrite API and retrieve all events at the user’s location that are currently occurring and populate the Google maps view component with these  **EJ and Grace:**  Style login, register pages and the region around the in-progress map component, setting the theme and fonts for the whole page                                                                                                                            |
| 09.23 - Tuesday   | **Dirk and Blake:**  *Finish*   Connect the main page with Google Maps API. Query Eventbrite API and retrieve all events at the user’s location that are currently occurring and populate the Google maps view component with these  *+ create skeleton for functional modals*  **EJ and Grace:**  *Finish*   styling login, register pages and the region around the in-progress map component, setting the theme and fonts for the whole page  *+ Start investigating and styling/animating google maps pins* |
| 09.24 - Wednesday | **Dirk and Blake:**  Complete functional modals where user submitted data is stored in database. Display all available moods for now   **EJ and Grace:**  Finish styling google map pins and their animations for decided criteria. Finish styling google maps view component.                                                                                                                                                                                                                          |
| 09.25 - Thursday  | **Dirk and Blake:**  Add functionality to be able to upload images of a party but only allow if user is at location - images are added to the modal with most recent first  **EJ and Grace:**  Style modal: YouTube-style bar for thumbs-up/thumbs-down, images for different moods, pie-chart of moods users chose, pinterest-style navigation for images users have uploaded                                                                                                                         |
| 09.26 - Friday    | **Team:**  Style modal: YouTube-style bar for thumbs-up/thumbs-down, images for different moods, pie-chart of moods users chose, pinterest-style navigation for images users have uploaded                                                                                                                                                                                                                                                                                                          |
| 09.27 - Saturday  | **Team:**  Add chat stream or debug outstanding issues                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 09.28 - Sunday    | **Team:**  Heroku deployment and debugging of outstanding issues                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 09.29 - Monday    | **Team:**  Production README                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |

## Plan for getting users and reviews
Seed data will be retrieved from eventbrite querying to retrieve all events that are currently happening within a radius from the user’s location (radius being specified by what scale is in view for Google Maps). 
