# Role Dashboard Coding Challenge

This is a Ruby on Rails and React fullstack coding challenge. You are given a spec for a handful of models and their associations with each other that will be used to display a user's dashboard. Your goal is to create the API to serve data to the client and to create components to display the data.

## Overview

This repo has split into two subdirectories:

- `dashboard-api`: a fresh Rails install set to API mode
- `dashboard-client`: a fresh Create React App install with an empty `DashboardPage` component.

This challenge is broken up into 2 parts ordered in priority and setup to enable you to complete it within 4 hours. Regardless of how far you get, you are not required to spend more than 4 hours working on it.

## Part 1: The API

You will create a RESTful JSON API for accessing users, sheets, and tables from a dashboard.

### Setup

You will need Ruby, Rails, and PostgeSQL to complete this. Below are instructions to install everything you need:

- Install [Homebrew](https://brew.sh/).
- Install Ruby v2.7.1. You can use [Ruby Version Manager (RVM)](https://rvm.io/rvm/install).
- Install PostreSQL: `brew install postgres`
- Intall Bundler: `gem install bundler`
- Run `rails server -p 3001` to start your server at [http://localhost:3001](http://localhost:3001)

### Requirements

- You will setup models representing a User, Sheet, and Table. Their attributes can be found below.
- A sheet belongs to one user that created it.
- A table belongs to one user that created it.
- A sheet can be added to many tables.
- A user can join many tables.
- No auth is required, you may assume hitting an endpoint is allowed by whoever is requesting it.
- Your API should only except json requests.
- How you create your requests and serialize data is up to you. No caching is required.
- You may add any gems you would like to complete the challenge.

### Models

These models and attributes represent the minimum required to complete this challenge. You are welcome to add models and/or attributes as you see fit.

**User**

| Attibute   | Type                                                                |
| ---------- | ------------------------------------------------------------------- |
| `email`    | `string NOT NULL`                                                   |
| `username` | `string NOT NULL` length between 2-30 characters, alphanumeric only |

**Sheet**

| Attibute  | Type                                              |
| --------- | ------------------------------------------------- |
| `name`    | `string NOT NULL` length between 1-255 characters |
| `creator` | `User NOT NULL`                                   |

**Table**

| Attibute         | Type                                              |
| ---------------- | ------------------------------------------------- |
| `name`           | `string NOT NULL` length between 1-255 characters |
| `game`           | `string NULLABLE`                                 |
| `host`           | `User NOT NULL`                                   |
| `last_played_at` | `datetime`                                        |

## Part 2: The Client

You will create components for displaying a user's dashboard.

### Setup

- Install Node v12.14.0. If using NVM: `nvm install v12.14.0`.
- Install yarn: `npm install --global yarn`
- Run `yarn install`.
- Run `yarn start` to start the server at [http://localhost:3000](http://localhost:3000).

### Requirements

- You may assume the first user in your database is the current authed user.
- Your dashboard should fetch the current user's profile and display a welcome message to their username.
- Your dashboard should fetch the list of the current user's tables and for each one display its name, formatted last played at date, and list of joined users by username.
- Your dashboard should fetch the list of the current user's sheets and for each one display its name and what tables it has been added to.
- You may add any additional packages you would like.

## Submitting Your Solution

Create a zip of your final solution, removing any `.git` and `node_modules` directories, and email it to ian@playrole.com.
