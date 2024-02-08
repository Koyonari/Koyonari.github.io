# Price.io - Tracking inflation rates across the globe by Yong Shyan and Jake

## Introduction
In response to the escalating global inflation crisis, we, a team of two young developers - An Yong Shyan and Jake Chan Man Lock, has crafted a website for users to navigate this complex economic landscape. Price.io, your interactive portal to real-time data, timely news, and engaging community discussions.

Our platform blends functionality with intuitive design. Explore inflation rates across the globe on our interactive map, stay informed with curated news updates, connect with fellow enthusiasts in our forum, and learn more about our vision on the dedicated About page. Price.io: Bridging the gap between knowledge and action in a world marked by economic uncertainty.

| Page | Description |
| ----------- | ----------- |
| Home | Interactive Map & Quiz |
| News | Grid News Containers  |
| Forum | Discussion Threads & Login Page |
| About | Background information on the website and team |

## Technicalities
Overview: Price.io is a responsive multi-page website using the mobile first approach, tailored for optimal user experience with our user audience being traders, investors, salesmen and everyone in between that has the need to delve deeper into the economics of the world. We have included a quiz section in the home page to boost users' retention rate and to gamify our platform. We utilised Bootstrap’s robust framework for a responsive navigation bar that seamlessly adapts to various screen sizes using a burger menu. Recognizing the growing preference for dark interfaces, we opted for a dark theme that prioritizes eye comfort even during extended screen time as most of our users tend to be glued to the screen for long periods of time. We have also used the 60-30-10 colour rule to make the site more aesthetically pleasing, choosing yellow as the accent colour as it gives users a sense of happiness and profit. Each page header features subtle JavaScript animations, breathing life into the platform. Responsive text sizes (achieved through REM units in CSS) further enhance user comfort across devices. Finally, a responsive footer conveniently anchors every page.

Home: This page serves as your gateway to exploring global inflation trends. Click on supported countries in grey on our interactive SVG world map, and it will turn white while displaying its corresponding name via xlink:title at the bottom. Upon clicking a highlighted country (rendered in grey), an API from API Ninjas retrieves relevant inflation data, displayed in the dedicated bottom box. The power of JavaScript and getElementById makes these interactions possible. Below all these lie an interactive quiz that uses questions in the javascript file, randomly chooses 5 of them and displays them on the test.

News: Stay informed with Price.io’s newsfeed, featuring relevant articles presented in Bootstrap-powered containers. Click on any headline to show the full article within a sleek popup window, possible only with Javascript.

Forum: Engage with the community, discuss relevant topics, explore existing forums, and discover top contributors, all through a dedicated search bar and intuitive login page. Mobile users enjoy an optimized experience, with discussion images and the right-hand side of the screen gracefully adapting to smaller screens. The login page will also check if the password and username is correct. If it is correct, a sign saying "Login Successful!" will be shown, if not, it will be "Login Unsuccessful!".

About: This page unveils the story behind Price.io, introducing our young developer team and the passion that fuels our work.

>#
>### References:
>- World Map SVG: https://simplemaps.com/resources/svg-world
>#
>- Quiz Questions & Answers: https://www.proprofs.com/quiz-school/story.php?title=finance-aptitute-test-sep-2016
>#
>- 1st Profile Picture: https://www.zerochan.net/3228849
>- 2nd Profile Picture: https://twitter.com/jojo_wiki/status/1184378001246449666
>- 3rd Profile Picture: https://danbooru.donmai.us/posts?tags=irene_%28jojo%29
>- 4th Profile Picture: https://deathbattle.fandom.com/wiki/Asta
>- 5th Profile Picture: https://www.superherodb.com/maki-zenin/10-24350/
>- 6th Profile Picture: https://joke-battles.fandom.com/wiki/Jogoat
>- 7th Profile Picture: https://www.pxfuel.com/en/desktop-wallpaper-adgin
>- 8th Profile Picture: https://www.pinterest.com/pin/tsunade--659214464210359963/
>- 9th Profile Picture: https://www.reddit.com/r/FFVIIRemake/comments/j2lqd3/no_spoilers_tifa_by_trnyteal/?rdt=49339
>- 10th Profile Picture: https://pfptown.com/power-pfp
>- 11th Profile Picture: https://www.pinterest.com/pin/jjk-megumi-fushiguro--679199187555631482/
>- 12th Profile Picture: https://www.pxfuel.com/en/desktop-wallpaper-adgin
>#
>- 1st Forum Picture: https://www.freepik.com/vectors/blockchain-logo
>- 2nd Forum Picture: https://www.cryptopolitan.com/1b-in-bitcoin-moved-is-40k-the-next-stop/
>- 3rd Forum Picture: https://animal-world.com/fantail-goldfish/
>- Background picture for forum page: https://www.peakpx.com/en/hd-wallpaper-desktop-eintp
>#
>- 1st news article and stats: https://www.ft.com/content/368c3193-043c-4fef-95a5-751bce4e0699 
>- 2nd news article: https://www.straitstimes.com/world/venezuelas-2023-inflation-hit-nearly-190-but-december-prices-barely-ticked-up
>- 2nd news article stats: https://www.cato.org/blog/results-are-imfs-venezuela-inflation-guesstimate-was-way
>- 3rd news article and stats: https://www.cnbc.com/2024/01/12/deflation-heres-where-prices-fell-in-december-2023-in-one-chart-.html
>- 4th news article: https://www.channelnewsasia.com/business/boj-seen-sticking-forecast-inflation-staying-near-target-sources-say-4043551
>- 5th news article: https://www.businesstimes.com.sg/international/indias-retail-inflation-rises-four-month-high-december-higher-food-prices
>- 6th news article: https://apnews.com/article/inflation-prices-interest-rates-economy-federal-reserve-cf51946cbd00f89509a97ea041b515e6
>- 7th news article and stats: https://www.bbc.com/news/business-67940747
>- 8th news article: https://www.theguardian.com/business/2024/jan/11/bank-of-england-may-cut-interest-rate-sooner-after-surprise-inflation-forecast
>- 9th news article: https://www.theguardian.com/commentisfree/2024/jan/08/australias-cost-of-living-crisis-isnt-about-the-price-of-groceries-its-about-the-distribution-of-wealth
>- 10th news article and stats: https://www.theguardian.com/business/2024/jan/06/uk-businesses-going-bust-covid-brexit
>- 11th news article: https://www.theguardian.com/business/2024/jan/10/danone-to-cut-7-off-wholesale-price-of-powdered-aptamil-baby-formula
>- 12th news article: https://www.businesstimes.com.sg/singapore/economists-expect-mas-stand-pat-january-review-amid-easing-headline-core-inflation
>#
>- All lottie animations: https://app.lottiefiles.com/project/8ec12da1-8c04-4ebd-ab73-2b05ba507d44
>#