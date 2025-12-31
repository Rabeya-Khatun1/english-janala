
# 📖 ENGLISH JANALA

ENGLISH JANALA is a vocabulary learning web application where users can explore English words level-wise, understand meanings, view examples, hear pronunciation, and save words for later practice.  
This project focuses on working with APIs, DOM manipulation, and user-friendly interactions using Vanilla JavaScript.

---

## 🔗 Live Project
👉 Live Link: https://your-live-link.com  

👉 GitHub Repository: https://github.com/Rabeya-Khatun1/english-janala

---

## 🖼️ Project Preview
A simple and clean interface inspired by the provided Figma design.

![Project Screenshot](https://i.ibb.co.com/hJdJq5C3/Screenshot-2025-12-31-104711.png)

---

## 🛠️ Technology Stack
- HTML5  
- CSS3  
- Tailwind CSS  
-  JavaScript  
- Public REST API  

---

## ⚡ API Endpoints

1. Get ⚡ All Levels

```bash
https://openapi.programming-hero.com/api/levels/all
```

1. Get ⚡ Words by Levels <br/>
   https:// openapi.programming-hero.com/api/level/{id}

```bash
https://openapi.programming-hero.com/api/level/5
```

1. Get ⚡ Words Detail <br/>
   https:// openapi.programming-hero.com/api/word/{id}

```bash
https://openapi.programming-hero.com/api/word/5
```

1. Get ⚡ All Words <br/>

```bash
https://openapi.programming-hero.com/api/words/all
```


---

## 🔄 Project Usage Overview (How to Use ENGLISH JANALA)

## When the Project Loads

As soon as the website loads, all Lesson Level buttons (Level 1, Level 2, etc.) are fetched automatically from the API and displayed at the top.

The Vocabulary section initially shows a default instruction message asking the user to select a lesson.

Selecting a Lesson

Clicking on any Lesson button:

Fetches vocabulary words for that specific level from the API

Displays a loading spinner while data is being loaded

Highlights the active lesson button after loading is complete

Viewing Vocabulary Cards

## Each vocabulary card displays:

The word

Meaning and pronunciation

A sound icon to hear pronunciation

A details icon to view more information

A heart icon to save the word

If no words are available for a selected lesson, a “No Word Found” message is shown.

## Viewing Word Details (Modal)

Clicking the details icon opens a modal window.

The modal displays:

The word with pronunciation

An example sentence

Synonyms (if available)

Clicking the “Complete Learning” button closes the modal.

## Using the Search Feature

Typing in the search input filters vocabulary words instantly.

When searching, the active lesson button is reset.

If no matching word is found, a relevant message is displayed.

Saving Vocabulary Words

Clicking the heart icon saves the word.

Saved words appear in a separate Saved Words section for later review.

## Listening to Pronunciation

Clicking the sound icon uses the browser’s Speech Synthesis API to pronounce the selected word.

Handling Errors and Invalid Data

The application safely handles missing, null, or undefined data.

Instead of breaking the UI, it displays user-friendly messages.

## ✅ Simple User Flow

Select Lesson → View Words → Listen / See Details → Search → Save Words → Practice


## ✨ Core Features
- Dynamically loaded lesson levels from API  
- Vocabulary cards displayed based on selected level  
- Active lesson button highlighting  
- Vocabulary details modal with:
- Word pronunciation
- Example sentence
- Synonyms  
- Search functionality to find words instantly  
- Save vocabulary words using heart icon  
- Saved words displayed in a separate section  
- Voice pronunciation using Speech Synthesis API  
- Loading spinner while fetching data  
- Graceful handling of invalid or missing data  

---

## 📚 Functional Overview
- Lesson buttons load automatically on page load  
- Clicking a lesson button fetches and displays words for that level  
- If no words are found, a relevant message is shown  
- Clicking the details icon opens a modal with full word information  
- Search resets the active lesson button  
- Saved words remain visible in the Saved section  
- Sound icon pronounces the selected word  

---
## Dependencies

Tailwind CSS (CDN)

No JavaScript framework or external library used

## 🧠 What I Learned

Fetching and handling API data

Dynamic UI rendering using JavaScript

Modal implementation and state management

Search filtering logic

Handling edge cases like empty or invalid data

Using browser Speech Synthesis API

## 🔊 Voice Pronunciation Feature
The project uses the built-in Speech Synthesis API to pronounce vocabulary words:

```js
function pronounceWord(word) {
const utterance = new SpeechSynthesisUtterance(word);
utterance.lang = "en-EN";
window.speechSynthesis.speak(utterance);
}
