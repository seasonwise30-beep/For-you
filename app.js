/* Edit these sample entries in lyrics.html. Times are seconds from the start. */
const DEFAULT_LYRICS = [
  { time: 0, text: 'Add your first lyric here' },
  { time: 5, text: 'Replace this line with your words' },
  { time: 10, text: 'Every moment deserves its own glow' },
  { time: 15, text: 'Keep the rhythm, feel the story' },
  { time: 20, text: 'Your next lyric goes right here' },
  { time: 25, text: 'Make this song yours' }
];
const audio = document.getElementById('audio');
if (audio) {
  const playBtn = document.getElementById('playBtn');
  const seek = document.getElementById('seekBar');
  const volume = document.getElementById('volumeBar');
  const currentTime = document.getElementById('currentTime');
  const duration = document.getElementById('duration');
  const currentLine = document.getElementById('currentLine');
  const previousLine = document.getElementById('previousLine');
  const nextLine = document.getElementById('nextLine');
  let lyrics = loadLyrics();
  let lastIndex = -1;
  const fmt = s => `${Math.floor((s||0)/60)}:${String(Math.floor((s||0)%60)).padStart(2,'0')}`;
  function loadLyrics(){ try { const saved=localStorage.getItem('forYouLyrics'); return saved?JSON.parse(saved):DEFAULT_LYRICS; } catch { return DEFAULT_LYRICS; } }
  function paint(){
    const t=audio.currentTime||0; let i=-1;
    for(let n=0;n<lyrics.length;n++){if(t>=Number(lyrics[n].time))i=n;else break;}
    if(i!==lastIndex){lastIndex=i;const set=(el,txt)=>el.textContent=txt||' ';previousLine.textContent=i>0?lyrics[i-1].text:'Let the music take over';currentLine.textContent=i>=0?lyrics[i].text:'Press play to begin';nextLine.textContent=lyrics[i+1]?.text||'Add more lines in Lyrics';currentLine.classList.remove('pop');void currentLine.offsetWidth;currentLine.classList.add('pop');}
    currentTime.textContent=fmt(t);if(audio.duration){seek.value=(t/audio.duration)*100;duration.textContent=fmt(audio.duration);}
  }
  playBtn.addEventListener('click',async()=>{if(audio.paused){try{await audio.play();playBtn.textContent='Ⅱ';document.body.classList.add('playing');}catch(e){currentLine.textContent='Audio could not start — check the MP3 file.';}}else{audio.pause();playBtn.textContent='▶';document.body.classList.remove('playing');}});
  audio.addEventListener('timeupdate',paint);audio.addEventListener('loadedmetadata',()=>duration.textContent=fmt(audio.duration));audio.addEventListener('ended',()=>{playBtn.textContent='▶';document.body.classList.remove('playing');});
  seek.addEventListener('input',()=>{if(audio.duration)audio.currentTime=(Number(seek.value)/100)*audio.duration;});
  volume.addEventListener('input',()=>audio.volume=Number(volume.value));audio.volume=.85;
  document.getElementById('restartBtn').addEventListener('click',()=>{audio.currentTime=0;paint();});
  document.getElementById('muteBtn').addEventListener('click',()=>{audio.muted=!audio.muted;document.getElementById('muteBtn').textContent=audio.muted?'×':'♫';});
  window.addEventListener('storage',e=>{if(e.key==='forYouLyrics'){lyrics=loadLyrics();lastIndex=-1;paint();}});
}
