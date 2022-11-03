---
title: Административный протокол
slug: october-hackathon
date: 2022-10-3
author: Автоюрист Сургут
descr: Подробная инструкция по заполнению
tags: []
order: 2
draft: false
past: false
---

Calling all backend and frontend developers to participate in the October Hackathon!

## 🎯 Objective

As a developer advocate at Agora, I am always looking to collaborate with Advocates from other companies. Wouldn't it be nice to have a website I can visit to find other advocates? 

In this hackathon we are gonna work together as backend and frontend developers to fix this issue.

Pick one of the two challenges below and build based off of the parameters set.

## 📆 Important Dates
- Start date: 10/10
- Submission deadline: Not set
- Winners announcement: Not set


## 💰 Prize Money

6 Grand prize winners for a total of $1,500!

✋ How to participate

- Register - <a href="https://codebattles.dev/" target="_blanl">CodeBattles.dev</a>
- Pick a challange
- Submit project before deadline


<br>

### ⚙️ Challenge 1 - 💻 For Backend Devs

<br>

💰  Prize money: $200 - 5 winners will be selected

Build an API that outputs a list of developer advocates with their details such as where they work, social links, bio, etc.

**Project Requirements**

Your API should at a minumum have these 4 endpoints

1. `/advocates`
2. `/advocates/:id`
3. `/companies`
4. `/companies/:id`

Your API should be searchable (By user name), paginated.

Ex: 

`/advocates/?query=dennis&limit=20&page=2`

Your endpoints should provide links to user profile pictures and company logos.

User Data Ex:

```json
// advocates/:id
{
    "id":1,
    "name":"Dennis Ivy",
    "profile_pic":"/user_pic.png",
    "short_bio":"...",
    "long_bio":"...",
    "advocate_years_exp":1,
    "company":{
        "id":6,
        "name":"Agora",
        "logo":"agora_logo.png",
        "href":"/companies/6",
    },
    "links":{
        "youtube":"youtube.com/username",
        "twitter":"twitter.com/username",
        "github":"github.com/username",
    }
}
```

Company Data Ex:

```json
// companies/:id
{
    "id":6,
    "name":"Agora",
    "logo":"agora_logo.png",
    "summary":"...",
    "advocates":[
        {...},
        {...},
        {...},
    ]
}
```

**Submission Requirements**

- Github link
- Live URL - API must be hosted
- Publicly accessible - Configure CORS so I can make requests
- Tag Agora on Twitter OR Linkedin

🧑‍⚖️ What Judges Are Looking For

Judges are looking for an API that works and follows the REST standard. If these 2 parameters are met, your name will be entered into a raffle for a chance to win $200. 5 winners will be chosen.

<br>

### ⚙️ Challenge 2 - 🎨 For Frontend Devs & Designers

<br>

💰  Prize money: $500 - 1 winner will be selected

Using the the data provided in this link (<a href="https://cados.up.railway.app/" target="_blank">cados.up.railway.app</a>), design and code up a template which consumes the API.

Your website should at a minumum have these 4 pages

1. `/advocates`
2. `/advocates/:id`
3. `/companies`
4. `/companies/:id`

`Requirements`

- Github link
- Live URL
- 4 Pages
- Searchable. Ex: `?advocates?query=dennis`

🧑‍⚖️ What Judges Are Looking For

Judges are looking for the BEST design and most usable template (clean code). The winning template will be used in a live project to complete the website "cados.dev".