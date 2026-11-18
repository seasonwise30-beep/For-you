# For You — Animated Lyrics

A responsive static website that plays `song/xxx.mp3` and animates timestamped lyric lines.

## Files
- `index.html` — music player and animated lyrics
- `style.css` — responsive design and animation styles
- `app.js` — audio controls and lyric synchronization
- `lyrics.html` — local lyric editor
- `animations.html` — animation style samples
- `song/xxx.mp3` — supplied audio file

## Run locally
Open `index.html` in a browser. For best results, use a local server (for example VS Code Live Server), because browser audio and local storage behavior can vary when opening files directly.

## Add your lyrics
Open `lyrics.html`. Enter one line per row in this format:

```text
0 | First lyric line
4.2 | Next lyric line
8 | Another lyric line
```

Times are seconds from the start of the audio. Click **Save lyrics to this browser**. This saves them only in that browser. To make the lyrics available to every visitor on GitHub Pages, copy the same entries into `DEFAULT_LYRICS` at the top of `app.js` and commit the file.

The included lyric lines are placeholders, not a transcription of the song. Replace them with lyrics you provide or have permission to publish.

## Publish with GitHub Pages
1. Create a GitHub repository (for example `for-you-lyrics`).
2. Upload all files and the `song` folder, keeping the same structure.
3. Open **Settings → Pages**.
4. Under Build and deployment, choose **Deploy from a branch**, select `main` and `/ (root)`, then Save.
5. Wait for the Pages URL to appear in the Pages settings.

Keep the MP3 in `song/xxx.mp3`; the player expects that exact path.
