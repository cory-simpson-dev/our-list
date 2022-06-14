# Our List

A full-stack to-do list meant for sharing between peers.
## Background

My wife and I often have trouble keeping track of our mutual to-do list 
(i.e. I run out to do chores but don't recall everything she wanted), so Our List was born. Now we have a single URL (Heroku via express) connected to a shared database (MongoDB) that can be updated in real-time with time-stamped chat functionality.
## Technical Journey

I laid the groundwork for Our List with node.js, express, and the EJS templating engine. 
The data is stored in a single collection on a shared MongoDB cluster. The privacy is a non-issue since currently only my wife and I use the application. In essence, it is a rather simple CRUD application with users being able to create and delete task items and post time-stamped messages.

A mobile-first approach was used for the design. Flexbox played a huge factor in keeping the design as simple as possible. The single page design started with a chat at the bottom, and the toggle-able lists in the mid-top section. An additional form was created so the form interface of each list wasn't crowded. To stay true to my original objective of building a simple application, I decided to add yet another category section to the to-do list. 

To prevent the user from being directed to the initial ejs render, localStorage is utilized to save the last category selected by them. On load, the page that is sitting in the localStorage item 'category' will be rendered.

See future considerations for Our List in the Roadmap section below.

## Roadmap

In the near future I hope to implement the following:
- unique instances for individual users (i.e. unique URL for sharing without an account)
- account creation
- private, custom url creation for account users
- improved ux/ui
    - limited chat storage/display with scroll wheel

## Changelog

2022/06/13:

- added additional grocery categories to be sorted by
- improved design

2022/06/12:

- added category selection for grocery items to be sorted (not yet connected to db)
- worked on wirerframe across different media screen sizes
- separated to-do and grocery sections to be visible with applicable inputs present via localStorage

2022/06/11:

- improved chat history (scroll wheel starts at bottom)
- created category selection for tasks section
- linked reset.css
- implemented design wireframe