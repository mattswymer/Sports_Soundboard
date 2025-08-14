Baseball Soundboard Pro
=======================

This is a simple, browser-based soundboard designed for baseball events, built with plain HTML, CSS (using Tailwind CSS), and JavaScript. It allows users to import and play custom sound files, with features like fading, AI-powered speech generation, microphone recording, and a drag-and-drop interface.

Features
--------

-   **AI-Powered Speech Generation**: Create custom audio clips from text using the Gemini API. You can select from a variety of voices to generate announcements.

-   **Microphone Recording**: Press and hold the microphone button to record your own audio clips, which are then saved as sound cards.

-   **Customizable Sound Columns**: Two columns, "Announcements" and "Music," for organizing different types of sound clips.

-   **Drag-and-Drop Interface**: Easily add new audio files by dragging them into the designated drop zones.

-   **Click-to-Import**: Alternatively, click on the drop zone to open a file selection dialog.

-   **Playback Controls**: Each sound card includes a play/pause button and a stop button.

-   **Fading Effects**: Toggles are available on each sound card to enable customizable fade-in and fade-out effects when a sound is played or stopped.

-   **Global Fade Out**: A "Fade Out All" button allows you to gracefully stop all currently playing audio tracks and any active AI speech at once.

-   **Drag-and-Drop Reordering**: Rearrange sound cards within a column by dragging them to a new position.

-   **Responsive Design**: The layout adapts to different screen sizes, from mobile to desktop.

How to Use
----------

1.  **Open the File**: Simply open the `Baseball Soundboard Pro.html` file in a modern web browser.

2.  **Allow Microphone Access**: The first time you open the page, your browser will ask for microphone permission. This is necessary for the recording feature. Please click "Allow."

3.  **Add Sounds (AI)**: In the "Quick Audio Generation" section, type a phrase into the text box, select a voice from the dropdown, and click "➕ Add" to create a new sound card with the AI-generated audio.

4.  **Add Sounds (Recording)**: Press and hold the `🎙️` microphone button to start recording. A red pulsing indicator will appear. Release the button to save the recording as a new sound card.

5.  **Add Sounds (Local Files)**: Drag and drop audio files (e.g., MP3, WAV) from your computer into either the "Announcements" or "Music" drop zones. You can also click the drop zone to select files.

6.  **Play Sounds**: Click the ▶ button on a sound card to play the audio. The button will change to a ⏸ icon, which you can click to pause.

7.  **Stop Sounds**: Click the ⏹ button to stop the audio and reset the playback position.

8.  **Adjust Fades**: Use the sliders at the top of the page to set the default fade-in and fade-out times in seconds. You can enable or disable these fades for each individual sound card using the toggles.

9.  **Fade Out All**: Click the "Fade Out All" button to stop all playing sounds simultaneously with a fade-out effect.

10. **Rename/Delete**: Use the ✎ icon to rename a sound card or the 🗑 icon to delete it.

Technical Details
-----------------

-   **HTML5**: Provides the document structure.

-   **Tailwind CSS**: A utility-first CSS framework for rapid styling and a clean, modern look.

-   **JavaScript**: Powers all interactive functionality, including audio playback, drag-and-drop logic, and UI updates.

-   **Gemini API**: Used for the text-to-speech functionality. **Important Note:** To run the AI features locally, you must provide your own API key. Find line **794** in the code and replace the placeholder with your key: `const apiKey = "YOUR_API_KEY_HERE";`.

-   **MediaRecorder API**: Used for the microphone recording feature.
