![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)

# Software Engineering Immersive: Project 2

Second project undertaken during the General Assembly Software Engineering Immersive course (week 6).

---

# Random Phrase Translator

## Brief

Create a frontend using one or more APIs.

## Timeframe & Team

2 days, 2 people pair project along with David Tsui https://github.com/davt49 .

Project is live [here](http://bit.ly/sei-project-2)

![](pics/rptswe.png)


## Technologies
- React
- Axios
- Insomnia
- Webpack
- Bulma
- Git
- Heroku

## Theme

With a fascination for different languages and how commonly spoken words might look in different languages, we decided to build a web app around this concept. 

## Controls

Generate a new random phrase or write your own words/sentence and click submit.

Select the language to which the submitted text should be translated.

## Stack Overview/Process

##### APIs

We used two APIs for this project. The first was Yandex, the translator service that requires sign up to receive a developer key. The second was REST Countries API, which contains a dense subset of information about every country around the world. This includes such things as global coordinates, timezone, currencies, population and many more. 

##### Translation

To successfully carry out the translation of text, Yandex requires a key (provided during sign up) on every request to the API endpoint. Due to the sensitive nature of said key, we opted to store the key in an environment file which is accessible to the 'GET' request code, but not to any possible prying eyes (this is represented in the code snippet screenshot below).

##### Fig. 1 - Sending a GET request to yandex with their required parameters, and then setting the response into state for React to render on the page.

![](pics/translate.png)

##### Fig. 2 - We utilised the REST Countries API to get the country flag to display alongside the translation. The data changes in the state every time a new language is selected.

![](pics/flag.png)

##### Fig. 3 - Each option contains the key used to make the request to the Yandex server.

![](pics/languages.png)

## Wins

We are really happy with the outcome, as it achieves the result we wanted. Adding the second API for the flags is a great addition to the final presentation.

## Challenges and Main Takeaways

Certain countries have very distinct names as opposed to their commonly-known names for the REST Countries API, such as South Korea as Korea (Republic of) and Iran, as Iran (Islamic Republic of) which caused some confusion and required the 'data-name' value to be assigned correctly for each individual country.  

I learned a lot about the benefits and use of 'Webpack' by writing my own config file. In addition using 'Axios' for making GET request to APIs and viewing the wealth of information using Insomnia. This was a very beneficial tool as it allowed us to pick out relevant data from the API. Ultimately, these were very useful technologies that greatly complimented the sites functionality. 

## Future Improvements

Further additions such as an interactive map that puts a marker on the country selected would be a nice addition. A less random phrase selector could also fix the issue that you could see previously seen phrases multiple times without seeing the rest.
