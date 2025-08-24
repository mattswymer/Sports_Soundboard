Sports Soundboard Pro
=======================

A professional, browser-based soundboard designed for live sports events, podcasts, or any situation where you need quick access to high-quality audio clips, announcements, and music.

✨ Features
----------

-   **Two-Column Layout:** Organize your sounds into "Announcements" and "Music" for easy access.

-   **Multiple Audio Sources:**

    -   **Upload:** Add your own audio files (`.mp3`, `.wav`, `.ogg`, etc.).

    -   **Text-to-Speech (TTS):** Generate spoken announcements on the fly.

    -   **Microphone Recording:** Record short clips directly in the app.

-   **Advanced Audio Controls:**

    -   Individual volume control for each sound.

    -   Global Fade In and Fade Out controls.

    -   Individual toggles for fade effects on each clip.

    -   "Fade Out All" button to smoothly silence all playing audio.

-   **Persistent Storage:** All your uploaded sounds, recordings, and generated clips are saved in your browser using IndexedDB, so they'll be there the next time you open the app.

-   **Drag & Drop:** Easily upload files and reorder your sound cards within and between columns.

-   **Waveform Visualization:** See a visual representation of your audio clips, and click to seek to a specific point.

🚀 How to Use
-------------

### 1\. Adding Sounds

You have three ways to add sounds to the board:

-   **Upload Files:**

    1.  **Drag and drop** your audio files directly onto either the "Announcements" or "Music" columns.

    2.  Alternatively, **click inside the dashed-line box** to open a file selection dialog and choose one or more audio files.

-   **Generate Speech (Text-to-Speech):**

    1.  Type the text you want to be spoken into the input field at the top (e.g., "Now batting, number 42...").

    2.  Select a voice from the dropdown menu.

    3.  Click **🔊 Preview** to hear it, or click **➕ Add** to add it as a new sound card in the "Announcements" column.

-   **Record from Microphone:**

    1.  **Click and hold** the **🎙️** button. Your browser may ask for microphone permission the first time.

    2.  Speak into your microphone.

    3.  **Release the button** to stop recording. The clip will be automatically saved and added to the "Announcements" column.

### 2\. Playing and Controlling Sounds

-   **Play/Pause:** Click the **▶** button to play a sound. It will turn into a **⏸** button, which you can click to pause.

-   **Stop:** Click the **⏹** button to stop the audio immediately (or fade it out if the "Fade Out" toggle is enabled).

-   **Volume:** Use the volume slider on each audio card to adjust its volume independently.

-   **Fade Effects:** Use the "Fade In" and "Fade Out" toggles on each card to control whether it uses the global fade settings when playing or stopping.

-   **Global Fade:** Adjust the **Fade In (s)** and **Fade Out (s)** sliders at the top right to control the duration for all fade effects.

-   **Fade Out All:** Click the **Fade Out All** button to smoothly stop every sound that is currently playing.

### 3\. Managing Sounds

-   **Reorder:** Click and drag any sound card using the **⋮⋮** handle to move it to a new position, either within its current column or to the other column.

-   **Rename:** Click the **✎** (pencil) icon on a card to enter a new name.

-   **Delete:** Click the **✖** icon on a card to permanently delete it. A confirmation will be required.

### A Note on Voices

The Text-to-Speech (TTS) feature uses the voices that are built directly into your operating system (like Windows or macOS) or your web browser (like Chrome or Edge). The list of available voices in the dropdown menu is provided by your device, not the app itself. This means the selection of voices and their quality can vary from one computer to another.
