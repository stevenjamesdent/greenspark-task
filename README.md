Created by Steven James Dent for Greenspark interview task.

Production-ready code has been deployed on Vercel for easy viewing, [take a look at it here](https://greenspark-task-sdent.vercel.app/).

Or to set run locally:
--------------------------------------
To run the development server and watch tasks:
```bash
npm install
# then
npm run dev
```

To build for production and run:
```bash
npm install
# then
npm run build
# then
npm run start
```

Methodology, Decisions, and Notes:
--------------------------------------
I've chosen to use React + TypeScript + NextJS for this task. React is my usual route of choice and I felt that it was important to show my experience with TypeScript. I chose to go the NextJS route because I considered that there may be additional enhancements for this task further into the interview process - in which case I expected that the features of NextJS, such as the routing system, might come in handy down the line.

For styling, you'll see that the project uses a combination of both SCSS Modules for more bespoke or complex styling, as well as an incorporation of TailwindCSS. I chose to use Tailwind because I feel it can be a powerful tool to help speed development and cut-down on repetition across simple layouts.

The majority of the implementation is custom and from-scratch, with the exception of the tooltips. While there was some customisation here, I chose to use a third-party library called [FloatingUI](https://floating-ui.com/). I chose this approach because I feel that it's important to recognise when a well established third-party asset is more appropriate than coding something from scratch. I could have made my own tooltip component for this, however it would not have been as versatile or as refined as what this library allowed me to implement. Why reinvent the wheel when talented opensource developers have already done more research, development, and QA than you could afford to give one small aspect of a UI on your own, especially given considerations for timelines and resource.

I believe my implementation closely matches the designs and specs provided. I did make a couple of small changes to the colour picker UI. When I came to implement this section I found that the lighter colours (beige and white) were barely discernable from the background of the page/block. I felt that this presented a minor accessibility issue, so I chose to add a subtle border to the coloured squares, as well as a subtle drop-shadow on hover. This means that the lighter colours carry as much weight as the darker ones and are more noticeable for visually-impaired users. Usually I would speak to the designer and/or stakeholders before deviating from designs, however without that point of contact in this instance I chose to take the initiative.