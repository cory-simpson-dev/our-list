# Our List

A full-stack to-do list meant for sharing between peers.
## Background

My wife and I often have trouble keeping track of our mutual to-do list 
(i.e. I run out to do chores but don't recall everything she wanted), so Our List was born. Now we have a single URL (Heroku via express) connected to a shared database (MongoDB) that can be updated in real-time with time-stamped chat functionality.
## Technical Journey

I laid the groundwork for Our List with node.js, express, and the EJS templating engine. 
The data is stored in a single collection on a shared MongoDB cluster. The privacy is a non-issue since currently only my wife and I use the application. In essence, it is a rather simple CRUD application with users being able to create and delete task items and post time-stamped messages.

A mobile-first approach was used for the design. Flexbox played a huge factor in keeping the design as simple as possible.

See future considerations for Our List in the Roadmap section below.

## Roadmap

In the near future I hope to implement the following:
- unique instances for individual users (i.e. unique URL for sharing without an account)
- account creation
- private, custom url creation for account users
- improved ux/ui
    - limited chat storage/display with scroll wheel
    - categories for task items (i.e. dropdown for custom categories/section) stored in localstorage

## Changelog
