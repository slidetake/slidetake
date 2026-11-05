/* Slidetake 0.4.5 · https://slidetake.com · Apache-2.0 */
"use strict";(()=>{var V=(e,t)=>()=>(e&&(t=e(e=0)),t);var go,Dr=V(()=>{go=`---
title: Slidetake \u2014 write in markdown with AI, record without timeline editing
description: "Write a deck in markdown, with AI, present it on a spatial canvas, and record it slide by slide: retake any slide, pick the best take, download the video. Open source."
brand: slidetake
pip: bottom-right
---

<!-- camera: on, full, on -->

# ![](/favicon.svg) Slide<span class="st-take">take</span>

\`\`\`svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 290" font-family="IBM Plex Sans, system-ui, sans-serif">
  <defs>
    <marker id="head" viewBox="0 0 10 10" refX="8" refY="5" markerUnits="userSpaceOnUse" markerWidth="11" markerHeight="11" orient="auto-start-reverse">
      <path d="M0 0 L10 5 L0 10 z" style="fill:var(--accent)"/>
    </marker>
  </defs>

  <!-- four panels -->
  <g style="fill:var(--accent);fill-opacity:.06;stroke:var(--accent);stroke-opacity:.45" stroke-width="1.5">
    <rect x="14" y="10" width="212" height="270" rx="18"/>
    <rect x="254" y="10" width="212" height="270" rx="18"/>
    <rect x="494" y="10" width="212" height="270" rx="18"/>
    <rect x="734" y="10" width="212" height="270" rx="18"/>
  </g>
  <g fill="none" style="stroke:var(--accent)" stroke-width="2.5" marker-end="url(#head)">
    <path d="M228 110 H251"/><path d="M468 110 H491"/><path d="M708 110 H731"/>
  </g>

  <!-- write: a markdown file, and the AI writing it -->
  <rect x="66" y="36" width="104" height="140" rx="11" style="fill:var(--node-bg);stroke:var(--accent)" stroke-width="2"/>
  <g font-family="IBM Plex Mono, monospace" font-size="13" font-weight="600" style="fill:var(--accent)">
    <text x="78" y="62">#</text><text x="78" y="112">##</text>
  </g>
  <g style="fill:var(--text-muted)" opacity=".55">
    <rect x="92" y="53" width="52" height="9" rx="4.5"/>
    <rect x="78" y="74" width="80" height="6" rx="3"/><rect x="78" y="86" width="60" height="6" rx="3"/>
    <rect x="100" y="103" width="46" height="9" rx="4.5"/>
    <rect x="78" y="124" width="80" height="6" rx="3"/><rect x="78" y="136" width="68" height="6" rx="3"/><rect x="78" y="148" width="50" height="6" rx="3"/>
  </g>
  <path d="M176 28 l6 14 14 6 -14 6 -6 14 -6 -14 -14 -6 14 -6z" style="fill:var(--accent)"/>

  <!-- present: cards on a path, the one on screen framed -->
  <g fill="none" style="stroke:var(--accent);stroke-opacity:.6" stroke-width="2">
    <path d="M310 58 H320 M358 58 H368 M387 71 V92 M406 105 H416"/>
  </g>
  <g style="fill:var(--accent);fill-opacity:.12;stroke:var(--accent);stroke-opacity:.7" stroke-width="1.5">
    <rect x="272" y="45" width="38" height="26" rx="6"/><rect x="320" y="45" width="38" height="26" rx="6"/>
    <rect x="368" y="45" width="38" height="26" rx="6"/><rect x="368" y="92" width="38" height="26" rx="6"/>
    <rect x="416" y="92" width="38" height="26" rx="6"/>
  </g>
  <rect x="358" y="82" width="58" height="46" rx="9" fill="none" style="stroke:var(--accent)" stroke-width="3"/>
  <rect x="368" y="92" width="38" height="26" rx="6" style="fill:var(--accent);fill-opacity:.45"/>
  <g style="fill:var(--text-muted)" font-size="12">
    <text x="272" y="156">\u2192 walks the path</text><text x="272" y="174">O zooms out to all</text>
  </g>

  <!-- record: the red dot, in either mode -->
  <circle cx="600" cy="62" r="24" fill="none" stroke="#ef4444" stroke-opacity=".45" stroke-width="2"/>
  <circle cx="600" cy="62" r="14" fill="#ef4444"/>
  <g font-size="13" text-anchor="middle">
    <rect x="522" y="102" width="156" height="30" rx="15" style="fill:var(--node-bg)"/>
    <rect x="522" y="102" width="156" height="30" rx="15" style="fill:var(--accent);fill-opacity:.12;stroke:var(--accent)" stroke-width="1.5"/>
    <text x="600" y="122" fill="currentColor"><tspan font-weight="600">Easy</tspan> \xB7 Chrome</text>
    <rect x="522" y="142" width="156" height="30" rx="15" style="fill:var(--accent);fill-opacity:.06;stroke:var(--accent);stroke-opacity:.6" stroke-width="1.5"/>
    <text x="600" y="162" fill="currentColor"><tspan font-weight="600">Pro</tspan> \xB7 OBS</text>
  </g>

  <!-- edit: pick a take, get the video -->
  <g font-size="12" text-anchor="middle">
    <rect x="752" y="36" width="96" height="27" rx="8" fill="none" style="stroke:var(--text-muted);stroke-opacity:.6" stroke-width="1.5" stroke-dasharray="4 4"/>
    <text x="800" y="54" style="fill:var(--text-muted)">Take 1</text>
    <rect x="752" y="72" width="96" height="27" rx="8" style="fill:var(--node-bg)"/>
    <rect x="752" y="72" width="96" height="27" rx="8" style="fill:var(--accent);fill-opacity:.15;stroke:var(--accent)" stroke-width="2"/>
    <text x="800" y="90" fill="currentColor">Take 2 \u2713</text>
  </g>
  <path d="M850 86 C878 86 884 96 884 108" fill="none" style="stroke:var(--accent)" stroke-width="2.5" marker-end="url(#head)"/>
  <rect x="836" y="112" width="92" height="60" rx="10" style="fill:var(--node-bg);stroke:var(--accent)" stroke-width="2"/>
  <path d="M874 130 l16 12 -16 12z" style="fill:var(--accent)"/>

  <!-- the steps -->
  <g text-anchor="middle" fill="currentColor">
    <text x="120" y="222" font-size="20" font-weight="700">Write</text>
    <text x="120" y="248" font-size="14" style="fill:var(--text-muted)">in markdown, with AI</text>
    <text x="360" y="222" font-size="20" font-weight="700">Present</text>
    <text x="360" y="248" font-size="14" style="fill:var(--text-muted)">on a spatial canvas</text>
    <text x="600" y="222" font-size="20" font-weight="700">Record</text>
    <text x="600" y="248" font-size="14" style="fill:var(--text-muted)">slide by slide, retake any</text>
    <text x="840" y="222" font-size="20" font-weight="700">Edit</text>
    <text x="840" y="248" font-size="14" style="fill:var(--text-muted)">just pick the best take</text>
  </g>
</svg>
\`\`\`

<p style="text-align:center">For developers and technical educators who explain things on video. You're inside a Slidetake deck right now.</p>

### \u23F1\uFE0F Hours, not days

A video that takes two or three days to script, record and edit takes a couple of hours: an AI writes the deck, you record it slide by slide, and pick the best take of each in Studio. What comes out is ready to upload.

## \u270D\uFE0F Write in markdown, with AI {#ai}

\`\`\`svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 380" font-family="IBM Plex Sans, system-ui, sans-serif">
  <defs>
    <filter id="glow" x="-30%" y="-30%" width="160%" height="160%">
      <feGaussianBlur stdDeviation="9"/>
    </filter>
    <marker id="head" viewBox="0 0 10 10" refX="8" refY="5" markerUnits="userSpaceOnUse" markerWidth="11" markerHeight="11" orient="auto-start-reverse">
      <path d="M0 0 L10 5 L0 10 z" style="fill:var(--accent)"/>
    </marker>
  </defs>

  <!-- the four steps -->
  <g>
    <rect x="16" y="40" width="196" height="150" rx="18" style="fill:var(--accent);fill-opacity:.06;stroke:var(--accent);stroke-opacity:.45" stroke-width="1.5"/>
    <path d="M114 70 l7 17 17 7 -17 7 -7 17 -7 -17 -17 -7 17 -7z" style="fill:var(--accent)"/>
    <text x="114" y="150" text-anchor="middle" font-size="19" font-weight="600" fill="currentColor">Claude Code</text>
    <text x="114" y="173" text-anchor="middle" font-size="13" style="fill:var(--text-muted)">or any AI agent</text>
  </g>
  <g>
    <rect x="262" y="34" width="196" height="162" rx="18" style="fill:var(--accent)" filter="url(#glow)" opacity=".1"/>
    <rect x="262" y="40" width="196" height="150" rx="18" style="fill:var(--node-bg)"/>
    <rect x="262" y="40" width="196" height="150" rx="18" style="fill:var(--accent);fill-opacity:.12;stroke:var(--accent)" stroke-width="2.5"/>
    <path d="M343 66 h26 l12 12 v34 h-38z" fill="none" style="stroke:var(--accent)" stroke-width="2.5" stroke-linejoin="round"/>
    <path d="M369 66 v12 h12" fill="none" style="stroke:var(--accent)" stroke-width="2.5" stroke-linejoin="round"/>
    <text x="360" y="150" text-anchor="middle" font-size="19" font-weight="600" font-family="IBM Plex Mono, monospace" fill="currentColor">deck.md</text>
    <text x="360" y="173" text-anchor="middle" font-size="13" style="fill:var(--text-muted)">text, dot, d2, echarts, svg</text>
  </g>
  <g>
    <rect x="508" y="40" width="196" height="150" rx="18" style="fill:var(--accent);fill-opacity:.06;stroke:var(--accent);stroke-opacity:.45" stroke-width="1.5"/>
    <rect x="577" y="68" width="58" height="44" rx="7" fill="none" style="stroke:var(--accent)" stroke-width="2.5"/>
    <path d="M588 82 l9 8 -9 8 M601 99 h12" fill="none" style="stroke:var(--accent)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
    <text x="606" y="150" text-anchor="middle" font-size="19" font-weight="600" font-family="IBM Plex Mono, monospace" fill="currentColor">npx slidetake</text>
    <text x="606" y="173" text-anchor="middle" font-size="13" style="fill:var(--text-muted)">serves it, watches the file</text>
  </g>
  <g>
    <rect x="754" y="40" width="190" height="150" rx="18" style="fill:var(--accent);fill-opacity:.06;stroke:var(--accent);stroke-opacity:.45" stroke-width="1.5"/>
    <rect x="818" y="66" width="62" height="46" rx="7" fill="none" style="stroke:var(--accent)" stroke-width="2.5"/>
    <path d="M818 78 h62" style="stroke:var(--accent)" stroke-width="2.5"/>
    <circle cx="826" cy="72" r="1.8" style="fill:var(--accent)"/><circle cx="833" cy="72" r="1.8" style="fill:var(--accent)"/>
    <rect x="828" y="86" width="22" height="16" rx="3" style="fill:var(--accent);fill-opacity:.55"/>
    <text x="849" y="150" text-anchor="middle" font-size="19" font-weight="600" fill="currentColor">Chrome</text>
    <text x="849" y="173" text-anchor="middle" font-size="13" style="fill:var(--text-muted)">redraws the slide you're on</text>
  </g>

  <!-- forward: write, save, reload -->
  <path d="M214 115 H256" fill="none" style="stroke:var(--accent)" stroke-width="3" marker-end="url(#head)"/>
  <path d="M460 115 H502" fill="none" style="stroke:var(--accent)" stroke-width="3" marker-end="url(#head)"/>
  <path d="M706 115 H748" fill="none" style="stroke:var(--accent)" stroke-width="3" marker-end="url(#head)"/>
  <text x="237" y="104" text-anchor="middle" font-size="12" style="fill:var(--text-muted)">writes</text>
  <text x="483" y="104" text-anchor="middle" font-size="12" style="fill:var(--text-muted)">saved</text>
  <text x="729" y="104" text-anchor="middle" font-size="12" style="fill:var(--text-muted)">reloads</text>

  <!-- back: you ask for a change -->
  <path d="M849 196 C849 300 780 330 480 330 C180 330 114 300 114 202" fill="none" style="stroke:var(--accent)" stroke-width="2.5" stroke-dasharray="7 7" marker-end="url(#head)"/>
  <rect x="300" y="306" width="360" height="48" rx="24" style="fill:var(--node-bg)"/>
  <rect x="300" y="306" width="360" height="48" rx="24" style="fill:var(--accent);fill-opacity:.12;stroke:var(--accent)" stroke-width="1.5"/>
  <text x="480" y="336" text-anchor="middle" font-size="16" fill="currentColor">You: <tspan font-style="italic">\u201Cmake the chart a donut\u201D</tspan></text>
  <text x="480" y="22" text-anchor="middle" font-size="13" font-weight="600" letter-spacing="2" style="fill:var(--accent)">EACH ROUND TRIP TAKES SECONDS</text>
</svg>
\`\`\`

Ask your AI for a change, and see it on the slide you're on in seconds.

### Real diagrams and charts, as text

AI already writes **Graphviz**, **D2**, **ECharts** and **SVG** well, so they arrive in the same reply as the words, drawn in your deck's colours for dark and light, and changed by asking. The diagram before this slide is one: SVG inside the markdown. Headings, lists, tables, code, steps, images and YouTube links too: [see them all in the showcase \u2192](/showcase)

### Fewer tokens, nothing to fix

The AI writes only content: headings, text and a few comments. Slidetake does the rest: card sizes, the map, the camera moves. No CSS or layout code to generate, and none to repair.

### A few comments do the rest

Markdown has no word for "reveal one at a time" or "move the camera", so a handful of HTML comments say it. They stay invisible anywhere else markdown is read:

\`\`\`md
<!-- steps -->            \u2190 one press each
<!-- camera: full, on --> \u2190 move the camera
<!-- view: overview -->   \u2190 the map first
<!-- view: full -->       \u2190 a big image
\`\`\`

## \u{1F5FA}\uFE0F Present on a spatial canvas

<!-- view: overview -->

\`\`\`dot
digraph {
  rankdir=LR  nodesep=0.25  ranksep=0.7
  node [shape=box style=rounded margin="0.3,0.1" fontsize=16 fontname="IBM Plex Mono"]
  edge [arrowsize=0.7]
  talk [label="# Talk"]  why [label="## Why"]  how [label="## How"]
  demo [label="## Demo"]  detail [label="### Detail"]
  talk -> {why how demo}
  why -> detail
}
\`\`\`

Your headings are the hierarchy: \`#\` is the first card, \`##\` branches from it, \`###\` goes a level deeper. Slidetake lays it out as a map you move through: \u2192 walks the path, and **O** zooms out to the whole talk, as this slide just did. The diagram is Graphviz, written as text in the deck.

### The camera is part of the deck

<!-- camera: on, full, on -->

A comment in a slide moves you: corner, full screen, or off. Turn on **Camera** and watch this slide do it.

### Your colours

One line, \`accent: "#3b82f6"\`, gives a deck its own colour, shaded for dark and light. On your website, decks wear your site's palette.

\`brand:\` and \`logo:\` put your name and logo in the corner of every slide, so every frame of the video carries them.

## \u{1F534} Record slide by slide

\`\`\`svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 190" font-family="IBM Plex Sans, system-ui, sans-serif">
  <!-- easy mode -->
  <rect x="14" y="10" width="452" height="170" rx="18" style="fill:var(--accent);fill-opacity:.1;stroke:var(--accent)" stroke-width="2"/>
  <rect x="38" y="52" width="92" height="68" rx="9" fill="none" style="stroke:var(--accent)" stroke-width="2.5"/>
  <path d="M38 70 H130" style="stroke:var(--accent)" stroke-width="2.5"/>
  <circle cx="48" cy="61" r="2.2" style="fill:var(--accent)"/><circle cx="57" cy="61" r="2.2" style="fill:var(--accent)"/>
  <circle cx="84" cy="95" r="10" fill="#ef4444"/>
  <text x="156" y="58" font-size="21" font-weight="700" style="fill:var(--accent)">Easy mode</text>
  <text x="156" y="88" font-size="15" fill="currentColor">Chrome or Edge, nothing to install</text>
  <text x="156" y="114" font-size="15" fill="currentColor">The deck records itself: slides and</text>
  <text x="156" y="136" font-size="15" fill="currentColor">camera in one 16:9 frame, at 1080p</text>

  <!-- pro mode -->
  <rect x="494" y="10" width="452" height="170" rx="18" style="fill:var(--accent);fill-opacity:.06;stroke:var(--accent);stroke-opacity:.5" stroke-width="1.5"/>
  <circle cx="564" cy="86" r="36" fill="none" style="stroke:var(--accent)" stroke-width="2.5"/>
  <circle cx="564" cy="86" r="10" fill="#ef4444"/>
  <text x="626" y="58" font-size="21" font-weight="700" style="fill:var(--accent)">Pro mode</text>
  <text x="626" y="88" font-size="15" fill="currentColor">OBS Studio, from any browser</text>
  <text x="626" y="114" font-size="15" fill="currentColor">The deck starts and stops it, and</text>
  <text x="626" y="136" font-size="15" fill="currentColor">drives every slide: you only talk</text>
</svg>
\`\`\`

Press **<span class="st-rec">\u25CF Record</span>** (R). **Every slide is a take:** stumbled? Press \u2190 and say it again. Every attempt is kept, and recording carries on.

## \u2702\uFE0F Edit by picking the best take

\`\`\`svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 360" font-family="IBM Plex Sans, system-ui, sans-serif">
  <defs>
    <marker id="head" viewBox="0 0 10 10" refX="8" refY="5" markerUnits="userSpaceOnUse" markerWidth="11" markerHeight="11" orient="auto-start-reverse">
      <path d="M0 0 L10 5 L0 10 z" style="fill:var(--accent)"/>
    </marker>
  </defs>
  <text x="480" y="20" text-anchor="middle" font-size="13" font-weight="600" letter-spacing="2" style="fill:var(--accent)">EVERY ATTEMPT IS KEPT \xB7 PICK ONE PER SLIDE</text>

  <!-- slide headers -->
  <g font-size="15" font-weight="600" text-anchor="middle" fill="currentColor">
    <text x="140" y="56">Slide 1</text><text x="380" y="56">Slide 2</text><text x="620" y="56">Slide 3</text><text x="860" y="56">Slide 4</text>
  </g>

  <!-- takes: picked ones in the accent, the rest faded -->
  <g font-size="14" text-anchor="middle">
    <rect x="55" y="72" width="170" height="40" rx="10" style="fill:var(--node-bg)"/>
    <rect x="55" y="72" width="170" height="40" rx="10" style="fill:var(--accent);fill-opacity:.12;stroke:var(--accent)" stroke-width="2"/>
    <text x="140" y="97" fill="currentColor">Take 1 \u2713</text>

    <rect x="295" y="72" width="170" height="40" rx="10" fill="none" style="stroke:var(--text-muted);stroke-opacity:.5" stroke-width="1.5" stroke-dasharray="5 4"/>
    <text x="380" y="97" style="fill:var(--text-muted)">Take 1</text>
    <text x="380" y="134" font-size="13" font-weight="600" style="fill:var(--accent)">\u2190 again</text>
    <rect x="295" y="146" width="170" height="40" rx="10" style="fill:var(--node-bg)"/>
    <rect x="295" y="146" width="170" height="40" rx="10" style="fill:var(--accent);fill-opacity:.12;stroke:var(--accent)" stroke-width="2"/>
    <text x="380" y="171" fill="currentColor">Take 2 \u2713</text>

    <rect x="535" y="72" width="170" height="40" rx="10" style="fill:var(--node-bg)"/>
    <rect x="535" y="72" width="170" height="40" rx="10" style="fill:var(--accent);fill-opacity:.12;stroke:var(--accent)" stroke-width="2"/>
    <text x="620" y="97" fill="currentColor">Take 1 \u2713</text>

    <rect x="775" y="72" width="170" height="40" rx="10" fill="none" style="stroke:var(--text-muted);stroke-opacity:.5" stroke-width="1.5" stroke-dasharray="5 4"/>
    <text x="860" y="97" style="fill:var(--text-muted)">Take 1</text>
    <text x="860" y="134" font-size="13" font-weight="600" style="fill:var(--accent)">\u2190 again</text>
    <rect x="775" y="146" width="170" height="40" rx="10" fill="none" style="stroke:var(--text-muted);stroke-opacity:.5" stroke-width="1.5" stroke-dasharray="5 4"/>
    <text x="860" y="171" style="fill:var(--text-muted)">Take 2</text>
    <text x="860" y="208" font-size="13" font-weight="600" style="fill:var(--accent)">\u2190 again</text>
    <rect x="775" y="220" width="170" height="40" rx="10" style="fill:var(--node-bg)"/>
    <rect x="775" y="220" width="170" height="40" rx="10" style="fill:var(--accent);fill-opacity:.12;stroke:var(--accent)" stroke-width="2"/>
    <text x="860" y="245" fill="currentColor">Take 3 \u2713</text>
  </g>

  <!-- the picked takes, joined -->
  <g fill="none" style="stroke:var(--accent)" stroke-width="2" marker-end="url(#head)">
    <path d="M140 114 V292"/><path d="M380 188 V292"/><path d="M620 114 V292"/><path d="M860 262 V292"/>
  </g>
  <rect x="20" y="298" width="920" height="44" rx="12" style="fill:var(--accent);fill-opacity:.18;stroke:var(--accent)" stroke-width="2"/>
  <g style="stroke:var(--accent)" stroke-width="2"><path d="M260 298 V342 M500 298 V342 M740 298 V342"/></g>
  <g font-size="14" fill="currentColor" font-family="IBM Plex Mono, monospace">
    <text x="36" y="325">0:00 Slide 1</text><text x="276" y="325">Slide 2</text><text x="516" y="325">Slide 3</text><text x="756" y="325">Slide 4</text>
  </g>
  <text x="924" y="325" text-anchor="end" font-size="13" font-weight="600" style="fill:var(--accent)">one video</text>
</svg>
\`\`\`

**Pick the best of each** in \u25CF Studio: one video in seconds, at YouTube's loudness, with **chapters** to paste. With OBS, an **[ffmpeg](https://ffmpeg.org)** cut.

## \u{1F310} Run it anywhere

Three places, one deck format: a markdown file.

\`\`\`svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 320" font-family="IBM Plex Sans, system-ui, sans-serif">
  <defs>
    <marker id="head" viewBox="0 0 10 10" refX="8" refY="5" markerUnits="userSpaceOnUse" markerWidth="11" markerHeight="11" orient="auto-start-reverse">
      <path d="M0 0 L10 5 L0 10 z" style="fill:var(--accent)"/>
    </marker>
    <filter id="glow" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="9"/></filter>
  </defs>

  <!-- one file -->
  <rect x="40" y="104" width="230" height="112" rx="18" style="fill:var(--accent)" filter="url(#glow)" opacity=".1"/>
  <rect x="40" y="110" width="230" height="100" rx="18" style="fill:var(--node-bg)"/>
  <rect x="40" y="110" width="230" height="100" rx="18" style="fill:var(--accent);fill-opacity:.12;stroke:var(--accent)" stroke-width="2.5"/>
  <path d="M74 136 h22 l10 10 v30 h-32z M96 136 v10 h10" fill="none" style="stroke:var(--accent)" stroke-width="2.5" stroke-linejoin="round"/>
  <text x="122" y="160" font-size="21" font-weight="600" font-family="IBM Plex Mono, monospace" fill="currentColor">deck.md</text>
  <text x="122" y="184" font-size="13" style="fill:var(--text-muted)">one markdown file</text>

  <g fill="none" style="stroke:var(--accent)" stroke-width="2.5" marker-end="url(#head)">
    <path d="M272 150 C380 150 400 62 498 62"/>
    <path d="M272 160 H498"/>
    <path d="M272 170 C380 170 400 258 498 258"/>
  </g>

  <g>
    <rect x="504" y="20" width="430" height="84" rx="16" style="fill:var(--accent);fill-opacity:.06;stroke:var(--accent);stroke-opacity:.45" stroke-width="1.5"/>
    <text x="526" y="54" font-size="18" font-weight="600" fill="currentColor">slidetake.com</text>
    <text x="526" y="80" font-size="13" style="fill:var(--text-muted)">write, open from a link, record in \u25CF Studio, share</text>
    <rect x="504" y="118" width="430" height="84" rx="16" style="fill:var(--accent);fill-opacity:.06;stroke:var(--accent);stroke-opacity:.45" stroke-width="1.5"/>
    <text x="526" y="152" font-size="18" font-weight="600" fill="currentColor">Your computer \xB7 <tspan font-family="IBM Plex Mono, monospace" font-size="16">npx slidetake</tspan></text>
    <text x="526" y="178" font-size="13" style="fill:var(--text-muted)">the AI loop, local images, edits saved to the file</text>
    <rect x="504" y="216" width="430" height="84" rx="16" style="fill:var(--accent);fill-opacity:.06;stroke:var(--accent);stroke-opacity:.45" stroke-width="1.5"/>
    <text x="526" y="250" font-size="18" font-weight="600" fill="currentColor">Your website \xB7 <tspan font-family="IBM Plex Mono, monospace" font-size="16">slidetake.js</tspan></text>
    <text x="526" y="276" font-size="13" style="fill:var(--text-muted)">a viewer for your readers, in your site's colours</text>
  </g>
</svg>
\`\`\`

### slidetake.com: write, present, record, edit and share

Write a deck in the **\u270E Editor**, or view one straight from a link: a GitHub file, a gist or any markdown URL. Record it and cut the video in **\u25CF Studio**, in the same tab. **Share** a link with the deck inside it. Nothing to install.

### Your computer: all that, plus AI

The same app on your own files, offline:

\`\`\`sh
npx slidetake deck.md
\`\`\`

Images next to the markdown load as they are. Save in any editor and the deck reloads where you are; type in the browser and it saves to the file. That's [the AI loop](#ai): an agent writes \`deck.md\` while you watch it take shape.

### Your website: a viewer for your readers

\`slidetake.js\` puts decks inside your own pages, in your site's colours: a clean viewer, nothing else to set up. Record the same markdown here or with \`npx slidetake\`.

## <span class="st-heart" aria-hidden="true"></span> Open source

Open source, Apache 2.0: [github.com/slidetake/slidetake](https://github.com/slidetake/slidetake). Nothing to sign up for, and your decks stay yours: [Privacy](/privacy).

Next, every feature and what it saves you: **[Features \u2192](/features)**
`});var Nr,Fr=V(()=>{Nr=`---
title: Slidetake Docs
description: "How to use Slidetake, step by step: get started, write a deck, present it, record a video in the browser or with OBS, and share it."
brand: slidetake
pip: none
---

# ![](/favicon.svg) Slide<span class="st-take">take</span> Docs

Everything in order: **get started \u2192 write \u2192 present \u2192 record \u2192 edit \u2192 share**. Press \u2192 to walk it, \u2193 \u2191 to go into a step and back out, **O** for the map.

## 1\uFE0F\u20E3 Get started

Three places to use Slidetake, one deck format for all of them: a markdown file. And any AI can write the deck.

| Where | Best for |
|---|---|
| **slidetake.com** | writing in the Editor, viewing any deck from a link, sharing |
| **Your computer** | the same on your own files and images, offline, with an AI agent writing alongside |
| **Your website** | decks your readers view |

### On slidetake.com

Open a deck straight from a link: a GitHub file, a gist or any markdown URL. Or press **\u270E Editor** and type: the first keystroke makes it [your copy](#your-copy), kept in this browser.

| Link | Opens |
|---|---|
| \`/gh/owner/repo/path/deck.md\` | a GitHub file, default branch |
| \`/gh/owner/repo@branch/deck.md\` | another branch or tag |
| \`/gist/<id>\` | a gist's first markdown file |
| \`/?src=https://\u2026/deck.md\` | anything else |
| \`/new\` | a template: blank, talk or recording |

### On your computer

Keep the deck and its images together in a folder, and run one command there:

\`\`\`sh
npx slidetake deck.md
\`\`\`

It opens on \`http://localhost:4300\` with the files next to the deck served beside it, so \`![](diagram.png)\` just works. Save the file in any editor and the deck reloads where you are; type in the browser's editor and it saves to the file. Nothing leaves your machine. Needs Node 20 or later.

\`npx slidetake\` in a folder opens its \`index.md\`, \`deck.md\`, \`slides.md\` or \`README.md\`. \`--open\` opens the browser; \`--port 5000\` picks the port.

### On your website

\`slidetake.js\` turns a deck on any page into a Slidetake deck. Describe the deck, then load the script:

\`\`\`html
<script>
window.SLIDETAKE = {
  markdown: "# My deck\\n\\n## A section",
  settings: {title: "My deck"},
  base: location.href,         // for images
  trail: [{label: "My site", url: "/"}],
  themeKey: "my-theme",        // your light/dark key
  colors: {accent: "#2563eb"}  // your colours
};
<\/script>
<script src="https://cdn.jsdelivr.net/npm/slidetake/dist/slidetake.js"><\/script>
\`\`\`

A viewer for your readers. To record, open the deck's markdown here or with \`npx slidetake\`, or add \`recording: true\` on a page only you see, such as your site's local preview. The hugo-continuum theme writes this for pages with \`engine: slidetake\`, with recording under \`hugo server\`.

### With AI

Any AI can write a deck: point it at [slidetake.com/llms.txt](/llms.txt) and say what the talk is about.

- **An agent** (Claude Code and the like): *"Write a Slidetake deck about X in talk/deck.md, following slidetake.com/llms.txt"*, then \`npx slidetake talk/deck.md\`. The deck reloads as it edits.
- **A chat**: ask for one markdown block, then paste it into **\u270E Editor** here.
- **Images**: beside the file for an agent; full URLs in a chat.

### A prompt to copy

Paste this into any AI and change the first line:

\`\`\`text
Write a Slidetake deck about <topic>, a 10-minute talk.
Follow https://slidetake.com/llms.txt.
A # title card, then 4\u20136 ## sections of 1\u20133 ### cards.
<!-- steps --> before lists; a \`\`\`dot or \`\`\`d2 diagram
where a picture helps. Reply with one markdown block.
\`\`\`

## 2\uFE0F\u20E3 Write a deck

A deck is an ordinary markdown file. **Every heading becomes a card**, and a heading branches off the nearest shallower heading above it.

\`\`\`md
# Product          \u2190 the first card
Intro text.

## Pricing         \u2190 from Product
### Enterprise     \u2190 from Pricing
## Roadmap {#plan} \u2190 from Product, id "plan"

See the [roadmap](#plan).
\`\`\`

### Cards

- Text before the first heading becomes a card of its own.
- Headings inside fenced code blocks are ignored.
- A card's id is its heading slugified (\`## Moving around\` \u2192 \`moving-around\`), or set one with \`{#id}\` at the end of the heading.
- A link to \`#id\` flies to that card.
- Cards widen for wide tables, columns, diagrams and embeds; anything wider still is scaled to fit.

### What a card can hold

Plain markdown, and the layout follows from what's on the card. [See every one in the showcase \u2192](/showcase)

| Write | Get |
|---|---|
| \`<!-- steps -->\` | what follows, one press each, to the end of the card or a \`<!-- steps: off -->\` |
| \` \`\`\`dot \`, \` \`\`\`d2 \` | a Graphviz or D2 diagram, in the deck's colours |
| \` \`\`\`echarts \` with JSON options | a chart, in the deck's colours |
| \` \`\`\`svg \` | an SVG drawing: \`currentColor\` and \`var(--text)\`, \`var(--accent)\` follow dark and light |
| a YouTube link alone on a line | the video: the next press plays it |
| \`<!-- view: full -->\` | a 16:9 card for a big image |

The first and last cards animate in on their own.

### Images

The layout follows from where the images are. The alt text is the caption.

| Write | Get |
|---|---|
| an image alone | an image card, laid out by its shape: phone, landscape or 16:9 |
| an image and text | a split card, the image on the side written first |
| a list of images, diagrams or charts | a gallery; after \`<!-- steps -->\`, a carousel |
| images in one paragraph | a grid, up to four a row |
| \`![](drawing.svg)\` | an SVG image, as drawn |

### Deck settings

An optional block at the top of the file:

\`\`\`yaml
---
title: My talk        \u2190 page and video title
duration: 10m         \u2190 for the timer
accent: "#3b82f6"     \u2190 the deck's colour
mode: light           \u2190 open in light mode
brand: example.com    \u2190 top-right corner text
brand_style: chip     \u2190 the brand as a pill
logo: https://\u2026/l.png \u2190 image beside it
base: https://\u2026/deck/ \u2190 where images live
site: https://\u2026/      \u2190 where /images live
---
\`\`\`

\`accent\` is one colour; Slidetake makes it bright for dark mode and deep enough to read on white for light mode, and uses it for text accents, lines, charts and diagrams. Camera and recording settings are in [step 4](#4-record-a-video).

### Decks from elsewhere

**reveal.js** decks open as they are: \`---\` starts a slide and \`--\` a vertical one beneath it. Fragments (\`fade-up\`, \`grow\`, \u2026), \`r-stack\`, \`<!-- .element: \u2026 -->\`, \`<section>\` slides, \`data-autoslide\`, \`data-gsap\` entrances and \`title-scramble\` all work.

**Older \`+++\` decks**, with \`id\`, \`parent\`, \`x\`, \`y\` frontmatter, still load.

## 3\uFE0F\u20E3 Present

Click a card to fly to it. Drag to pan; scroll or pinch to zoom. On a touch screen, the bottom bar adds \u2190 \u2192 buttons.

| Key | Does |
|---|---|
| \u2192 \u2190 Space | next / previous step, in document order (PgDn and PgUp too: what clickers send) |
| Home End | first / last slide |
| \u2193 \u2191 | first child / parent |
| O | the whole map; **O** again or Esc goes back |
| F | fullscreen; **F** again or Esc leaves |
| K, / or ? | these keys; again closes them |
| 1 2 3 4 | focus, path, radial, tree |
| + \u2212 | bigger / smaller slides (remembered; = works for +) |
| E \xB7 L | editor \xB7 light / dark |
| C \xB7 V | camera \xB7 camera layouts |
| R \xB7 S | record \xB7 Studio |
| P \xB7 D | in Studio: preview \xB7 download |

### Layouts

**Focus** doesn't travel at all: the next slide fades in where the last one was.

**Path**, the default, is made for presenting and video: a staircase in presenting order. Each section is a row, and the next one starts just below where the last ended, so every move is a short step right or down.

**Radial** rings out from the first card, and **tree** is a top-down chart.

The layout you pick is remembered in this browser, for every deck.

### On screen

Text keeps one size within a section and only changes when the section does; charts and diagrams are fitted on their own.

\`<!-- view: overview -->\` on a slide pulls back to the whole map for a beat before flying in: a good start to a chapter.

### Progress and timer

In fullscreen the cursor and controls hide after two seconds without the mouse moving, and a thin bar along the bottom fills with every press.

With \`duration: 10m\` (or \`90s\`, \`1h\`, \`12:30\`), a lighter layer of the same colour grows behind it with the clock: if it shows past the solid fill, you're behind; if it reaches the end, the bar pulses. The timer is for you, so recordings show progress only, unless the deck says \`timer: always\`. \`progress: off\` hides the bar.

## 4\uFE0F\u20E3 Record a video

Two modes, both slide by slide, so there's no timeline to edit afterwards. **\u25CF Record** in the bottom bar (or **R**) starts a take: the first time it opens Setup, then it records the slides without a take. **\u25CF Studio** (or **S**) is for picking takes and redoing slides; its \u2699 Setup switches between the modes.

\`\`\`svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 330" font-family="IBM Plex Sans, system-ui, sans-serif">
  <defs>
    <marker id="head" viewBox="0 0 10 10" refX="8" refY="5" markerUnits="userSpaceOnUse" markerWidth="11" markerHeight="11" orient="auto-start-reverse">
      <path d="M0 0 L10 5 L0 10 z" style="fill:var(--accent)"/>
    </marker>
  </defs>

  <!-- lanes -->
  <rect x="10" y="20" width="940" height="140" rx="18" style="fill:var(--accent);fill-opacity:.04"/>
  <rect x="10" y="176" width="940" height="140" rx="18" style="fill:var(--accent);fill-opacity:.04"/>
  <text x="30" y="80" font-size="20" font-weight="700" style="fill:var(--accent)">Easy mode</text>
  <text x="30" y="104" font-size="13" style="fill:var(--text-muted)">needs nothing</text>
  <text x="30" y="122" font-size="13" style="fill:var(--text-muted)">to install</text>
  <text x="30" y="236" font-size="20" font-weight="700" style="fill:var(--accent)">Pro mode</text>
  <text x="30" y="260" font-size="13" style="fill:var(--text-muted)">needs OBS</text>
  <text x="30" y="278" font-size="13" style="fill:var(--text-muted)">and ffmpeg</text>

  <g font-size="15" font-weight="600" text-anchor="middle" fill="currentColor">
    <rect x="180" y="50" width="150" height="80" rx="14" style="fill:var(--accent);fill-opacity:.06;stroke:var(--accent);stroke-opacity:.45" stroke-width="1.5"/>
    <text x="255" y="84">Chrome or Edge</text>
    <rect x="374" y="50" width="150" height="80" rx="14" style="fill:var(--accent);fill-opacity:.06;stroke:var(--accent);stroke-opacity:.45" stroke-width="1.5"/>
    <text x="449" y="84">records the</text><text x="449" y="104">16:9 frame</text>
    <rect x="568" y="50" width="150" height="80" rx="14" style="fill:var(--accent);fill-opacity:.06;stroke:var(--accent);stroke-opacity:.45" stroke-width="1.5"/>
    <text x="643" y="84">takes kept</text><text x="643" y="104">in the browser</text>
    <rect x="762" y="50" width="150" height="80" rx="14" style="fill:var(--node-bg)"/>
    <rect x="762" y="50" width="150" height="80" rx="14" style="fill:var(--accent);fill-opacity:.12;stroke:var(--accent)" stroke-width="2"/>
    <text x="837" y="84">\u2193 Download</text><text x="837" y="104" font-weight="400" font-size="13" style="fill:var(--text-muted)">one MP4</text>

    <rect x="180" y="206" width="150" height="80" rx="14" style="fill:var(--accent);fill-opacity:.06;stroke:var(--accent);stroke-opacity:.45" stroke-width="1.5"/>
    <text x="255" y="240">any browser</text><text x="255" y="260" font-weight="400" font-size="13" style="fill:var(--text-muted)">Safari, Firefox too</text>
    <rect x="374" y="206" width="150" height="80" rx="14" style="fill:var(--accent);fill-opacity:.06;stroke:var(--accent);stroke-opacity:.45" stroke-width="1.5"/>
    <text x="449" y="240">OBS records</text><text x="449" y="260">the screen</text>
    <rect x="568" y="206" width="150" height="80" rx="14" style="fill:var(--accent);fill-opacity:.06;stroke:var(--accent);stroke-opacity:.45" stroke-width="1.5"/>
    <text x="643" y="240">one recording,</text><text x="643" y="260">every take in it</text>
    <rect x="762" y="206" width="150" height="80" rx="14" style="fill:var(--node-bg)"/>
    <rect x="762" y="206" width="150" height="80" rx="14" style="fill:var(--accent);fill-opacity:.12;stroke:var(--accent)" stroke-width="2"/>
    <text x="837" y="240">\u29C9 ffmpeg</text><text x="837" y="260" font-weight="400" font-size="13" style="fill:var(--text-muted)">the frame-exact cut</text>
  </g>
  <g fill="none" style="stroke:var(--accent)" stroke-width="2.5" marker-end="url(#head)">
    <path d="M332 90 H372"/><path d="M526 90 H566"/><path d="M720 90 H760"/>
    <path d="M332 246 H372"/><path d="M526 246 H566"/><path d="M720 246 H760"/>
  </g>
</svg>
\`\`\`

### Which mode?

| | Easy mode: in the browser | Pro mode: with OBS |
|---|---|---|
| Install | nothing | [OBS Studio](https://obsproject.com) and [ffmpeg](https://ffmpeg.org), both free; a virtual display if your screen isn't 16:9 |
| Browser | Chrome, Edge or another Chromium browser | any: Safari and Firefox too |
| Screen | any shape: the deck is recorded in a 16:9 frame | a 16:9 screen, physical or virtual |
| Quality | 1080p, or 720p on a smaller screen | whatever OBS records |
| Final video | **Download** joins the picked takes, in the browser | an ffmpeg command |

### Easy mode: record in the browser

1. **\u25CF Record** (R) the first time opens **\u2699 Setup**: pick your camera (or **No camera**) and microphone. Recording turns the camera on and off by itself.
2. **\u25CF Record** again, and share **this tab** when the browser asks. Only the 16:9 frame is recorded: slides and camera.
3. Next time, **\u25CF Record** carries on with the slides that have no take yet. When every slide has one, it records from the slide on screen to the end.

For 1080p the frame needs 1920\xD71080 real pixels (a Retina laptop has them); 1280\xD7720 makes 720p. Smaller: use pro mode.

### Retake slides later

Tick slides (shift-click for a range): **\u25CF Record** records just those, then stops.

A take starts with the move in from the slide before it. So when you edit a slide, its takes and the next slide's are marked *outdated*: kept, but not picked until you record them again.

To drop a slide, delete it, then record the slide after it again.

### Takes stay in this browser

Each take is a file in this browser's private storage until you purge it, in \u2699 Setup \u2192 Files:

| Purge | Removes |
|---|---|
| **Unused takes** | takes the video doesn't use |
| **All takes** | this deck's takes |
| **Every deck's takes\u2026** | everything Slidetake keeps here; it says how much first |

### Pro mode: set up OBS

1. In OBS: Tools \u2192 WebSocket Server Settings, turn it on.
2. In Studio's **\u2699 Setup**, turn on **Pro** (top right), enter OBS's host, port and password, and **Connect**. Tick *Remember*.
3. Present on a 16:9 screen, physical or virtual (say 1920\xD71080). Setup checks it.

Studio opens in the mode you used last: its title says **Slidetake Studio Pro** in pro mode, with the size (\`1080p\`) beside it, and the camera and microphone a take uses on the right.

### A 16:9 screen

YouTube is 16:9. If your screen isn't (a MacBook is 16:10, an ultrawide 21:9), add a virtual 1920\xD71080 display, present there with **F**, and point OBS at it:

| System | Virtual display |
|---|---|
| macOS | [BetterDisplay](https://github.com/waydabber/BetterDisplay) |
| Windows | [Virtual Display Driver](https://github.com/VirtualDrivers/Virtual-Display-Driver) |
| Linux | \`xrandr\` (X11), or a dummy HDMI plug |

A dummy HDMI plug works on any system.

### Connect from the address

\`?obs=localhost:4455\` (or \`?obs=localhost:4455:password\`) in the address connects to OBS as the page opens. OBS runs on the same computer as the deck.

### Add your camera

**C** (or **Camera**) turns your webcam on in its box while presenting. A recording doesn't depend on it: it turns on the camera chosen for the deck (or none) by itself. The camera is off every time the page opens; until it's on, the deck's camera settings are ignored, so readers get slides using the whole screen.

\`\`\`yaml
---
pip: bottom-right      \u2190 corner, or none
pip_size: 24%          \u2190 box width
pip_shape: rect        \u2190 or circle
pip_mirror: yes        \u2190 mirror the webcam
camera: 24%, full, off \u2190 what V cycles
---
\`\`\`

Slides are always placed clear of the brand and the camera box.

### Move the camera per slide

A comment in a slide changes the camera from that slide on:

\`\`\`md
## Intro
<!-- camera: full -->     \u2190 fills the screen

## Pricing
<!-- camera: 18% flip --> \u2190 small, other side
\`\`\`

Words you can combine: \`on\`, \`off\`, \`full\`, \`behind\` (the camera fills the frame and the slide's content sits beside you, on the left: a talking head with slides; or \`right\`, \`top\`, \`bottom\`, \`top-bottom\` or \`left-right\`, and \`card 50%\` for a dark card under it, edge to edge, up to \`card\` for solid, a split screen with the camera in the rest of the frame; it stays on that slide, and the next goes back to the corner; with the camera off the slide still shows this way, over an empty frame), a size like \`30%\`, a corner, \`flip\`, \`circle\` / \`rect\`, \`mirror\` / \`unmirror\`. List them with commas to step through them on one slide: \`full, on\` opens on you, and the next \u2192 shrinks the camera to its corner and shows the slide.

**V** steps through the deck's \`camera:\` list by hand.

### Take by take

**\u25CF Record** (R) counts down and starts. From then on \u2192 drives everything: slides, reveals and camera moves (a Bluetooth clicker works).

- **\u2190** takes the slide again. The deck goes back and replays the slide's entry, so whichever take you pick joins smoothly
- **B** (or **.**, a clicker's blank-screen key) pauses and resumes
- one press past the last step ends the take; **Esc** ends it early

## 5\uFE0F\u20E3 Edit the video

When the take ends you're back in **Slidetake Studio**, the same in both modes:

- the player, with **\u25CF Record** and **\u25B6 Preview** under it
- every slide and its takes on the right: click one to preview it
- **\u29C9 Chapters** copies the chapters (\`0:00 Intro\`, one per section) for the YouTube description. YouTube needs at least three, each 10 seconds or more

### Download (easy mode)

**\u25B6 Preview** plays the picked takes back to back.

**\u2193 Download** joins them into one MP4 in seconds, without re-encoding the video, in a folder you pick once: \`deck 2026-10-30 20-04-49.mp4\`. Pressed again with nothing changed, it says where the video already is.

### The ffmpeg cut (pro mode)

Studio shows the deck's latest OBS recording; recording again replaces it here (the old file stays in your OBS folder).

Previews come from the OBS file: open it once, or, in Chrome and Edge, pick your OBS folder and later recordings load by themselves.

**\u29C9 ffmpeg** copies a command that cuts the picked takes, frame-exact. \u2699 Setup \u2192 Video sets how it encodes.

### Sound

In \u2699 Setup \u2192 Microphone:

| Setting | Does |
|---|---|
| **Voice** (default) | Chrome's noise suppression: fans, hum, steady noise |
| **Raw** | the mic as it is: for a good mic in a quiet room |
| **\u{1F50A} Volume boost** (on) | raises the voice to YouTube's \u221214 LUFS, never past a \u22121.5 dB peak |
| **Peak limiter** (off) | catches the few loud peaks, so the boost goes all the way |

YouTube turns loud videos down but not quiet ones up, so without the boost your voice sounds quiet. With OBS, Volume boost adds \`loudnorm\` to the ffmpeg command.

## 6\uFE0F\u20E3 Share and keep

Every deck you open is **read-only**: Slidetake's own decks, templates, files on the web and shared links. Viewing one never changes anything.

### Your copy

**Type in a deck**, and it becomes your copy, at \`/edit\`. It lives in this browser, remembers where it came from, and is there whenever you come back: **Your copy \u2192** in the editor takes you to it.

- There's one copy at a time; the editor bar says whose it is, and marks **edited** while it has changes you haven't saved or shared.
- **Reset to original** throws your edits away.
- Starting a new copy asks first if the old one has edits you haven't kept.

### Save and share

**Save** downloads the markdown. **Share** copies a link: the short link while your copy still matches an online original, otherwise a \`/share#deflate:\u2026\` link with the whole deck compressed inside it. That part of a link never reaches a server. **Open** loads a markdown file from your computer into your copy, and **\u21E3 Load** a deck from a link: a GitHub file, a gist or any markdown URL.

### Address options

| Option | Does |
|---|---|
| \`?edit=1\` | opens the editor |
| \`?layout=focus\` (path, radial, tree) | picks the layout; path is the default |
| \`?mode=light\` | light theme |
| \`?duration=10m\` | talk length for the timer |
| \`#card-id\` | opens at a card |

## \u{1F512} Your data

No accounts, and no decks kept. Recording stays on your device.

Next, everything that leaves your browser, and where it goes: **[Privacy \u2192](/privacy)**
`});var jr,Hr=V(()=>{jr=`---
title: Slidetake Features
description: "Every Slidetake feature, one line each: recording in the browser or with OBS, a map instead of a stack, the camera in the deck, plain markdown, your colours, and where it runs."
brand: slidetake
pip: none
---

# ![](/favicon.svg) Slide<span class="st-take">take</span> Features

The complete list, one line each. Press \u2192 to walk it, **O** for the map.

## \u270D\uFE0F Write in markdown, with AI

| Feature | Advantage |
|---|---|
| **The AI loop** (\`npx slidetake\`) | an agent writes the file; the slide you're on redraws on save |
| **One file** | any editor, versioned in git, reviewed like code |
| **Steps, diagrams, charts** | Graphviz, D2, SVG and ECharts as text |
| **Image cards** | laid out by shape: beside text, across the card, galleries, carousels, grids |
| **Full-screen cards** (\`view: full\`) | a 16:9 frame for a big image |
| **YouTube** | plays on the next press, pauses when you leave |
| **reveal.js and \`+++\` decks** | open as they are |

## \u{1F5FA}\uFE0F Present on a spatial canvas

| Feature | Advantage |
|---|---|
| **Four layouts** | focus, path (the default), radial, tree |
| **The map** (O) | the whole talk at a glance, and back |
| **Map moments** (\`view: overview\`) | open a chapter on the big picture |
| **Steady text** | one size per section, so slides don't jump |
| **Short flights** | camera moves made to read well on video |
| **Progress and timer** | a bar that fills, and a clock that tells you if you're behind |

### The camera is part of the deck

| Feature | Advantage |
|---|---|
| **Webcam in its box** | you and the slides in one recording, no compositing |
| **Camera per slide** | corner, size, side, circle, full screen, behind the slide or off |
| **Words around you** (\`behind left\`\u2026) | the slide's content beside, above or below you, or on both sides, with a card under it as see-through as you like |
| **Steps on one slide** | open on you, then reveal the slide |
| **Camera layouts** (V) | try them live, without editing the deck |
| **Off until you turn it on** | not shown to viewers: the slides get the whole screen |

### Your colours

| Feature | Advantage |
|---|---|
| **Dark and light** (L) | follows the reader, or your site |
| **\`accent:\`** | one colour, shaded for both modes, charts and diagrams included |
| **\`brand:\` and \`logo:\`** | your name on every frame |
| **Site colours** | embedded decks wear your site's palette and header |

## \u{1F534} Record slide by slide

Two modes, the same takes: **easy** in the browser, **pro** with OBS.

| Feature | Advantage |
|---|---|
| **Takes per slide** (\u2190) | every attempt kept; recording never stops |
| **Pause and resume** (B) | step away without a gap to cut |
| **Clicker support** | any Bluetooth presenter remote moves the deck |

### Easy mode: in the browser

For Chrome, Edge or another Chromium browser, on a screen with enough pixels: 1920\xD71080 for 1080p (a Retina laptop has them), 1280\xD7720 for 720p.

| Feature | Advantage |
|---|---|
| **Nothing to install** | the deck records itself in a 16:9 frame, on a screen of any shape |
| **Retake any slide later** | tick slides and record just those; an edited slide's takes are marked outdated |
| **Takes kept in the browser** | every take, from every recording, until you purge them |

### Pro mode: with OBS

For Safari, Firefox or any browser, a screen too small for easy mode, or whatever OBS can record.

| Feature | Advantage |
|---|---|
| **[OBS](https://obsproject.com), driven by the deck** | it starts and stops for you; you only talk |
| **16:9 check** | Setup warns before a video with bars; use a 16:9 screen, physical or virtual |

## \u2702\uFE0F Edit by picking the best take

| Feature | Advantage |
|---|---|
| **Slidetake Studio** | every slide's takes, Preview and Chapters, the same in both modes |
| **Download** (easy mode) | the picked takes joined into one MP4 in seconds |
| **Frame-exact [ffmpeg](https://ffmpeg.org) cut** (pro mode) | one command, no video editor |
| **Volume boost** | your voice at YouTube's loudness (\u221214 LUFS), never clipped |
| **YouTube chapters** | one click copies them, one per section |

## \u{1F310} Run it anywhere

| Where | Also gives you |
|---|---|
| **slidetake.com** | share links that carry the whole deck; your copy of any deck, kept in this browser |
| **Your computer** | relative images, reload on save, browser edits saved to the file |
| **Your website** | a clean viewer in your site's colours; the hugo-continuum theme with one frontmatter key |

## \u{1F512} Private and open

| Feature | Advantage |
|---|---|
| **No accounts, no stored decks** | nothing to sign up for or lose ([privacy](/privacy)) |
| **Decks inside links** | the deck stays in the \`#\` part, never sent to a server |
| **Analytics you can turn off** | one button on slidetake.com |
| **Open source, Apache 2.0** | read it, host it, change it: [github.com/slidetake/slidetake](https://github.com/slidetake/slidetake) |

Next, see them working: **[Showcase \u2192](/showcase)**
`});var _r,Wr=V(()=>{_r=`---
title: Slidetake Privacy
brand: slidetake
pip: none
---

# ![](/favicon.svg) Slide<span class="st-take">take</span> Privacy

Slidetake has no accounts and keeps no decks. This page lists everything that leaves your browser, and where it goes.

*Last updated 31 October 2026.*

## \u{1F4CA} What slidetake.com collects

slidetake.com counts visits with **Google Analytics**: the page's address, your browser and screen, and roughly where you are. Google Analytics sets its own cookies (\`_ga\`) to tell visits apart.

The address it records leaves out the part after \`#\` and \`?obs=\`, so neither a deck carried in a link nor an OBS password reaches it.

**You can turn it off:** the **Privacy & analytics** button in the header (the pulse icon) \u2192 *Turn analytics off*. Nothing more is sent from that browser, the \`_ga\` cookies are removed, and the tag isn't loaded on later visits. Cloudflare, which serves the site, still sees each request the way any web server does.

> That is the only analytics. A copy of Slidetake you host yourself, the embed on your own site, and \`npx slidetake\` send none.

## \u{1F3A5} Recording stays on your device

Your camera, your microphone and the tab you share are read only by your browser, and only while you record. Nothing is uploaded:

- **Easy mode** saves each take in this browser's private storage. **\u2193 Download** writes the video to a folder you pick.
- **Pro mode** has OBS record on your computer; Slidetake only tells it when to start and stop.

## \u{1F4BE} What stays in your browser

Kept in this browser's storage on your device, and never sent anywhere:

| What | Why |
|---|---|
| Your copy of a deck | so it's there when you come back |
| Theme, layout, slide size, editor width | your preferences |
| Recorded takes | to cut the video, until you purge them |
| Camera, mic and sound choices | your recording setup |
| Folders you pick for videos | so Studio needn't ask again |
| OBS host, port and password | only with *Remember*, as plain text |
| Your analytics choice | so *off* stays off |

Clearing this site's data in your browser removes all of it, recorded takes included.

## \u{1F310} Services a deck can reach

Opening Slidetake, or a deck that uses these, loads files from other services. Each sees your IP address, as with any web request.

| Service | When |
|---|---|
| Google Fonts | every page, for the typefaces |
| cdnjs, jsDelivr | every page (animation, markdown), and for diagrams, charts, recording and OBS |
| esm.sh | a deck with a D2 diagram |
| GitHub | opening a GitHub file or gist |
| YouTube (youtube-nocookie.com) | a deck with a YouTube link; YouTube's own cookies only once you play it |
| The deck's own address | opening a deck from a link, and its images |

OBS is reached only on the address you give it, normally your own computer.

## \u{1F517} Decks in links

A shared link carries the whole deck after \`#\`. Browsers never send that part of an address to a server, so the deck travels from you to whoever opens the link without passing through slidetake.com.

## \u{1F4BB} On your computer

\`npx slidetake\` runs on your machine, serves only the deck's folder, and listens only on \`localhost\`. It sends nothing to slidetake.com or anyone else. The deck's own diagrams, charts and fonts load from the services above as on the web.

## \u2709\uFE0F Questions

Open an issue on [github.com/slidetake/slidetake](https://github.com/slidetake/slidetake/issues). Slidetake is open source, so everything above can be checked in its code.
`});var qr,Ur=V(()=>{qr=`---
title: My deck
---

# My deck

Start typing: this becomes your own copy, and the template stays as it is.

## A section

Every heading is a card. \`##\` sections branch from the first card.

### A detail

\`###\` branches from the section above it.
`});var Vr,Gr=V(()=>{Vr=`---
title: Talk title
duration: 15m
---

# Talk title

One line on what the audience will take away.

## \u{1F9ED} Why this matters

- The problem, in the audience's words
- Why now
- What changes if it's solved

## \u{1F4A1} The idea

The one thing to remember, stated plainly.

### How it works

Three steps, a diagram or a table.

### An example

Something concrete the audience will recognise.

## \u2696\uFE0F Trade-offs

- What it costs
- When not to use it

## \u2705 Summary

- Point one
- Point two
- Point three

## \u{1F64F} Thank you

Where to find you, and the link to these slides.
`});var Kr,Yr=V(()=>{Kr=`---
title: Video title
duration: 10m
pip: bottom-right
pip_size: 24%
camera: 24%, 40%, full, off
---

<!-- camera: full, on -->

# Video title

Opens full screen on you; the next press shows this slide with you in the corner.

## \u{1F4CC} Disclaimer

<!-- camera: off, on -->

Opens without the camera, so the text has the whole screen; the next press brings you back.

## \u{1F9ED} Contents

- Part one
- Part two
- Part three

## \u{1F539} Part one

<!-- view: overview -->

The overview comment pulls back to the whole map first: a good start to a chapter.

### A detail

Slides you talk over in the corner.

## \u{1F538} Part two

### A detail

## \u{1F537} Part three

### A detail

## \u{1F64F} Thanks for watching

<!-- camera: on, full, on, off -->

Ends on you full screen, then back to the slide, then without the camera.
`});var $r,Jr=V(()=>{$r=`---
title: Slidetake Showcase
description: "Everything a Slidetake deck can hold, working on screen: text, steps, code, Graphviz, D2, SVG, charts, image layouts, YouTube, the camera and the map."
brand: slidetake
duration: 10m
---

# ![](https://slidetake.com/favicon.svg) Slide<span class="st-take">take</span> Showcase

Everything a deck can hold, written in plain markdown and working on screen. Open **\u270E Editor** to see the source of any card. Press \u2192 to walk it, **O** for the map.

## \u270D\uFE0F Text

Paragraphs, **bold**, *italic*, \`code\`, [links](https://slidetake.com) and lists, as markdown writes them.

- One point
- Another point
  - A detail under it

### Steps

Put \`<!-- steps -->\` before a list and it reveals one item per press. Everything after it on the card steps too, so a closing line waits its turn:

<!-- steps -->
- First, the problem
- Then, the idea
- Finally, the result

> The conclusion comes last. \`<!-- steps: off -->\` ends the steps early.

### Quotes and tables

> A quote stands out from the text around it.

| Plan | Price | Users |
|---|---:|---:|
| Starter | \u20B90 | 1 |
| Team | \u20B9499 | 10 |

### Code

\`\`\`python
def take(slide):
    return slide.best_attempt()
\`\`\`

### Links between cards

\`{#charts}\` at the end of a heading gives its card an id, and a link to \`#charts\` flies there: [see the charts](#charts).

## \u{1F4D0} Diagrams

Write the diagram in a fenced block named after its language.

### Graphviz

\`\`\`dot
digraph {
  rankdir=LR
  node [shape=box style=rounded]
  Markdown -> Deck -> Takes -> Video
}
\`\`\`

### D2

\`\`\`d2
direction: right
write: Write {shape: rectangle}
present: Present
record: Record
write -> present -> record: one session
\`\`\`

### SVG

Drawn inline, so \`currentColor\` and \`var(--accent)\` follow the deck's colours. Press **L** and watch it switch.

\`\`\`svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 130">
  <rect x="10" y="10" width="90" height="80" rx="10" style="fill:var(--accent)"/>
  <rect x="115" y="10" width="90" height="80" rx="10" style="fill:var(--accent);opacity:.6"/>
  <rect x="220" y="10" width="90" height="80" rx="10" fill="none" stroke="currentColor" stroke-width="2"/>
  <text x="160" y="120" text-anchor="middle" font-size="14" fill="currentColor">accent, faded, outlined</text>
</svg>
\`\`\`

### One at a time

Diagrams or charts in a row after \`<!-- steps -->\` become a carousel: one per press.

<!-- steps -->

\`\`\`dot
digraph { rankdir=LR; node [shape=box style=rounded]; Idea -> Markdown -> Deck -> Takes }
\`\`\`

\`\`\`dot
digraph { rankdir=LR; node [shape=box style=rounded]; Takes -> Studio -> Video -> YouTube }
\`\`\`

## \u{1F4CA} Charts {#charts}

ECharts, as a fenced \`echarts\` block of JSON options.

### A bar chart

\`\`\`echarts
{
  "xAxis": {"type": "category", "data": ["Jan", "Feb", "Mar", "Apr", "May"]},
  "yAxis": {"type": "value"},
  "series": [{"type": "bar", "data": [12, 19, 15, 24, 30]}]
}
\`\`\`

### A donut

\`\`\`echarts
{
  "series": [{"type": "pie", "radius": ["45%", "70%"],
    "data": [{"name": "Equity", "value": 85}, {"name": "Debt", "value": 5}, {"name": "Gold", "value": 10}]}]
}
\`\`\`

## \u{1F5BC}\uFE0F Images

The layout comes from what's on the slide; the alt text is the caption.

### One image

![An image alone fills the card edge to edge](https://slidetake.com/og.jpg)

### A tall image

![A square or tall image sits beside its heading](https://slidetake.com/apple-touch-icon.png)

### Image and text

![Written first, so it sits on the left](https://slidetake.com/og.jpg)

An image beside text makes a split card. Write the text first and the image moves to the right.

### A gallery

A list of images is a gallery. With \`<!-- steps -->\` it becomes a carousel: one image at a time, the next on each press. Diagrams and charts work the same, and after \`<!-- steps -->\` two or more of them in a row are a carousel without the list.

<!-- steps -->
- ![The logo](https://slidetake.com/favicon.svg)
- ![The home-screen icon](https://slidetake.com/apple-touch-icon.png)
- ![The link preview](https://slidetake.com/og.jpg)

### A grid

Several images in one paragraph sit side by side, up to four a row:

![Logo](https://slidetake.com/favicon.svg) ![Icon](https://slidetake.com/apple-touch-icon.png) ![Preview](https://slidetake.com/og.jpg)

### Full screen

<!-- view: full -->

![A card tagged view: full is a 16:9 frame for a big image](https://slidetake.com/og.jpg)

## \u25B6\uFE0F YouTube

https://www.youtube.com/watch?v=jNQXAC9IVRw

A YouTube link alone on a line becomes the video: the next press plays it, leaving the slide pauses it.

## \u{1F3A5} Camera

<!-- camera: on, full, on -->

Try it: press **C** to turn on your camera, then \u2192. This card puts you in the corner, then full screen, then back, from one comment: \`<!-- camera: on, full, on -->\`.

### Behind the slide

<!-- camera: behind -->

With the camera on, you fill the frame and this slide's words sit beside you: a talking head with slides. One comment does it: \`<!-- camera: behind -->\`, or \`pip: behind\` for a whole deck. They go on the left; \`right\`, \`top\`, \`bottom\`, \`top-bottom\` or \`left-right\` put them elsewhere, and \`card 50%\` puts a card under them.

### Words around you

<!-- camera: behind left, behind right, behind top, behind bottom, behind top-bottom, behind left-right -->

Press \u2192 and these words move around you: \`left\`, \`right\`, \`top\`, \`bottom\`, \`top-bottom\`, \`left-right\`. One comment, one press each.

### A card under the words

<!-- camera: behind left, behind left card 50%, behind left card, behind bottom card 70%, behind left-right card -->

Busy background? Put a card under the words: it fills its side edge to edge, \`card 50%\` lets half the camera through, \`card\` alone makes a split screen, the camera centred on the other side.

### A picture beside you

<!-- camera: behind right, behind left, behind bottom -->

![The link preview, beside you](https://slidetake.com/og.jpg)

### A Graphviz diagram beside you

<!-- camera: behind left, behind left-right -->

Talk through the flow while it sits beside you.

\`\`\`dot
digraph {
  rankdir=LR
  node [shape=box style=rounded]
  Markdown -> Deck -> Takes -> Video
}
\`\`\`

### A D2 diagram beside you

<!-- camera: behind right, behind top -->

\`\`\`d2
direction: right
write: Write
present: Present
record: Record
write -> present -> record
\`\`\`

### An SVG beside you

<!-- camera: behind left, behind top-bottom -->

Drawn in the deck's colours.

\`\`\`svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 130">
  <rect x="10" y="10" width="90" height="80" rx="10" style="fill:var(--accent)"/>
  <rect x="115" y="10" width="90" height="80" rx="10" style="fill:var(--accent);opacity:.6"/>
  <rect x="220" y="10" width="90" height="80" rx="10" fill="none" stroke="currentColor" stroke-width="2"/>
  <text x="160" y="120" text-anchor="middle" font-size="14" fill="currentColor">accent, faded, outlined</text>
</svg>
\`\`\`

### A chart beside you

<!-- camera: behind right, behind bottom -->

Views a month, and growing.

\`\`\`echarts
{
  "xAxis": {"type": "category", "data": ["Jan", "Feb", "Mar", "Apr", "May"]},
  "yAxis": {"type": "value"},
  "series": [{"type": "bar", "data": [12, 19, 15, 24, 30]}]
}
\`\`\`

## \u{1F5FA}\uFE0F Layouts and the map

<!-- view: overview -->

This card began by pulling back to the whole map: \`<!-- view: overview -->\` does that. Try it: press **1** to **4** for focus, path (the default), radial and tree, and **O** to zoom out and back.

### Progress and timer

Press **F**: in fullscreen a thin bar along the bottom fills as you go. This deck says \`duration: 10m\`, so a lighter clock layer grows behind it; if it shows past the fill, you're behind.

## \u{1F3A8} Colours

Try it: press **L** now. Dark and light switch, charts and diagrams included.

A deck sets its own colour with one line, \`accent: "#3b82f6"\`, shaded for both modes. See it in [blue](/share#deflate:ZVJNa9wwEL3rV0y1hzZGTummn6YENodCoYVCAjksC9Zak5VY1zKacXZN2Gt-QH9if0kl2aSBnPTGevPmjZ_KshTsuMUKvnewbQcUummw4wrk4mL7eXn3UYoyksTiiSBurCMw2OzBagLfIeCRg4bWRagZ2CKw7xXUL7RqBbozgPcYRrau28Gdb1t_oAo4iqisQSpLNFYHzvRUGad3Qf8-h18BiaAofhRFnAKECFvPFshqg3QenS7gmrEnIb6-KkughKEsL0UZu658a4pCwToO2tPmzVuy_tBowrM8yaI20RUB6z1OLnzrhxB7rz0YjzR5n3b1Xab0mm0krGanIa2lgx_mmlpnEEY_vA6pJRtcTdsJUdc1ZkjiQR5XR0eyggfJY48RyEYz7nwYpQJpNOv4bS1_-i7VNwOm4xZNruyQjm_Byc0pgvGF1r2O6cmTEiAJg8N0u_5_vdXh-ZT3Cj4p-KDgi4J3y81pc0peZ_NzGNm-WQrjAjbsfFfF5XeWxSE4RigvoY9hxReQYKT4YKr8XihGGOlPile62QuxTkfKNP-1ORf4-_jnWUyLKQ86E_8A), [coral](/share#deflate:ZVJNa9wwEL3rV0y1hzZGSkn6EWJKYHMoFFooJNDDsrATa7IS61pGI2fXhL32B-Qn9pdUkk0TyElvrDdv3vhJay2iiy3V8K2DxgdsBTYNdbEGubi_vPhw9lkKnVhi8cwQt9YxGGp2YJHBdwR0iAGhdQlihGgJou8VbF6JbRRgZ4AeKIzRum4L975t_Z5riElEFQ1WRaKxGGKh58o43Ab8fQo_AzFDVX2vqjQFmAjufLTAFg3xabK6gJtIPQvx5Y3WwBmD1ldCp65r35qqUrBKg3a8fveerd83yHRSJllCk1wxRNzR5MK3fgip98aD8cST92lX3xVKj9EmwnJ2GvJaGPww19w6QzD64W3ILcXgctpOiM1mQwWyeJSH5cGxrOFRxrGnBGSDkbY-jFKBNBgxfVvJH77L9e1A-fhFplR2yMfX4OT6mMD4SusB29RxVAIkU3CUb1fP13cYXk75qOBCwScFlwrOztfH9TF7nc3PYRT75lwYF6iJznd1Wn5ro9gHFwn0FfQprPQCMkwUH0xd3gunCBP9v-I1NjshVvnImZa_NucCf_88vYhpMeXBJ-If) or [violet](/share#deflate:ZVJNa9wwEL3rV0y1hzZGTmlo-mFKYHMoFFooJJDDsmCtNVmJdS2jGe-uCXvtD-hP7C-pJJt0ISe9sd68eeOnsiwFO26xgm8d7J1vkYVuGuy4Arn4tLluHj9IUUaaWJxRxL11BAabHVhN4DsEPHLQ0LoINQNbBPa9gvqFWq1AdwZwj2Fk67otPPq29QeqgKOIyhqkskRjdeBMT5Vxehv0r0v4GZAIiuJ7UcQpQIiw8WyBrDZIl9HrAu4YexLiy6uyBEoYyvJGlLHr1remKBSs4qAdrd-8JesPjSa8yJMsahNdEbDe4eTCt34IsffOg_FIk_dpV99lSq_ZRsJydhrSWjr4Ya6pdQZh9MPrkFqyweW0nRB1XWOGJJ7kcXl0JCt4kjz2GIFsNOPWh1EqkEazjt9W8ofvUn0_YDoe0OTKDun4GpxcnyIYX2jtdRs7TkqAJAwO0-3q__VGh_Mp7xV8VHCt4LOCd1fr0_qUvM7m5zCyfXMljAvYsPNdFZffWhaH4BihvIE-hhVfQIKR4oOp8nuhGGGkPyve6mYnxCodKdP81-Zc4O_vP2cxLaY86EL8Aw).

## \u2702\uFE0F Record a video

Try it: press **\u25CF Record** in the bottom bar, or **R**. Stumble on a slide, press \u2190, say it again; then pick the best take of each. Step by step: [Docs \u2192 Record a video](/docs#4-record-a-video).

## \u{1F310} Open from anywhere

Try it: this deck is a file on GitHub, and opens from there too: **[slidetake.com/gh/slidetake/slidetake/examples/showcase.md](/gh/slidetake/slidetake/examples/showcase.md)**. Gists, any markdown URL, and a link with the deck inside it open the same way, and \`npx slidetake deck.md\` opens one from your computer.

## \u{1F680} Start your own

Open **\u270E Editor** and press **New** for a template (blank, talk or recording), or type in this deck to make it your copy.

The templates and this deck live in [examples/](https://github.com/slidetake/slidetake/tree/main/examples) on GitHub.

Next, how it all works, step by step: **[Docs \u2192](/docs)**
`});function lt(e){return e.toLowerCase().replace(/[^\p{L}\p{N}]+/gu,"-").replace(/^-+|-+$/g,"")||"card"}function Nt(e){return e.replace(/<[^>]*>/g,"").replace(/!?\[([^\]]*)\]\([^)]*\)/g,"$1").replace(/[*_`~]/g,"").trim()}function A(e){return String(e).replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t])}function Xr(e){if(typeof document<"u"){let t=document.createElement("textarea");return t.innerHTML=e,t.value}return e.replace(/&(#x[\da-f]+|#\d+|\w+);/gi,(t,a)=>a[0]==="#"?String.fromCodePoint(a[1].toLowerCase()==="x"?parseInt(a.slice(2),16):parseInt(a.slice(1),10)):Ps[a.toLowerCase()]??t)}function Ht(e){let t={};for(let a of e.matchAll(/([\w-]+)="([^"]*)"/g))t[a[1]]=a[2];return t}function jt(e,t){let a=[[]],o=null;return e.split(`
`).forEach(r=>{let n=r.match(/^\s{0,3}(`{3,}|~{3,})/);n&&(o?n[1][0]===o[0]&&n[1].length>=o.length&&(o=null):o=n[1]),!o&&!n&&t.test(r)?a.push([]):a[a.length-1].push(r)}),a.map(r=>r.join(`
`))}function Qr(e){let t=String(e??"").trim().toLowerCase();if(!t)return 0;let a=t.match(/^(\d+):(\d{1,2})$/);if(a)return(+a[1]*60+ +a[2])*1e3;if(a=t.match(/^(\d+(?:\.\d+)?)\s*(h|hrs?|hours?|m|mins?|minutes?|s|secs?|seconds?)?$/),!a)return 0;let o=(a[2]||"m")[0];return parseFloat(a[1])*(o==="h"?3600:o==="s"?1:60)*1e3}function ba(e){let t=Math.max(0,Math.round(e/1e3)),a=Math.floor(t/3600),o=Math.floor(t%3600/60),r=t%60;return(a?a+":"+String(o).padStart(2,"0"):o)+":"+String(r).padStart(2,"0")}function ct(e){let t=Math.max(0,Math.round(e/1e3)),a=Math.floor(t/3600),o=Math.floor(t%3600/60),r=t%60;return a?a+"h "+String(o).padStart(2,"0")+"m":o?o+"m "+String(r).padStart(2,"0")+"s":r+"s"}var Ps,va=V(()=>{"use strict";Ps={amp:"&",lt:"<",gt:">",quot:'"',apos:"'",nbsp:"\xA0",mdash:"\u2014",ndash:"\u2013",hellip:"\u2026",rsquo:"\u2019",lsquo:"\u2018",rdquo:"\u201D",ldquo:"\u201C"}});function en(e){let t=null;return e.split(`
`).filter(a=>{let o=a.match(/^\s{0,3}(`{3,}|~{3,})/);return o?(t?o[1][0]===t[0]&&o[1].length>=t.length&&(t=null):t=o[1],!1):!t}).join(`
`).replace(/`[^`\n]*`/g,"")}function yo(e){return/<!--\s*view\s*:\s*(overview|map)\s*-->/i.test(en(e))}function bo(e){let t=en(e).match(/<!--\s*camera\s*:\s*([\s\S]*?)\s*-->/i);return t?t[1].trim():null}function zs(e){let t={},a=e.match(/^---[ \t]*\n([\s\S]*?)\n---[ \t]*(?:\n|$)/);if(!a)return{deck:t,body:e};let o=null;return a[1].split(`
`).forEach(r=>{let n=r.match(/^\s+-\s+(.*)$/);if(n&&o){t[o].push(n[1].trim().replace(/^["']|["']$/g,""));return}let i=r.match(/^([A-Za-z_][\w-]*)\s*:\s*(.*)$/);if(!i){o=null;return}let s=i[1].toLowerCase(),l=i[2].trim().replace(/^["']|["']$/g,"");l===""?(t[s]=[],o=s):(t[s]=l,o=null)}),{deck:t,body:e.slice(a[0].length)}}function tn(e){let t=r=>typeof r=="string"||typeof r=="number"||typeof r=="boolean",a=r=>String(r).replace(/\s*\n\s*/g," "),o=[];for(let[r,n]of Object.entries(e||{}))/^[A-Za-z_][\w-]*$/.test(r)&&(t(n)?o.push(r+": "+a(n)):Array.isArray(n)&&n.every(t)&&(o.push(r+":"),n.forEach(i=>o.push("  - "+a(i)))));return o.length?`---
`+o.join(`
`)+`
---
`:""}function Rs(e){let t=e.split(`
`),a={},o=e;if(t[0]!==void 0&&t[0].trim()==="---"){let r=-1;for(let n=1;n<t.length;n++)if(t[n].trim()==="---"){r=n;break}r!==-1&&(t.slice(1,r).forEach(n=>{let i=n.indexOf(":");i>-1&&(a[n.slice(0,i).trim()]=n.slice(i+1).trim().replace(/^["']|["']$/g,""))}),o=t.slice(r+1).join(`
`).replace(/^\n+/,""))}return{meta:a,body:o}}function Ds(e){let t=e.replace(/<!--[\s\S]*?-->/g,""),a=t.match(/^\s{0,3}#{1,6}\s+(.+?)\s*#*\s*$/m),o=t.match(/<h[1-6][^>]*>([\s\S]*?)<\/h[1-6]>/i),r=null;if(a&&(!o||a.index<o.index)?r=a[1]:o&&(r=o[1].replace(/<[^>]+>/g," ")),!r){let n=t.split(`
`).map(i=>i.replace(/<[^>]+>/g,"").trim()).find(i=>i&&!/^[-|:\s]+$/.test(i));r=n?n.slice(0,60):null}return r?Xr(Nt(r)).replace(/\s+/g," ").trim():null}function Zr(e){let t=e.match(/<!--\s*\.slide:([\s\S]*?)-->/i);return t?Ht(t[1]):{}}function an(e,{render:t=a=>({html:a,err:null})}={}){let a=new Map,o=b=>{let m=b,p=2;for(;a.has(m);)m=b+"-"+p++;return m},r=b=>(a.set(b.id,{x:null,y:null,children:[],...b}),b.id);e=e.replace(/\r\n?/g,`
`);let n=/^\+\+\+[ \t]*$/m.test(e),i={};n||({deck:i,body:e}=zs(e));let s=/^slides?$/i.test(String(i.layout||""))||/^slides?$/i.test(String(i.type||"")),l=!n&&(jt(e,/^--\s*$/).length>1||s&&jt(e,/^---\s*$/).length>1),c=n?T():l?g():d();return a.forEach(b=>{(!b.parent||b.parent===b.id||!a.has(b.parent))&&(b.parent=null)}),a.forEach(b=>{let m=new Set([b.id]),p=b.parent;for(;p;){if(m.has(p)){b.parent=null;break}m.add(p),p=a.get(p).parent}}),a.forEach(b=>{b.parent&&a.get(b.parent).children.push(b.id)}),{deck:i,nodes:a,format:n?"+++":l?"reveal":"headings",errCount:c};function d(){let b=[],m=null,p=null,C={level:0,title:null,explicitId:null,lines:[]};e.split(`
`).forEach(x=>{let y=x.match(/^\s{0,3}(`{3,}|~{3,})/);y&&(p?y[1][0]===p[0]&&y[1].length>=p.length&&(p=null):p=y[1]);let k=!p&&!y?x.match(/^\s{0,3}(#{1,6})\s+(.+?)\s*#*\s*$/):null;if(k){let E=k[2],K=null,ae=E.match(/\s*\{#([\w\-:.]+)\}\s*$/);ae&&(K=ae[1],E=E.slice(0,ae.index)),m={level:k[1].length,title:Nt(E),explicitId:K,lines:[k[1]+" "+E]},b.push(m)}else(m||C).lines.push(x)});let L=C.lines.join(`
`);L.trim()&&(b.length&&!L.replace(/<!--[\s\S]*?-->/g,"").trim()?b[0].lines.splice(1,0,...C.lines):b.unshift(C));let w=[];return b.forEach(x=>{for(;w.length&&w[w.length-1].level>=x.level;)w.pop();let y=w.length?w[w.length-1].id:null,k=x.lines.join(`
`).trim(),E=x.title||Nt((k.split(`
`).find(X=>X.trim())||"Intro").slice(0,48));x.id=o(x.explicitId||lt(E));let{html:K,err:ae}=t(k);r({id:x.id,parent:y,title:E,html:K,err:ae,camera:bo(k),mapFirst:yo(k)}),w.push(x)}),0}function T(){let b=e.split(/\n\+\+\+[ \t]*\n/).map(C=>C.trim()).filter(C=>C.length),m=null,p=0;return b.forEach((C,L)=>{let{meta:w,body:x}=Rs(C),y=o(w.id||"slide-"+(L+1)),k="parent"in w?w.parent||null:m,E=x.match(/^#{1,6}\s+(.+)$/m),K=w.title||(E?Nt(E[1]):y),{html:ae,err:X}=t(x);X&&p++,r({id:y,parent:k,title:K,html:ae,err:X,camera:w.camera||bo(x),mapFirst:yo(x),x:w.x!==void 0?parseFloat(w.x):null,y:w.y!==void 0?parseFloat(w.y):null}),m=y}),p}function g(){let b=0,m=0,p=null;function C(w,x){let y=w.body.trim();m++;let k=Ds(y)||"Slide "+m,E=x?a.get(x).title:null;E&&k.startsWith(E+" / ")&&(k=k.slice(E.length+3));let K=o(lt(k)),{html:ae,err:X}=t(y);return X&&b++,r({id:K,parent:x,title:k,html:ae,err:X,camera:bo(y),mapFirst:yo(y),autoslide:parseInt(w.attrs["data-autoslide"],10)||0})}let L=[];return jt(e,/^---\s*$/).forEach(w=>{if(/<section\b/i.test(w)){for(let k of w.matchAll(/<section\b([^>]*)>([\s\S]*?)<\/section>/gi))L.push([{body:k[2],attrs:Ht(k[1])}]);let y=w.replace(/<section\b[^>]*>[\s\S]*?<\/section>/gi,"");y.trim()&&L.push([{body:y,attrs:Zr(y)}]);return}let x=jt(w,/^--\s*$/).filter(y=>y.trim()).map(y=>({body:y,attrs:Zr(y)}));x.length&&L.push(x)}),L.forEach(w=>{let x=null;w.forEach((y,k)=>{if(!p){p=x=C(y,null);return}k===0?x=C(y,p):C(y,x)})}),b}}var on=V(()=>{"use strict";va()});function qe(e,t){let a=String(t||"").toLowerCase().split(/\s+/);return a.forEach((o,r)=>{if(o)if(o==="card"){let n=/^\d+(\.\d+)?%?$/.test(a[r+1]||"")?parseFloat(a[r+1]):100;e.card=Math.max(0,Math.min(100,n)),a[r+1]&&/^\d/.test(a[r+1])&&(a[r+1]=""),e.used=!0}else o==="off"||o==="hide"?e.off=!0:o==="on"||o==="pip"||o==="show"?(e.off=!1,e.full=!1,e.behind=!1,e.place="",e.used=!0):o==="full"||o==="fullscreen"?(e.full=!0,e.behind=!1,e.place="",e.off=!1,e.used=!0):o==="behind"||o==="under"?(e.full=!0,e.behind=!0,e.place="left",e.off=!1,e.used=!0):Fs.includes(o)?(e.place=o,e.used=!0):/^\d+(\.\d+)?%?$/.test(o)?(e.size=vo(parseFloat(o)),e.used=!0):Wt.includes(o)?(e.corner=o,e.used=!0):o==="flip"?(e.flip=!e.flip,e.used=!0):o==="circle"?e.circle=!0:o==="rect"?e.circle=!1:o==="mirror"?e.mirror=!0:(o==="unmirror"||o==="no-mirror")&&(e.mirror=!1)}),e}function rn(e){return e?e.split(",").map(t=>t.trim()).filter(Boolean):[]}function nn(e,t){let a=[];if(!e.length){for(let r=0;r<=t;r++)a.push({cam:0,frag:r});return a}let o=e.findIndex(r=>!qe({},r).full);o<0&&(o=e.length-1);for(let r=0;r<=o;r++)a.push({cam:r,frag:0});for(let r=1;r<=t;r++)a.push({cam:o,frag:r});for(let r=o+1;r<e.length;r++)a.push({cam:r,frag:t});return a}var Wt,Fs,vo,sn=V(()=>{"use strict";Wt=["top-left","top-right","bottom-left","bottom-right"],Fs=["left","right","top","bottom","top-bottom","left-right"],vo=e=>Math.max(8,Math.min(60,e))});function ln(e){let t=String(e||"").trim();if(!t)return null;let a;try{a=new URL(/^[a-z]+:\/\//i.test(t)?t:"https://"+t)}catch{return null}let o=a.pathname.split("/").filter(Boolean);if(a.hostname==="github.com"||a.hostname==="www.github.com"){let[r,n,i,s,...l]=o;if(r&&n&&(i==="blob"||i==="raw"||i==="tree")&&s){let c=l.join("/");return(i==="tree"||!/\.(md|markdown|txt)$/i.test(c))&&(c=(c?c+"/":"")+"index.md"),{kind:"url",url:wo+[r,n,s].join("/")+"/"+c}}if(r&&n&&!i)return{kind:"url",url:wo+r+"/"+n+"/HEAD/README.md"}}if(a.hostname==="gist.github.com"){let r=o.length>=2?o[1]:o[0];if(r&&/^[\da-f]+$/i.test(r))return{kind:"gist",id:r}}if(a.hostname==="slidetake.com"||a.hostname==="www.slidetake.com"){let r=xo(a.pathname);if(r)return r;let n=a.searchParams.get("src");if(n)return{kind:"url",url:n}}return{kind:"url",url:a.href}}function xo(e){let t=String(e||"").split("/").filter(Boolean).map(a=>{try{return decodeURIComponent(a)}catch{return a}});if(t[0]==="gh"&&t.length>=4){let[,a,o,...r]=t,n=o.indexOf("@"),i=n<0?o:o.slice(0,n),s=n<0?"HEAD":o.slice(n+1);return!a||!i||!s?null:{kind:"url",url:wo+[a,i,s,...r].map(encodeURIComponent).join("/")}}return t.length===1&&(t[0]==="docs"||t[0]==="help")?{kind:"builtin",id:"docs"}:t[0]==="showcase"&&t.length===1?{kind:"builtin",id:"showcase"}:t[0]==="examples"&&(t.length===1||t.length===2&&t[1]==="showcase")?{kind:"builtin",id:"showcase"}:t.length===1&&t[0]==="features"?{kind:"builtin",id:"features"}:t.length===1&&t[0]==="privacy"?{kind:"builtin",id:"privacy"}:t[0]==="gist"&&t[1]&&/^[\da-f]+$/i.test(t[1])?t[2]?{kind:"gist",id:t[1],file:t[2]}:{kind:"gist",id:t[1]}:null}function cn(e){if(e.kind==="builtin")return e.id==="home"?"/":e.id==="showcase"?"/showcase":e.id.startsWith("template:")?"/new?template="+e.id.slice(9):"/"+e.id;if(e.kind==="gist")return"/gist/"+e.id+(e.file?"/"+encodeURIComponent(e.file):"");let t=e.url.match(/^https:\/\/raw\.githubusercontent\.com\/([^/]+)\/([^/]+)\/([^/]+)\/(.+)$/);if(t){let[,a,o,r,n]=t;if(!/^refs$/.test(r))return"/gh/"+a+"/"+o+(r==="HEAD"?"":"@"+r)+"/"+n}return"/?src="+encodeURIComponent(e.url)}var wo,ko=V(()=>{"use strict";wo="https://raw.githubusercontent.com/"});function Ns(e){let t="";for(let a=0;a<e.length;a+=32768)t+=String.fromCharCode(...e.subarray(a,a+32768));return btoa(t).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}function Hs(e){let t=atob(e.replace(/-/g,"+").replace(/_/g,"/")+"===".slice((e.length+3)%4));return Uint8Array.from(t,a=>a.charCodeAt(0))}async function dn(e,t){let a=new Response(new Blob([e]).stream().pipeThrough(t));return new Uint8Array(await a.arrayBuffer())}async function hn(e){return Ns(await dn(new TextEncoder().encode(e),new CompressionStream("deflate-raw")))}async function pn(e){return new TextDecoder().decode(await dn(Hs(e),new DecompressionStream("deflate-raw")))}function wa(e){let t=e.replace(/^#/,"");if(!t.startsWith(So)){let n=t;try{n=decodeURIComponent(t)}catch{}return{data:null,slide:n}}let a=t.slice(So.length),o=a.indexOf("~"),r=o<0?"":a.slice(o+1);try{r=decodeURIComponent(r)}catch{}return{data:o<0?a:a.slice(0,o),slide:r}}function Eo(e,t){return"#"+So+e+(t?"~"+encodeURIComponent(t):"")}var So,Co=V(()=>{"use strict";So="deflate:"});function un(e,t,a){let o=e.replace(/\/+$/,"")||"/",r=new URLSearchParams(t),{data:n,slide:i}=wa(a);if(o==="/share")return n?{page:"share",data:n,slide:i}:{page:"source",source:{kind:"builtin",id:"home"},slide:""};if(o==="/edit")return{page:"edit",slide:i};if(o==="/new"){let c=r.get("template");return c&&js.includes(c)?{page:"source",source:{kind:"builtin",id:"template:"+c},slide:i}:{page:"pick"}}let s=xo(o);if(s)return{page:"source",source:s,slide:i};let l=r.get("src");return o==="/"&&l?{page:"source",source:{kind:"url",url:l},slide:i}:{page:"source",source:{kind:"builtin",id:"home"},slide:i}}function Ee(e){switch(e.kind){case"builtin":return e.id==="home"?"Home":e.id==="docs"||e.id==="help"?"the docs":e.id==="showcase"?"the showcase":e.id==="features"?"the features":e.id==="privacy"?"the privacy page":"the "+e.id.replace(/^template:/,"")+" template";case"gist":return"a gist"+(e.file?" ("+e.file+")":"");case"shared":return"a shared deck";case"file":return e.name;case"url":{let t=e.url.match(/^https:\/\/raw\.githubusercontent\.com\/([^/]+)\/([^/]+)\/[^/]+\/(.+)$/);if(t)return t[1]+"/"+t[2]+"/"+t[3];try{let a=new URL(e.url);return a.hostname+a.pathname}catch{return e.url}}}}function xa(e,t,{exported:a=!1}={}){return{text:e,origin:t,originText:e,exported:a?e:null}}function ka(e){return e.text!==(e.exported??e.originText)}function Sa(e){return e.text===e.originText}function mn(e){try{let t=JSON.parse(e||"null");return!t||typeof t.text!="string"||!t.origin||typeof t.origin.kind!="string"?null:{text:t.text,origin:t.origin,originText:typeof t.originText=="string"?t.originText:t.text,exported:typeof t.exported=="string"?t.exported:null}}catch{return null}}var js,fn=V(()=>{"use strict";ko();Co();js=["blank","talk","recording"]});function Mo(e){let t;try{t=new URL(e)}catch{return null}let a=t.hostname.replace(/^(www\.|m\.)/,""),o=null,r=!1;if(a==="youtu.be")o=t.pathname.slice(1).split("/")[0];else if(a==="youtube.com"||a==="youtube-nocookie.com"){let n=t.pathname.split("/").filter(Boolean);n[0]==="watch"?o=t.searchParams.get("v"):["shorts","live","embed"].includes(n[0])&&(o=n[1]||null,r=n[0]==="shorts")}return!o||!/^[\w-]{6,}$/.test(o)?null:{id:o,start:Ws(t.searchParams.get("t")||t.searchParams.get("start")||""),portrait:r}}function Ws(e){if(/^\d+$/.test(e))return+e;let t=e.match(/^(?:(\d+)h)?(?:(\d+)m)?(?:(\d+)s)?$/);return t&&e?+(t[1]||0)*3600+ +(t[2]||0)*60+ +(t[3]||0):0}function gn(e){return"https://www.youtube-nocookie.com/embed/"+encodeURIComponent(e.id)+"?enablejsapi=1&rel=0&playsinline=1"+(e.start?"&start="+e.start:"")}var yn=V(()=>{"use strict"});function ye(e){let t=new Map,a=e.totalObs??e.total;return e.events.forEach((o,r)=>{t.has(o.id)||t.set(o.id,{id:o.id,title:o.title,takes:[]});let n=t.get(o.id),i=e.events[r+1];n.takes.push({no:n.takes.length+1,start:bn(o)+(o.skip||0),end:i?bn(i)-(i.lead||0):a})}),t}function _t(e){let t=[],a=Ca(e);return ye(e).forEach(o=>{let r=e.picks[o.id]??o.takes.length;if(!r)return;let n=o.takes[r-1];if(!n)return;let i=vn(n.start,a),s=vn(n.end,a);s>i&&t.push({id:o.id,title:o.title,f0:i,f1:s,start:i*1e3/a,end:s*1e3/a})}),t}function _s(e){let t=[];return e.forEach(a=>{let o=t[t.length-1];o&&a.f0===o.f1?(o.f1=a.f1,o.end=a.end):t.push({f0:a.f0,f1:a.f1,start:a.start,end:a.end})}),t}function To(e,t){let a=0,o=[];return _t(e).forEach(r=>{let{sec:n,title:i}=t(r.id,r.title),s=o[o.length-1];(!s||s.sec!==n&&s.title!==i)&&o.push({sec:n,title:i,t:a}),a+=r.end-r.start}),{list:o,length:a}}function xn(e,t){let{list:a,length:o}=To(e,t),r=a.filter((n,i)=>i===0||(a[i+1]?a[i+1].t:o)-n.t>=1e4);return r.length&&(r[0].t=0),{lines:r.map(n=>ba(n.t)+" "+n.title),dropped:a.length-r.length,length:o}}function kn(e,t,{input:a,outputName:o,sectionOf:r,loudness:n}){let i=_s(_t(e));if(!e.withObs)return"# This was a rehearsal: nothing was recorded.";if(!i.length)return"# Every slide is left out: nothing to render.";let s=Us(a)+o,{list:l,length:c}=To(e,r),d=y=>String(y).replace(/[=;#\\\n]/g,k=>"\\"+k),g=`cat > /tmp/slidetake-chapters.txt <<'EOF'
`+(`;FFMETADATA1
title=`+d(e.deckTitle)+`
`+l.map((y,k)=>`[CHAPTER]
TIMEBASE=1/1000
START=`+Math.round(y.t)+`
END=`+Math.round(l[k+1]?l[k+1].t:c)+`
title=`+d(y.title)).join(`
`))+`
EOF
`,b=" -map 0:v:0 -map 0:a:0 -map_metadata 1 -map_chapters 1";if(t==="copy"){let y=i.map(E=>"file "+Ea(a)+`
inpoint `+wn(E.start)+`
outpoint `+wn(E.end)).join(`
`);return(i.length>1?`# Careful: without re-encoding, cuts can only land on keyframes (OBS puts one about every 2 s),
# so `+(i.length===2?"the cut":"each of the "+(i.length-1)+" cuts")+` here may keep or lose up to ~2 s. Use a frame-accurate option for retakes.
`:"")+`cat > /tmp/slidetake-cuts.txt <<'EOF'
`+y+`
EOF
`+g+"ffmpeg -f concat -safe 0 -i /tmp/slidetake-cuts.txt -i /tmp/slidetake-chapters.txt"+b+" -c copy -movflags +faststart "+Ea(s)}let m=Ca(e),p=y=>(y/m).toFixed(6),C=y=>((y-.5)/m).toFixed(6),L=i.map(y=>"gte(t,"+C(y.f0)+")*lt(t,"+C(y.f1)+")").join("+"),w=i.map(y=>"gte(t,"+p(y.f0)+")*lt(t,"+p(y.f1)+")").join("+"),x=t==="mac"?"-c:v h264_videotoolbox -b:v 12M":"-c:v libx264 -crf 18 -preset medium";return g+"ffmpeg -i "+Ea(a)+" -i /tmp/slidetake-chapters.txt"+b+` -vf "select='`+L+`',setpts=N/FRAME_RATE/TB" -af "asetnsamples=n=48:p=0,aselect='`+w+"',asetpts=N/SR/TB"+(n?",loudnorm=I=-14:TP=-1:LRA=11":"")+'"'+(n?" -ar 48000":"")+" "+x+" -c:a aac -b:a 192k -movflags +faststart "+Ea(s)}var bn,Ca,vn,dt,Us,Ea,wn,Ma=V(()=>{"use strict";va();bn=e=>e.obsT??e.t,Ca=e=>e.fps||60,vn=(e,t)=>Math.round(e*t/1e3);dt=e=>String(e||"").split(/[\\/]/).pop()||"",Us=e=>{let t=Math.max(String(e).lastIndexOf("/"),String(e).lastIndexOf("\\"));return t>=0?String(e).slice(0,t+1):""},Ea=e=>"'"+String(e).replace(/'/g,"'\\''")+"'",wn=e=>(e/1e3).toFixed(3)});function qs(e,t){let a=Math.min(e,t*16/9),o=a*9/16;return{w:a,h:o,x:(e-a)/2,y:(t-o)/2}}function Sn(e,t,a){let o=qs(e,t),r=[Math.floor(o.w*a),Math.floor(o.h*a)];return{quality:ht.find(n=>r[0]>=n.w&&r[1]>=n.h)||null,device:r}}function qt(e){let t=new Map;e.events.forEach((o,r)=>{t.has(o.id)||t.set(o.id,[]),t.get(o.id).push(r)});let a=[];return ye(e).forEach(o=>{let r=e.picks[o.id]??o.takes.length,n=r?o.takes[r-1]:null;if(!n)return;let i=e.events[t.get(o.id)[r-1]];i&&i.clip&&n.end>n.start&&a.push({id:o.id,title:o.title,clip:i.clip,keep:(n.end-n.start)/1e3})}),a}var ht,Ta,Ut,Gs,En,Lo,Cn,La,Mn,Tn,Ln=V(()=>{"use strict";Ma();ht=[{name:"1080p",w:1920,h:1080,bitrate:8e6},{name:"720p",w:1280,h:720,bitrate:5e6}],Ta=192e3,Ut=30;Gs=["video/mp4;codecs=avc1.640028,mp4a.40.2","video/mp4;codecs=avc1,mp4a.40.2","video/mp4","video/webm;codecs=vp9,opus","video/webm;codecs=vp8,opus","video/webm"],En=e=>Gs.find(t=>e(t))||"",Lo=e=>e.startsWith("video/mp4")?"mp4":"webm",Cn=e=>Math.round((e.bitrate+Ta)/8*60);La=(e,t)=>t>e?t:e+.001,Mn=e=>e.replace(/\s*\([0-9a-f]{4}:[0-9a-f]{4}\)\s*$/i,""),Tn=(e,t)=>Math.min(e,t)+"p"+(t>e?" portrait":"")});function Vs(e){let t=1681.974450955533,a=.7071752369554196,o=Math.tan(Math.PI*t/e),r=Math.pow(10,3.999843853973347/20),n=Math.pow(r,.4996667741545416),i=1+o/a+o*o,s={b0:(r+n*o/a+o*o)/i,b1:2*(o*o-r)/i,b2:(r-n*o/a+o*o)/i,a1:2*(o*o-1)/i,a2:(1-o/a+o*o)/i};t=38.13547087602444,a=.5003270373238773,o=Math.tan(Math.PI*t/e),i=1+o/a+o*o;let l={b0:1,b1:-2,b2:1,a1:2*(o*o-1)/i,a2:(1-o/a+o*o)/i};return{shelf:s,highPass:l}}function An(e,t){let{shelf:a,highPass:o}=Vs(e),r=Math.round(e/10),n=[],i=Array.from({length:t},()=>new Float64Array(8)),s=d=>d>=3&&d<=4?1.41:1,l=0,c=0;return{add(d){let T=d[0].length;for(let g=0;g<t;g++){let b=d[g]||d[0],m=i[g],p=s(g),[C,L,w,x,y,k,E,K]=m,ae=l,X=Math.floor(ae/r),D=(X+1)*r,q=0;for(let ce=0;ce<T;ce++){let oe=b[ce];oe>c?c=oe:-oe>c&&(c=-oe);let Q=a.b0*oe+a.b1*C+a.b2*L-a.a1*w-a.a2*x;L=C,C=oe,x=w,w=Q;let Ft=o.b0*Q+o.b1*y+o.b2*k-o.a1*E-o.a2*K;k=y,y=Q,K=E,E=Ft,q+=Ft*Ft,++ae===D&&(n[X]=(n[X]||0)+p*q,q=0,X++,D+=r)}q&&(n[X]=(n[X]||0)+p*q),m.set([C,L,w,x,y,k,E,K])}l+=T},result(){let d=Math.floor(l/r),T=[];for(let p=3;p<d;p++)T.push(((n[p-3]||0)+(n[p-2]||0)+(n[p-1]||0)+(n[p]||0))/(4*r));let g=p=>p.reduce((C,L)=>C+L,0)/p.length,b=T.filter(p=>Aa(p)>-70),m=b.length?b.filter(p=>Aa(p)>Aa(g(b))-10):[];return{integrated:m.length?Aa(g(m)):-1/0,peak:c,peakDb:c>0?Ys(c):-1/0}}}}function Bo(e,{limit:t=!1,target:a=-14,ceiling:o=-1.5}={}){if(!isFinite(e.integrated))return 0;let r=Math.min(a-e.integrated,Ao);return r<=0||t||e.peakDb==null||!isFinite(e.peakDb)?r:Math.max(0,Math.min(r,o-e.peakDb))}function Oo(e,t,a={}){let o=Ba(a.ceilingDb??-1.5),r=Math.max(1,Math.round((a.lookahead??.005)*e)),n=1-Math.exp(-1/((a.release??.05)*e)),i=Array.from({length:t},()=>[]),s=[],l=[],c=new Float64Array(r),d=0,T=r,g=1,b=!1,m=0,p=0;c.fill(1);let C=L=>{for(;l.length&&l[l.length-1][1]>=L;)l.pop();for(l.push([d,L]);l[0][0]<=d-r;)l.shift();let w=l[0][1];if(g=w<g?w:g+(w-g)*n,g>.999&&(g=1),T+=g-c[d%r],c[d%r]=g,d>=r-1){let x=T/r,y=x>.999?1:x;s.push(y),y<.999&&!b&&m++,b=y<.999}d++};return{push(L){let w=L[0].length;for(let x=0;x<w;x++){let y=0;for(let k=0;k<t;k++){let E=(L[k]||L[0])[x];i[k].push(E),E>y?y=E:-E>y&&(y=-E)}C(y>o?o/y:1)}},ready:()=>s.length-p,take(L){let w=Array.from({length:t},()=>new Float32Array(L));for(let x=0;x<L;x++){let y=s[p+x];for(let k=0;k<t;k++)w[k][x]=i[k][p+x]*y}return p+=L,p>65536&&(s.splice(0,p),i.forEach(x=>x.splice(0,p)),p=0),w},end(){for(let L=0;L<r-1;L++){for(let w=0;w<t;w++)i[w].push(0);C(1)}},get events(){return m}}}var Ys,Aa,Ao,Ba,Bn=V(()=>{"use strict";Ys=e=>20*Math.log10(e),Aa=e=>-.691+10*Math.log10(e);Ao=20;Ba=e=>Math.pow(10,e/20)});function On(e){let t=2166136261;for(let a=0;a<e.length;a++)t^=e.charCodeAt(a),t=Math.imul(t,16777619);return(t>>>0).toString(36)}function In(e,t){return e.map((a,o)=>{let r=e[o-1]||"";return{id:a,title:t(a).title,fp:t(a).fp,prev:r,prevFp:r?t(r).fp:""}})}function Pn(e,t,a){let o=new Map(a.map(i=>[i.id,i])),r=new Map;e.events.forEach(i=>{r.has(i.id)||r.set(i.id,[]),r.get(i.id).push(i)});let n=[];return ye(e).forEach(i=>i.takes.forEach((s,l)=>{let c=r.get(i.id)[l];if(!c||!c.clip||s.end<=s.start)return;let d=o.get(i.id);d&&n.push({uid:c.clip,id:i.id,title:i.title,clip:c.clip,ms:s.end-s.start,run:t,date:e.date,fp:d.fp,prev:d.prev,prevFp:d.prevFp,at:s.start})})),n.sort((i,s)=>i.at-s.at).map(({at:i,...s})=>s)}function Oa(e,t){return t.map(a=>{let o=e.takes.filter(i=>i.id===a.id).map((i,s)=>({...i,no:s+1,outdated:i.fp!==a.fp?"slide":(i.prev??null)!==a.prev||i.prevFp!==a.prevFp?"before":""})),r=e.picks[a.id],n=null;if(r&&o.some(i=>i.uid===r))n=r;else{let i=o.filter(s=>!s.outdated);n=i.length?i[i.length-1].uid:null}return{id:a.id,title:a.title,takes:o,pick:n}})}function zn(e){let t=[],a=0;return e.forEach(o=>{let r=o.pick?o.takes.find(n=>n.uid===o.pick):null;r&&(t.push({id:o.id,title:o.title,t:a,clip:r.clip}),a+=r.ms)}),{events:t,picks:{},total:a}}function Ia(e,t){let a=new Set(t);return e.filter(o=>a.has(o))}function Rn(e,t,a){let o=t?e.indexOf(t):-1,r=e.indexOf(a);return o<0||r<0?[a]:e.slice(Math.min(o,r),Math.max(o,r)+1)}var Dn=V(()=>{"use strict";Ma()});var Zc={};function W(e){try{let t=localStorage.getItem(e);if(t!==null||!e.startsWith("slidetake:"))return t;let a=e.slice(10);return localStorage.getItem("slidetake:"+a)??localStorage.getItem("traverse:"+a)}catch{return null}}function _(e,t){try{localStorage.setItem(e,t)}catch{}}function ol(e){try{return{html:window.marked?window.marked.parse(e):"<pre>"+A(e)+"</pre>",err:null}}catch{return{html:"<p>(could not render)</p>",err:"render error"}}}function nl(e){let t=document.createTreeWalker(e,NodeFilter.SHOW_TEXT,{acceptNode:o=>/Slidetake/.test(o.nodeValue||"")&&!o.parentElement?.closest("code, pre, kbd, svg, em, .st-name")?1:2}),a=[];for(;t.nextNode();)a.push(t.currentNode);a.forEach(o=>{let r=document.createElement("span");r.innerHTML=A(o.nodeValue||"").replace(/Slidetake/g,rl),o.replaceWith(...r.childNodes)})}function qa(){let e=R.brand||"",t=R.logo||"",a=/^chip$/i.test(R.brand_style||""),o=/^slidetake$/i.test(e)?'<span class="st-mark">'+lr+'<span class="word">Slide<span>take</span></span></span>':(t?'<img alt="" src="'+A(t)+'">':"")+(e?"<span"+(a?' class="chip"':"")+">"+A(e)+"</span>":"");if(Be.dataset.html!==o){Be.dataset.html=o,Be.innerHTML=o;let r=Be.querySelector("img");r&&(r.onload=r.onerror=()=>ke(!0))}Be.hidden=!o,je(),document.title=R.title||"Slidetake",sl(),ni()}function il(){let e=String(R.accent||"").trim();if(!e||!window.CSS||!CSS.supports("color",e))return null;if(!CSS.supports("color","oklch(from red l c h)"))return{accent:e,line:e};let t=a=>"oklch(from "+e+" "+a+" c h)";return{dark:{accent:t(.8),accentSoft:t(.87),line:t(.5)},light:{accent:t(.45),accentSoft:t(.4),line:t(.75),ring:t(.7)}}}function sl(){let e="",t=(o,r)=>{let n=Object.entries(r||{}).filter(([i,s])=>Nn[i]&&s&&typeof s!="object").map(([i,s])=>Nn[i]+":"+String(s).replace(/[;{}<>]/g,"")).join(";");n&&(e+=o+"{"+n+`}
`)};[il(),U&&U.colors].filter(Boolean).forEach(o=>{["dark","light"].forEach(r=>{let n={...o,...o[r]||{}},i=r==="dark";n.accent&&typeof n.accent=="string"&&(n.accentSoft=n.accentSoft||n.accent,n.line=n.line||"color-mix(in srgb, "+n.accent+(i?" 45%, #09090b)":" 55%, #fff)"),n.ring=n.ring||(i?n.accent:n.line),n.onAccent=n.onAccent||(i?"color-mix(in srgb, "+n.accent+" 15%, #000)":"#fff")),t(i?'body:not([data-mode="light"])':'body[data-mode="light"]',n)})});let a=document.getElementById("st-colors");a||(a=document.createElement("style"),a.id="st-colors",document.head.appendChild(a)),a.textContent!==e&&(a.textContent=e),document.body.classList.toggle("st-header-color",e.includes("--header-bg"))}function Te(e){let t=document.createElement("span");t.style.color="var("+e+")",document.body.appendChild(t);let a=getComputedStyle(t).color;return t.remove(),Ge=Ge||Object.assign(document.createElement("canvas"),{width:1,height:1}).getContext("2d",{willReadFrequently:!0}),Ge.clearRect(0,0,1,1),Ge.fillStyle="#000",Ge.fillStyle=a,Ge.fillRect(0,0,1,1),"#"+[...Ge.getImageData(0,0,1,1).data.slice(0,3)].map(o=>o.toString(16).padStart(2,"0")).join("")}function ll(e,t,a){let o=i=>[1,3,5].map(s=>parseInt(i.slice(s,s+2),16)),r=o(e),n=o(t);return"#"+r.map((i,s)=>Math.round(i*a+n[s]*(1-a)).toString(16).padStart(2,"0")).join("")}function oo(){if(U&&U.themeKey&&!Hn){let t=W(U.themeKey);return t==="light"||t==="dark"?t:matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}return String(Hn||W("slidetake:mode")||R.mode||"dark").toLowerCase()==="light"?"light":"dark"}function ni(){let e=oo()==="light";e?document.body.dataset.mode="light":delete document.body.dataset.mode;let t=document.getElementById("btn-mode");t&&(t.innerHTML=e?'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>':'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="4.5"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>',t.title=(e?"Dark theme":"Light theme")+" (L)",t.setAttribute("aria-label",t.title))}function ii(){let e=oo()==="light"?"dark":"light";U&&U.themeKey?(_(U.themeKey,e),document.documentElement.classList.toggle("dark",e==="dark")):_("slidetake:mode",e),ni(),se.querySelector(".echarts-container, .diagram.d2, .diagram.dot")&&Et(!0)}function cl(){let t=(R.camera||"").replace(/^\[|\]$/g,"").split(",").map(a=>a.trim().replace(/^["']|["']$/g,"")).filter(Boolean);return t.length?t:["on","full","off"]}function Go(e){if(!e)return[];let t=rn(e.camera);return!te||t.some(dl)?t:[]}function dl(e){return!!qe({},e).behind}function Ot(e){return nn(Go(e),e&&e.frags?e.frags.length:0)}function si(){let e=Ot(u.get(f));return e[Math.min(xe,e.length-1)]||{cam:0,frag:0}}function hl(){if(!f)return null;let e=u.get(f),t=Go(e);if(t.length)return t[Math.min(si().cam,t.length-1)];if(e&&e.el&&e.el.classList.contains("card-full"))return"off";for(let a=v.indexOf(f)-1;a>=0;a--){let o=Go(u.get(v[a]));if(o.length)return qe({},o[o.length-1]).behind?null:o[o.length-1]}return null}function pl(){let e={corner:(R.pip||"none").toLowerCase(),size:vo(parseFloat(R.pip_size)||24),circle:(R.pip_shape||"").toLowerCase()==="circle",mirror:!/^(no|false|off)$/i.test(R.pip_mirror||""),full:!1,off:!1,flip:!1,used:!1};if(/^(behind|under)\b/.test(e.corner)){let t=e.corner;e.corner="bottom-right",qe(e,t)}return qe(e,hl()),be&&!/\b(off|hide)\b/i.test(be)&&(e.off=!1),qe(e,be),!Wt.includes(e.corner)&&(re||e.used)&&(e.corner="bottom-right"),e.flip&&Wt.includes(e.corner)&&(e.corner=e.corner.includes("left")?e.corner.replace("left","right"):e.corner.replace("right","left")),e}function je(){let e=!B.hidden&&B.offsetWidth?B.getBoundingClientRect():null,t=ze=pl();t.behind&&(!f||ue)&&(t.full=!1,t.behind=!1);let a=Wt.includes(t.corner),o=te&&!!t.behind&&!t.off;if(B.className=a?[t.corner,t.circle&&"circle",re&&"live",t.mirror&&"mirror",t.full&&"full",t.behind&&"behind",o&&"empty",B.classList.contains("msg")&&"msg"].filter(Boolean).join(" "):"",B.style.width=t.full?"":t.size+"%",B.hidden=!a||t.off||te&&!o,de.dataset.pip=B.hidden||t.full?"none":t.corner,de.classList.toggle("cam-behind",!B.hidden&&!!t.behind),de.style.setProperty("--cam-card",String((t.card||0)/100)),de.classList.toggle("cam-card",(t.card||0)>0),de.classList.toggle("cam-solid",(t.card||0)>=100),de.classList.toggle("cam-live",!B.hidden&&!!t.behind&&!o),Vo(!B.hidden&&t.behind&&t.place||""),B.hidden||Bt||!B.animate)return;let r="cubic-bezier(.65,0,.35,1)";if(!e){B.animate([{opacity:0},{opacity:1}],{duration:300,easing:"ease-out"});return}let n=B.getBoundingClientRect();if(Math.abs(e.left-n.left)+Math.abs(e.top-n.top)+Math.abs(e.width-n.width)+Math.abs(e.height-n.height)<2)return;let i=(B.offsetParent||de).getBoundingClientRect(),s=l=>({left:l.left-i.left+"px",top:l.top-i.top+"px",width:l.width+"px",height:l.height+"px",right:"auto",bottom:"auto",aspectRatio:"auto"});B.animate([s(e),s(n)],{duration:600,easing:r})}function Vo(e){mt=e,de.dataset.place=e,Qt.innerHTML="";let t=e&&u.get(f);if(!t||!t.el)return;let a=t.el.querySelector(".body"),o=[...a.children].map(m=>m.cloneNode(!0)),r=m=>/^H[1-6]$/.test(m.tagName),n=m=>m.matches("figure.media, .diagram, .echarts-container, .gallery"),i=o.filter((m,p)=>p===0&&r(m)),s=o.filter(m=>!i.includes(m)),[l,c]=e==="top-bottom"?["top","bottom"]:["left","right"],d=o.filter(n),T=o.filter(m=>!n(m)),g=/-/.test(e)?d.length&&T.length?[[l,T],[c,d]]:[[l,i],[c,s]]:[[e,o]],b=a.clientWidth;g.forEach(([m,p])=>{if(!p.length)return;let C=document.createElement("div");C.className="cam-box "+m;let L=(w,x)=>{if(!x.length)return;let y=document.createElement("div");y.className=w;let k=document.createElement("section");k.className="node";let E=document.createElement("div");E.className="body",x.forEach(K=>E.appendChild(K)),k.appendChild(E),w==="cam-media"&&(k.style.width=b+"px"),y.appendChild(k),C.appendChild(y)};L("cam-text",p.filter(w=>!n(w))),L("cam-media",p.filter(n)),Qt.appendChild(C)}),Qt.querySelectorAll("img").forEach(m=>{m.complete||m.addEventListener("load",Yo,{once:!0})}),Yo()}function Yo(){let e=N.clientHeight/240;Qt.querySelectorAll(".cam-media").forEach(t=>{let a=t.firstElementChild,o=Math.min(t.clientWidth/a.offsetWidth,t.clientHeight/a.offsetHeight,e*1.5);a.style.transform="translate(-50%, -50%) scale("+o+")"}),Qt.querySelectorAll(".cam-text").forEach(t=>{let a=t.firstElementChild,o=t.clientWidth,r=t.clientHeight,n=.3,i=e;for(let s=0;s<12;s++){let l=(n+i)/2;a.style.width=o/l+"px",a.offsetHeight*l<=r?n=l:i=l}a.style.width=o/n+"px",a.style.transform="scale("+n+")"})}function ul(){let e=ze;if(!e||B.hidden||e.full)return null;let t=N.clientWidth,a=N.clientHeight,o=16,r=t*e.size/100,n=e.circle?r:r*9/16,i=e.corner.includes("left")?o:t-o-r,s=e.corner.includes("top")?o:a-o-n;return{x0:i,y0:s,x1:i+r,y1:s+n}}function ml(){if(!_e)return;if(te){Rt(!0);return}let e=cl();Pe=(Pe+1)%e.length,be=e[Pe],je(),J||vt("Camera: "+be),!re&&!B.hidden?nt():ke()}function li(e){let t=an(e,{render:ol});R=t.deck,u=t.nodes,qa();let a={"+++":"+++ format",reveal:"reveal.js format",headings:"headings"}[t.format];Ks.textContent=u.size+(u.size===1?" card":" cards")+" \xB7 "+a,ea.textContent=t.errCount?t.errCount+" card(s) had errors":""}function ci(){Xe=[...u.values()].filter(o=>!o.parent).map(o=>o.id);let e=0;function t(o,r){let n=u.get(o);if(n.depth=r,n.children.length===0)n._slot=e++;else{n.children.forEach(s=>t(s,r+1));let i=n.children.map(s=>u.get(s)._slot);n._slot=(Math.min(...i)+Math.max(...i))/2}}Xe.forEach(o=>t(o,0)),v=[];function a(o){v.push(o),u.get(o).children.forEach(a)}return Xe.forEach(a),Math.max(1,e)}function fl(){let e=[],t=[],a=[];return u.forEach(o=>{e[o.depth]=Math.max(e[o.depth]||0,o._h),t[o.depth]=Math.max(t[o.depth]||0,o._w),a[o.depth]=(a[o.depth]||0)+1}),{maxH:e,maxW:t,count:a,maxDepth:e.length-1}}function di(e){e.x!==null&&!isNaN(e.x)&&(e.cx=e.x+e._w/2),e.y!==null&&!isNaN(e.y)&&(e.cy=e.y+e._h/2)}function gl(){let{maxH:e,maxDepth:t}=fl(),a=[0];for(let l=1;l<=t;l++)a[l]=a[l-1]+e[l-1]+Qs;let o=Xs-xt,r=[],n=(l,c)=>{let d=u.get(l);d.cx+=c,d.children.forEach(T=>n(T,c))},i=l=>{let c=u.get(l);r[c.depth]=Math.max(r[c.depth]??-1/0,c.cx+c._w/2),c.children.forEach(i)};function s(l){let c=u.get(l),d=r[c.depth]!==void 0?r[c.depth]+o:-1/0;c.children.length?(c.children.forEach(s),c.cx=(u.get(c.children[0]).cx+u.get(c.children[c.children.length-1]).cx)/2,c.cx-c._w/2<d&&n(l,d-(c.cx-c._w/2))):c.cx=(d===-1/0?0:d)+c._w/2,i(l)}Xe.forEach(s),u.forEach(l=>{l.cy=a[l.depth]+l._h/2,di(l)})}function yl(e){let t=Math.PI*2/e,a=32,o=[],r=(s,l)=>Math.abs(s.cx-l.cx)<(s._w+l._w)/2+a&&Math.abs(s.cy-l.cy)<(s._h+l._h)/2+a,n=Math.max(0,...[...u.values()].map(s=>s.depth)),i=0;for(let s=0;s<=n;s++){let l=[...u.values()].filter(d=>d.depth===s);if(!l.length)continue;let c=s===0?Xe.length>1?el*.5:0:i+Zs;for(let d=0;d<400&&(l.forEach(g=>{let b=(g._slot+.5)*t-Math.PI/2;g.cx=c*Math.cos(b),g.cy=c*Math.sin(b),di(g)}),!!l.some((g,b)=>l.some((m,p)=>p>b&&r(g,m))||o.some(m=>r(g,m))));d++)c=c*1.02+10;i=c,o.push(...l)}}function bl(e){let t=document.createTreeWalker(e,NodeFilter.SHOW_COMMENT),a=[];for(;t.nextNode();)a.push(t.currentNode);a.forEach(o=>{let r=o.data.match(/^\s*\.element:\s*([\s\S]*)$/);if(!r)return;let n=o.previousSibling;for(;n&&n.nodeType===3&&!n.data.trim();)n=n.previousSibling;let i=n&&n.nodeType===1?n:o.parentElement;i&&Object.entries(Ht(r[1])).forEach(([s,l])=>{s==="class"?i.classList.add(...l.split(/\s+/).filter(Boolean)):s==="style"?i.style.cssText+=";"+l:i.setAttribute(s,l)})})}function xl(e){let t=new DOMParser().parseFromString(e,"image/svg+xml"),a=t.documentElement;if(!a||a.localName!=="svg"||t.getElementsByTagName("parsererror").length)return null;let o=a.namespaceURI,r=i=>{[...i.children].forEach(s=>{s.namespaceURI!==o||!vl.has(s.localName)?s.remove():r(s)}),[...i.attributes].forEach(s=>{let l=s.name.toLowerCase(),c=s.value;(l.startsWith("on")||/javascript:|expression\(/i.test(c)||/url\(\s*['"]?(?!#)/i.test(c)||(l==="href"||l==="xlink:href")&&!c.trim().startsWith("#"))&&i.removeAttribute(s.name)})};r(a);let n="st-svg"+ ++wl+"-";return[a,...a.querySelectorAll("*")].forEach(i=>[...i.attributes].forEach(s=>{let l=s.name==="id"?n+s.value:s.value.replace(/url\(\s*(['"]?)#/g,"url($1#"+n);(s.name==="href"||s.name==="xlink:href")&&l.startsWith("#")&&(l="#"+n+l.slice(1)),l!==s.value&&(s.value=l)})),document.importNode(a,!0)}function Ie(e,t){let a=e.classList.contains("fragment");["fragment","fade-up","visible","current-fragment"].forEach(o=>{e.classList.contains(o)&&(t.classList.add(o),e.classList.remove(o))}),e.dataset.fragmentIndex!==void 0&&(t.dataset.fragmentIndex=e.dataset.fragmentIndex,delete e.dataset.fragmentIndex),e.replaceWith(t),a&&u.forEach(o=>o.frags&&o.frags.forEach(r=>{let n=r.indexOf(e);n>=0&&(r[n]=t)}))}function Ro(e){let t=document.createElement("figure");t.className="media",Ie(e,t),t.appendChild(e);let a=e.getAttribute("alt");return a&&t.insertAdjacentHTML("beforeend","<figcaption>"+A(a)+"</figcaption>"),t}function kl(e,t){let a=document.createElement("figure");return a.className="media yt fragment yt-play"+(e.portrait?" portrait":""),a.innerHTML='<div class="frame"><iframe src="'+gn(e)+'" title="'+A(t||"YouTube video")+'" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen loading="lazy"></iframe></div>'+(t?"<figcaption>"+A(t)+"</figcaption>":""),a}function jn(e,t){let a=t<=4?t:t<=6?3:4;e.style.setProperty("--cols",a),e.style.setProperty("--rows",Math.ceil(t/a))}function El(e,t){t.querySelectorAll("pre > code.language-svg").forEach(n=>{let i=xl(n.textContent.trim()),s=document.createElement("div");s.className=i?"diagram svg":"diagram err",i?s.appendChild(i):s.textContent="SVG error: not a valid <svg> drawing",Ie(n.parentElement,s)}),t.querySelectorAll(":scope > p").forEach(n=>{let i=n.children.length===1?n.children[0]:null;if(!i)return;let s=i.tagName==="A"&&n.textContent.trim()===i.textContent.trim()?i.getAttribute("href"):i.tagName==="IMG"?i.getAttribute("src"):null,l=s&&Mo(s);l&&Ie(n,kl(l,i.tagName==="IMG"?i.getAttribute("alt"):""))}),t.querySelectorAll(":scope > ul, :scope > ol").forEach(n=>{let i=[...n.children];!i.length||!i.every(s=>Do(s)||Ml(s))||(n.classList.add("gallery"),i.some(s=>!Do(s))&&n.classList.add("diagrams"),i.forEach(s=>{if(!Do(s))return;let l=s.querySelector("img");s.innerHTML="",s.appendChild(l),Ro(l)}),i.length>1&&i.every(s=>s.classList.contains("fragment"))?(n.classList.add("carousel"),i[0].classList.remove("fragment","fade-up"),i.forEach((s,l)=>{s.classList.replace("fade-up","current-visible");let c=s.querySelector("figcaption");c&&(c.dataset.count=l+1+" / "+i.length)})):jn(n,i.length))}),t.querySelectorAll(":scope > p").forEach(n=>{if(!Sl(n))return;let i=[...n.querySelectorAll("img")];if(i.length===1){Ie(n,i[0]),Ro(i[0]);return}let s=document.createElement("div");s.className="gallery grid",Ie(n,s),i.forEach(l=>{s.appendChild(l),Ro(l)}),jn(s,i.length)});let a=[...t.children].filter(n=>!/^H[1-6]$/.test(n.tagName)&&!(n.nodeType===1&&n.tagName==="HR")),o=a.filter(n=>n.matches("figure.media"));o.length===1&&a.length===1&&e.classList.add("card-media");let r=document.createTreeWalker(t,NodeFilter.SHOW_COMMENT);for(;r.nextNode();)/^\s*view\s*:\s*full\s*$/i.test(r.currentNode.data)&&e.classList.add("card-full");if(a.length===1&&(a[0].matches("figure.media:not(.yt)")||a[0].matches(".gallery.carousel:not(.diagrams)")))e.classList.add("card-bleed");else if(o.length===1&&a.length>1&&!o[0].matches(".yt")){e.classList.add("card-split",a.indexOf(o[0])===0?"media-first":"media-last");let n=document.createElement("div");n.className="split-text",a.filter(i=>i!==o[0]).forEach(i=>n.appendChild(i)),o[0].after(n),a.indexOf(o[0])!==0&&n.after(o[0])}t.querySelector(".gallery")&&e.classList.add("card-gallery")}function hi(e,t){let a=e.querySelector("iframe");a&&a.contentWindow&&a.contentWindow.postMessage(JSON.stringify({event:"command",func:t,args:[]}),"*")}function Cl(e){let t=document.createTreeWalker(e,NodeFilter.SHOW_COMMENT),a=[];for(;t.nextNode();)/^\s*steps\s*$/i.test(t.currentNode.data)&&a.push(t.currentNode);a.forEach(o=>{for(let r=o.nextSibling;r&&!(r.nodeType===8&&/^\s*steps\s*:\s*off\s*$/i.test(r.data));r=r.nextSibling)r.nodeType!==1||r.classList.contains("fragment")||(/^(UL|OL)$/.test(r.tagName)?r.querySelectorAll(":scope > li").forEach(n=>n.classList.add("fragment","fade-up")):r.classList.add("fragment","fade-up"))})}function Tl(e){let t=r=>r.classList.contains("fragment")&&(r.tagName==="P"&&r.children.length===1&&r.children[0].tagName==="IMG"&&!r.textContent.trim()&&!Mo(r.children[0].getAttribute("src")||"")||r.tagName==="PRE"&&!!r.querySelector(pi)),a=[],o=[];[...e.children].forEach(r=>{t(r)?o.push(r):(o.length>1&&a.push(o),o=[])}),o.length>1&&a.push(o),a.forEach(r=>{let n=document.createElement("ul");r[0].before(n),r.forEach(i=>{let s=document.createElement("li");s.className="fragment fade-up",i.classList.remove("fragment","fade-up"),s.appendChild(i),n.appendChild(s)})})}function Ll(e){let t=[...e.querySelectorAll(".fragment")].map((r,n)=>({e:r,i:n,k:r.dataset.fragmentIndex}));if(t.every(r=>r.k===void 0))return t.map(r=>[r.e]);let a=0;t.forEach(r=>{r.k=r.k===void 0?a:parseFloat(r.k),a=Math.max(a,r.k)+1}),t.sort((r,n)=>r.k-n.k||r.i-n.i);let o=[];return t.forEach((r,n)=>{n&&t[n-1].k===r.k?o[o.length-1].push(r.e):o.push([r.e])}),o}function dr(e,t,a){!e||!e.frags||(a&&e.el.classList.add("snap"),e.frags.forEach((o,r)=>o.forEach(n=>{let i=n.classList.contains("visible");n.classList.toggle("visible",r<t),n.classList.toggle("current-fragment",r===t-1),n.classList.contains("yt-play")&&i!==r<t&&!a&&hi(n,r<t?"playVideo":"pauseVideo")})),a&&(e.el.offsetWidth,e.el.classList.remove("snap")))}function Al(){try{return R.base?new URL(R.base,Re||location.href):Re?new URL(Re):null}catch{return null}}function Bl(e){let t=Al(),a=0;return e.querySelectorAll("img[src], source[src], video[src], iframe[src], a[href]").forEach(o=>{let r=o.hasAttribute("src")?"src":"href",n=o.getAttribute(r);if(!n||/^(#|[a-z][a-z0-9+.-]*:|\/\/)/i.test(n))return;if(!t){r==="src"&&!n.startsWith("/")&&a++;return}let i=t;try{R.site&&(i=new URL(R.site,t))}catch{}o.setAttribute(r,new URL(n,n.startsWith("/")?i:t).href)}),a}function ro(e){let t=e.el,a=t.querySelector(".body");t.classList.add("measuring"),a.style.zoom="";let o=xt;e.visual=!!a.querySelector("iframe, .echarts-container, pre > code.language-dot, pre > code.language-d2, pre > code.language-echarts, .diagram, figure.media"),e.visual&&(o=le);let r=t.classList.contains("card-full");if(t.classList.remove("img-portrait","img-landscape","img-overlay","img-cover"),r&&(o=le),t.classList.contains("card-bleed")){let l=Math.max(0,...[...a.querySelectorAll("img")].map(d=>d.naturalWidth&&d.naturalHeight?d.naturalWidth/d.naturalHeight:0))||1.7777777777777777,c=le-Pa*l>=260;if(r&&c)t.classList.add("img-portrait"),t.style.setProperty("--img-w",Math.round(Pa*l)+"px"),o=le;else if(r||Math.abs(l-16/9)<.08)t.classList.add("img-overlay"),o=le,l>=16/9&&l<=16/9*1.15&&t.classList.add("img-cover");else if(l<1.3){let d=Math.min(Math.round(Pa*l),le-300);t.classList.add("img-portrait"),t.style.setProperty("--img-w",d+"px"),o=Math.min(le,Math.max(zo,d*2))}else t.classList.add("img-landscape"),o=Math.round(Math.max(xt,Math.min(le,(Pa-$s)*l))),t.style.setProperty("--img-h",Math.round(o/l)+"px")}else(a.querySelector('[style*="flex"], [style*="grid"], .r-hstack')||a.querySelectorAll("img").length>=4)&&(o=zo);let n=a.querySelectorAll("table");if(n.length){t.style.width=le+"px";let l=t.offsetWidth-a.clientWidth;n.forEach(c=>{o=Math.max(o,Math.min(zo,Math.ceil(c.offsetWidth)+l+12))})}let i=a.querySelectorAll("pre");if(i.length){t.style.width=le+"px";let l=t.offsetWidth-a.clientWidth;i.forEach(c=>{c.style.width="max-content",o=Math.max(o,Math.min(le,Math.ceil(c.offsetWidth)+l+2)),c.style.width=""})}let s=a.querySelectorAll(".fragment.grow");if(s.length){t.style.width=o+"px";let l=t.offsetWidth-a.clientWidth;s.forEach(c=>{o=Math.max(o,Math.min(le,Math.ceil(c.offsetWidth*1.3)+l))})}t.style.width=o+"px",t.scrollWidth>o+2&&(t.style.width=(o=Math.min(le,t.scrollWidth+24))+"px"),a.scrollWidth>a.clientWidth+2&&(a.style.zoom=(a.clientWidth/a.scrollWidth).toFixed(3)),e._w=o,e._h=t.offsetHeight||qo,t.classList.remove("measuring")}function Ol(){clearTimeout(Wn),Wn=setTimeout(()=>{u.forEach(ro),ca(),ke(!0)},200)}function Rl(){let e=oo()==="light"?"light":"dark",t=Te(e==="light"?"--accent-ring":"--accent"),a="slidetake-"+e+"-"+t.slice(1);return _n.has(a)||(Dl(a,zl[e],t),_n.add(a)),a}function Dl(e,t,a){let o={axisLine:{lineStyle:{color:t.line}},axisTick:{lineStyle:{color:t.line}},axisLabel:{color:t.muted},splitLine:{lineStyle:{color:t.split}},nameTextStyle:{color:t.muted}};echarts.registerTheme(e,{color:[a,...t.palette],backgroundColor:"transparent",textStyle:{color:t.text,fontFamily:"'IBM Plex Sans', sans-serif"},title:{textStyle:{color:t.text},subtextStyle:{color:t.muted}},legend:{textStyle:{color:t.text}},tooltip:{backgroundColor:t.tip,borderColor:t.line,textStyle:{color:t.text}},categoryAxis:o,valueAxis:o,logAxis:o,timeAxis:o,line:{symbolSize:6,lineStyle:{width:2.5}},pie:{label:{color:t.text,textBorderWidth:0},labelLine:{lineStyle:{color:t.muted}}},funnel:{label:{color:t.text,textBorderWidth:0}}})}function Hl(){let e=oo()==="light"?"light":"dark",t=Te("--node-bg"),a=Te(e==="dark"?"--accent":"--accent-line"),o=e==="dark"?[.58,.38,.25,.18,.12]:[.7,.45,.25,.15,.08],r={...Nl[e],N7:t,B1:Te("--accent")};return o.forEach((n,i)=>{r["B"+(i+2)]=ll(a,t,n)}),r}function jl(){let e=Te("--text"),t=Te("--text-muted"),a=Te("--accent"),o='"Helvetica,Arial,sans-serif"';return' graph [bgcolor=transparent color="'+t+'" fontcolor="'+e+'" fontname='+o+'] node [color="'+a+'" fontcolor="'+e+'" fontname='+o+'] edge [color="'+t+'" fontcolor="'+t+'" fontname='+o+"] "}function Ko(e){return Fo[e]||(Fo[e]=new Promise((t,a)=>{let o=document.createElement("script");o.src=e,o.onload=t,o.onerror=()=>{delete Fo[e],a(new Error("could not load "+e))},document.head.appendChild(o)}))}async function Ul(){let e=Ve,t=[...se.querySelectorAll(".node pre > code.language-dot")];se.querySelectorAll(".node pre > code.language-echarts").forEach(n=>{let i=document.createElement("div");i.className="echarts-container",i.dataset.chart=n.textContent,Ie(n.parentElement,i)});let a=[...se.querySelectorAll(".node .echarts-container[data-chart]")],o=[...se.querySelectorAll(".node pre > code.language-d2")];if(!t.length&&!a.length&&!o.length)return;let r=[];if(t.length)try{if(await Ko(Il),No=No||await Viz.instance(),e!==Ve)return;let n=jl();t.forEach(i=>{let s=document.createElement("div");s.className="diagram dot";try{s.appendChild(No.renderSVGElement(Wl(i.textContent,n)))}catch(l){s.className="diagram err",s.textContent="Diagram error: "+l.message}Ie(i.parentElement,s)})}catch{r.push("diagrams")}if(o.length)try{if(!za){let i=await import(Fl);za=new i.D2}if(e!==Ve)return;let n=Hl();for(let i of o){let s=document.createElement("div");s.className="diagram d2";try{let l=await za.compile(_l(i.textContent));s.innerHTML=await za.render(l.diagram,{...l.renderOptions||{},themeOverrides:n,darkThemeOverrides:n})}catch(l){s.className="diagram err",s.textContent="Diagram error: "+(l.message||l)}if(e!==Ve)return;Ie(i.parentElement,s)}}catch{r.push("D2 diagrams")}if(a.length)try{if(await Ko(Pl),e!==Ve)return;let n=Rl();a.forEach(i=>{let s;try{s=JSON.parse(i.dataset.chart)}catch{i.textContent="Chart data is not valid JSON.";return}let l=echarts.init(i,n,{renderer:"svg"});l.on("finished",()=>{mt&&i.closest(".node")===(u.get(f)||{}).el&&Vo(mt)}),l.setOption(Object.assign({backgroundColor:"transparent",animation:!Bt},s))})}catch{r.push("charts")}e===Ve&&(mt&&Vo(mt),r.length&&(ea.textContent="Could not load the "+r.join(" and ")+" renderer (offline?)"),u.forEach(ro),ca(),ke(!0))}function ql(){let e=[];return v.forEach(t=>{let a=At(t),o=e[e.length-1];o&&o.sec===a?o.ids.push(t):e.push({sec:a,ids:[t]})}),e}function Gl(){let a=0,o=0,r=0;ql().forEach((n,i)=>{let s=Math.max(...n.ids.map(d=>u.get(d)._h));i&&(a+=r/2+120+s/2);let l=o,c=o;n.ids.forEach((d,T)=>{let g=u.get(d);T&&(l+=90+g._w/2),g.cx=l,g.cy=a,c=l,l+=g._w/2}),o=c,r=s})}function Vl(){u.forEach(e=>{e.cx=0,e.cy=0})}function ui(){Ve++,window.echarts&&se.querySelectorAll(".echarts-container").forEach(a=>{let o=echarts.getInstanceByDom(a);o&&o.dispose()}),se.querySelectorAll("div.node").forEach(a=>a.remove());let e=ci(),t=0;u.forEach(a=>{let o=document.createElement("div");o.className="node",o.tabIndex=0,o.dataset.id=a.id;let r=a.parent?no(a.id).slice(0,-1).map(i=>u.get(i).title).join(" / "):"";o.innerHTML=(r?'<div class="crumb">'+A(r)+"</div>":"")+'<div class="body">'+a.html+"</div>"+(a.err?'<div class="err-badge">!</div>':"");let n=o.querySelector(".body");bl(n),Cl(n),Tl(n),El(o,n),/^slidetake$/i.test(R.brand||"")&&nl(n),n.querySelectorAll("thead").forEach(i=>{i.textContent.trim()||i.remove()}),t+=Bl(n),a.frags=Ll(n),n.querySelectorAll("img").forEach(i=>{i.complete||i.addEventListener("load",Ol,{once:!0})}),o.querySelectorAll("a[href]").forEach(i=>{let s=i.getAttribute("href");if(s.startsWith("#")){let l=decodeURIComponent(s.slice(1));u.has(l)&&(i.classList.add("xlink"),i.addEventListener("click",c=>{c.preventDefault(),c.stopPropagation(),h.active||j(l)}))}else i.target="_blank",i.rel="noopener",i.addEventListener("click",l=>l.stopPropagation())}),o.addEventListener("click",()=>{h.active||j(a.id)}),o.addEventListener("keydown",i=>{i.key==="Enter"&&i.target===o&&j(a.id)}),se.appendChild(o),a.el=o,dr(a,a.frags.length)}),t&&!ea.textContent&&(ea.textContent=t+" image(s) use relative paths: add base: to the deck, or open it with ?src="),u.forEach(ro),ca(e),Ul()}function ca(e){e===void 0&&(e=ci()),$==="radial"?yl(e):$==="path"?Gl():$==="focus"?Vl():gl(),se.classList.toggle("focus",$==="focus"),u.forEach(t=>{let a=t.el.style;a.setProperty("--cx",t.cx),a.setProperty("--cy",t.cy)}),Yl(),It(),ur()}function Yl(){let e="";if($==="focus"){Po.innerHTML="";return}if($==="path"){for(let t=1;t<v.length;t++){let a=u.get(v[t-1]),o=u.get(v[t]);e+='<path data-from="'+a.id+'" data-to="'+o.id+'" d="M '+a.cx+" "+a.cy+" L "+o.cx+" "+o.cy+'"/>'}Po.innerHTML=e;return}u.forEach(t=>{if(!t.parent)return;let a=u.get(t.parent);if($==="radial")e+='<path data-from="'+a.id+'" data-to="'+t.id+'" d="M '+a.cx+" "+a.cy+" L "+t.cx+" "+t.cy+'"/>';else{let o=a.cy+a._h/2,r=t.cy-t._h/2,n=o+(r-o)/2;e+='<path data-from="'+a.id+'" data-to="'+t.id+'" d="M '+a.cx+" "+o+" L "+a.cx+" "+n+" L "+t.cx+" "+n+" L "+t.cx+" "+r+'"/>'}}),Po.innerHTML=e}function no(e){let t=[],a=e;for(;a;)t.unshift(a),a=u.get(a).parent;return t}function kt(){let e=N.clientWidth,t=N.clientHeight;se.style.transform="translate("+e/2+"px,"+t/2+"px) scale("+z.zoom+") translate("+-z.x+"px,"+-z.y+"px)",ki()}function hr(){Xt&&(Xt.kill(),Xt=null)}function mi(e,t){if(hr(),t||Bt||!window.gsap){Object.assign(z,e),kt();return}let a=N.clientWidth,o=Math.hypot(e.x-z.x,e.y-z.y),r=e.zoom,n=gsap.timeline({onUpdate:kt,onComplete:()=>{Xt=null}}),{zoom:i,...s}=e,l=o*Math.min(z.zoom,r),c=Math.max(.55,Math.min(1.3,.55+l/a*.3));if(n.to(z,{...s,duration:c,ease:"power2.inOut"},0),l>a*1.2){let d=Math.max(.06,Math.min(z.zoom,r,a*.9/(o+xt)));n.to(z,{zoom:d,duration:c/2,ease:"sine.out"},0).to(z,{zoom:r,duration:c/2,ease:"sine.in"},c/2)}else n.to(z,{zoom:r,duration:c,ease:"power2.inOut"},0);Xt=n}function Kl(){let e=N.getBoundingClientRect(),t=14,a=[];if(!Be.hidden&&Be.offsetWidth){let r=Be.getBoundingClientRect();a.push({x0:r.left-e.left-t,y0:r.top-e.top-t,x1:r.right-e.left+t,y1:r.bottom-e.top+t})}let o=ul();return o&&a.push({x0:o.x0-t,y0:o.y0-t,x1:o.x1+t,y1:o.y1+t}),a}function Jl(){let e=N.clientWidth,t=N.clientHeight,a=[{x0:16,y0:J?20:56,x1:e-16,y1:t-(J?20:74)}];return Kl().forEach(o=>{let r=[];a.forEach(n=>{if(o.x1<=n.x0||o.x0>=n.x1||o.y1<=n.y0||o.y0>=n.y1){r.push(n);return}[{...n,x1:Math.min(n.x1,o.x0)},{...n,x0:Math.max(n.x0,o.x1)},{...n,y1:Math.min(n.y1,o.y0)},{...n,y0:Math.max(n.y0,o.y1)}].forEach(i=>{i.x1-i.x0>80&&i.y1-i.y0>80&&r.push(i)})}),r.length&&(a=r)}),a}function Jo(e,t,a){let o=N.clientWidth,r=N.clientHeight,n=null;return Jl().forEach(i=>{let s=a*Math.min((i.x1-i.x0)/e,(i.y1-i.y0)/t);(!n||s>n.zoom)&&(n={zoom:s,sx:(i.x0+i.x1)/2-o/2,sy:(i.y0+i.y1)/2-r/2})}),n}function fi(e,t,a,o){return{x:e-a.sx/o,y:t-a.sy/o}}function tt(e,t){let a=u.get(e);if(!a)return;let o=Jo(a._w,a._h,ta),r=At(e),n=v.filter(l=>At(l)===r&&!u.get(l).visual).map(l=>{let c=u.get(l);return Jo(c._w,c._h,ta).zoom}).sort((l,c)=>l-c),i=n.length?n[Math.floor((n.length-1)/2)]:o.zoom,s=Math.max(.2,Math.min(5,o.zoom,i));mi(Object.assign(fi(a.cx,a.cy,o,s),{zoom:s}),t)}function da(e){let t=[...u.values()];if(!t.length)return;let a=N.clientWidth,o=N.clientHeight,r=Math.min(...t.map(d=>d.cx-d._w/2)),n=Math.max(...t.map(d=>d.cx+d._w/2)),i=Math.min(...t.map(d=>d.cy-d._h/2)),s=Math.max(...t.map(d=>d.cy+d._h/2)),l=Jo(n-r,s-i,.94),c=Math.max(.05,Math.min(1,l.zoom));mi(Object.assign(fi((r+n)/2,(i+s)/2,l,c),{zoom:c}),e)}function ke(e){f&&u.has(f)?tt(f,e):da(e)}function It(){let e=f?no(f):[];u.forEach(t=>{let a=t.el;a.classList.toggle("current",t.id===f),a.classList.toggle("active-path",e.includes(t.id))}),se.querySelectorAll("#connectors path").forEach(t=>{let a=$==="path"?!!f&&v.indexOf(t.dataset.to)<=v.indexOf(f):e.includes(t.dataset.from)&&e.includes(t.dataset.to);t.classList.toggle("active",a)}),Zl(e),yi()}function gi(){return Qr(new URLSearchParams(location.search).get("duration")??R.duration)}function $l(){return J&&gi()>0&&(!h.active||/^always$/i.test(R.timer||""))}function Ga(){let e=$l()&&De.start>0;if(Ke.classList.toggle("timed",e),!e){Ke.classList.remove("over");return}let a=(h.active&&h.t0?Ct():performance.now()-De.start)/gi();Ke.firstChild.style.width=Math.min(100,a*100)+"%",Ke.classList.toggle("over",a>=1)}function Xl(){De.start=performance.now(),clearInterval(De.timer),De.timer=setInterval(Ga,1e3),Ga()}function Ql(){clearInterval(De.timer),De.timer=null,De.start=0,Ga()}function yi(){let e=J&&v.length>1&&!/^(off|no|false)$/i.test(R.progress||"");if(Ke.classList.toggle("show",e),!e)return;Ga();let t=v.indexOf(f),a=0,o=0;v.forEach((r,n)=>{let i=Ot(u.get(r)).length;a+=i,n<t?o+=i:n===t&&(o+=Math.min(xe,i-1)+1)}),Ke.lastChild.style.width=(a?o/a*100:0)+"%"}function Zl(e){Fn.innerHTML=e.map((t,a)=>(a>0?'<span class="sep">\u203A</span>':"")+'<button class="crumb-btn'+(t===f?" here":"")+'" data-id="'+A(t)+'">'+A(u.get(t).title)+"</button>").join(""),Fn.querySelectorAll(".crumb-btn").forEach(t=>t.addEventListener("click",()=>{h.active||j(t.dataset.id)}))}function ha(e){let t=u.get(f);t&&(dr(t,si().frag,e),je(),(B.hidden||!ze||!ze.full||ze.behind)&&ac(t),pr(t))}function tc(e){return!v.length||e.id!==v[0]&&e.id!==v[v.length-1]||e.el.querySelector("[data-gsap], .title-scramble")?null:[...e.el.querySelector(".body").children].filter(t=>!t.classList.contains("fragment"))}function ac(e){if(e._played||!window.gsap||Bt)return;e._played=!0;let t=tc(e);if(t&&t.length){e._auto=t;let[a,...o]=t;/^H[1-3]$/.test(a.tagName)&&!a.children.length?(a.classList.add("auto-scramble"),Un(a)):o.unshift(a),gsap.from(o,{opacity:0,y:24,duration:.7,ease:"power2.out",delay:.5,stagger:.45})}e.el.querySelectorAll("[data-gsap]").forEach(a=>{let o;try{o=JSON.parse(a.dataset.gsap)}catch{return}let r={duration:o.duration??1,delay:o.delay??0,ease:o.ease||"power2.out"};o.to?gsap.fromTo(a,o.from||{},Object.assign({},o.to,r)):o.from&&gsap.from(a,Object.assign({},o.from,r))}),e.el.querySelectorAll(".title-scramble").forEach(Un)}function aa(e){!e||!e._played||(e._played=!1,window.gsap&&(e._auto&&(e._auto.forEach(t=>{gsap.killTweensOf(t),gsap.set(t,{clearProps:"opacity,transform"})}),e._auto=null),e.el.querySelectorAll("[data-gsap]").forEach(t=>{gsap.killTweensOf(t);let a={};try{a=JSON.parse(t.dataset.gsap)}catch{}let o=new Set(Object.keys(Object.assign({},a.from,a.to)).map(r=>ec.includes(r)?"transform":r));o.size&&gsap.set(t,{clearProps:[...o].join(",")})}),e.el.querySelectorAll(".title-scramble, .auto-scramble").forEach(t=>{t._scramble&&t._scramble.kill(),t.dataset.text&&(t.textContent=t.dataset.text)})))}function Un(e){let t=e.dataset.text||(e.dataset.text=e.textContent),a=Array.from(t),o="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#%&*+=?",r={p:0};e._scramble=gsap.to(r,{p:1,duration:1.4,ease:"none",onUpdate(){let n=Math.floor(r.p*a.length);e.textContent=a.map((i,s)=>s<n||/\s/.test(i)?i:o[Math.random()*o.length|0]).join("")},onComplete(){e.textContent=t}})}function pr(e){clearTimeout(St),!(!J||!e||!e.autoslide||h.active&&(!h.t0||h.paused))&&(St=setTimeout(()=>{f===e.id&&Fe(1)},e.autoslide))}function bi(e){let t=e&&e!==v[0]?e:"";try{M&&M.kind==="share"?history.replaceState(null,"",location.pathname+location.search+Eo(M.data,t)):history.replaceState(null,"",e?"#"+encodeURIComponent(e):location.pathname+location.search)}catch{}}function j(e,t,a){if(!u.has(e))return;if(e!==f){be=null,Pe=-1,xe=a?Ot(u.get(e)).length-1:0;let n=u.get(f);n&&$==="focus"&&!t&&(n.el.classList.add("leaving"),setTimeout(()=>n.el.classList.remove("leaving"),600)),wi()}let o=e!==f;if(o&&(vi=f),f=e,clearTimeout(ue),ue=null,o&&$==="focus"&&!t&&!Bt){let n=u.get(e).el;n.classList.add("entering"),n.offsetWidth,n.classList.remove("entering")}ha(o),o&&!Le&&ia("slide",e);let r=u.get(e);o&&r.mapFirst&&!a&&!t&&$!=="focus"?(da(),ue=setTimeout(()=>{ue=null,f===e&&(je(),tt(e))},1900),je()):tt(e,t),It(),ur(),bi(e)}function wi(){let e=u.get(f);e&&(e.el.querySelectorAll("figure.yt").forEach(t=>hi(t,"pauseVideo")),dr(e,e.frags.length,!0),aa(e))}function oc(){if(!f&&Je&&u.has(Je)){xi();return}f&&(Je=f),$==="focus"&&mr("path"),wi(),clearTimeout(St),f=null,je(),It(),ur(),da(),bi(null)}function xi(){if(ue)return clearTimeout(ue),ue=null,je(),tt(f),!0;if(!f&&Je&&u.has(Je)){let e=Je;return Je=null,j(e),!0}return!1}function Fe(e){if(!f){v.length&&j(v[e>0?0:v.length-1]);return}if(ue&&e>0){clearTimeout(ue),ue=null,je(),tt(f);return}let t=Ot(u.get(f)),a=Math.min(xe,t.length-1)+e;if(a>=0&&a<t.length){xe=a,be=null,Pe=-1,ha(),!re&&!B.hidden&&ze.used?nt():ke(),It();return}let o=v.indexOf(f)+e;o>=0&&o<v.length&&j(v[o],!1,e<0)}function rc(){let e=u.get(f);e&&e.parent&&j(e.parent)}function nc(){let e=u.get(f);e&&e.children.length?j(e.children[0]):!f&&v.length&&j(v[0])}function ur(){let e=[...u.values()];if(!e.length){Uo.innerHTML="",Ce=null;return}Js.textContent="map";let t=p=>p.cx,a=p=>p.cy,o=Math.min(...e.map(t))-xt/2,r=Math.max(...e.map(t))+xt/2,n=Math.min(...e.map(a))-qo/2,i=Math.max(...e.map(a))+qo/2,s=16,l=180,c=130,d=Math.min((l-2*s)/Math.max(1,r-o),(c-2*s-6)/Math.max(1,i-n)),T=l/2-(o+r)/2*d,g=c/2+5-(n+i)/2*d,b=f?no(f):[],m="";e.forEach(p=>{if(!p.parent)return;let C=u.get(p.parent);m+='<line x1="'+(t(C)*d+T)+'" y1="'+(a(C)*d+g)+'" x2="'+(t(p)*d+T)+'" y2="'+(a(p)*d+g)+'" stroke="var(--panel-line)" stroke-width="1"/>'}),e.forEach(p=>{let C=p.id===f?"var(--accent)":b.includes(p.id)?"var(--accent-teal)":"var(--node-border)";m+='<circle data-id="'+A(p.id)+'" cx="'+(t(p)*d+T)+'" cy="'+(a(p)*d+g)+'" r="'+(p.id===f?4:3)+'" fill="'+C+'"><title>'+A(p.title)+"</title></circle>"}),m+='<rect id="mm-viewport" fill="none" stroke="var(--accent)" stroke-width="1" opacity="0.7"/>',Uo.innerHTML=m,Ce={s:d,ox:T,oy:g},ki()}function ki(){let e=document.getElementById("mm-viewport");if(!e||!Ce)return;let t=N.clientWidth/z.zoom,a=N.clientHeight/z.zoom;e.setAttribute("x",(z.x-t/2)*Ce.s+Ce.ox),e.setAttribute("y",(z.y-a/2)*Ce.s+Ce.oy),e.setAttribute("width",Math.max(2,t*Ce.s)),e.setAttribute("height",Math.max(2,a*Ce.s))}function Et(e){li(ie.value),f&&!u.has(f)&&(f=null),ui(),f?j(f,e):v.length?j(v[0],e):(f=null,da(!0))}function mr(e,t){$=e,_("slidetake:layout",e),document.querySelectorAll("#layout-toggle .seg-btn").forEach(a=>a.classList.toggle("active",a.dataset.mode===e)),u.size&&(!t&&!Bt&&(se.classList.add("morph"),setTimeout(()=>se.classList.remove("morph"),700)),ca(),kt(),f?tt(f,t):da(t))}function Si(e){return Math.max(.04,Math.min(5,e))}function ic(e){ta=Math.round(Math.max(tl,Math.min(al,e))*100)/100,_("slidetake:slideSize",ta),f&&tt(f)}function qn(e){f?ic(ta+e*.1):Ei(e>0?1.2:1/1.2)}function Ei(e,t,a){hr();let o=Si(z.zoom*e);if(t!==void 0){let r=N.getBoundingClientRect(),n=t-r.left-r.width/2,i=a-r.top-r.height/2;z.x+=n/z.zoom-n/o,z.y+=i/z.zoom-i/o}z.zoom=o,kt()}function io(){U||(He.classList.toggle("collapsed"),document.getElementById("btn-edit-toggle").classList.toggle("active",!He.classList.contains("collapsed")))}function ve(e){J=e,document.body.classList.toggle("presenting",e),us(document.getElementById("btn-present"),e),ms();let t=document.documentElement;e&&t.requestFullscreen&&!document.fullscreenElement&&t.requestFullscreen().catch(()=>{}),!e&&document.fullscreenElement&&document.exitFullscreen&&document.exitFullscreen().catch(()=>{}),e&&!f&&v.length&&j(v[0]);let a=R.camera||[...u.values()].some(o=>o.camera);e&&a&&!re&&!te&&nt(),e?pr(u.get(f)):clearTimeout(St),e?Xl():Ql(),yi()}function Ct(){return(h.paused?h.pauseAt:performance.now())-h.t0-h.pausedMs}function pa(e){e.classList.add("open")}function dc(e){if(_("slidetake:analytics",e?"on":"off"),!e){window["ga-disable-"+lc]=!0;let t=["","; Domain="+location.hostname,"; Domain=."+location.hostname.replace(/^www\./,"")];document.cookie.split(";").map(a=>a.split("=")[0].trim()).filter(a=>a==="_ga"||a.startsWith("_ga_")).forEach(a=>t.forEach(o=>{document.cookie=a+"=; Max-Age=0; Path=/"+o}))}Mi()}function Mi(){yr.querySelectorAll("[data-analytics]").forEach(e=>e.setAttribute("aria-checked",String(e.dataset.analytics==="on"===cc())))}function ua(){document.querySelectorAll(".modal.open").forEach(e=>e.classList.remove("open"))}function hc(){let e=new URLSearchParams(location.search).get("obs");if(e){let[t,a,...o]=e.split(":");return Va.value=t||"localhost",Ya.value=a||"4455",Ka.value=o.join(":"),!0}try{let t=JSON.parse(W("slidetake:obs")||"null");t&&(Va.value=t.host||"localhost",Ya.value=t.port||"4455",Ka.value=t.password||"",fr.checked=!0)}catch{}return!1}function Li(){if(fr.checked)_("slidetake:obs",JSON.stringify({host:Va.value.trim(),port:Ya.value.trim(),password:Ka.value}));else try{localStorage.removeItem("slidetake:obs")}catch{}}function Gt(e,t,a){Zt.textContent=e,Zt.className=t||"",Zt.title=a||e;let o=document.getElementById("obs-detail");o.textContent=a||"",o.hidden=!a}function uc(e){return location.protocol==="https:"&&!pc(e)}async function br(){let e=Va.value.trim()||"localhost",t="ws://"+e+":"+(Ya.value.trim()||"4455");if(uc(e)){Ae=!1,Gt("Blocked here","err",mc);return}Gt("Connecting\u2026"),Zt.title="Connecting to "+t;try{await Ko(sc);let a=window.OBSWebSocket&&(window.OBSWebSocket.default||window.OBSWebSocket);if(ne)try{await ne.disconnect()}catch{}ne=new a,ne.on("ConnectionClosed",()=>{Ae=!1,Gt("Disconnected","err")}),ne.on("RecordStateChanged",r=>{r.outputState==="OBS_WEBSOCKET_OUTPUT_STARTED"&&$e&&($e(),$e=null),r.outputState==="OBS_WEBSOCKET_OUTPUT_STOPPED"&&h.active&&h.withObs&&!h.finishing&&Lt("Stopped in OBS")});let o=await ne.connect(t,Ka.value||void 0);Ae=!0;try{let r=await ne.call("GetVideoSettings");r&&r.fpsNumerator&&r.fpsDenominator&&(gr=r.fpsNumerator/r.fpsDenominator),Ci=r&&r.outputWidth&&r.outputHeight?Tn(r.outputWidth,r.outputHeight):""}catch{}Gt("Connected","ok",""),Zt.title="Connected"+(o&&o.obsWebSocketVersion?" \xB7 OBS WebSocket "+o.obsWebSocketVersion:""),Li(),Y.classList.contains("open")&&ot()&&(O("Connected to OBS. Press \u25CF Record."),Ue())}catch(a){Ae=!1;let o=a&&a.message&&a.message!=="Error"?a.message+".":"Nothing answered at "+t+".";Gt("Could not connect","err",o+" Is OBS running with its WebSocket server on, and are the port and password right?")}}function fc(){let e=document.getElementById("rec-screen"),t=screen.width,a=screen.height;if(Math.abs(t/a-16/9)<.02){e.innerHTML='<span class="ok">This screen is 16:9 ('+t+"\xD7"+a+"), right for YouTube.</span>";return}let o=[["16:10",1.6],["3:2",1.5],["4:3",4/3],["21:9",21/9],["16:9",16/9]],[r,n]=o.reduce((s,l)=>Math.abs(l[1]-t/a)<Math.abs(s[1]-t/a)?l:s),i=Math.abs(n-t/a)<.005?r:"about "+r;e.innerHTML='<span class="warn">This screen is '+i+" ("+t+"\xD7"+a+"), not 16:9, so the video will have bars or be cropped. Move this window to a 16:9 screen, physical or virtual (say 1920\xD71080), then press F there.</span>"}function Se(){let e=navigator.mediaDevices;if(!window.isSecureContext||!e||!e.getDisplayMedia)return{why:"This page can\u2019t capture itself here. Open Slidetake in Chrome or Edge on a computer."};if(!window.RestrictionTarget&&!window.CropTarget)return{why:"Recording in the browser needs Chrome or Edge (or another Chromium browser) on a computer."};let t=window.MediaRecorder?En(r=>MediaRecorder.isTypeSupported(r)):"";if(!t||!navigator.storage||!navigator.storage.getDirectory)return{why:"This browser can\u2019t record video here. Use a recent Chrome or Edge."};let{quality:a,device:o}=Sn(screen.width,screen.height,devicePixelRatio||1);return a?{ok:!0,type:t,quality:a}:{why:"This screen gives a "+o[0]+"\xD7"+o[1]+" frame, less than 720p. Use pro mode (OBS), or a larger screen."}}async function so(){Qo++,he&&(cancelAnimationFrame(he.raf),he.stream.getTracks().forEach(e=>e.stop()),he.ctx.close().catch(()=>{}),he=null,Xo.value=0,yt.getContext("2d").clearRect(0,0,yt.width,yt.height),Bi())}function Bi(){Zo++,Na&&(Na.getTracks().forEach(e=>e.stop()),Na=null),Ai.srcObject=null}async function Oi(){Bi();let e=Zo,t=gt.value;if(Da.hidden=t!=="none"&&!!t,Da.textContent="No camera",!(!t||t==="none"))try{let a=await navigator.mediaDevices.getUserMedia({video:t==="default"?!0:{deviceId:{exact:t}}});if(e!==Zo){a.getTracks().forEach(o=>o.stop());return}Na=a,Ai.srcObject=a}catch{Da.hidden=!1,Da.textContent="The camera isn\u2019t available"}}async function Ja(){await so();let e=Qo;try{let t=Mt.value,a=await navigator.mediaDevices.getUserMedia({audio:Gi(t)});if(e!==Qo){a.getTracks().forEach(g=>g.stop());return}let o=new AudioContext,r=o.createAnalyser();r.fftSize=512,o.createMediaStreamSource(a).connect(r);let n=new Float32Array(r.fftSize),i=he={stream:a,ctx:o,raf:0},s=yt.getContext("2d"),l=yt.width,c=yt.height,d=Te("--accent"),T=()=>{if(he!==i)return;r.getFloatTimeDomainData(n);let g=0;for(let b of n)g=Math.max(g,Math.abs(b));Xo.value=Math.max(g,Xo.value*.85),s.clearRect(0,0,l,c),s.lineWidth=3,s.strokeStyle=d,s.lineJoin="round",s.beginPath();for(let b=0;b<n.length;b++){let m=b/(n.length-1)*l,p=c/2-Math.max(-1,Math.min(1,n[b]*3))*(c/2-4);b?s.lineTo(m,p):s.moveTo(m,p)}s.stroke(),i.raf=requestAnimationFrame(T)};T()}catch(t){ft.innerHTML='<span class="warn">The microphone isn\u2019t available: '+A(t.message||t.name)+". Allow it in the site settings.</span>"}}async function $a(e=!0){try{e&&!he&&await Ja();let t=await navigator.mediaDevices.enumerateDevices(),a=(n,i)=>{let s=t.filter(m=>m.kind===n),l=s.find(m=>m.deviceId==="default"),c=l?l.label.replace(/^Default - /,""):"",d=s.filter(m=>m.deviceId!=="default"&&m.deviceId!=="communications"),T=m=>!!l&&(m.label===c||!!l.groupId&&m.groupId===l.groupId&&!d.some(p=>p!==m&&p.label===c)),g=d.map((m,p)=>Mn(m.label)||(n==="audioinput"?"Microphone ":"Camera ")+(p+1));g.forEach((m,p)=>{let C=g.slice(0,p).filter(L=>L===m).length;C&&(g[p]=m+" "+(C+1))});let b=d.some(m=>m.deviceId===i)||i==="none"?i:(d.find(T)||d[0]||{}).deviceId;return d.map((m,p)=>'<option value="'+A(m.deviceId)+'"'+(m.deviceId===b?" selected":"")+">"+A(g[p]+(T(m)?" (system default)":""))+"</option>").join("")},o=vr();gt.innerHTML='<option value="none"'+(o==="none"?" selected":"")+">No camera</option>"+a("videoinput",o);let r=W("slidetake:mic")||"";Mt.innerHTML=a("audioinput",r),r&&Mt.value===r&&he&&he.stream.getAudioTracks()[0].getSettings().deviceId!==r&&Ja()}catch{}}function vr(){let e=W(Ii());return e||(yc()?W("slidetake:cam")||"default":"none")}function bc(e){_(Ii(),e),e!=="none"&&e!=="default"&&_("slidetake:cam",e)}function vc(){h.camWas=!te;let e=vr()!=="none";e!==!te&&Rt(e,!0)}function Pi(){h.camWas!=null&&(h.camWas!==!te&&Rt(h.camWas,!0),h.camWas=null)}async function zi(){let e=Se();if(!e.ok)return ft.innerHTML='<span class="warn">'+A(e.why)+"</span>",e;Fa&&(ft.innerHTML='<span class="warn">'+A(Fa)+"</span>",Fa="");let t=ht.indexOf(e.quality),a=W("slidetake:quality");Tt.innerHTML=ht.slice(t).map(r=>"<option"+(r.name===a?" selected":"")+">"+r.name+"</option>").join("");let o="";try{let{quota:r,usage:n}=await navigator.storage.estimate(),i=ht.find(s=>s.name===Tt.value)||e.quality;o=" Room for about "+Math.floor((r-n)/Cn(i))+" minutes of takes."}catch{}return ft.querySelector(".warn")||(ft.innerHTML='<span class="ok">Ready: this screen records up to '+e.quality.name+" in fullscreen."+A(o)+"</span>"),e}function wc(e){me=e,_("slidetake:rec-mode",e),na({setup:zt()})}function na(e={}){_e&&(Se().ok&&(me||"browser")==="browser"?Mr(e):xc(e))}function xc(e={}){let t=lo().find(a=>a.key===We()&&a.withObs&&!a.inBrowser);Ji(t||{key:We(),deckTitle:R.title||(v[0]?u.get(v[0]).title:"Deck"),date:new Date().toISOString(),withObs:!0,outputPath:null,reason:"",total:0,totalObs:null,fps:gr,events:[],picks:{},empty:!0},e)}async function wr(){if(!(!_e||h.active||!v.length)){if(!kc()){ar({note:"Set up once: after this, \u25CF Record (R) starts recording straight away."});return}if(Se().ok&&(me||"browser")==="browser"){let t=Oa(rt(),po()).filter(r=>!r.pick).map(r=>r.id),a=v.indexOf(f),o=t.length?t:a>0?v.slice(a):v;Xa("browser",o.length===v.length?null:o);return}if(!Ae&&W("slidetake:obs")&&await br(),Ae){Xa("obs");return}ar({note:"Connect to OBS first: OBS \u2192 Connect."})}}async function xr(e,t){return(await(await navigator.storage.getDirectory()).getDirectoryHandle("slidetake-takes",{create:!0})).getDirectoryHandle(e,{create:!!t})}async function kr(e){try{await(await(await navigator.storage.getDirectory()).getDirectoryHandle("slidetake-takes")).removeEntry(e,{recursive:!0})}catch{}}async function Di(e){window.RestrictionTarget&&e.restrictTo?await e.restrictTo(await RestrictionTarget.fromElement(de)):await e.cropTo(await CropTarget.fromElement(de))}async function Sc(e){try{window.RestrictionTarget&&e.track.restrictTo?await e.track.restrictTo(null):await e.track.cropTo(null),await Di(e.track)}catch{}await e.track.applyConstraints(Ri(e.quality)).catch(()=>{}),await ra()}async function Ec(){let e=Se();if(!e.ok)throw new Error(e.why);let t=ht.find(s=>s.name===Tt.value)||e.quality;document.body.classList.add("rec-frame");let a=await navigator.mediaDevices.getDisplayMedia({video:{frameRate:Ut},audio:!1,preferCurrentTab:!0,selfBrowserSurface:"include",surfaceSwitching:"exclude",monitorTypeSurfaces:"exclude"}),o=a.getVideoTracks()[0],r=()=>a.getTracks().forEach(s=>s.stop());if(!o.restrictTo&&!o.cropTo)throw r(),new Error("Share \u201Cthis tab\u201D to record the slides.");try{await Di(o)}catch(s){throw r(),new Error("Chrome could not record just the slides ("+(s.message||s.name)+").")}await o.applyConstraints(Ri(t)).catch(()=>{});let n;try{let s=W("slidetake:mic");n=await navigator.mediaDevices.getUserMedia({audio:Gi(s)})}catch(s){throw r(),new Error("The microphone isn\u2019t available ("+(s.message||s.name)+").")}let i=new Date().toISOString().replace(/[:.]/g,"-");h.browser={id:i,display:a,mic:n,track:o,quality:t,type:e.type,stream:new MediaStream([o,...n.getAudioTracks()]),dir:await xr(i,!0),clips:[],cur:null,chain:Promise.resolve(),error:null},o.addEventListener("ended",()=>{h.active&&!h.finishing&&Lt("Sharing stopped")})}function Fi(){let e=h.browser;e&&(e.display.getTracks().forEach(t=>t.stop()),e.mic.getTracks().forEach(t=>t.stop()),document.body.classList.remove("rec-frame"))}function Cc(e){let t=h.browser,a="take-"+t.clips.length+"."+Lo(t.type),o={name:a,rec:null,done:null};t.clips.push(o),e.clip=t.id+"/"+a,t.chain=t.chain.then(async()=>{let r=await(await t.dir.getFileHandle(a,{create:!0})).createWritable(),n=new MediaRecorder(t.stream,{mimeType:t.type,videoBitsPerSecond:t.quality.bitrate,audioBitsPerSecond:Ta}),i=Promise.resolve();n.ondataavailable=l=>{l.data.size&&(i=i.then(()=>r.write(l.data)).catch(c=>{t.error=c}))},o.done=new Promise(l=>{n.onstop=async()=>{await i,await r.close().catch(()=>{}),l()}}),await new Promise(l=>{n.onstart=l,n.start(1e3)}),e.t=Math.round(Ct()),e.cutAt!=null&&(e.lead=Math.max(0,Math.round(e.t-e.cutAt)));let s=t.cur;t.cur=o,o.rec=n,s&&s.rec.state!=="inactive"&&s.rec.stop()}).catch(r=>{t.error=r})}async function Xa(e,t){if(h.active||!v.length)return;let a=e==="obs";if(so(),me||(me=a?"obs":"browser",_("slidetake:rec-mode",me)),e==="browser"){J||ve(!0);try{await Ec()}catch(l){document.body.classList.remove("rec-frame"),J&&ve(!1),Fa=l.name==="NotAllowedError"?"Recording needs this tab shared: press \u25CF Record again and choose Share.":l.message,Mr({setup:!0});return}}ua();let o=t&&t.length?t.filter(l=>v.includes(l)):null,r=o?o[0]:v[0],n=v[v.indexOf(r)-1]||null;Object.assign(h,{active:!0,withObs:a,counting:!0,paused:!1,finishing:!1,t0:0,pausedMs:0,events:[],outputPath:null,only:o?new Set(o):null}),e!=="browser"&&(h.browser=null),document.body.classList.add("recording"),Lr(),J||ve(!0),vc(),n?(document.body.classList.add("no-anim"),u.get(n)._played=!0,Le=!0,j(n,!0,!0),Le=!1,B.getAnimations().forEach(l=>l.finish()),await ra(),document.body.classList.remove("no-anim")):(f===r&&(xe=0,be=null,Pe=-1),j(r,!0)),!document.fullscreenElement&&document.documentElement.requestFullscreen&&await document.documentElement.requestFullscreen().catch(()=>{});let i=Yt.querySelector(".hint");for(let l=3;l>0;l--)if(i.textContent=(document.fullscreenElement?"":"Press F for fullscreen \xB7 ")+"recording starts after the countdown \xB7 Esc to cancel",Yt.querySelector(".num").textContent=l,Yt.classList.add("show"),await oa(1e3),!h.active)return;if(Yt.classList.remove("show"),await ra(),a){let l=new Promise(c=>{$e=c,setTimeout(()=>{$e&&($e(),$e=null)},2500)});try{await ne.call("StartRecord")}catch(c){Sr("OBS could not start recording: "+(c&&c.message||c));return}if(await l,!h.active)return}h.browser&&await Sc(h.browser),h.counting=!1,h.t0=performance.now();let s=u.get(r);if(n){ia("slide",r),h.browser&&await h.browser.chain,aa(s),Le=!0,j(r),Le=!1;return}aa(s),ha(!0),ia("slide",f)}function Sr(e){if(h.active=!1,h.counting=!1,h.browser){let t=h.browser;t.chain.then(()=>{t.cur&&t.cur.rec.state!=="inactive"&&t.cur.rec.stop()}).then(()=>kr(t.id)),Fi(),h.browser=null}Yt.classList.remove("show"),document.body.classList.remove("recording"),J&&ve(!1),Pi(),vt(e)}function ia(e,t,a){if(!h.active||!h.t0||h.finishing)return;let o=u.get(t),r={id:t,title:o?o.title:t,retake:e==="retake",t:Math.round(Ct()),obsT:null};a==null&&h.browser&&(a=r.t),a!=null&&(r.cutAt=a,r.lead=Math.max(0,Math.round(r.t-a))),h.events.push(r),h.browser&&Cc(r),h.withObs&&Ae&&(ne.call("GetRecordStatus").then(n=>{n&&typeof n.outputDuration=="number"&&(r.obsT=n.outputDuration)}).catch(()=>{}),o&&ne.call("CreateRecordChapter",{chapterName:(r.retake?"RETAKE \xB7 ":"")+o.title}).catch(()=>{}))}function Mc(e){let t=e.key;if((Vn.includes(t)||Yn.includes(t)||Kn.includes(t)||t==="Escape")&&e.preventDefault(),t==="Escape"){h.counting?Sr("Take cancelled"):Lt("Stopped early");return}if((t==="f"||t==="F")&&!document.fullscreenElement&&document.documentElement.requestFullscreen){e.preventDefault(),document.documentElement.requestFullscreen().catch(()=>{});return}if(!(h.counting||h.finishing||Qe)){if(Kn.includes(t)){Bc();return}h.paused||(Vn.includes(t)?Tc():Yn.includes(t)&&Lc())}}function Tc(){let e=Ot(u.get(f)),t=Math.min(xe,e.length-1)>=e.length-1,a=v.indexOf(f);if(!t){Fe(1);return}if(!h.only){a===v.length-1?Lt():Fe(1);return}let o=v.slice(a+1).find(r=>h.only.has(r));o?v[a+1]===o?Fe(1):Ni(v[v.indexOf(o)-1],o,"slide"):Lt()}async function Lc(){let e=u.get(f);if(!e||Qe)return;let t=f,a=vi;if(!a||a===t||!u.has(a)){Ac(e);return}Ni(a,t,"retake")}async function Ni(e,t,a){let o=u.get(t);if(!o||Qe)return;Qe=!0;let r=Ct();document.body.classList.add("no-anim");let n=u.get(e);Le=!0,n._played=!0,j(e,!0,!0),B.getAnimations().forEach(i=>i.finish()),Le=!1,await ra(),document.body.classList.remove("no-anim"),ia(a,t,r),h.browser&&await h.browser.chain,h.withObs&&await Hi(),aa(o),Le=!0,j(t),Le=!1,!re&&!B.hidden&&ze.used&&nt(),Qe=!1}async function Hi(){let e=h.events[h.events.length-1];e&&(e.skip=Jn/2),await oa(Jn)}async function Ac(e){Qe=!0,xe=0,be=null,Pe=-1,aa(e),ha(!0),!re&&!B.hidden&&ze.used?nt():ke(),It(),ia("retake",f),h.withObs&&await Hi(),Qe=!1}async function Bc(){if(h.t0)if(h.paused){if($o.classList.remove("show"),await ra(),h.withObs&&await ne.call("ResumeRecord").catch(()=>{}),h.browser){let e=h.browser;e.chain=e.chain.then(()=>{e.cur&&e.cur.rec.state==="paused"&&e.cur.rec.resume()})}h.pausedMs+=performance.now()-h.pauseAt,h.paused=!1,pr(u.get(f))}else{if(h.paused=!0,h.pauseAt=performance.now(),clearTimeout(St),h.withObs&&await ne.call("PauseRecord").catch(()=>{}),h.browser){let e=h.browser;e.chain=e.chain.then(()=>{e.cur&&e.cur.rec.state==="recording"&&e.cur.rec.pause()})}$o.classList.add("show")}}async function Lt(e){if(!h.active||h.finishing)return;if(h.counting){Sr("Take cancelled");return}h.finishing=!0,clearTimeout(St),h.paused&&(h.pausedMs+=performance.now()-h.pauseAt,h.paused=!1,$o.classList.remove("show"));let t=Math.round(Ct()),a=null;if(h.withObs){try{let n=await ne.call("GetRecordStatus");n&&typeof n.outputDuration=="number"&&(a=n.outputDuration)}catch{}await oa(1200);try{let n=await ne.call("StopRecord");h.outputPath=n&&n.outputPath}catch(n){e=(e?e+". ":"")+"OBS did not confirm the stop ("+(n&&n.message||n)+")"}}let o=h.browser;o&&(await oa(600),await o.chain,t=Math.round(Ct()),o.cur&&o.cur.rec&&o.cur.rec.state!=="inactive"&&o.cur.rec.stop(),await Promise.all(o.clips.map(n=>n.done)),Fi(),h.browser=null,o.error&&(e=(e?e+". ":"")+"Some of the take could not be saved ("+(o.error.message||o.error.name)+")")),h.active=!1,h.finishing=!1,document.body.classList.remove("recording"),J&&ve(!1),Pi();let r={key:We(),deckTitle:R.title||u.get(v[0]).title,date:new Date().toISOString(),withObs:h.withObs,outputPath:h.outputPath,reason:e||"",total:t,totalObs:a,fps:o?Ut:gr,...o?{inBrowser:!0,takesId:o.id,quality:o.quality.name,type:o.type}:{},events:h.events.map(n=>({id:n.id,title:n.title,retake:n.retake,t:n.t,obsT:n.obsT,...n.lead?{lead:n.lead}:{},...n.skip?{skip:n.skip}:{},...n.clip?{clip:n.clip}:{}})),picks:{}};if(r.inBrowser){Nc(r);return}Er(r),Ji(r,{note:(e?e+". ":"")+ye(r).size+" slides recorded with OBS."})}function We(){return lt(R.title||(v[0]?u.get(v[0]).title:"deck"))}function lo(){try{return JSON.parse(W("slidetake:sessions")||"[]")}catch{return[]}}function Er(e){let t=lo().filter(a=>a.date!==e.date);t.unshift(e),t.slice(12).forEach(a=>{a.takesId&&kr(a.takesId)}),_("slidetake:sessions",JSON.stringify(t.slice(0,12)))}function At(e){let t=u.has(e)?no(e):[e];return t[Math.min(1,t.length-1)]}function ji(e,t){let a=At(e);return{sec:a,title:u.has(a)?u.get(a).title:t}}function O(e,{warn:t=!1,html:a="",title:o=""}={}){Vt.classList.toggle("warn",t),a?Vt.innerHTML=a:Vt.textContent=e,Vt.title=o||Vt.textContent;let r=document.getElementById("rv-save-again");r&&(r.onclick=()=>rs(!0))}function Ji(e,t={}){ua(),H=e,Z=null;let a=e.events.filter(i=>i.retake).length,o=e.empty?"":ye(e).size+" slides, "+(a?a+" retake"+(a>1?"s":""):"no retakes")+", recorded "+ct(e.totalObs??e.total)+". ";Y.classList.remove("in-browser","board"),Y.classList.add("obs");let r=document.getElementById("rv-rec");r.title="Records the deck with OBS: a new video in place of this one",r.disabled=!1,document.getElementById("rv-render-btn").disabled=document.getElementById("rv-clean").disabled=!!e.cleaned,document.getElementById("rv-file").textContent=e.outputPath?" ("+dt(e.outputPath)+")":"";let n=Ca(e);Qa.value=[...Qa.options].reduce((i,s)=>Math.abs(s.value-n)<Math.abs(i.value-n)?s:i).value,S.src&&(e.inBrowser||Ne!==dt(e.outputPath)&&e.outputPath)&&(S.removeAttribute("src"),S.load(),Ne=""),document.getElementById("rv-novideo").hidden=!!S.src||!!e.empty,Z=null,F=null,Pt(),co(),pa(Y),t.setup?uo(t):(mo(),$a(!1).then(Ue)),O(t.note||(e.empty?Ae?"Press \u25CF Record: OBS records the deck.":"Connect to OBS in Setup, then press \u25CF Record.":o+(S.src?"Click a take to preview it.":"Open the recording to preview it."))),e.empty||Uc(e)}function co(){if(H&&H.board){at();return}let e=H,t=document.getElementById("rv-list"),a=null;t.innerHTML=[...ye(e).values()].map(o=>{let r=e.picks[o.id]??o.takes.length,n=At(o.id),i=n!==a;a=n;let s=o.takes.map(l=>'<button class="rv-chip'+(r===l.no?" on":"")+'" data-id="'+A(o.id)+'" data-take="'+l.no+'">Take '+l.no+" \xB7 "+ct(l.end-l.start)+"</button>").join("");return'<div class="rv-row'+(i?" sec":"")+'"><div class="t">'+A(o.title)+"<small>"+ba(o.takes[0].start)+'</small></div><div class="rv-chips">'+s+"</div></div>"}).join(""),t.querySelectorAll(".rv-chip").forEach(o=>o.onclick=()=>{e.picks[o.dataset.id]=+o.dataset.take,Er(e),co();let r=ye(e).get(o.dataset.id),n=r&&r.takes[+o.dataset.take-1];if(!n)return;let i=r.title+(r.takes.length>1?" \xB7 take "+n.no:"");if(e.inBrowser){let s=e.events.filter(l=>l.id===o.dataset.id)[n.no-1];s&&s.clip&&ho([{clip:s.clip,keep:(n.end-n.start)/1e3,title:i}])}else eo([{start:n.start,end:n.end,title:i}])}),document.getElementById("rv-ffmpeg-copy").disabled=document.getElementById("rv-play-final").disabled=!e.events.length,Xi(e),Zi(e)}function Xi(e){let t=Oc(e),a=document.getElementById("rv-chapters");$i=t.lines.join(`
`),a.disabled=t.lines.length<3,a.title=t.lines.length<3?"YouTube needs at least three chapters of 10 seconds or more":"Copies the "+t.lines.length+" chapters, to paste into the YouTube description"}function Qi(e,t){let a=e.dataset.label||(e.dataset.label=e.textContent);(navigator.clipboard?navigator.clipboard.writeText(t):Promise.reject()).catch(()=>{}),e.textContent="\u2713 Copied",clearTimeout(+e.dataset.timer),e.dataset.timer=String(setTimeout(()=>{e.textContent=a},1500))}async function Zi(e){let t=document.getElementById("rv-final"),a=++jo,o=_t(e).reduce((n,i)=>n+i.end-i.start,0),r=n=>(n?"about "+(n>1e9?(n/1e9).toFixed(1)+" GB":Math.max(1,Math.round(n/1e6))+" MB")+" \xB7 ":"Final cut ")+ct(o);if(!e.inBrowser||e.cleaned){t.textContent=r(null);return}try{let n=0;for(let i of qt(e))ja.has(i.clip)||ja.set(i.clip,(await ma(i.clip)).size),n+=ja.get(i.clip);a===jo&&(t.textContent=r(n))}catch{a===jo&&(t.textContent=r(null))}}function eo(e){if(!S.src){Za=e,O(rr?"Opening the recording\u2026 it plays when ready.":"Open the recording to preview.");return}Za=null,Z={ranges:e,i:0},O("\u25B6 "+e[0].title);let t=()=>{S.currentTime=e[0].start/1e3,S.play().catch(a=>{a&&a.name!=="AbortError"&&O("Could not play: "+a.message,{warn:!0})})};S.readyState>=1?t():S.addEventListener("loadedmetadata",t,{once:!0})}function Pt(){bt=null}function Cr(){let e=F&&!F.single&&!S.paused;es.innerHTML=e?'\u275A\u275A <span><u class="key">P</u>ause</span>':'\u25B6 <span><u class="key">P</u>review</span>',document.querySelectorAll("#rv-list .rv-row.playing").forEach(o=>o.classList.remove("playing"));let t=F&&F.parts[F.i],a=t&&t.id&&document.querySelector('#rv-list .rv-row[data-id="'+CSS.escape(t.id)+'"]');a&&(a.classList.add("playing"),a.scrollIntoView({block:"nearest"}))}function Pc(e){let t=H?qt(H):[],a=t.findIndex(r=>r.id===e.id),o=a>=0?t[a+1]:null;bt=o?o.id:null,O(o?"Preview continues from "+o.title+".":"That was the last slide: Preview plays from the start.")}function ts(e){return Array.from({length:e.numberOfChannels},(t,a)=>{let o=new Float32Array(e.numberOfFrames);return e.copyTo(o,{planeIndex:a,format:"f32-planar"}),o})}async function ma(e){let[t,a]=e.split("/");return(await(await xr(t)).getFileHandle(a)).getFile()}async function ho(e,t=0,a=!1){if(!(!H||H.cleaned||!e.length)){Z=null,F={parts:e,i:t,single:a};try{let o=await ma(e[t].clip);if(!Y.classList.contains("open"))return;S.src&&URL.revokeObjectURL(S.src),S.src=URL.createObjectURL(o),O("\u25B6 "+e[t].title),await S.play()}catch(o){if(o&&o.name==="AbortError")return;F=null,O(o&&o.name==="NotFoundError"?"This take is no longer in the browser.":"Could not play this take: "+(o&&o.message||o),{warn:!0})}}}function as(){let e=F;if(e.i+1<e.parts.length){ho(e.parts,e.i+1,e.single);return}F=null,S.pause(),e.single?Pc(e.parts[0]):O(""),Cr()}async function zc(e){if(!e.where)return!0;try{let t=await Tr("video-folder");return!t||t.name!==e.where||await t.queryPermission({mode:"readwrite"})!=="granted"||await t.getFileHandle(e.name),!0}catch{return!1}}async function rs(e){let t=H;if(!t||!t.inBrowser||t.cleaned)return;let a=qt(t);if(!a.length){O("No slide has a take yet: nothing to save.",{warn:!0});return}let o=JSON.stringify([a.map(d=>[d.clip,Math.round(d.keep*1e3)]),Ze(),sa(),t.type]),r=t.board&&I.lastDownload;if(!e&&r&&r.sig===o&&await zc(r)){O("",{html:'<button class="btn small" id="rv-save-again">Save another copy</button> Already saved in '+A(Wo(r))+".",title:"Already saved in "+Wo(r)+". A new video is made only when a take or the sound settings change."});return}let n=Lo(t.type||"")==="mp4",i=We()+" "+Dc(new Date)+"."+(n?"mp4":"webm"),s=null,l="";try{let d=await ns(!1);d&&(s=await(await d.getFileHandle(i,{create:!0})).createWritable(),l=d.name)}catch(d){if(d&&d.name==="AbortError")return}let c=to;c.disabled=!0,Ye("Preparing\u2026");try{let d=await import(gc),T=s?new d.StreamTarget(s):new d.BufferTarget,g=new d.Output({format:n?new d.Mp4OutputFormat({fastStart:s?!1:"in-memory"}):new d.WebMOutputFormat,target:T}),b=1,m="",p=Ze()&&sa();if(Ze()){let D=await $n(d,a,1,!1,"Measuring");if(D&&isFinite(D.integrated)){let q=Bo(D,{limit:p});if(p&&Math.abs(q)>=.05){let Q=await $n(d,a,Ba(q),!0,"Checking");Q&&isFinite(Q.integrated)&&(q=Math.min(q+(-14-Q.integrated),Ao))}b=Ba(q);let ce=p?-14:D.integrated+q,oe=!p&&Bo(D,{limit:!0})-q>.5;m=" \xB7 loudness "+D.integrated.toFixed(1)+(Math.abs(q)<.05?" LUFS, left as is":" \u2192 "+ce.toFixed(1)+" LUFS")+(oe?"; a loud peak held it back, turn on Peak limiter to reach "+-14:"")}}let C=b!==1||p;await Rc(d,a);let L=null,w=null,x=0,y=-1,k=-1,E=null,K=[],ae=async()=>{for(;K.length&&E.ready()>=K[0].n;){let D=K.shift(),q=E.take(D.n),ce=new Float32Array(D.n*D.ch);q.forEach((oe,Q)=>ce.set(oe,Q*D.n)),await w.add(new d.AudioSample({data:ce,format:"f32-planar",numberOfChannels:D.ch,sampleRate:D.rate,timestamp:D.t}))}};for(let[D,q]of a.entries()){Ye("Joining "+(D+1)+"/"+a.length);let ce=new d.Input({source:new d.BlobSource(await ma(q.clip)),formats:d.ALL_FORMATS}),oe=await ce.getPrimaryVideoTrack(),Q=await ce.getPrimaryAudioTrack();if(!oe)throw new Error(q.title+" has no video");L||(L=new d.EncodedVideoPacketSource(await oe.getCodec()),g.addVideoTrack(L,{frameRate:Ut}),Q&&(w=C?new d.AudioSampleSource({codec:n?"aac":"opus",bitrate:Ta}):new d.EncodedAudioPacketSource(await Q.getCodec()),g.addAudioTrack(w)),await g.start());let Ft={decoderConfig:await oe.getDecoderConfig()},it=0,Ir=!0;for await(let G of new d.EncodedPacketSink(oe).packets())G.timestamp>=q.keep||(y=La(y,x+G.timestamp),await L.add(G.clone({timestamp:y}),Ir&&D===0?Ft:void 0),Ir=!1,it=Math.max(it,G.timestamp+G.duration));if(Q&&w&&C)for await(let G of new d.AudioSampleSink(Q).samples(0,it)){if(G.timestamp+G.duration>it+1e-4){G.close();continue}k=La(k,x+G.timestamp);let fe=ts(G);if(fe.forEach(ge=>{for(let st=0;st<ge.length;st++)ge[st]*=b}),p)E=E||Oo(G.sampleRate,fe.length),E.push(fe),K.push({t:k,n:G.numberOfFrames,rate:G.sampleRate,ch:fe.length}),G.close(),await ae();else{let ge=G.numberOfFrames,st=new Float32Array(ge*fe.length);fe.forEach((ws,xs)=>st.set(ws,xs*ge)),await w.add(new d.AudioSample({data:st,format:"f32-planar",numberOfChannels:fe.length,sampleRate:G.sampleRate,timestamp:k})),G.close()}}else if(Q&&w){let G={decoderConfig:await Q.getDecoderConfig()},fe=!0;for await(let ge of new d.EncodedPacketSink(Q).packets())ge.timestamp+ge.duration>it+1e-4||(k=La(k,x+ge.timestamp),await w.add(ge.clone({timestamp:k}),fe&&D===0?G:void 0),fe=!1)}x+=it}if(E&&(E.end(),await ae(),E.events&&(m+=", "+E.events+" peak"+(E.events===1?"":"s")+" limited")),Ye("Finishing\u2026"),await g.finalize(),!s){let D=document.createElement("a");D.href=URL.createObjectURL(new Blob([T.buffer],{type:n?"video/mp4":"video/webm"})),D.download=i,D.click(),setTimeout(()=>URL.revokeObjectURL(D.href),1e4)}let X={sig:o,name:i,where:l};t.board&&(I.lastDownload=X,fa()),O("Saved in "+Wo(X)+" ("+ct(x*1e3)+m+")."),Ye("\u2713 Saved"),os=setTimeout(()=>Ye(),2500)}catch(d){Ye(),O("Could not save the video: "+(d&&d.message||d),{warn:!0}),s&&s.abort().catch(()=>{})}finally{c.disabled=!!t.cleaned}}async function $n(e,t,a,o,r){let n=null,i=null;for(let[s,l]of t.entries()){Ye(r+" "+(s+1)+"/"+t.length);let c=await new e.Input({source:new e.BlobSource(await ma(l.clip)),formats:e.ALL_FORMATS}).getPrimaryAudioTrack();if(c)for await(let d of new e.AudioSampleSink(c).samples(0,l.keep)){let T=ts(d);n=n||An(d.sampleRate,T.length),a!==1&&o?(T.forEach(g=>{for(let b=0;b<g.length;b++)g[b]*=a}),i=i||Oo(d.sampleRate,T.length),i.push(T),i.ready()&&n.add(i.take(i.ready()))):n.add(T),d.close()}}return i&&(i.end(),i.ready()&&n.add(i.take(i.ready()))),n?n.result():null}async function Rc(e,t){let a=[];for(let i of t){let s=await new e.Input({source:new e.BlobSource(await ma(i.clip)),formats:e.ALL_FORMATS}).getPrimaryVideoTrack(),l=s&&await s.getDecoderConfig();a.push(l?l.codec+" "+l.codedWidth+"\xD7"+l.codedHeight+" "+(l.description?[...new Uint8Array(l.description)].join("."):""):"none")}let o=new Map;a.forEach(i=>o.set(i,(o.get(i)||0)+1));let r=[...o.entries()].sort((i,s)=>s[1]-i[1])[0][0],n=t.filter((i,s)=>a[s]!==r);if(n.length)throw new Error(n.map(i=>i.title).join(", ")+(n.length===1?" was":" were")+" recorded at a different size ("+a[t.indexOf(n[0])].split(" ")[1]+", not "+r.split(" ")[1]+"). Tick "+(n.length===1?"it":"them")+" and record again")}async function ns(e){if(!window.showDirectoryPicker)return null;let t=e?null:await Tr("video-folder");if(t){let a=await t.queryPermission({mode:"readwrite"});if(a==="prompt"&&(a=await t.requestPermission({mode:"readwrite"})),a==="granted")return t}return t=await window.showDirectoryPicker({id:"slidetake-videos",mode:"readwrite",startIn:"videos"}),cs("video-folder",t),t}function rt(){let e=is();if(I&&tr===e)return I;tr=e;try{I=JSON.parse(W(e)||"null")}catch{I=null}return(!I||!Array.isArray(I.takes))&&(I={takes:[],picks:{},type:"",quality:""}),I}function Nc(e){rt();let t=Pn(e,e.takesId,po());t.forEach(a=>{delete I.picks[a.id]}),I.takes.push(...t),Object.assign(I,{type:e.type,quality:e.quality}),fa(),Oe.clear(),Mr({note:(e.reason?e.reason+". ":"")+t.length+" new take"+(t.length===1?"":"s")+" on the board."})}function ss(){let e=Oa(rt(),po()),t=Object.assign(zn(e),{board:!0,inBrowser:!0,withObs:!1,type:I.type||"video/mp4",quality:I.quality||"",deckTitle:R.title||(v[0]?u.get(v[0]).title:"Deck"),date:new Date().toISOString()});return{rows:e,sess:t}}function uo(e={}){Y.classList.add("setup-view"),Qn.textContent=e.note||"",Qn.hidden=!e.note,et.textContent="\u2190 Back",et.title="Back to Studio",et.setAttribute("aria-expanded","true"),Hc()}function mo(){let e=zt();e&&Y.classList.remove("setup-view"),et.textContent="\u2699 Setup",et.title="Settings: camera, microphone, video, OBS and files",et.setAttribute("aria-expanded","false"),e&&(so(),Ue())}function ar(e={}){Y.classList.contains("open")?uo(e):na({...e,setup:!0})}function Hc(){let e=()=>{Ue(),zt()&&Oi()};if(ot()){fc(),$a(!1).then(e);return}ft.innerHTML="",zi().then(t=>{t.ok?$a().then(e):e()})}function Ue(){let e=i=>{let s=i.selectedOptions[0];return s?s.textContent.replace(/ \(system default\)$/,""):""},t=e(gt)||(vr()==="none"?"No camera":"Camera"),a=ot(),o=a?Ci:Se().ok?Tt.value:"",r=a?[t]:[t,e(Mt)||"Microphone"],n=document.getElementById("rv-using");n.textContent=r.join(" \xB7 "),n.title="Recording with "+r.join(" \xB7 "),document.getElementById("rv-size").textContent=o||"",ut.classList.toggle("on",a),ut.setAttribute("aria-pressed",String(a)),ut.disabled=!Se().ok,ut.title=ut.disabled?Wa+" records only with OBS: pro mode":a?"Pro mode: recording with OBS. Click for easy mode, in "+Wa:"Easy mode: recording in "+Wa+". Click for pro mode, with OBS"}function Mr(e={}){_e&&(ua(),rt(),Y.classList.remove("obs"),Y.classList.add("in-browser","board"),document.getElementById("rv-rec").title="Records the whole deck, or only the ticked slides (shift-click ticks a range)",document.getElementById("rv-novideo").hidden=!0,S.src&&(URL.revokeObjectURL(S.src),S.removeAttribute("src"),S.load()),Z=null,F=null,Pt(),Ha=-1,at(),pa(Y),e.setup||!Se().ok?uo(e):(mo(),zi().then(()=>$a(!1)).then(Ue)),O(e.note||Ki()||(I.takes.length?jc()+". Click a take to preview it.":v.length+" slides, nothing recorded yet. Press \u25CF Record.")))}function jc(){let e=Oa(rt(),po()),t=e.filter(o=>o.pick).length,a=e.filter(o=>o.takes.length&&!o.pick).length;return t+" of "+e.length+" slides ready"+(a?", "+a+" to record again":"")}function at(){let{rows:e,sess:t}=ss();H=t;let a=document.getElementById("rv-list"),o=null;a.innerHTML=e.map(i=>{let s=At(i.id),l=s!==o;o=s;let c=A(i.id),d={slide:"Recorded before this slide changed",before:"Starts with the entry from the slide before, which has changed or is gone: record this slide again"},T=i.takes.length?i.takes.map(g=>'<button class="rv-chip'+(i.pick===g.uid?" on":"")+(g.outdated?' outdated" title="'+d[g.outdated]:"")+'" data-id="'+c+'" data-uid="'+A(g.uid)+'">Take '+g.no+" \xB7 "+ct(g.ms)+"</button>").join("")+(i.pick?"":'<span class="rv-none">'+(i.takes.some(g=>g.outdated==="before")&&!i.takes.some(g=>g.outdated==="slide")?"The slide before changed: record again":"Changed since: record again")+"</span>"):'<span class="rv-none">No take yet</span>';return'<div class="rv-row with-sel'+(l?" sec":"")+(Oe.has(i.id)?" selected":"")+'" data-id="'+c+'"><input type="checkbox" class="rv-sel" data-id="'+c+'"'+(Oe.has(i.id)?" checked":"")+' aria-label="Select '+A(i.title)+' to record"><div><div class="t">'+A(i.title)+'</div><div class="rv-chips">'+T+"</div></div></div>"}).join(""),a.querySelectorAll(".rv-chip").forEach(i=>i.onclick=()=>{I.picks[i.dataset.id]=i.dataset.uid,fa(),at();let s=e.find(c=>c.id===i.dataset.id),l=s&&s.takes.find(c=>c.uid===i.dataset.uid);l&&ho([{id:s.id,clip:l.clip,keep:l.ms/1e3,title:s.title+" \xB7 take "+l.no}],0,!0)}),a.querySelectorAll(".rv-sel").forEach(i=>i.addEventListener("click",s=>{(s.shiftKey?Rn(v,Xn,i.dataset.id):[i.dataset.id]).forEach(c=>{i.checked?Oe.add(c):Oe.delete(c)}),Pt(),Xn=i.dataset.id,at()}));let r=Ia(v,Oe),n=Se().ok;document.getElementById("rv-rec").disabled=!n,Ha>=0&&r.length!==Ha&&O(Ki()||"Record takes the whole deck."),Ha=r.length,document.getElementById("rv-render-btn").disabled=document.getElementById("rv-play-final").disabled=!t.events.length,Xi(t),Zi(t)}async function Wc(e){for(let a of e)try{let[o,r]=a.clip.split("/");await(await xr(o)).removeEntry(r)}catch{}let t=new Set(e.map(a=>a.uid));I.takes=I.takes.filter(a=>!t.has(a.uid)),Object.keys(I.picks).forEach(a=>{t.has(I.picks[a])&&delete I.picks[a]}),fa(),S.src&&(URL.revokeObjectURL(S.src),S.removeAttribute("src"),S.load()),F=null,Pt(),at()}function ls(e){return new Promise((t,a)=>{let o=indexedDB.open(e||"slidetake",1);o.onupgradeneeded=()=>o.result.createObjectStore("kv"),o.onsuccess=()=>t(o.result),o.onerror=()=>a(o.error)})}async function Tr(e){let t=async a=>{let o=await ls(a);return await new Promise(r=>{let n=o.transaction("kv").objectStore("kv").get(e);n.onsuccess=()=>r(n.result),n.onerror=()=>r(null)})};try{return await t()??await t("markcast")??await t("traverse")??null}catch{return null}}async function cs(e,t){try{(await ls()).transaction("kv","readwrite").objectStore("kv").put(t,e)}catch{}}async function fo(e){rr=!0;try{return await _c(e)}finally{rr=!1}}async function _c(e){let t=await e.getFile();for(let a=0;a<10;a++){await new Promise(r=>setTimeout(r,1e3));let o=await e.getFile();if(o.size===t.size&&o.lastModified===t.lastModified)return o;t=o}return t}function ga(e,t,a){S.src&&URL.revokeObjectURL(S.src),Kt=t||null,a||(or=0),S.src=URL.createObjectURL(e),Ne=e.name,document.getElementById("rv-novideo").hidden=!0,O("Loaded "+e.name+". Click a take to preview it."),Za?eo(Za):a&&Z&&eo(Z.ranges.slice(Z.i))}async function Uc(e){let t=dt(e.outputPath);if(!(!t||!window.showDirectoryPicker)&&!(Ne===t&&S.src))try{let a=await Tr("obs-folder");if(!a||await a.queryPermission({mode:"read"})!=="granted")return;let o=await a.getFileHandle(t);O("Opening "+t+"\u2026"),ga(await fo(o),o)}catch{}}function vt(e,t){if(!h.active){if(clearTimeout(_a),!B.hidden&&!B.classList.contains("live")){$t.classList.remove("show"),hs.textContent=e,B.classList.add("msg"),t||(_a=setTimeout(ps,9e3));return}$t.textContent=e,$t.classList.add("show"),t||(_a=setTimeout(()=>$t.classList.remove("show"),9e3))}}function ps(){hs.textContent="PIP camera",B.classList.remove("msg")}function Lr(){clearTimeout(_a),$t.classList.remove("show"),ps()}function _o(){let e=!1;try{e=window.top!==window.self}catch{e=!0}return e?" This page is running inside a preview frame that may not allow cameras. Open Slidetake directly in Chrome (from localhost or as a file).":window.isSecureContext?" Allow camera access for this page in the browser\u2019s site settings (the icon at the left of the address bar), then try again.":" Browsers only allow cameras on secure pages. Open it from http://localhost or as a local file in Chrome."}function Ar(){re&&re.getTracks().forEach(t=>t.stop()),re=null;let e=B.querySelector("video");e&&e.remove()}async function nt(){if(!(re||te)){{if(!navigator.mediaDevices||!navigator.mediaDevices.getUserMedia){vt("Camera not available on this page."+_o(),!0);return}if(Me.disabled)return;Me.disabled=!0,vt("Waiting for camera permission \u2014 check the browser prompt near the address bar.",!0);try{let t=W("slidetake:cam");re=await navigator.mediaDevices.getUserMedia({video:{...t?{deviceId:{ideal:t}}:{},width:{ideal:1920},height:{ideal:1080},frameRate:{ideal:30}},audio:!1}),Lr()}catch(t){let a=t&&t.name;vt(a==="NotAllowedError"||a==="SecurityError"?"Camera access was blocked."+_o():a==="NotFoundError"||a==="OverconstrainedError"?"No camera was found. Check that a webcam is connected.":a==="NotReadableError"?"The camera is busy \u2014 close other apps using it (Zoom, OBS, FaceTime) and try again.":"Could not start the camera"+(a?" ("+a+")":"")+"."+_o(),!0);return}finally{Me.disabled=!1,Br()}re.getVideoTracks().forEach(t=>t.addEventListener("ended",()=>{Ar(),qa(),ke()}));let e=document.createElement("video");e.autoplay=!0,e.muted=!0,e.playsInline=!0,e.srcObject=re,B.appendChild(e)}qa(),ke()}}function us(e,t){e.classList.toggle("on",t),e.setAttribute("aria-pressed",String(t))}function Br(){Me.querySelector("svg")||(Me.innerHTML=qc+'<span class="lbl"> <u class="key">C</u>amera</span>'),Me.classList.toggle("on",!te),Me.setAttribute("aria-pressed",String(!te)),Me.title=te?"Camera is off for every slide (C)":"Camera is on and follows the deck (C)"}function Rt(e,t){e&&!_e||(te=!e,t||_("slidetake:camera",e?"on":"off"),te&&(Ar(),Lr()),be=null,Pe=-1,xe=Math.min(xe,Math.max(0,Ot(u.get(f)).length-1)),Br(),qa(),ha(),It(),ke(),!J&&!t&&vt(e?"Camera on \u2014 slides follow their camera settings.":"Camera off \u2014 camera settings are ignored and slides use the whole screen."),e&&nt())}function ms(){document.body.classList.remove("idle"),clearTimeout(Zn),J&&(Zn=setTimeout(()=>document.body.classList.add("idle"),2e3))}function la(e,t){wt.textContent=e,wt.classList.add("show"),clearTimeout(ti),ti=setTimeout(()=>wt.classList.remove("show"),t||2500)}function nr(e,{keepObs:t=!0,keepEdit:a=!0,slide:o=""}={}){let r=new URL(cn(e),location.origin);return new URLSearchParams(location.search).forEach((n,i)=>{i==="src"||i==="obs"&&!t||i==="edit"&&!a||r.searchParams.set(i,n)}),o&&(r.hash=o),r.href.replace(r.pathname,r.pathname.replace(/%40/g,"@"))}async function Vc(e){let t={keepObs:!1,keepEdit:!1,slide:e};if(M.kind==="source")return{link:nr(M.source,t),inside:!1};if(M.kind==="copy"&&Sa(P)&&["url","gist","builtin"].includes(P.origin.kind))return{link:nr(P.origin,t),inside:!1};let o=M.kind==="share"?M.data:await hn(ie.value),r=new URLSearchParams(location.search);return["src","obs","edit"].forEach(n=>r.delete(n)),{link:location.origin+"/share"+(r.toString()?"?"+r:"")+Eo(o,e),inside:!0}}function Yc(){let e=W("slidetake:draft");if(!e||e===go)return null;let t=xa(e,{kind:"file",name:"your earlier draft"},{exported:!0});_("slidetake:copy",JSON.stringify(t));try{localStorage.removeItem("slidetake:draft")}catch{}return t}function ya(){_("slidetake:copy",JSON.stringify(P))}function Dt(){if(U)return;let e;if(Or())e='<span class="mine">'+A(pe.file)+'</span> <span class="ro">\xB7 on this computer, saved as you type</span>';else if(M.kind==="copy")e='<span class="mine">Your copy of '+A(Ee(P.origin))+"</span>"+(ka(P)?' <span class="edited">\xB7 edited</span>':"");else{let a=M.kind==="share"?"a shared deck":Ee(M.source);e='<span class="mine">'+A(a.charAt(0).toUpperCase()+a.slice(1))+'</span> <span class="ro">\xB7 read-only, typing makes your copy</span>'}document.getElementById("doc-state").innerHTML=e,He.classList.toggle("unsaved",M.kind==="copy"&&ka(P)),document.getElementById("btn-reset").hidden=!(M.kind==="copy"&&!Sa(P));let t=document.getElementById("continue");t.hidden=M.kind==="copy"||!P,P&&(t.textContent="Your copy \u2192",t.title="Continue your copy of "+Ee(P.origin))}function fs(e){return!P||!ka(P)?!0:confirm("Your copy of "+Ee(P.origin)+" has edits you haven't saved or shared. Replace it with "+e+"?")}function gs(){let e=new URLSearchParams(location.search);return e.delete("src"),e.delete("template"),"/edit"+(e.toString()?"?"+e:"")}function Kc(){let e=M.kind==="share"?{kind:"shared"}:M.source;return fs("a copy of "+Ee(e))?(P=xa(M.text,e),M={kind:"copy"},history.pushState(null,"",gs()+(f&&f!==v[0]?"#"+encodeURIComponent(f):"")),la("Editing your own copy of "+Ee(e)+". The original is unchanged.",4e3),!0):(ie.value=M.text,!1)}function Jc(){M={kind:"copy"},history.pushState(null,"",gs()),He.classList.contains("collapsed")&&io(),ie.value=P.text,Et(!0),Dt()}function Or(){return!!(pe&&M&&M.kind==="source"&&M.source.kind==="url"&&new URL(M.source.url,location.href).pathname===pe.deck)}function $c(e){fetch(pe.save,{method:"PUT",body:e}).catch(()=>la("Could not save "+pe.file+": is npx slidetake still running?",6e3))}async function Xc(e){if(e.kind==="builtin")return Ua[e.id==="help"?"docs":e.id]??Ua.home;if(e.kind==="gist"){let a=await fetch("https://api.github.com/gists/"+encodeURIComponent(e.id));if(!a.ok)throw new Error(a.status===404?"no such gist":a.status+" "+a.statusText);let o=Object.values((await a.json()).files||{}),r=o.find(n=>n.filename===e.file)||o.find(n=>/\.(md|markdown)$/i.test(n.filename))||o[0];if(!r)throw new Error("the gist has no files");return Re=r.raw_url,r.truncated?await(await fetch(r.raw_url)).text():r.content}let t=await fetch(e.url);if(!t.ok)throw new Error(t.status===404?"not found":t.status+" "+t.statusText);return Re=new URL(e.url,location.href).href,await t.text()}function ri(){return M={kind:"source",source:{kind:"builtin",id:"home"},text:Ua.home},M.text}async function Qc(){if(pe&&ee.page==="source"&&ee.source.kind==="builtin"&&ee.source.id==="home"&&location.pathname==="/"&&(ee.source={kind:"url",url:pe.deck}),U)return Re=U.base||location.href,M={kind:"source",source:{kind:"url",url:Re},text:tn(U.settings||{})+String(U.markdown||"")},M.text;if(ee.page==="edit"){if(P)return M={kind:"copy"},P.text;history.replaceState(null,"","/new"+location.search),ee.page="pick"}if(ee.page==="pick")return pa(document.getElementById("new-dialog")),M={kind:"source",source:{kind:"builtin",id:"template:blank"},text:Ua["template:blank"]},M.text;if(ee.page==="share")try{let e=await pn(ee.data);return M={kind:"share",data:ee.data,text:e},e}catch{return la("This link's deck is damaged or cut short, so it could not be opened.",6e3),ri()}try{let e=await Xc(ee.source);return M={kind:"source",source:ee.source,text:e},e}catch(e){return ea.textContent="Could not load the deck ("+e.message+")",la("Could not load "+Ee(ee.source)+": "+e.message,6e3),ri()}}var U,pe,lr,_e,Bt,Ua,ie,N,se,Po,Fn,Ks,ea,Uo,Js,He,Pa,$s,xt,zo,le,qo,Xs,Qs,Zs,el,tl,al,ta,u,v,Xe,f,cr,$,J,R,te,re,Be,B,de,z,Xt,rl,Nn,Ge,Hn,xe,be,Pe,ze,Qt,mt,vl,wl,Sl,pi,Do,Ml,Re,Wn,Il,Pl,zl,_n,Fl,za,Nl,Wl,_l,Fo,Ve,No,Ke,De,ec,St,ue,vi,Le,Je,Ce,Ra,Ho,pt,Gn,sc,Vn,Yn,Kn,Y,Yt,$o,Va,Ya,Ka,fr,Zt,ne,Ae,$e,gr,Ci,h,oa,ra,lc,yr,cc,Ti,pc,mc,gc,gt,Mt,Tt,Xo,ft,yt,me,Fa,he,Qo,Ai,Da,Na,Zo,yc,Ii,ot,kc,Ri,Qe,Jn,Ne,Oc,Ic,Wi,Ze,_i,er,sa,Ui,qi,Gi,Vi,Yi,H,Z,S,Vt,Ha,Ki,$i,ja,jo,Qa,Za,es,bt,F,to,os,Ye,Wo,Dc,I,tr,Xn,Oe,is,fa,Fc,po,et,Qn,zt,Wa,ut,Kt,or,rr,Jt,ds,Me,$t,_a,hs,qc,Zn,we,ei,wt,ti,Gc,ir,sr,ai,ao,ee,oi,M,P,ys=V(()=>{"use strict";Dr();Fr();Hr();Wr();Ur();Gr();Yr();Jr();va();on();sn();ko();Co();fn();yn();Ln();Bn();Dn();Ma();U=window.SLIDETAKE||null;document.getElementById("deck-text")?.remove();pe=window.SLIDETAKE_LOCAL||null,lr=document.querySelector("header .mark .logo").outerHTML;document.documentElement.classList.toggle("embed",!!U);_e=!U||U.recording===!0;document.documentElement.classList.toggle("no-record",!_e);Bt=window.matchMedia("(prefers-reduced-motion: reduce)").matches,Ua={home:go,docs:Nr,features:jr,privacy:_r,showcase:$r,"template:blank":qr,"template:talk":Vr,"template:recording":Kr},ie=document.getElementById("editor"),N=document.getElementById("stage"),se=document.getElementById("world"),Po=document.getElementById("connectors"),Fn=document.getElementById("breadcrumbs"),Ks=document.getElementById("status-count"),ea=document.getElementById("status-err"),Uo=document.getElementById("mm-svg"),Js=document.getElementById("mm-label"),He=document.getElementById("editor-pane"),Pa=540,$s=96,xt=440,zo=720,le=960,qo=180,Xs=540,Qs=100,Zs=110,el=420,tl=.35,al=1,ta=parseFloat(W("slidetake:slideSize"))||.92,u=new Map,v=[],Xe=[],f=null,cr=["focus","path","radial","tree"],$="path",J=!1,R={},te=!0,re=null,Be=document.getElementById("brand"),B=document.getElementById("pip"),de=document.getElementById("stage-wrap"),z={x:0,y:0,zoom:.6},Xt=null;rl='<span class="st-name">'+lr+'Slide<span class="st-take">take</span></span>';Nn={accent:"--accent",accentSoft:"--accent-teal",line:"--accent-line",ring:"--accent-ring",header:"--header-bg",headerText:"--header-ink",onAccent:"--on-accent"};Ge=null;Hn=new URLSearchParams(location.search).get("mode");xe=0;be=null,Pe=-1,ze=null;Qt=document.getElementById("cam-overlay"),mt="";new ResizeObserver(()=>{mt&&Yo()}).observe(de);vl=new Set("svg g defs symbol use path rect circle ellipse line polyline polygon text tspan textPath title desc marker linearGradient radialGradient stop clipPath mask pattern filter feGaussianBlur feOffset feBlend feFlood feComposite feMerge feMergeNode feColorMatrix feDropShadow".split(" ")),wl=0;Sl=e=>e.querySelector("img")&&!e.textContent.trim()&&[...e.children].every(t=>/^(IMG|BR)$/.test(t.tagName));pi=["dot","d2","echarts","svg"].map(e=>":scope > code.language-"+e).join(", "),Do=e=>!!e.querySelector("img")&&!e.textContent.trim(),Ml=e=>e.children.length===1&&(e.children[0].tagName==="PRE"&&!!e.children[0].querySelector(pi)||e.children[0].matches("div.diagram"));Re=null;Wn=null;Il="https://cdn.jsdelivr.net/npm/@viz-js/viz@3.4.0/lib/viz-standalone.js",Pl="https://cdnjs.cloudflare.com/ajax/libs/echarts/5.5.0/echarts.min.js",zl={dark:{palette:["#60a5fa","#f472b6","#a78bfa","#fb923c","#facc15","#a1a1aa"],text:"#e4e4e7",muted:"#a1a1aa",line:"#3f3f46",split:"#27272a",tip:"#18181b"},light:{palette:["#2563eb","#db2777","#7c3aed","#ea580c","#ca8a04","#71717a"],text:"#27272a",muted:"#71717a",line:"#d4d4d8",split:"#e4e4e7",tip:"#ffffff"}};_n=new Set;Fl="https://esm.sh/@terrastruct/d2@0.1.33",za=null,Nl={dark:{N1:"#e4e4e7",N2:"#a1a1aa",N3:"#a1a1aa",N4:"#323238",N5:"#27272a",N6:"#18181b",N7:"#09090b"},light:{N1:"#27272a",N2:"#71717a",N3:"#71717a",N4:"#e4e4e7",N5:"#e4e4e7",N6:"#f4f4f5",N7:"#ffffff"}};Wl=(e,t)=>e.replace("{","{"+t),_l=e=>/d2-config\s*:/.test(e)?e:`vars: {
  d2-config: {
    layout-engine: elk
  }
}
`+e,Fo={};Ve=0,No=null;Ke=document.getElementById("progress");Ke.innerHTML="<b></b><i></i>";De={start:0,timer:null};ec=["x","y","xPercent","yPercent","scale","scaleX","scaleY","rotation","rotate","skewX","skewY"];St=null;ue=null,vi=null,Le=!1;Je=null;Ce=null;Uo.addEventListener("click",e=>{let t=e.target.closest("circle");t&&!h.active&&j(t.dataset.id)});Ra=null;ie.addEventListener("input",()=>{if(Or()){M.text=ie.value,clearTimeout(Ra),Ra=setTimeout(()=>{$c(ie.value),Et(!0)},300);return}M.kind!=="copy"&&!Kc()||(P.text=ie.value,Dt(),clearTimeout(Ra),Ra=setTimeout(()=>{ya(),Et(!0)},300))});document.querySelectorAll("#layout-toggle .seg-btn").forEach(e=>{e.addEventListener("click",()=>{e.dataset.mode!==$&&mr(e.dataset.mode)})});(function(){let e=new Map,t=0,a=!1,o=null,r=()=>{let[i,s]=[...e.values()];return Math.hypot(i.x-s.x,i.y-s.y)||1};N.addEventListener("pointerdown",i=>{i.pointerType==="mouse"&&i.button!==0||h.active||i.target.closest("a, pre, code, input, textarea")||(e.set(i.pointerId,{x:i.clientX,y:i.clientY}),t=0,a=!1,e.size===2&&(o={d:r(),zoom:z.zoom}))}),window.addEventListener("pointermove",i=>{let s=e.get(i.pointerId);if(!s)return;let l=i.clientX-s.x,c=i.clientY-s.y;e.set(i.pointerId,{x:i.clientX,y:i.clientY}),t+=Math.abs(l)+Math.abs(c),!a&&t>5&&(a=!0,hr(),N.classList.add("dragging")),a&&(e.size===2&&o?z.zoom=Si(o.zoom*r()/o.d):(z.x-=l/z.zoom,z.y-=c/z.zoom),kt())});let n=i=>{e.delete(i.pointerId),e.size<2&&(o=null),e.size||N.classList.remove("dragging")};window.addEventListener("pointerup",n),window.addEventListener("pointercancel",n),N.addEventListener("click",i=>{a&&(i.stopPropagation(),i.preventDefault(),a=!1)},!0)})();N.addEventListener("wheel",e=>{e.preventDefault(),!h.active&&Ei(Math.exp(-e.deltaY*(e.ctrlKey?.01:.0015)),e.clientX,e.clientY)},{passive:!1});document.getElementById("nav-prev").onclick=()=>Fe(-1);document.getElementById("nav-next").onclick=()=>Fe(1);document.getElementById("btn-open").onclick=()=>document.getElementById("file-input").click();document.getElementById("file-input").addEventListener("change",e=>{let t=e.target.files[0];if(!t)return;let a=new FileReader;a.onload=()=>{fs("a copy of "+t.name)&&(P=xa(String(a.result),{kind:"file",name:t.name},{exported:!0}),ya(),Re=null,f=null,Jc())},a.readAsText(t),e.target.value=""});document.getElementById("btn-save").onclick=()=>{let e=new Blob([ie.value],{type:"text/markdown"}),t=document.createElement("a");t.href=URL.createObjectURL(e),t.download=(Xe[0]?lt(u.get(Xe[0]).title):"deck")+".md",t.click(),setTimeout(()=>URL.revokeObjectURL(t.href),1e3),M.kind==="copy"&&(P.exported=P.text,ya(),Dt())};document.getElementById("btn-reset").onclick=()=>{M.kind!=="copy"||Sa(P)||confirm("Discard your edits and go back to "+Ee(P.origin)+" as it was?")&&(P.text=P.originText,ya(),ie.value=P.text,f=null,Et(!0),Dt())};document.getElementById("btn-edit-toggle").onclick=io;Ho=document.querySelector("main"),pt=document.getElementById("editor-resizer"),Gn=parseFloat(W("slidetake:editorWidth"));Gn&&He.style.setProperty("--editor-w",Gn+"px");pt.addEventListener("pointerdown",e=>{e.preventDefault(),pt.setPointerCapture(e.pointerId),Ho.classList.add("resizing");let t=Ho.getBoundingClientRect().right,a=r=>{let n=Math.round(Math.max(280,Math.min(window.innerWidth*.75,t-r.clientX)));He.style.setProperty("--editor-w",n+"px")},o=()=>{Ho.classList.remove("resizing"),pt.removeEventListener("pointermove",a),_("slidetake:editorWidth",String(He.getBoundingClientRect().width))};pt.addEventListener("pointermove",a),pt.addEventListener("pointerup",o,{once:!0})});pt.addEventListener("dblclick",()=>{He.style.removeProperty("--editor-w");try{localStorage.removeItem("slidetake:editorWidth")}catch{}});document.getElementById("btn-mode").onclick=ii;document.getElementById("btn-present").onclick=()=>ve(!J);sc="https://cdn.jsdelivr.net/npm/obs-websocket-js@5.0.5/dist/obs-ws.min.js",Vn=["ArrowRight","PageDown"," ","ArrowDown","Enter"],Yn=["ArrowLeft","PageUp","ArrowUp","r","R"],Kn=["b","B","."],Y=document.getElementById("review"),Yt=document.getElementById("rec-countdown"),$o=document.getElementById("rec-paused"),Va=document.getElementById("obs-host"),Ya=document.getElementById("obs-port"),Ka=document.getElementById("obs-pass"),fr=document.getElementById("obs-remember"),Zt=document.getElementById("obs-status"),ne=null,Ae=!1,$e=null,gr=null,Ci="",h={active:!1,withObs:!1,counting:!1,paused:!1,finishing:!1,t0:0,pauseAt:0,pausedMs:0,events:[],outputPath:null,browser:null},oa=e=>new Promise(t=>setTimeout(t,e)),ra=()=>Promise.race([new Promise(e=>requestAnimationFrame(()=>requestAnimationFrame(e))),oa(100)]);lc="G-3S9FY4MQLS",yr=document.getElementById("analytics-dialog"),cc=()=>W("slidetake:analytics")!=="off";yr.querySelectorAll("[data-analytics]").forEach(e=>e.onclick=()=>dc(e.dataset.analytics==="on"));Ti=document.getElementById("btn-analytics");Ti.hidden=!/^(www\.)?slidetake\.com$/.test(location.hostname);Ti.onclick=()=>{Mi(),pa(yr)};document.querySelectorAll(".modal").forEach(e=>{e.addEventListener("click",t=>{(t.target===e||t.target.closest("[data-close]"))&&e.classList.remove("open")})});pc=e=>/^(localhost|127(\.\d+){3}|\[?::1\]?)$/i.test(e);mc="Run OBS on this computer and connect to localhost: a secure (https) page can't reach OBS at any other address.";document.getElementById("obs-connect").onclick=br;fr.addEventListener("change",Li);gc="https://cdn.jsdelivr.net/npm/mediabunny@1.64.0/+esm",gt=document.getElementById("rec-cam"),Mt=document.getElementById("rec-mic"),Tt=document.getElementById("rec-quality"),Xo=document.getElementById("rec-meter"),ft=document.getElementById("rec-browser-check"),yt=document.getElementById("rec-wave"),me=W("slidetake:rec-mode")||"",Fa="",he=null;Qo=0;Ai=document.getElementById("rec-cam-preview"),Da=document.getElementById("rec-cam-none"),Na=null,Zo=0;Mt.onchange=()=>{_("slidetake:mic",Mt.value),Ja(),Ue()};gt.onchange=()=>{bc(gt.value),gt.value!=="none"&&re&&(Ar(),nt()),zt()&&Oi(),Ue()};yc=()=>(R.pip||"none").toLowerCase()!=="none"||!!R.camera||[...u.values()].some(e=>e.camera),Ii=()=>"slidetake:rec-cam:"+We();Tt.onchange=()=>{_("slidetake:quality",Tt.value),Ue()};ot=()=>!(Se().ok&&(me||"browser")==="browser");document.getElementById("btn-studio").onclick=()=>na();kc=()=>!!me||rt().takes.length>0||lo().some(e=>e.key===We());document.getElementById("btn-record").onclick=()=>wr();Ri=e=>({width:e.w,height:e.h,aspectRatio:16/9,frameRate:Ut,resizeMode:"crop-and-scale"});Qe=!1;Jn=600;Ne="";Oc=e=>xn(e,ji),Ic=(e,t)=>kn(e,t,{input:e.outputPath||Ne||"recording.mov",outputName:We()+"-final.mp4",sectionOf:ji,loudness:Ze()}),Wi=document.querySelectorAll(".rv-loud"),Ze=()=>W("slidetake:loudness")!=="off",_i=()=>Wi.forEach(e=>{e.setAttribute("aria-pressed",String(Ze())),e.classList.toggle("on",Ze())}),er=document.getElementById("rv-limiter"),sa=()=>W("slidetake:limiter")==="on",Ui=()=>{er.setAttribute("aria-pressed",String(sa())),er.classList.toggle("on",sa())};Ui();er.onclick=()=>{_("slidetake:limiter",sa()?"off":"on"),Ui()};qi=()=>W("slidetake:mic-sound")==="raw"?"raw":"voice",Gi=e=>({...e?{deviceId:{ideal:e}}:{},echoCancellation:!1,autoGainControl:!1,noiseSuppression:qi()==="voice"}),Vi=document.querySelectorAll("[data-sound]"),Yi=()=>Vi.forEach(e=>{let t=e.dataset.sound===qi();e.classList.toggle("active",t),e.setAttribute("aria-checked",String(t))});Yi();Vi.forEach(e=>e.onclick=()=>{_("slidetake:mic-sound",e.dataset.sound),Yi(),he&&Ja()});_i();Wi.forEach(e=>e.onclick=()=>{_("slidetake:loudness",Ze()?"off":"on"),_i(),H&&co()});H=null,Z=null,S=document.getElementById("rv-video"),Vt=document.getElementById("rv-now");Ha=-1,Ki=()=>{let e=Ia(v,Oe).length;return e?e+"/"+v.length+" slide"+(e===1?"":"s")+" up for a take":""};$i="";document.getElementById("rv-chapters").onclick=e=>Qi(e.currentTarget,$i);document.getElementById("rv-ffmpeg-copy").onclick=e=>{!H||!H.events.length||(Qi(e.currentTarget,Ic(H,document.getElementById("rv-mode").value)),O("Copied the ffmpeg command: run it in a terminal, in the folder with "+(dt(H.outputPath)||"the recording")+"."))};ja=new Map,jo=0;Qa=document.getElementById("rv-fps");Qa.onchange=()=>{H&&(H.fps=parseFloat(Qa.value),Er(H),co())};Za=null;S.addEventListener("timeupdate",()=>{if(!Z)return;let e=Z.ranges[Z.i];if(S.currentTime*1e3<e.end)return;if(Z.i++,Z.i>=Z.ranges.length){S.pause(),Z=null,O("");return}let t=Z.ranges[Z.i];S.currentTime=t.start/1e3,O("\u25B6 "+t.title)});es=document.getElementById("rv-play-final"),bt=null;es.onclick=()=>{if(!H)return;if(!H.inBrowser){eo(_t(H).map(a=>({start:a.start,end:a.end,title:a.title})));return}if(F&&!F.single){S.paused?S.play().catch(()=>{}):S.pause();return}let e=qt(H),t=Math.max(0,bt?e.findIndex(a=>a.id===bt):0);bt=null,ho(e.slice(t))};S.addEventListener("play",Cr);S.addEventListener("pause",()=>{F&&F.single&&S.currentTime<F.parts[0].keep-.05&&(bt=F.parts[0].id,O("Preview starts from "+F.parts[0].title.replace(/ · take \d+$/,"")+".")),Cr()});F=null;S.addEventListener("timeupdate",()=>{F&&S.currentTime>=F.parts[F.i].keep&&as()});S.addEventListener("ended",()=>{F&&as()});to=document.getElementById("rv-render-btn");to.onclick=()=>rs(!1);os=0,Ye=e=>{clearTimeout(os),e?to.textContent=e:to.innerHTML='\u2193 <span><u class="key">D</u>ownload</span>'},Wo=e=>e.where?"\u201C"+e.where+"\u201D as "+e.name:"your downloads as "+e.name;Dc=e=>{let t=a=>String(a).padStart(2,"0");return e.getFullYear()+"-"+t(e.getMonth()+1)+"-"+t(e.getDate())+" "+t(e.getHours())+"-"+t(e.getMinutes())+"-"+t(e.getSeconds())};document.getElementById("rv-folder-change").onclick=async()=>{try{let e=await ns(!0);e&&O("Videos now go to "+e.name+".")}catch{}};I=null,tr="",Xn=null,Oe=new Set,is=()=>"slidetake:board:"+We();fa=()=>_(is(),JSON.stringify(I)),Fc=e=>{let t=u.get(e);return t?On(t.title+`
`+t.html):""},po=()=>In(v,e=>({title:u.get(e).title,fp:Fc(e)}));et=document.getElementById("rv-setup-btn"),Qn=document.getElementById("setup-note"),zt=()=>Y.classList.contains("setup-view");new MutationObserver(()=>{Y.classList.contains("open")||mo()}).observe(Y,{attributes:!0,attributeFilter:["class"]});et.onclick=()=>{zt()?mo():uo()};document.getElementById("setup-record").onclick=()=>{ua(),me||(me=ot()?"obs":"browser",_("slidetake:rec-mode",me)),wr()};Y.addEventListener("click",e=>{(e.target===Y||e.target.closest("[data-close]"))&&so()});Wa=(()=>{let e=(navigator.userAgentData&&navigator.userAgentData.brands||[]).map(a=>a.brand).filter(a=>!/chromium|not.?a.?brand/i.test(a));if(e.length)return e[0].replace(/^(Google|Microsoft) /,"");let t=navigator.userAgent;return/Firefox\//.test(t)?"Firefox":/Edg\//.test(t)?"Edge":/OPR\//.test(t)?"Opera":/Chrome\//.test(t)?"Chrome":/Safari\//.test(t)?"Safari":"this browser"})();document.querySelectorAll(".browser-name").forEach(e=>{e.textContent=Wa});document.getElementById("rv-rec").onclick=()=>{if(!ot()){Xa("browser",Ia(v,Oe));return}if(Ae){Xa("obs");return}ar({note:"Connect to OBS first: OBS \u2192 Connect."})};ut=document.getElementById("rv-pro");ut.onclick=()=>{Se().ok&&wc(ot()?"browser":"obs")};document.querySelectorAll(".rv-purge .rv-menu button").forEach(e=>e.addEventListener("click",()=>{e.closest("details").open=!1}));document.getElementById("rv-clean-unused").onclick=async()=>{let{rows:e}=ss(),t=new Set(e.map(o=>o.pick).filter(Boolean)),a=I.takes.filter(o=>!t.has(o.uid));if(!a.length){O("Every take is in use.");return}confirm("Purge "+a.length+" take"+(a.length===1?"":"s")+" the video doesn\u2019t use (earlier attempts and outdated takes)?")&&(await Wc(a),O("Purged "+a.length+" unused take"+(a.length===1?"":"s")+"."))};document.getElementById("rv-clean").onclick=async()=>{if(!I.takes.length||!confirm("Purge all "+I.takes.length+" takes of this deck from this browser? Download the video first if you need it."))return;let e=new Set(I.takes.map(t=>t.clip.split("/")[0]));I.takes=[],I.picks={},fa();for(let t of e)await kr(t);S.src&&(URL.revokeObjectURL(S.src),S.removeAttribute("src"),S.load()),F=null,Pt(),O("All takes purged."),at()};document.getElementById("rv-clean-every").onclick=async()=>{let e,t=0,a=0;try{e=await navigator.storage.getDirectory()}catch{return}let o=async s=>{for await(let l of s.values())l.kind==="directory"?await o(l):(a++,t+=(await l.getFile()).size)};try{await o(await e.getDirectoryHandle("slidetake-takes"))}catch{}let r=[];try{for(let s=0;s<localStorage.length;s++){let l=localStorage.key(s);l&&l.startsWith("slidetake:board:")&&r.push(l)}}catch{}let n=r.filter(s=>{try{return JSON.parse(localStorage.getItem(s)||"{}").takes.length>0}catch{return!1}}).length;if(!a){O("No takes are kept in this browser.");return}let i=t>1e9?(t/1e9).toFixed(1)+" GB":Math.max(1,Math.round(t/1e6))+" MB";if(confirm("Purge "+i+" of takes ("+a+" file"+(a===1?"":"s")+") from "+(n||"no")+" deck"+(n===1?"":"s")+" and any left behind? Every deck loses its takes; download the videos you need first.")){try{await e.removeEntry("slidetake-takes",{recursive:!0})}catch{}r.forEach(s=>{try{localStorage.removeItem(s)}catch{}}),_("slidetake:sessions",JSON.stringify(lo().map(s=>s.inBrowser?{...s,cleaned:!0}:s))),I=null,tr="",rt(),ja.clear(),S.src&&(URL.revokeObjectURL(S.src),S.removeAttribute("src"),S.load()),F=null,Pt(),at(),O("Purged "+i+" of takes from every deck.")}};Kt=null,or=0,rr=!1;S.addEventListener("error",async()=>{if(S.getAttribute("src")){if(Kt&&or<5){or++,O("Reloading "+Ne+" (OBS was still finishing it)\u2026"),await new Promise(e=>setTimeout(e,1500));try{ga(await fo(Kt),Kt,!0);return}catch{}}O(Kt?"Chrome cannot play "+Ne+". In OBS set Recording Format to Hybrid MP4 (or MP4) with H.264 video; the ffmpeg command still works with this file.":"Could not play "+(Ne||"this file")+". If OBS was still finishing it when you opened it, open it again; if it still fails, set OBS to Hybrid MP4 (or MP4) with H.264 video.",{warn:!0})}});Jt=document.getElementById("rv-file-input");Jt.addEventListener("change",()=>{Jt.files[0]&&ga(Jt.files[0]),Jt.value=""});document.getElementById("rv-open").onclick=async()=>{if(!window.showOpenFilePicker)return Jt.click();try{let[e]=await window.showOpenFilePicker({id:"obs-recordings",types:[{description:"Recordings",accept:{"video/*":[".mov",".mp4",".m4v",".mkv",".webm"]}}]});O("Opening "+e.name+"\u2026"),ga(await fo(e),e)}catch(e){(!e||e.name!=="AbortError")&&O("Could not open that file.",{warn:!0})}};ds=document.getElementById("rv-folder");window.showDirectoryPicker||(ds.style.display="none");ds.onclick=async()=>{let e=H&&dt(H.outputPath);try{let t=await window.showDirectoryPicker({id:"obs-recordings",mode:"read"});if(cs("obs-folder",t),!e){O("Folder remembered. This session has no file name from OBS; open the file instead.");return}let a=await t.getFileHandle(e);ga(await fo(a),a)}catch{}};hc()&&new URLSearchParams(location.search).get("obs")&&br();Me=document.getElementById("btn-camera"),$t=document.getElementById("pip-msg"),_a=null,hs=B.querySelector("span");qc='<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="6" width="14" height="12" rx="2"/><path d="M16 10.5 22 7v10l-6-3.5z"/></svg>';Me.onclick=()=>Rt(te);Br();Zn=null;window.addEventListener("pointermove",ms);document.addEventListener("fullscreenchange",()=>{document.fullscreenElement||(h.active?Lt("Stopped: the browser left fullscreen"):J&&ve(!1))});we=document.getElementById("help");new MutationObserver(()=>us(document.getElementById("btn-keys"),we.classList.contains("open"))).observe(we,{attributes:!0,attributeFilter:["class"]});new MutationObserver(()=>{let e=Y.classList.contains("open");document.getElementById("btn-studio").classList.toggle("active",e),!e&&!S.paused&&S.pause()}).observe(Y,{attributes:!0,attributeFilter:["class"]});document.getElementById("btn-keys").onclick=()=>we.classList.add("open");document.getElementById("help-close").onclick=()=>we.classList.remove("open");we.addEventListener("click",e=>{e.target===we&&we.classList.remove("open")});window.addEventListener("keydown",e=>{if(e.key==="F5"){e.preventDefault(),h.active||na();return}if(h.active){Mc(e);return}if(document.querySelector(".modal.open")){let o=Y.classList.contains("open")&&zt();if(e.key==="Escape")ua();else if(Y.classList.contains("open")&&!e.metaKey&&!e.ctrlKey&&!e.altKey&&!/^(INPUT|TEXTAREA|SELECT)$/.test(document.activeElement?.tagName||"")){let r=e.key.toLowerCase(),n=r==="r"?o?"setup-record":"rv-rec":o?"":r==="p"?"rv-play-final":r==="d"?ot()?"rv-ffmpeg-copy":"rv-render-btn":"",i=n?document.getElementById(n):null;i&&!i.disabled&&(e.preventDefault(),i.click())}return}let t=document.activeElement&&document.activeElement.tagName;if(t==="TEXTAREA"||t==="INPUT"||e.metaKey||e.ctrlKey||e.altKey)return;if(we.classList.contains("open")){/^(Escape|k|K|\?|\/)$/.test(e.key)&&we.classList.remove("open");return}let a=e.key;a==="ArrowRight"||a===" "||a==="PageDown"?(e.preventDefault(),Fe(1)):a==="ArrowLeft"||a==="PageUp"?(e.preventDefault(),Fe(-1)):a==="ArrowDown"?(e.preventDefault(),nc()):a==="ArrowUp"?(e.preventDefault(),rc()):a==="Home"?v.length&&j(v[0]):a==="End"?v.length&&j(v[v.length-1]):a==="o"||a==="O"?oc():a==="e"||a==="E"?io():a==="f"||a==="F"||a==="p"||a==="P"?ve(!J):a==="r"||a==="R"?wr():a==="s"||a==="S"?na():/^[1-4]$/.test(a)?mr(cr[+a-1]):a==="c"||a==="C"?Rt(te):a==="v"||a==="V"?ml():a==="l"||a==="L"?ii():a==="+"||a==="="?qn(1):a==="-"||a==="_"?qn(-1):a==="?"||a==="/"||a==="k"||a==="K"?we.classList.add("open"):a==="Escape"&&!xi()&&J&&ve(!1)});window.addEventListener("hashchange",()=>{let{data:e,slide:t}=wa(location.hash);if(e&&!(M&&M.kind==="share"&&e===M.data)){location.reload();return}t&&t!==f&&u.has(t)&&j(t)});ei="";new ResizeObserver(()=>{let e=N.clientWidth+"x"+N.clientHeight;e!==ei&&(ei=e,kt(),ke(!0))}).observe(N);wt=document.createElement("div");wt.id="toast";wt.setAttribute("role","status");document.body.appendChild(wt);ti=null;Gc=document.getElementById("open-dialog"),ir=document.getElementById("open-url"),sr=document.getElementById("open-error");document.getElementById("btn-load").onclick=()=>{sr.hidden=!0,pa(Gc),ir.focus(),ir.select()};document.getElementById("open-form").onsubmit=e=>{e.preventDefault();let t=ln(ir.value);if(!t){sr.textContent="That doesn't look like a link.",sr.hidden=!1;return}location.href=nr(t)};document.getElementById("btn-share").onclick=async()=>{let{link:e,inside:t}=await Vc(f&&f!==v[0]?f:""),a=t?"Link copied, with the whole deck inside it ("+(e.length/1024).toFixed(1)+" KB)"+(e.length>8e3?". Some chat apps cut long links short: a GitHub file or gist makes a shorter one.":"."):"Link copied.";try{await navigator.clipboard.writeText(e),la(a,5e3)}catch{prompt("Copy this link:",e)}M.kind==="copy"&&(P.exported=P.text,ya(),Dt())};ai=W("slidetake:layout");$=cr.includes(ai)?ai:"path";document.querySelectorAll("#layout-toggle .seg-btn").forEach(e=>e.classList.toggle("active",e.dataset.mode===$));ao=new URLSearchParams(location.search);cr.includes(ao.get("layout"))&&($=ao.get("layout"),document.querySelectorAll("#layout-toggle .seg-btn").forEach(e=>e.classList.toggle("active",e.dataset.mode===$)));if(U){let e=(Array.isArray(U.trail)?U.trail:U.back?[U.back]:[]).filter(r=>r&&r.label),t=document.querySelector("header .brand");e.length&&(t.innerHTML='<nav class="trail" aria-label="Site">'+e.map((r,n)=>(n?'<span class="sep" aria-hidden="true">|</span>':"")+(r.url?'<a href="'+A(r.url)+'">'+A(r.label)+"</a>":"<span>"+A(r.label)+"</span>")).join("")+"</nav>");let a=document.createElement("a");a.id="credit",a.href="https://slidetake.com",a.target="_blank",a.rel="noopener",a.title="Made with Slidetake",a.setAttribute("aria-label","Made with Slidetake"),a.innerHTML=lr+'<span class="word">Slide<span>take</span></span>';let o=document.querySelector("header .hdr-actions");o.insertBefore(a,o.firstChild),_e||(o.insertAdjacentHTML("beforeend",'<button class="btn" id="hdr-keys" title="Keyboard shortcuts (K)">\u2328 Keys</button><button class="btn" id="hdr-full" title="Fullscreen (F)">\u26F6 Fullscreen</button>'),document.getElementById("hdr-keys").onclick=()=>document.getElementById("help").classList.add("open"),document.getElementById("hdr-full").onclick=()=>ve(!J))}ee=un(location.pathname,location.search,location.hash),oi=ee.page==="pick"?"":ee.slide,M=null,P=mn(W("slidetake:copy"))||Yc();window.addEventListener("popstate",()=>location.reload());pe&&window.EventSource&&(new EventSource(pe.events).onmessage=async e=>{if(!Or())return;let t=(JSON.parse(e.data).file||"").replace(/\\/g,"/");if(t===pe.file){let a=await(await fetch(pe.deck,{cache:"no-store"})).text();if(a===ie.value)return;ie.value=M.text=a,Et(!0);return}se.querySelectorAll("img").forEach(a=>{let o=new URL(a.src);decodeURIComponent(o.pathname).endsWith("/"+t)&&(o.searchParams.set("t",String(Date.now())),a.src=o.href)})});(ao.get("edit")==="1"||ee.page==="edit"&&P&&ao.get("edit")!=="0")&&io();Qc().then(e=>(ie.value=e,Dt(),li(ie.value),ui(),document.fonts?document.fonts.ready:null)).then(()=>{u.forEach(ro),ca(),j(u.has(oi)?oi:v[0],!0),_e&&W("slidetake:camera")==="on"&&Rt(!0,!0)})});var Pr=`  /* Every colour comes from these tokens. Slidetake's own is seafoam green: bright on zinc in dark mode,
     deep on white in light mode. A host page passes its own (window.SLIDETAKE.colors) and a deck can carry
     its own (accent: in its top block); see applyColors in app.js. */
  :root{
    --bg:#09090b;
    --grid-dot:#1d1d21;
    --panel:#111113;
    --panel-line:#27272a;
    --node-bg:#18181b;
    --node-border:#323238;
    --accent:#29b685;                  /* 6.9:1 on the card: an accent, kept below body text so it doesn't glare */
    --accent-teal:#3bc493;              /* headings below h2 */
    --text:#e4e4e7;
    --text-muted:#a1a1aa;
    --danger:#e0645c;
    --code-bg:#0f0f12;
    --overlay:rgba(17,17,19,.9);       /* breadcrumbs, nav bar, minimap */
    --on-accent:#022c22;               /* text on an accent-filled button */
    --card-shadow:0 6px 24px rgba(0,0,0,.35);
    --brand-shadow:0 1px 6px rgba(0,0,0,.6);
    --mono: 'IBM Plex Mono', ui-monospace, monospace;
    --display: 'Space Grotesk', sans-serif;
    --body: 'IBM Plex Sans', sans-serif;
  }
  /* Tokens derived from others are declared on body, not :root: a custom property resolves var() where
     it is declared, so on :root these would freeze the default palette's colours. */
  body{
    --accent-line:#047857;             /* borders and connector lines on the active path */
    --accent-ring:var(--accent);        /* the current slide's border, glow and the progress bar */
    --edge:var(--node-border);          /* connector lines off the active path */
    --header-bg:none;                   /* a host's band of colour behind the header (an image layer) */
    --header-ink:var(--text);           /* text on that band */
  }
  /* Light mode (L, mode: light, ?mode=light): #047857 carries text (5.5:1 on white); the brighter seafoam
     only rings and lines, which never need to be read. */
  body[data-mode="light"]{
    --bg:#fafaf9; --grid-dot:#e7e5e4; --panel:#ffffff; --panel-line:#e4e4e7;
    --node-bg:#ffffff; --node-border:#e4e4e7; --edge:#d4d4d8;
    --accent:#047857; --accent-teal:#065f46; --accent-line:#34d399; --accent-ring:#10b981;
    --text:#27272a; --text-muted:#71717a; --danger:#c2410c;
    --code-bg:#f4f4f5; --overlay:rgba(255,255,255,.92); --on-accent:#ffffff;
    --card-shadow:0 4px 18px rgba(24,24,27,.08); --brand-shadow:0 1px 4px rgba(255,255,255,.9);
  }
  body[data-mode="light"] .node .body pre code{color:var(--text);}
  body[data-mode="light"] #help, body[data-mode="light"] .modal{background:rgba(24,24,27,.45);}
  *{box-sizing:border-box;}
  html,body{height:100%;margin:0;}
  body{
    background:var(--bg);
    color:var(--text);
    font-family:var(--body);
    overflow:hidden;
    display:flex;
    flex-direction:column;
  }
  ::selection{background:var(--accent);color:var(--on-accent);}
  :focus-visible{outline:2px solid var(--accent);outline-offset:2px;}
  button{font-family:var(--mono);}

  /* ---------- header ---------- */
  header{
    min-height:56px;flex:none;
    display:flex;align-items:center;justify-content:space-between;gap:10px;flex-wrap:wrap;
    padding:8px 16px;
    background:var(--header-bg), var(--panel);
    border-bottom:1px solid var(--panel-line);
    z-index:20;
  }
  /* a host's coloured header band: its own ink for the text, buttons and borders on it */
  body.st-header-color header{color:var(--header-ink);border-bottom-color:transparent;
    --text:var(--header-ink);--text-muted:color-mix(in srgb, var(--header-ink) 72%, transparent);
    --node-border:color-mix(in srgb, var(--header-ink) 28%, transparent);}
  .brand{display:flex;align-items:baseline;gap:10px;}
  /* the name and the links beside it share one baseline: the mark's baseline is its word's, the logo centred beside it */
  .brand .mark{font-family:var(--display);font-weight:700;font-size:17px;letter-spacing:.02em;color:inherit;text-decoration:none;display:inline-flex;align-items:center;gap:7px;}
  .brand .mark .word{align-self:baseline;}
  .brand .mark .logo{width:20px;height:20px;fill:var(--accent);flex:none;align-self:center;}
  .brand .mark .word > span{color:var(--accent);}
  /* Slidetake's two-tone name in its own decks' titles, as in the header */
  .node .body .st-take{color:var(--accent);}
  .node .body .st-name{white-space:nowrap;color:var(--text);}
  /* in bold the rest of the name (Studio) keeps the text colour too, not the accent bold text takes */
  .node .body strong:has(> .st-name){color:var(--text);}
  .node .body .st-name .logo{width:1em;height:1em;vertical-align:-.14em;margin-right:.2em;fill:var(--accent);}
  /* the Record button's red, where a deck names the button; deeper on white so it reads */
  .node .body .st-rec{color:#f87171;}
  body[data-mode="light"] .node .body .st-rec{color:#dc2626;}
  /* a heart in the deck's own colour, where an emoji would keep its fixed green */
  .node .body .st-heart{display:inline-block;width:.9em;height:.9em;vertical-align:-.08em;background:var(--accent);
    -webkit-mask:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M12 21.35 10.55 20.03C5.4 15.36 2 12.27 2 8.5 2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.54z'/%3E%3C/svg%3E") center/contain no-repeat;mask:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M12 21.35 10.55 20.03C5.4 15.36 2 12.27 2 8.5 2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.54z'/%3E%3C/svg%3E") center/contain no-repeat;}
  /* Features, Showcase, Docs and GitHub (what it is, see it, how to use it, the source) sit with the name:
     they're about Slidetake, not about the deck on screen */
  .brand .site-links{display:flex;align-items:center;gap:16px;align-self:center;margin-left:8px;}
  .brand .site-link{font-family:var(--mono);font-size:13px;color:var(--text-muted);text-decoration:none;display:inline-flex;align-items:center;}
  .brand .site-link:hover, .brand .site-link:focus-visible{color:var(--accent);}
  .brand .site-link svg{width:15px;height:15px;display:block;margin-right:5px;}
  .hdr-actions{display:flex;gap:8px;align-items:center;flex-wrap:wrap;}
  /* Buttons come in four kinds, and only these:
     1. a button: a grey outline that turns accent on hover; regular (32px) or .small (24px); .icon makes it square
     2. an accent button (.primary, and .rec in red): the one main action of a dialog or bar. Coloured text, the
        same grey outline as any button, filling with its colour on hover
     3. selected (.toggle.on, .seg-btn.active, .rv-chip.on, a chosen card): the accent outline on a light accent tint
     4. bare (.close, the deck's floating bar): no outline at all */
  .btn{
    background:transparent;color:var(--text);
    border:1px solid var(--node-border);border-radius:6px;box-sizing:border-box;
    height:32px;padding:0 12px;font-size:12px;letter-spacing:.02em;white-space:nowrap;cursor:pointer;
    display:inline-flex;align-items:center;justify-content:center;gap:6px;
    transition:border-color .15s, color .15s, background .15s;
  }
  .btn.small{height:24px;padding:0 9px;font-size:11px;}
  .btn.icon{width:32px;padding:0;}
  .btn.small.icon{width:24px;}
  .btn.icon svg{width:15px;height:15px;display:block;}
  .btn .ico{font-size:1.1em;line-height:1;}
  a.btn{text-decoration:none;}
  .btn:hover:not(:disabled){border-color:var(--accent);color:var(--accent);}
  .btn:disabled{opacity:.4;cursor:not-allowed;}
  .btn.primary{color:var(--accent);}
  .btn.primary:hover:not(:disabled){background:var(--accent);border-color:var(--accent);color:var(--on-accent);}
  .btn.rec{color:#f87171;}
  .btn.rec:hover:not(:disabled){background:#b91c1c;border-color:#b91c1c;color:#fff;}
  .btn.toggle{color:var(--text-muted);}
  .btn.active, .btn.toggle.on, .seg-btn.active{border-color:var(--accent);color:var(--accent);background:color-mix(in srgb, var(--accent) 10%, transparent);}
  .seg{display:inline-flex;height:32px;box-sizing:border-box;border:1px solid var(--node-border);border-radius:6px;overflow:hidden;}
  .seg-btn{
    background:transparent;border:none;color:var(--text-muted);font-family:var(--mono);height:100%;
    font-size:12px;padding:0 12px;cursor:pointer;display:flex;align-items:center;transition:background .15s,color .15s;
  }
  .seg-btn:hover{color:var(--accent);}

  /* ---------- main layout ---------- */
  main{flex:1;display:flex;min-height:0;}
  /* the editor sits on the right; its width is dragged with #editor-resizer and remembered */
  #editor-pane{
    width:var(--editor-w, 38%);min-width:280px;max-width:75vw;
    display:flex;flex-direction:column;
    background:var(--panel);border-left:1px solid var(--panel-line);
    transition:width .25s ease, min-width .25s ease, opacity .2s ease;
    overflow:hidden;
  }
  #editor-pane.collapsed{width:0;min-width:0;opacity:0;border-left:none;}
  main.resizing #editor-pane{transition:none;}
  main.resizing{cursor:col-resize;user-select:none;}
  #editor-resizer{flex:none;width:6px;margin-right:-3px;margin-left:-3px;z-index:5;cursor:col-resize;position:relative;}
  #editor-resizer:hover, main.resizing #editor-resizer{background:var(--accent-line, var(--accent));opacity:.6;}
  #editor-resizer:has(+ #editor-pane.collapsed){display:none;}
  .pane-bar{flex:none;display:flex;align-items:center;justify-content:space-between;gap:8px;padding:8px 10px 8px 14px;border-bottom:1px solid var(--panel-line);}
  .pane-actions{display:flex;gap:6px;flex-wrap:wrap;justify-content:flex-end;}
  #doc-state{text-transform:none;letter-spacing:.02em;font-size:11px;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}
  #doc-state .ro{color:var(--text-muted);}
  #doc-state .mine{color:var(--text);}
  #doc-state .edited{color:var(--accent);}
  #continue{color:var(--accent);border-color:var(--accent-line);}
  #continue[hidden]{display:none;}
  #btn-analytics[hidden]{display:none;}
  /* a built-in page's deck as text, for search engines and AI tools that don't run JavaScript: out of sight
     until the app removes it (without JavaScript, the page's <noscript> shows it) */
  .deck-text{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap;}
  /* links in a dialog's notes (the privacy page, say) in the accent, readable in dark and light */
  .modal .note a{color:var(--accent);text-decoration:underline;text-underline-offset:2px;}
  .modal ul.templates{list-style:none;padding:0;display:grid;gap:8px;margin:12px 0;}
  .modal ul.templates a{display:flex;flex-direction:column;gap:2px;padding:10px 12px;border:1px solid var(--panel-line);border-radius:8px;text-decoration:none;color:var(--text);}
  .modal ul.templates a:hover{border-color:var(--accent);}
  .modal ul.templates span{font-size:12px;color:var(--text-muted);}
  /* the analytics choice: two cards, the chosen one in the accent */
  .modal .choices{display:grid;gap:8px;margin:12px 0;}
  /* a choice card (analytics on or off; recording in the browser or with OBS): the chosen one looks selected */
  .modal .choice{padding:10px 12px;border:1px solid var(--panel-line);border-radius:8px;background:transparent;color:var(--text);font:inherit;cursor:pointer;}
  .modal .choice:hover{border-color:var(--accent);}
  .modal .choice[aria-checked="true"]{border-color:var(--accent);background:color-mix(in srgb, var(--accent) 10%, transparent);}
  .modal .choice{display:flex;flex-direction:column;gap:4px;text-align:left;}
  .modal .choice strong{font-family:var(--display);font-size:14px;}
  .modal .choice span{font-size:12px;line-height:1.55;color:var(--text-muted);}
  .modal .note{font-size:12px;}
  #editor-pane.unsaved .pane-bar{box-shadow:inset 0 -2px 0 var(--accent);}
  #editor-pane.unsaved #btn-share, #editor-pane.unsaved #btn-save{color:var(--accent);}
  .sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0;}
  .pane-label{
    font-family:var(--mono);font-size:10px;letter-spacing:.12em;text-transform:uppercase;
    color:var(--text-muted);flex:none;
  }
  #editor{
    flex:1;resize:none;border:none;outline:none;padding-top:10px !important;
    background:var(--panel);color:var(--text);
    font-family:var(--mono);font-size:12.5px;line-height:1.65;
    padding:0 14px 14px;tab-size:2;
  }
  #status-line{
    flex:none;padding:6px 14px;font-family:var(--mono);font-size:11px;
    color:var(--text-muted);border-top:1px solid var(--panel-line);
    display:flex;justify-content:space-between;gap:10px;
  }
  #status-line .err{color:var(--danger);}
  #btn-reset{background:none;border:none;color:var(--text-muted);font-size:11px;cursor:pointer;padding:0;text-decoration:underline;}
  #btn-reset:hover{color:var(--accent);}

  body.presenting header, body.presenting #editor-pane, body.presenting #editor-resizer{display:none;}
  #breadcrumbs, #navbar, #minimap{transition:opacity .4s;}
  body.presenting.idle #breadcrumbs, body.presenting.idle #navbar, body.presenting.idle #minimap{opacity:0;pointer-events:none;}
  body.presenting.idle, body.presenting.idle *{cursor:none !important;}

  /* ---------- stage ---------- */
  #stage-wrap{flex:1;position:relative;overflow:hidden;}
  #stage{
    position:absolute;inset:0;
    background-color:var(--bg);
    background-image:radial-gradient(var(--grid-dot) 1.2px, transparent 1.2px);
    background-size:28px 28px;
    overflow:hidden;cursor:grab;touch-action:none;
  }
  #stage.dragging{cursor:grabbing;user-select:none;}
  #world{position:absolute;left:0;top:0;transform-origin:0 0;}
  #connectors{position:absolute;left:0;top:0;overflow:visible;pointer-events:none;}
  #connectors path{fill:none;stroke:var(--edge);stroke-width:1.5;transition:stroke .2s;}
  #connectors path.active{stroke:var(--accent-line);stroke-width:2;}

  div.node{ /* div: Graphviz also puts class="node" on its SVG shapes */
    position:absolute;left:0;top:0;width:440px;
    /* centre of the card sits at (--cx, --cy); --push is Focus's settle-in scale */
    transform:translate(calc(var(--cx,0) * 1px), calc(var(--cy,0) * 1px)) scale(var(--push,1)) translate(-50%,-50%);
    transform-origin:0 0; /* the last translate puts the card centre at 0,0, so the scale pivots on it */
    background:var(--node-bg);
    border:1px solid var(--node-border);border-radius:8px;
    padding:16px 18px 18px;cursor:pointer;
    box-shadow:var(--card-shadow);
    transition:border-color .18s, box-shadow .18s, opacity .3s;
  }
  /* Focus: every card sits at the same spot and only the current one shows; the next fades in with
     a slight push-in instead of the camera travelling */
  /* other cards vanish at once (no stacked fade on load or layout change); only the slide just left
     fades out, beneath the incoming one */
  #world.focus div.node{transition:none;}
  #world.focus div.node:not(.current){opacity:0;pointer-events:none;}
  #world.focus div.node.current{z-index:2;transition:opacity .55s ease, transform .8s cubic-bezier(.2,.7,.2,1), border-color .18s;}
  #world.focus div.node.leaving{z-index:1;transition:opacity .45s ease;}
  #world.focus div.node.entering{--push:.96;transition:none;}
  #world.focus #connectors{display:none;}
  /* progress: one continuous bar that moves with every press, reveals and camera steps included */
  #progress{position:absolute;left:0;right:0;bottom:0;height:5px;z-index:9;display:none;
    background:color-mix(in srgb, var(--text-muted) 22%, transparent);}
  #progress.show{display:block;}
  #progress i{position:absolute;inset:0 auto 0 0;width:0;background:var(--accent-ring);transition:width .5s ease;}
  /* talk timer on the same bar, in the same colour: the clock grows a half-strength layer behind the
     solid progress, so any half-strength stretch showing past the solid is how far behind the talk is */
  #progress b{position:absolute;inset:0 auto 0 0;width:0;background:color-mix(in srgb, var(--accent-ring) 50%, transparent);transition:width 1s linear;display:none;}
  #progress.timed b{display:block;}
  #progress.over b{animation:over 1.4s ease-in-out infinite;}
  @keyframes over{50%{opacity:.45;}}
  #world.morph div.node{transition:transform .65s cubic-bezier(.65,0,.35,1), border-color .18s, opacity .3s;}
  .node .body{overflow-wrap:anywhere;word-break:break-word;}
  /* only the current slide is ringed in the accent; hover and the route back to the root are faint tints */
  /* hover never touches the current slide, or its border would sit inside the ring as a second line */
  .node:not(.current):hover{border-color:color-mix(in srgb, var(--accent-line) 35%, var(--node-border));}
  body.presenting .node:not(.current):hover{border-color:var(--node-border);}
  /* cards take focus on click; the current-slide ring already marks them, so no second outline
     (Chrome re-shows :focus-visible when the window regains focus) */
  .node:focus-visible{outline:none;}
  .node:not(.current):focus-visible{border-color:var(--accent-line);}
  .node.current{border-color:var(--accent-ring);box-shadow:0 0 0 1px var(--accent-ring), 0 10px 34px color-mix(in srgb, var(--accent-ring) 22%, transparent);}
  .node.active-path:not(.current){border-color:color-mix(in srgb, var(--accent-line) 30%, var(--node-border));}
  .node .crumb{
    font-family:var(--mono);font-size:10px;color:var(--text-muted);overflow-wrap:anywhere;
    letter-spacing:.06em;margin-bottom:8px;text-transform:uppercase;
  }
  .node .body h1,.node .body h2,.node .body h3,.node .body h4,.node .body h5,.node .body h6{
    font-family:var(--display);color:var(--text);margin:0 0 8px;line-height:1.25;
  }
  .node .body h1{font-size:19px;}
  .node .body h2{font-size:16px;}
  .node .body h3{font-size:14px;color:var(--accent-teal);}
  .node .body h4,.node .body h5,.node .body h6{font-size:13px;color:var(--accent-teal);}
  .node .body p{margin:0 0 10px;font-size:13px;line-height:1.6;}
  .node .body > :last-child{margin-bottom:0;}
  .node .body ul,.node .body ol{margin:0 0 10px;padding-left:18px;font-size:13px;line-height:1.6;}
  .node .body li{margin-bottom:3px;}
  .node .body blockquote{margin:0 0 10px;padding-left:10px;border-left:2px solid var(--accent);color:var(--text-muted);font-size:13px;}
  .node .body img{max-width:100%;border-radius:4px;}
  .node .body table{border-collapse:collapse;font-size:12px;margin:0 0 10px;}
  .node .body th,.node .body td{border:1px solid var(--panel-line);padding:3px 7px;}
  .node .body code{
    font-family:var(--mono);background:var(--code-bg);border:1px solid var(--panel-line);
    padding:1px 5px;border-radius:4px;font-size:12px;color:var(--accent-teal);
  }
  .node .body pre{
    background:var(--code-bg);border:1px solid var(--panel-line);border-radius:6px;
    padding:10px 12px;overflow-x:auto;margin:0 0 10px;
  }
  .node .body pre code{border:none;background:none;padding:0;color:var(--text);}
  /* a long line scrolls on a slim accent bar, not the system's grey one */
  .node .body pre{scrollbar-width:thin;scrollbar-color:color-mix(in srgb, var(--accent) 45%, transparent) transparent;}
  .node .body pre::-webkit-scrollbar{height:5px;}
  .node .body pre::-webkit-scrollbar-track{background:transparent;}
  .node .body pre::-webkit-scrollbar-thumb{background:color-mix(in srgb, var(--accent) 45%, transparent);border-radius:3px;}
  .node .body strong{color:var(--accent);}
  .node .body a{color:var(--accent-teal);}
  .node .body a.xlink::after{content:" \u2197";font-size:10px;}
  .node .err-badge{
    position:absolute;top:-8px;right:-8px;background:var(--danger);color:#1a0a08;
    font-family:var(--mono);font-size:10px;padding:2px 7px;border-radius:20px;font-weight:600;
  }

  /* ---------- recording ---------- */
  .modal{position:fixed;inset:0;background:rgba(4,7,13,.72);z-index:50;display:none;align-items:center;justify-content:center;padding:16px;}
  .modal.open{display:flex;}
  .modal .panel{
    position:relative;width:min(620px,100%);max-height:88vh;overflow-y:auto;
    background:var(--panel);border:1px solid var(--panel-line);border-radius:12px;padding:24px 26px;
  }
  .modal .panel.wide{width:min(760px,100%);}
  .modal h2{font-family:var(--display);font-size:18px;margin:0 0 6px;color:var(--accent);}
  .modal h3{font-family:var(--display);font-size:13px;margin:18px 0 8px;color:var(--text);display:flex;align-items:center;gap:10px;}
  .modal p, .modal li{font-size:13px;line-height:1.6;color:var(--text-muted);margin:0 0 6px;}
  .modal ul{padding-left:18px;margin:0;}
  /* \u2715 Close: a regular button at the top right, on the title's line (with \u2699 Setup beside it on the board) */
  .modal .panel > .close, .modal .panel-actions{position:absolute;top:20px;right:24px;}
  .modal .panel-actions{display:flex;gap:8px;}
  .modal h2{padding-right:96px;}
  .modal .fields{display:grid;grid-template-columns:2fr 1fr 2fr;gap:10px;}
  #open-form{display:flex;gap:8px;margin:12px 0 6px;}
  #help table.keys{border-collapse:collapse;margin:6px 0 12px;font-size:13px;}
  #help table.keys td{padding:5px 14px 5px 0;color:var(--text-muted);vertical-align:top;}
  #help table.keys td:first-child{white-space:nowrap;}
  #help a{color:var(--accent);}
  #open-url{flex:1;min-width:0;}
  .modal p.warn{color:var(--danger);}
  #toast{position:fixed;left:50%;top:64px;transform:translateX(-50%) translateY(-8px);opacity:0;pointer-events:none;z-index:60;
    background:var(--panel, #18181b);color:var(--text);border:1px solid var(--accent-line, var(--accent));border-radius:8px;
    padding:8px 14px;font-family:var(--mono);font-size:12px;transition:opacity .2s, transform .2s;max-width:min(560px,calc(100vw - 32px));}
  #toast.show{opacity:1;transform:translateX(-50%);}
  .modal label{display:flex;flex-direction:column;gap:4px;font-family:var(--mono);font-size:11px;color:var(--text-muted);}
  .modal label.check{flex-direction:row;align-items:center;gap:8px;margin-top:10px;}
  .modal input[type=text], .modal input[type=password], .modal textarea{
    background:var(--code-bg);border:1px solid var(--node-border);border-radius:6px;color:var(--text);
    font-family:var(--mono);font-size:12.5px;padding:8px 10px;outline:none;
  }
  .modal input:focus, .modal textarea:focus{border-color:var(--accent);}
  .modal textarea{width:100%;resize:vertical;line-height:1.6;}
  .modal .row{display:flex;align-items:center;gap:10px;margin-top:12px;flex-wrap:wrap;}
  .modal .row.end{justify-content:flex-end;margin-top:20px;}
  #obs-status{font-family:var(--mono);font-size:12px;color:var(--text-muted);white-space:nowrap;}
  #obs-detail{color:var(--danger);}
  #obs-status.ok, #rec-screen .ok{color:#10b981;}
  #rec-screen a{color:inherit;text-decoration:underline;}
  #obs-status.err{color:var(--danger);}
  .modal .warn{color:var(--accent);}
  #rv-setup .warn{color:var(--danger);}
  @media (max-width:560px){ .modal .fields{grid-template-columns:1fr;} }
  /* Studio, beside the Editor: an accent dot (red is for \u25CF Record itself); lit, like the Editor, while open */
  #btn-studio .rec-dot{color:var(--accent);}
  /* the key that does it, its letter in the accent: Keys, Camera, Record, Fullscreen, Editor, Studio */
  u.key{text-decoration:none;color:var(--accent);font-weight:600;}
  /* \u25CF Record looks the same in the bottom bar and in Studio: a red dot, plain text, the R in the accent */
  /* \u25CF Record looks the same in the bottom bar and in Studio: like the buttons beside it, with a red dot and
     its R in the accent; on hover it fills red, dot, text and R in white */
  #btn-record .rec-dot, #rv-rec .rec-dot, #setup-record .rec-dot{color:#ef4444;}
  .btn.rec#rv-rec, .btn.rec#setup-record{color:var(--text);}
  #navbar #btn-record:hover, .btn.rec#rv-rec:hover:not(:disabled), .btn.rec#setup-record:hover{background:#dc2626;border-color:#dc2626;color:#fff;}
  #btn-record:hover .rec-dot, #btn-record:hover u.key, #rv-rec:hover:not(:disabled) .rec-dot, #rv-rec:hover:not(:disabled) u.key,
  #setup-record:hover .rec-dot, #setup-record:hover u.key{color:#fff;}
  @media (pointer:coarse){ #btn-record{display:none;} }
  /* phones and tablets can't record */
  @media (pointer:coarse){ #btn-studio{display:none;} }
  /* the bottom bar: Keys, Camera, Fullscreen, each in the accent while it is on */
  #btn-camera{display:inline-flex;align-items:center;gap:6px;}
  #btn-camera svg{display:block;}
  #navbar button.on{color:var(--accent);background:color-mix(in srgb, var(--accent) 14%, transparent);}
  /* while a take runs nothing but the slides and the camera is on screen */
  body.recording #breadcrumbs, body.recording #navbar, body.recording #minimap, body.recording #pip-msg{display:none !important;}
  body.recording, body.recording *{cursor:none !important;}
  /* a retake's jump back to the slide before: no transition may ease it into place */
  body.no-anim *, body.no-anim *::before, body.no-anim *::after{transition:none !important;animation:none !important;}
  /* recording in the browser: the deck in a 16:9 frame, the only part captured. Chrome captures an element
     only while it is its own stacking context, hence the isolation (without it the capture is silently empty). */
  body.rec-frame main{background:#000;}
  body.rec-frame #stage-wrap{flex:none;margin:auto;width:min(100%, calc(100vh * 16 / 9));aspect-ratio:16/9;isolation:isolate;}
  #review.in-browser #rv-novideo{display:none !important;}
  /* the takes screen records in this browser, or with OBS: each mode's own controls */
  #review.obs .for-browser, #review:not(.obs) .for-obs{display:none !important;}
  /* Studio's dialog shows Studio or its Setup view, not both */
  #review:not(.setup-view) #rv-setup-view, #review.setup-view .rv-grid{display:none;}
  #rec-countdown{
    position:fixed;inset:0;z-index:70;display:none;align-items:center;justify-content:center;flex-direction:column;gap:14px;
    background:rgba(4,7,13,.9);font-family:var(--display);color:var(--accent);
  }
  #rec-countdown.show{display:flex;}
  #rec-countdown .num{font-size:180px;font-weight:700;line-height:1;}
  #rec-countdown .hint{font-family:var(--mono);font-size:13px;color:var(--text-muted);}
  #rec-paused{
    position:fixed;inset:0;z-index:70;display:none;align-items:center;justify-content:center;
    background:rgba(4,7,13,.94);font-family:var(--mono);font-size:15px;color:var(--text-muted);letter-spacing:.06em;
  }
  #rec-paused.show{display:flex;}
  .modal .panel.xwide{width:min(1480px,100%);max-height:94vh;}
  /* scrollbars: thin, in the accent */
  .modal .panel, .rv-list, .modal textarea{scrollbar-width:thin;scrollbar-color:color-mix(in srgb, var(--accent) 45%, transparent) transparent;}
  /* the player and the take list side by side, the list exactly as tall as the player (it scrolls inside that);
     play and download under both */
  .rv-grid{display:grid;grid-template-columns:minmax(0,7fr) minmax(280px,3fr);grid-template-areas:"video list" "bar dl";
    column-gap:18px;margin-top:12px;}
  .rv-grid > div:first-child{display:contents;}
  .rv-video{grid-area:video;}
  .rv-list{grid-area:list;contain:size;}
  .rv-bar{grid-area:bar;display:flex;align-items:center;gap:10px;margin-top:12px;min-width:0;}
  .rv-purge{position:relative;}
  .rv-purge summary{list-style:none;font-family:var(--mono);}
  .rv-purge summary::-webkit-details-marker{display:none;}
  .rv-purge .rv-menu{position:absolute;left:0;top:calc(100% + 6px);display:flex;flex-direction:column;gap:6px;padding:8px;z-index:3;
    background:var(--panel);border:1px solid var(--panel-line);border-radius:8px;box-shadow:0 8px 24px rgba(0,0,0,.35);white-space:nowrap;}
  /* the take board: every slide, a box to select it for recording, its takes */
  .rv-row.with-sel{display:grid;grid-template-columns:auto minmax(0,1fr);column-gap:10px;align-items:start;}
  .rv-row .rv-sel{margin:3px 0 0;accent-color:var(--accent);}
  .rv-row.selected{background:color-mix(in srgb, var(--accent) 7%, transparent);}
  .rv-row.playing{box-shadow:inset 3px 0 0 var(--accent);}
  .rv-chip.outdated{opacity:.6;text-decoration:line-through;}
  .rv-none{font-size:12px;color:var(--text-muted);font-style:italic;}
  /* Recording setup: opened from the \u2699 Setup button at the top right, shown under the title */
  .modal .rv-setup-btn[aria-expanded="true"]{border-color:var(--accent);color:var(--accent);background:color-mix(in srgb, var(--accent) 10%, transparent);}
  /* Setup, a view of Studio's dialog */
  .setup-note{margin:0 0 10px;font-size:13px;color:var(--accent);}
  #rv-setup{margin:8px 0 0;}
  /* the chosen camera, live, as a recording would see it (mirrored like the camera box), and the mic's waveform */
  .setup-cam{position:relative;aspect-ratio:16/9;background:#000;border-radius:8px;overflow:hidden;border:1px solid var(--panel-line);}
  .setup-cam video{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;transform:scaleX(-1);}
  .setup-cam span{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:12px;color:#a1a1aa;}
  .setup-cam span[hidden]{display:none;}
  .setup-wave{display:block;width:100%;height:60px;border-radius:8px;border:1px solid var(--panel-line);
    background:color-mix(in srgb, var(--accent) 5%, transparent);}
  .setup-actions{display:flex;justify-content:flex-start;gap:8px;margin-top:16px;}
  #review h2.rv-brand{display:flex;align-items:center;gap:8px;color:var(--text);}
  #review h2.rv-brand .logo{width:22px;height:22px;fill:var(--accent);flex:none;}
  #review h2.rv-brand .word > span{color:var(--accent);}
  /* Slidetake Studio, Pro in pro mode, / Settings in the setup view, and the size as a chip */
  #review h2 .rv-pro-tag{color:var(--accent);}
  #review h2 .rv-settings-tag{color:var(--text-muted);font-weight:500;}
  #review:not(.setup-view) h2 .rv-settings-tag, #review:not(.setup-view) #rv-pro{display:none;}
  /* in Setup, \u2190 Back and Pro only: Back returns to Studio, which has \u2715 Close */
  #review.setup-view .panel-actions .close{display:none;}
  #review h2 .rv-size:empty{display:none;}
  #review h2 .rv-size{font-family:var(--mono);font-size:11px;font-weight:600;color:var(--text-muted);border:1px solid var(--panel-line);border-radius:6px;padding:2px 7px;margin-left:4px;}
  .rv-using{align-self:center;max-width:34vw;font-family:var(--mono);font-size:12px;color:var(--text-muted);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}
  #review h2{padding-right:calc(34vw + 200px);}
  @media (max-width:900px){ .rv-using{display:none;} #review h2{padding-right:190px;} }
  /* three sections side by side: Camera, Microphone, Video; Use OBS at the top right */
  .rv-setup-cols{display:grid;grid-template-columns:repeat(3, minmax(0, 1fr));gap:18px;}
  .rv-setup-cols section{display:flex;flex-direction:column;gap:8px;min-width:0;}
  .rv-setup-cols h4{margin:0;font-family:var(--display);font-size:13px;color:var(--text);}
  .rv-setup-cols select{width:100%;}
  .rv-setup-cols #rv-fps{width:auto;}
  .rv-setup-cols meter{width:100%;height:8px;}
  .rv-setup-row{display:flex;flex-wrap:wrap;gap:8px;align-items:center;}
  .rv-setup-gap{flex:1}
  .rv-files{margin-left:auto;}
  .rv-files .rv-menu{left:auto;right:0;}
  .rv-obs-fields{display:grid;grid-template-columns:minmax(0,1.2fr) 60px minmax(0,1fr);gap:6px;}
  .modal .rv-obs-fields input{width:100%;min-width:0;font-size:11.5px;padding:4px 8px;}
  .rv-setup-foot{display:flex;flex-wrap:wrap;align-items:center;gap:8px 16px;margin-top:14px;padding-top:10px;border-top:1px solid var(--panel-line);}
  .modal .rv-setup-foot label{flex-direction:row;align-items:center;gap:8px;margin:0;}
  .rv-setup-foot select{width:auto;}
  .modal .rv-setup-row label.check{gap:6px;margin:0;}
  .rv-setup-label{font-size:12px;color:var(--text-muted);}
  .seg.small{height:24px;}
  .seg.small .seg-btn{font-size:11px;padding:0 10px;}
  .rv-setup-note{margin:0;font-size:12px;color:var(--text-muted);line-height:1.5;}
  #rv-setup > .rv-setup-note{margin-top:12px;}
  @media (max-width:900px){ .rv-setup-cols{grid-template-columns:1fr;} }
  .rv-final{font-family:var(--mono);font-size:12px;color:var(--text-muted);white-space:nowrap;}
  /* under the takes: the final cut's size, and Download */
  .rv-dl{grid-area:dl;display:flex;align-items:center;justify-content:flex-end;gap:10px;margin-top:12px;}
  #rv-chapters{margin-right:auto;min-width:112px;}
  /* Preview and Pause: one width, so the button doesn't change size as it switches */
  .btn.rv-preview{min-width:104px;}
  @media (max-width:900px){
    .rv-grid{grid-template-columns:1fr;grid-template-areas:"video" "bar" "list" "dl";}
    .rv-list{contain:none;max-height:50vh;margin-top:12px;}
  }
  .rv-video{position:relative;background:#000;border-radius:8px;overflow:hidden;aspect-ratio:16/9;}
  .rv-video video{width:100%;height:100%;display:block;}
  #rv-novideo{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;padding:20px;text-align:center;}
  #rv-novideo[hidden]{display:none;}
  /* the preview's message, right before Preview */
  #rv-now{flex:1;min-width:0;text-align:right;font-family:var(--mono);font-size:12px;color:var(--text-muted);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}
  #rv-now.warn{color:var(--danger);}
  #rv-now .btn{vertical-align:middle;margin-right:6px;}
  #rv-render-btn, #rv-ffmpeg-copy{min-width:120px;}
  .rv-list{overflow-y:auto;border:1px solid var(--panel-line);border-radius:8px;}
  .rv-row{padding:9px 12px;border-bottom:1px solid var(--panel-line);}
  .rv-row:last-child{border-bottom:none;}
  .rv-row .t{font-size:12.5px;color:var(--text);margin-bottom:6px;display:flex;justify-content:space-between;gap:8px;}
  .rv-row .t small{font-family:var(--mono);color:var(--text-muted);font-size:10.5px;white-space:nowrap;}
  .rv-row.sec .t{color:var(--accent-teal);}
  .rv-chips{display:flex;flex-wrap:wrap;gap:6px;}
  .rv-chip{background:transparent;border:1px solid var(--node-border);color:var(--text-muted);border-radius:20px;
    font-family:var(--mono);font-size:11px;padding:3px 10px;cursor:pointer;}
  .rv-chip:hover{border-color:var(--accent);color:var(--accent);}
  .rv-chip.on{border-color:var(--accent);color:var(--accent);background:color-mix(in srgb, var(--accent) 10%, transparent);}
  .rv-chip.skip.on{border-color:var(--danger);color:var(--danger);background:rgba(224,100,92,.1);}
  .modal select{background:var(--code-bg);border:1px solid var(--node-border);border-radius:6px;color:var(--text);font-family:var(--mono);font-size:11.5px;padding:4px 8px;}

  /* ---------- reveal.js compatibility: fragments, stacks, diagrams, charts ---------- */
  .node .fragment{opacity:0;visibility:hidden;transition:opacity .45s ease, transform .45s ease, visibility 0s .45s;}
  .node .fragment.visible{opacity:1;visibility:inherit;transition:opacity .45s ease, transform .45s ease;}
  .node .fragment.fade-up{transform:translateY(24px);}
  .node .fragment.fade-down{transform:translateY(-24px);}
  .node .fragment.fade-left{transform:translateX(40px);}
  .node .fragment.fade-right{transform:translateX(-40px);}
  .node .fragment.zoom-in{transform:scale(.1);}
  .node .fragment.visible:is(.fade-up,.fade-down,.fade-left,.fade-right,.zoom-in){transform:none;}
  /* these start visible and change when their step comes */
  .node .fragment:is(.grow,.shrink,.fade-out,.semi-fade-out,.strike,.highlight-red,.highlight-green,.highlight-blue){opacity:1;visibility:inherit;}
  /* grow: sized to its content and growing rightwards, so the card can make room for its last step */
  .node .fragment.grow{width:fit-content;max-width:100%;transform-origin:left center;}
  .node .fragment.grow.visible{transform:scale(1.3);}
  .node .fragment.shrink.visible{transform:scale(.7);}
  .node .fragment.fade-out.visible{opacity:0;visibility:hidden;}
  .node .fragment.semi-fade-out.visible{opacity:.5;}
  .node .fragment.strike.visible{text-decoration:line-through;}
  .node .fragment.highlight-red.visible{color:var(--danger);}
  .node .fragment.highlight-green.visible{color:#10b981;}
  .node .fragment.highlight-blue.visible{color:#60a5fa;}
  /* shown only while it is the newest step */
  .node .fragment.visible:is(.fade-in-then-out,.current-visible):not(.current-fragment){opacity:0;visibility:hidden;}
  .node .fragment.fade-in-then-semi-out.visible:not(.current-fragment){opacity:.5;}
  .node .r-stack{display:grid;}
  .node .r-stack > *{grid-area:1/1;margin:auto;}
  .node .r-hstack{display:flex;flex-direction:row;align-items:center;justify-content:center;}
  .node .r-vstack{display:flex;flex-direction:column;align-items:center;justify-content:center;}
  .node .body img{max-width:100%;height:auto;object-fit:contain;}
  /* ---------- media from plain markdown (see applyMedia) ---------- */
  .node .body figure.media{margin:0;}
  .node .body figure.media img{display:block;width:100%;height:auto;max-height:70vh;object-fit:contain;border-radius:8px;}
  .node .body figure.media.yt + *{margin-top:10px;}
  /* one caption size on every kind of image card: the size of the text (.node .body p) */
  .node .body figure.media figcaption{margin-top:8px;font-size:13px;color:var(--text-muted);line-height:1.45;}
  .node .body figure.yt .frame{position:relative;width:100%;aspect-ratio:16/9;border-radius:8px;overflow:hidden;background:#000;}
  .node .body figure.yt.portrait .frame{aspect-ratio:9/16;max-height:70vh;width:auto;margin:0 auto;}
  .node .body figure.yt iframe{position:absolute;inset:0;width:100%;height:100%;border:0;}
  /* the video is always on show; its step only plays it */
  .node .fragment.yt-play{opacity:1 !important;visibility:inherit !important;transform:none !important;}
  .node.card-split .body{display:grid;grid-template-columns:minmax(0,1.25fr) minmax(0,1fr);gap:4px 22px;align-items:center;}
  .node.card-split .body > :is(h1,h2,h3,h4,h5,h6){grid-column:1 / -1;}
  .node.card-split .body .split-text > :first-child{margin-top:0;}
  .node.card-split.media-last .body{grid-template-columns:minmax(0,1fr) minmax(0,1.25fr);}
  .node .body .gallery{list-style:none;padding:0;margin:8px 0 0;display:grid;grid-template-columns:repeat(var(--cols,3),minmax(0,1fr));gap:14px;align-items:end;}
  .node .body .gallery li{margin:0;}
  .node .body .gallery figure.media img{max-height:calc(56vh / var(--rows,1));margin:0 auto;}
  .node .body .gallery figure.media figcaption{text-align:center;}
  /* a stepped gallery: the images stack in one place and each press brings the next */
  .node .body .gallery.carousel{grid-template-columns:minmax(0,1fr);}
  .node .body .gallery.carousel > li{grid-area:1/1;}
  .node .body .gallery.carousel figure.media img{max-height:58vh;}
  .node .body .gallery.carousel figcaption[data-count]::before{content:attr(data-count) " ";color:var(--accent);font-weight:600;white-space:pre;}
  .node .body .gallery.carousel:has(> li.visible) > li:not(.fragment){opacity:0;visibility:hidden;transition:opacity .45s ease, visibility 0s .45s;}
  .node .body .gallery.carousel > li:not(.fragment){transition:opacity .45s ease;}
  /* image cards: an image or carousel alone, laid out by the image's shape (see sizeCard) */
  div.node.card-bleed{padding:0;overflow:hidden;}
  .node.card-bleed .body .gallery{margin:0;}
  .node.card-bleed .body figure.media img,
  .node.card-bleed .body .gallery.carousel figure.media img{max-height:none;border-radius:0;background:var(--code-bg);}
  .node.card-bleed .body figure.media figcaption{margin:0;text-align:left;}
  /* landscape: the image spans the card; the heading sits above it, the caption below */
  .node.img-landscape .crumb{margin:12px 18px 4px;}
  .node.img-landscape .body > :is(h1,h2,h3,h4,h5,h6):first-child{margin:0 18px 10px;}
  .node.img-landscape .body figure.media img{width:100%;height:var(--img-h);object-fit:contain;}
  .node.img-landscape .body figure.media figcaption{padding:10px 18px 14px;}
  /* portrait or near-square: the image on the right at the card's height; the heading and caption share the left */
  div.node.img-portrait{height:540px;padding:20px calc(var(--img-w) + 26px) 22px 24px;display:flex;flex-direction:column;}
  /* the text column takes what the breadcrumb leaves, so the caption ends inside the card */
  .node.img-portrait .body{display:flex;flex-direction:column;flex:1;min-height:0;}
  .node.img-portrait .crumb{margin-bottom:10px;}
  .node.img-portrait .body > .gallery, .node.img-portrait .body > figure.media{margin-top:auto;}
  .node.img-portrait .body figure.media img{position:absolute;top:0;right:0;width:var(--img-w);height:540px;object-fit:contain;}
  /* 16:9, or a full-screen card: the image fills the card, the heading and caption over it */
  .node.img-overlay::before{content:"";position:absolute;inset:0 0 auto;height:96px;z-index:2;pointer-events:none;
    background:linear-gradient(rgba(0,0,0,.72), rgba(0,0,0,0));border-radius:8px 8px 0 0;}
  .node.img-overlay .crumb{position:absolute;top:12px;left:18px;right:18px;z-index:3;margin:0;color:rgba(255,255,255,.72);}
  .node.img-overlay .body > :is(h1,h2,h3,h4,h5,h6):first-child{position:absolute;top:28px;left:18px;right:18px;z-index:3;margin:0;
    color:#fff;text-shadow:0 1px 6px rgba(0,0,0,.6);}
  .node.img-overlay .body figure.media{position:relative;}
  .node.img-overlay .body figure.media img{width:100%;height:540px;object-fit:contain;background:#000;}
  .node.img-overlay.img-cover .body figure.media img{object-fit:cover;}
  .node.img-overlay .body figure.media figcaption{position:absolute;left:0;right:0;bottom:0;padding:36px 18px 14px;
    color:#f4f4f5;background:linear-gradient(rgba(0,0,0,0), rgba(0,0,0,.78));}
  .node.img-overlay .body .gallery.carousel figure.media figcaption::before{color:color-mix(in srgb, var(--accent) 55%, #fff);}
  /* <!-- view: full -->: a 16:9 card, framed and placed like any other slide */
  div.node.card-full{height:540px;overflow:hidden;}
  /* measure cards at their resting size, without grow/zoom transforms */
  div.node.measuring .fragment{transform:none !important;transition:none !important;}
  /* a card re-measured mid-entrance (a theme switch replays it) must not count a gsap "from" state such
     as scale(3) as its width, or it shrinks the whole card to fit */
  div.node.measuring [data-gsap]{transform:none !important;}
  /* arriving at or leaving a slide snaps its fragments; only steps within the slide animate */
  div.node.snap .fragment{transition:none !important;}
  .node .body iframe{max-width:100%;border:0;border-radius:6px;background:#fff;}
  .node .diagram{background:#f8fafc;border:1px solid var(--panel-line);border-radius:8px;padding:12px;margin:0 0 10px;overflow:auto;}
  .node .diagram svg{display:block;width:100%;height:auto;max-height:640px;}
  .node .diagram.err{background:none;color:var(--danger);font-family:var(--mono);font-size:12px;padding:0;}
  /* D2 and Graphviz are drawn in the deck's own palette, so they need no light backdrop */
  .node .diagram.d2, .node .diagram.dot{background:none;border:none;padding:0;}
  /* a \`\`\`svg drawing is inline: currentColor is the card's text colour, and the deck's variables switch with dark and light */
  .node .diagram.svg{background:none;border:none;padding:0;color:var(--text);}
  .node .diagram.svg svg{max-height:62vh;}
  .node .diagram.d2 svg{max-height:62vh;}
  .node .echarts-container{width:100%;height:360px;margin:0 0 10px;}

  /* ---------- overlays ---------- */
  #breadcrumbs{
    position:absolute;top:14px;left:14px;z-index:10;
    display:flex;align-items:center;gap:6px;flex-wrap:wrap;max-width:60%;
    font-family:var(--mono);font-size:11.5px;
  }
  #breadcrumbs .crumb-btn{
    background:var(--overlay);border:1px solid var(--panel-line);color:var(--text-muted);
    padding:4px 9px;border-radius:5px;cursor:pointer;backdrop-filter:blur(4px);
  }
  #breadcrumbs .crumb-btn:hover,#breadcrumbs .crumb-btn.here{color:var(--accent);border-color:var(--accent);}
  #breadcrumbs .sep{color:var(--text-muted);}

  #navbar{
    position:absolute;bottom:16px;left:50%;transform:translateX(-50%);z-index:10;
    display:flex;align-items:center;gap:4px;
    background:var(--overlay);border:1px solid var(--panel-line);border-radius:9px;
    padding:6px;backdrop-filter:blur(6px);
  }
  #navbar button{
    background:transparent;border:none;color:var(--text-muted);white-space:nowrap;
    font-size:12px;padding:7px 11px;border-radius:6px;cursor:pointer;
  }
  #navbar button:hover{color:var(--accent);background:var(--node-bg);}
  #navbar .divider{width:1px;height:18px;background:var(--panel-line);margin:0 2px;}
  /* the arrows are for touch screens; keyboards and clickers use the keys */
  #navbar .touch-only{display:none;}
  @media (pointer:coarse){ #navbar .touch-only{display:inline-block;} }

  #minimap{
    position:absolute;bottom:16px;right:14px;z-index:10;width:180px;height:130px;
    background:var(--overlay);border:1px solid var(--panel-line);border-radius:8px;
    backdrop-filter:blur(6px);overflow:hidden;
  }
  #minimap .mm-label{
    position:absolute;top:5px;left:8px;font-family:var(--mono);font-size:9px;
    color:var(--text-muted);letter-spacing:.1em;text-transform:uppercase;pointer-events:none;
  }
  #mm-svg circle{cursor:pointer;}
  #stage-wrap[data-pip="bottom-right"] #minimap{right:auto;left:14px;}

  /* channel mark: fixed in the corner, never moves with the camera */
  #brand{
    position:absolute;top:16px;right:18px;z-index:12;pointer-events:none;
    display:flex;align-items:center;gap:10px;opacity:.9;
    font-family:var(--display);font-weight:600;font-size:18px;letter-spacing:.02em;color:var(--text);
    text-shadow:var(--brand-shadow);
  }
  #brand[hidden]{display:none;}
  /* embedded in a site page: one read-only deck, so no editor, links or copies */
  html.embed #btn-edit-toggle, html.embed #continue, html.embed #editor-pane, html.embed #editor-resizer, html.embed #help tr.edit{display:none !important;}
  html.embed .brand .trail{display:flex;align-items:center;gap:10px;font-family:var(--display);font-weight:600;font-size:15px;min-width:0;}
  html.embed .brand .trail a{color:var(--text);text-decoration:none;white-space:nowrap;}
  /* the header wears the site's colours, so an accent-coloured link can vanish into it (gold on gold):
     the trail stays in the text colour, as the site's own header does, and underlines mark where you are */
  html.embed .brand .trail a:hover, html.embed .brand .trail a:last-child{text-decoration:underline;text-decoration-thickness:2px;text-underline-offset:5px;}
  html.embed .brand .trail a:last-child{text-decoration-color:color-mix(in srgb, currentColor 45%, transparent);}
  html.embed .hdr-actions .seg-btn.active{color:var(--text);}
  html.embed .brand .trail .sep{color:var(--text-muted);font-weight:400;}
  #credit{display:inline-flex;align-items:center;gap:6px;padding:4px 6px;text-decoration:none;
    font-family:var(--display);font-weight:700;font-size:14px;color:var(--text);}
  #credit .logo{width:18px;height:18px;fill:var(--accent);}
  #credit .word > span{color:var(--accent);}
  #credit:hover{opacity:.85;}
  /* on a site's coloured header in light mode the accent is the band's own colour, so the credit takes the header's ink */
  html:not(.dark) body.st-header-color #credit .logo{fill:currentColor;}
  html:not(.dark) body.st-header-color #credit .word > span{color:inherit;opacity:.78;}
  html.embed .site-links, html.embed #btn-github, html.embed #btn-analytics{display:none !important;}
  /* a reader's page (embedded, not recording): no bottom bar, except the arrows on touch screens */
  html.embed.no-record #navbar{display:none;}
  @media (pointer:coarse){
    html.embed.no-record #navbar{display:flex;}
    html.embed.no-record #navbar > :not(.touch-only){display:none !important;}
  }
  html.no-record #btn-camera, html.no-record #btn-studio, html.no-record #btn-record, html.no-record #pip:not(.empty), html.no-record #help tr.rec{display:none !important;}
  /* the logo written into a heading: # ![](/favicon.svg) Slidetake */
  .node .body :is(h1,h2) img[src$="favicon.svg"]{height:1em;width:auto;vertical-align:-.12em;margin-right:.25em;display:inline;}
  #brand .st-mark{display:inline-flex;align-items:center;gap:8px;font-family:var(--display);font-weight:700;font-size:20px;color:var(--text);}
  #brand .st-mark .logo{width:24px;height:24px;fill:var(--accent);}
  #brand .st-mark .word > span{color:var(--accent);}
  #brand img{height:40px;width:auto;display:block;}
  /* optional accent chip, as on the decks' title slides (brand_style: chip); plain text is the default */
  #brand .chip{display:inline-block;padding:5px 22px;border-radius:30px;color:#fff;font-family:var(--body);
    font-size:15px;font-weight:600;letter-spacing:.01em;text-shadow:none;
    background:linear-gradient(90deg, var(--accent-line), color-mix(in srgb, var(--accent-line) 80%, #000));box-shadow:0 2px 10px rgba(0,0,0,.25);}

  /* PIP camera: slides are laid out to keep clear of this box */
  #pip{
    position:absolute;z-index:11;pointer-events:none;aspect-ratio:16/9;
    border:2px dashed color-mix(in srgb, var(--accent-teal) 55%, transparent);border-radius:10px;
    display:flex;align-items:center;justify-content:center;
    font-family:var(--mono);font-size:11px;letter-spacing:.1em;text-transform:uppercase;color:var(--accent-teal);
    background:color-mix(in srgb, var(--accent-teal) 4%, transparent);
  }
  #pip[hidden]{display:none;}
  /* a message in the box (no camera found, waiting for permission, a layout picked with V) */
  #pip.msg span{padding:10px 14px;text-align:center;text-transform:none;letter-spacing:0;font-size:12px;line-height:1.45;color:var(--accent);
    background:color-mix(in srgb, var(--panel) 88%, transparent);border-radius:6px;max-width:92%;max-height:92%;overflow:hidden;}
  #pip.circle{aspect-ratio:1;border-radius:50%;}
  #pip.top-left{top:16px;left:16px;}
  #pip.top-right{top:16px;right:16px;}
  #pip.bottom-left{bottom:16px;left:16px;}
  #pip.bottom-right{bottom:16px;right:16px;}
  /* full: the camera takes the whole stage, under the brand and the controls */
  /* it also swallows clicks, so a click can't land on the hidden cards behind it */
  #pip.full{inset:0;width:100%;height:100%;aspect-ratio:auto;border-radius:0;z-index:9;pointer-events:auto;}
  /* behind: the camera fills the frame under the slides, which stay on top as cards; the stage's dotted
     background makes way so the camera shows around them */
  #pip.full.behind{z-index:0;pointer-events:none;box-shadow:none;}
  /* split screen (a solid card): the camera fills what the card leaves, centred there, and glides into it */
  #stage-wrap.cam-solid[data-place="left"] #pip.full.behind{left:50%;width:50%;}
  #stage-wrap.cam-solid[data-place="right"] #pip.full.behind{right:50%;width:50%;}
  #stage-wrap.cam-solid[data-place="left-right"] #pip.full.behind{left:25%;width:50%;}
  #stage-wrap.cam-solid[data-place="top"] #pip.full.behind{top:25%;height:75%;}
  #stage-wrap.cam-solid[data-place="bottom"] #pip.full.behind{bottom:25%;height:75%;}
  #stage-wrap.cam-solid[data-place="top-bottom"] #pip.full.behind{top:25%;height:50%;}
  /* the camera behind the slide while it is off: an empty frame with a faint person where you'd be */
  #stage-wrap #pip.empty{border:none;background:color-mix(in srgb, var(--text) 6%, var(--bg)) url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cg fill='%23fff' fill-opacity='.07'%3E%3Ccircle cx='50' cy='40' r='15'/%3E%3Cpath d='M18 100c0-22 14-36 32-36s32 14 32 36z'/%3E%3C/g%3E%3C/svg%3E") 50% 100%/auto 70% no-repeat;}
  body[data-mode="light"] #stage-wrap #pip.empty{background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cg fill='%23000' fill-opacity='.06'%3E%3Ccircle cx='50' cy='40' r='15'/%3E%3Cpath d='M18 100c0-22 14-36 32-36s32 14 32 36z'/%3E%3C/g%3E%3C/svg%3E");}
  /* the person stands where the words leave room */
  #stage-wrap[data-place="left"] #pip.empty{background-position:76% 100%;}
  #stage-wrap[data-place="right"] #pip.empty{background-position:24% 100%;}
  #pip.empty:not(.msg) > span{position:absolute;left:50%;bottom:4%;transform:translateX(-50%);font-size:0;}
  #pip.empty:not(.msg) > span::after{content:"Camera off \xB7 press C";font-size:12px;color:var(--text);opacity:.45;letter-spacing:.08em;}
  html.no-record #pip.empty > span{display:none;}
  #stage-wrap.cam-behind #stage{z-index:1;background:transparent;}
  /* behind: the slide's content in regions around the person (the card itself steps aside).
     Colours, one rule for light and dark: on a card, or over the empty frame (camera off), the words are a slide's,
     in the deck's own colours, the card its panel (white in light, black in dark). Straight on live video, which is
     neither light nor dark, they're white with a soft shadow, the accent kept (lifted toward white in light mode,
     where it's deep), and diagrams and charts, drawn for the deck's mode, on a pane of the deck's background */
  #cam-overlay{position:absolute;inset:0;z-index:2;pointer-events:none;display:none;color:var(--text);}
  #stage-wrap.cam-live:not(.cam-card) #cam-overlay{
    --text:#fff;--text-muted:rgba(255,255,255,.85);--code-bg:rgba(0,0,0,.45);--panel-line:rgba(255,255,255,.35);
    text-shadow:0 1px 2px rgba(0,0,0,.9), 0 0 14px rgba(0,0,0,.55);}
  body[data-mode="light"] #stage-wrap{--cam-accent:color-mix(in srgb, var(--accent) 50%, #fff);}
  body[data-mode="light"] #stage-wrap.cam-live:not(.cam-card) #cam-overlay{--accent:var(--cam-accent);--accent-teal:var(--cam-accent);}
  #stage-wrap.cam-live:not(.cam-card) #cam-overlay .cam-media :is(.diagram, .echarts-container){
    background:color-mix(in srgb, var(--bg) 85%, transparent);border-radius:14px;padding:14px;text-shadow:none;}
  #stage-wrap.cam-live:not(.cam-card) #cam-overlay .body :is(th, td){background:rgba(0,0,0,.35);}
  #cam-overlay .body pre, #cam-overlay .body code{text-shadow:none;}
  #stage-wrap:not([data-place=""])[data-place] #cam-overlay{display:block;}
  #stage-wrap:not([data-place=""])[data-place] #world{opacity:0;}
  /* card 40%: a card under the words, from none to solid (no camera through it) */
  #cam-overlay .cam-box{position:absolute;display:flex;flex-direction:column;gap:3%;box-sizing:border-box;padding:1.2%;
    border-radius:18px;background:color-mix(in srgb, var(--panel) calc(var(--cam-card, 0) * 100%), transparent);}
  #cam-overlay .cam-box.left{left:4%;top:8%;width:42%;height:84%;}
  #cam-overlay .cam-box.right{right:4%;top:8%;width:42%;height:84%;}
  #cam-overlay .cam-box.top{left:5%;top:3%;width:90%;height:22%;flex-direction:row;}
  #cam-overlay .cam-box.bottom{left:5%;bottom:3%;width:90%;height:22%;flex-direction:row;}
  /* left-right: a quarter each side, the person in the middle half */
  #stage-wrap[data-place="left-right"] #cam-overlay .cam-box:is(.left, .right){width:27%;}
  /* with a card, the region fills its whole part of the frame, edge to edge: a half, a quarter band, a quarter side */
  #stage-wrap.cam-card #cam-overlay .cam-box{border-radius:0;padding:2.5%;}
  #stage-wrap.cam-card #cam-overlay .cam-box.left{left:0;top:0;width:50%;height:100%;}
  #stage-wrap.cam-card #cam-overlay .cam-box.right{right:0;top:0;width:50%;height:100%;}
  #stage-wrap.cam-card #cam-overlay .cam-box.top{left:0;top:0;width:100%;height:25%;}
  #stage-wrap.cam-card #cam-overlay .cam-box.bottom{left:0;bottom:0;width:100%;height:25%;}
  #stage-wrap.cam-card[data-place="left-right"] #cam-overlay .cam-box:is(.left, .right){width:25%;}
  /* the words take what the picture leaves: below it beside you, to its left in a band */
  #cam-overlay .cam-text{flex:1 1 0;min-width:0;min-height:0;display:flex;align-items:center;}
  #cam-overlay .cam-box.top .cam-text{align-items:flex-start;}
  #cam-overlay .cam-box.bottom .cam-text{align-items:flex-end;}
  #cam-overlay .cam-media{flex:1 1 0;min-width:0;min-height:0;position:relative;}
  #cam-overlay .cam-text + .cam-media{flex:0 0 55%;}
  #cam-overlay :is(.cam-box.top, .cam-box.bottom) .cam-text + .cam-media{flex-basis:38%;}
  #cam-overlay .node{background:none;border:none;padding:0;}
  #cam-overlay .cam-text > .node{flex:none;transform-origin:0 0;}
  #cam-overlay .cam-box.bottom .cam-text > .node{transform-origin:0 100%;}
  #cam-overlay .cam-box.left .cam-text > .node, #cam-overlay .cam-box.right .cam-text > .node{transform-origin:0 50%;}
  #cam-overlay .cam-media > .node{position:absolute;left:50%;top:50%;transform-origin:50% 50%;}
  #cam-overlay .cam-media > .node > .body > *{margin:0;}
  /* while presenting the box is empty so the camera overlay sits on plain background */
  /* while presenting, the empty box stays as a faint guide for lining up a camera overlay */
  body.presenting #pip{border-color:color-mix(in srgb, var(--accent-teal) 30%, transparent);background:none;}
  body.presenting #pip span{opacity:.5;}
  /* live webcam inside the box */
  #pip.live{border:none;background:#000;overflow:hidden;box-shadow:0 8px 30px rgba(0,0,0,.55), 0 0 0 1px var(--panel-line);}
  #pip.live span{display:none;}
  #pip video{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;}
  #pip.mirror video{transform:scaleX(-1);}
  #pip-msg{
    position:absolute;left:50%;top:70px;transform:translateX(-50%);z-index:30;
    background:var(--panel);border:1px solid var(--danger);color:var(--text);
    font-family:var(--mono);font-size:13px;line-height:1.5;padding:10px 16px;border-radius:6px;display:none;
    width:max-content;max-width:min(620px, 90%);text-align:center;box-shadow:0 8px 30px rgba(0,0,0,.5);
  }
  #pip-msg.show{display:block;}

  /* ---------- help popover ---------- */
  #help{position:fixed;inset:0;background:rgba(4,7,13,.7);z-index:50;display:none;align-items:center;justify-content:center;}
  #help.open{display:flex;}
  #help .panel{
    position:relative;width:min(580px,92vw);max-height:84vh;overflow-y:auto;
    background:var(--panel);border:1px solid var(--panel-line);border-radius:12px;padding:26px 28px;
  }
  #help h2{font-family:var(--display);font-size:18px;margin:0 0 14px;color:var(--accent);}
  #help h3{font-family:var(--display);font-size:13px;margin:18px 0 6px;color:var(--text);}
  #help p, #help li{font-size:13px;line-height:1.65;color:var(--text-muted);margin:0 0 8px;}
  #help pre{
    background:var(--code-bg);border:1px solid var(--panel-line);border-radius:6px;
    padding:10px 12px;font-family:var(--mono);font-size:11.5px;color:var(--text);overflow-x:auto;
  }
  #help .close{position:absolute;top:22px;right:16px;}
  kbd{
    font-family:var(--mono);background:var(--node-bg);border:1px solid var(--node-border);
    border-radius:4px;padding:1px 6px;font-size:11px;color:var(--accent);
  }

  @media (max-width:760px){
    main{flex-direction:column;}
    #editor-pane{width:100% !important;max-width:none;min-width:0;height:40vh;border-left:none;border-top:1px solid var(--panel-line);}
    #editor-resizer{display:none;}
    #editor-pane.collapsed{height:0;}
    #stage-wrap{flex:1;}
    #minimap{display:none;}
    #navbar .lbl{display:none;}
  }
`;var zr=`
<noscript>
  <style>#deck-text{position:static;width:auto;height:auto;overflow:visible;clip:auto;white-space:normal;max-width:760px;margin:24px auto;padding:0 16px;}#deck-text img{max-width:100%;height:auto;}#deck-text :is(h1,h2) img{height:1em;width:auto;vertical-align:-.12em;}#deck-text table{border-collapse:collapse;}#deck-text :is(td,th){border:1px solid #3f3f46;padding:4px 8px;}#deck-text a{color:#29b685;}</style>
  <p class="deck-text-note">Slidetake needs JavaScript to present and record decks. Here is this page as text; the source is on <a href="https://github.com/slidetake/slidetake">GitHub</a>.</p>
</noscript>

<header>
  <div class="brand">
    <a class="mark" href="/" title="Slidetake home"><svg class="logo" viewBox="0 0 64 64" aria-hidden="true"><path d="M 10 8 H 38 C 41.3 8 44 10.7 44 14 V 18 H 22 C 16.5 18 12 22.5 12 28 V 36 H 10 C 6.7 36 4 33.3 4 30 V 14 C 4 10.7 6.7 8 10 8 Z" opacity="0.4"/><path fill-rule="evenodd" d="M 22 22 H 54 C 57.3 22 60 24.7 60 28 V 50 C 60 53.3 57.3 56 54 56 H 22 C 18.7 56 16 53.3 16 50 V 28 C 16 24.7 18.7 22 22 22 Z M 26 34 C 28.2 34 30 32.2 30 30 C 30 27.8 28.2 26 26 26 C 23.8 26 22 27.8 22 30 C 22 32.2 23.8 34 26 34 Z M 38 40 C 36.9 40 36 40.9 36 42 V 48 C 36 49.1 36.9 50 38 50 H 50 C 51.1 50 52 49.1 52 48 V 42 C 52 40.9 51.1 40 50 40 H 38 Z"/></svg><span class="word">Slide<span>take</span></span></a>
    <nav class="site-links" aria-label="Slidetake">
      <a class="site-link" id="btn-features" href="/features" title="Every feature, and what it's for"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/><path d="M20 3v4"/><path d="M22 5h-4"/><path d="M4 17v2"/><path d="M5 18H3"/></svg><span>Features</span></a>
      <a class="site-link" id="btn-showcase" href="/showcase" title="Showcase: every feature in one deck"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2 3h20"/><path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3"/><path d="m7 21 5-5 5 5"/></svg><span>Showcase</span></a>
      <a class="site-link" id="btn-docs" href="/docs" title="Docs: step by step, itself a deck"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg><span>Docs</span></a>
      <a class="site-link" id="btn-github" href="https://github.com/slidetake/slidetake" target="_blank" rel="noopener noreferrer" title="GitHub repository"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg><span>GitHub</span></a>
    </nav>
  </div>
  <div class="hdr-actions">
    <input type="file" id="file-input" accept=".md,.markdown,.txt,text/markdown" hidden>
    <div class="seg" id="layout-toggle">
      <button class="seg-btn" data-mode="focus" title="Focus: one slide at a time, no travel (1)">focus</button>
      <button class="seg-btn" data-mode="path" title="Path: slides in presenting order (2)">path</button>
      <button class="seg-btn" data-mode="radial" title="Radial: rings out from the first card (3)">radial</button>
      <button class="seg-btn" data-mode="tree" title="Tree: a top-down chart (4)">tree</button>
    </div>
    <button class="btn icon" id="btn-analytics" title="Privacy &amp; analytics" aria-label="Privacy &amp; analytics" hidden><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"/></svg></button>
    <button class="btn icon" id="btn-mode" title="Light / dark (L)" aria-label="Light / dark"></button>
    <button class="btn" id="btn-edit-toggle" title="Editor: write, open, share (E)">\u270E <span><u class="key">E</u>ditor</span></button>
    <button class="btn" id="btn-studio" title="Slidetake Studio: pick takes, redo slides, download (S)"><span class="rec-dot" aria-hidden="true">\u25CF</span> <span><u class="key">S</u>tudio</span></button>
  </div>
</header>

<main>
  <div id="stage-wrap">
    <div id="stage">
      <div id="world">
        <svg id="connectors"></svg>
      </div>
    </div>
    <div id="breadcrumbs"></div>
    <div id="navbar">
      <button id="btn-keys" title="Keyboard shortcuts (K)" aria-pressed="false">\u2328<span class="lbl"> <u class="key">K</u>eys</span></button>
      <button id="nav-prev" class="touch-only" title="Previous (\u2190)" aria-label="Previous">\u2190</button>
      <button id="nav-next" class="touch-only" title="Next (\u2192)" aria-label="Next">\u2192</button>
      <button id="btn-camera" title="Camera (C)" aria-pressed="false"></button>
      <button id="btn-record" title="Record (R): the slides without a take, or from this slide on when every slide has one"><span class="rec-dot" aria-hidden="true">\u25CF</span><span class="lbl"> <u class="key">R</u>ecord</span></button>
      <button id="btn-present" title="Fullscreen (F)" aria-pressed="false">\u26F6<span class="lbl"> <u class="key">F</u>ullscreen</span></button>
    </div>
    <div id="progress" aria-hidden="true"></div>
    <div id="minimap"><div class="mm-label" id="mm-label">map</div><svg id="mm-svg" width="180" height="130"></svg></div>
    <div id="brand" hidden></div>
    <div id="pip" hidden><span>PIP camera</span></div>
    <div id="cam-overlay" aria-hidden="true"></div>
    <div id="pip-msg" role="status"></div>
  </div>
  <div id="editor-resizer" role="separator" aria-orientation="vertical" aria-label="Resize the editor" title="Drag to resize"></div>
  <div id="editor-pane" class="collapsed">
    <div class="pane-bar">
      <span class="pane-label" id="doc-state" aria-live="polite"></span>
      <span class="pane-actions">
        <a class="btn small" id="continue" href="/edit" hidden></a>
        <a class="btn small" id="btn-new" href="/new" title="Start from a template">New</a>
        <button class="btn small" id="btn-load" title="Load a deck from a link: GitHub, a gist or any URL">\u21E3 Load</button>
        <button class="btn small" id="btn-open" title="Open a markdown file from this computer">Open</button>
        <button class="btn small" id="btn-save" title="Save the markdown to a file on this computer">Save</button>
        <button class="btn small" id="btn-share" title="Copy a link to this deck">Share</button>
      </span>
    </div>
    <textarea id="editor" spellcheck="false"></textarea>
    <div id="status-line"><span id="status-count"></span><span id="status-err" class="err"></span><button id="btn-reset" hidden title="Discard your edits and go back to the original">reset to original</button></div>
  </div>
</main>

<div id="help">
  <div class="panel">
    <button class="btn close" id="help-close">\u2715 Close</button>
    <h2>Keys</h2>
    <table class="keys">
      <tr><td><kbd>\u2192</kbd> <kbd>\u2190</kbd> <kbd>Space</kbd></td><td>next / previous step (a clicker's <kbd>PgDn</kbd> <kbd>PgUp</kbd> too)</td></tr>
      <tr><td><kbd>Home</kbd> <kbd>End</kbd></td><td>first / last slide</td></tr>
      <tr><td><kbd>\u2193</kbd> <kbd>\u2191</kbd></td><td>first child / parent</td></tr>
      <tr><td><kbd>O</kbd></td><td>the whole map; <kbd>O</kbd> or <kbd>Esc</kbd> goes back</td></tr>
      <tr><td><kbd>1</kbd>\u2013<kbd>4</kbd></td><td>focus, path, radial, tree</td></tr>
      <tr><td><kbd>F</kbd></td><td>fullscreen; <kbd>F</kbd> or <kbd>Esc</kbd> leaves</td></tr>
      <tr><td><kbd>+</kbd> <kbd>\u2212</kbd></td><td>bigger / smaller slides (<kbd>=</kbd> works for <kbd>+</kbd>)</td></tr>
      <tr class="edit"><td><kbd>E</kbd></td><td>editor: write, open, share</td></tr>
      <tr><td><kbd>L</kbd></td><td>light / dark</td></tr>
      <tr class="rec"><td><kbd>C</kbd> <kbd>V</kbd></td><td>camera, camera layouts</td></tr>
      <tr class="rec"><td><kbd>R</kbd> <kbd>S</kbd></td><td>record (the slides without a take), Studio</td></tr>
      <tr class="rec"><td><kbd>\u2190</kbd> <kbd>B</kbd> <kbd>Esc</kbd></td><td>while recording: take the slide again, pause, stop</td></tr>
      <tr class="rec"><td><kbd>P</kbd> <kbd>D</kbd></td><td>in Studio: preview, download</td></tr>
      <tr><td><kbd>K</kbd> <kbd>/</kbd> <kbd>?</kbd></td><td>this card; again or <kbd>Esc</kbd> closes it</td></tr>
    </table>
    <p>Drag to pan, scroll or pinch to zoom, click a card to fly to it.</p>
    <p><a href="https://slidetake.com/docs" target="_blank" rel="noopener">The docs \u2192</a> write, present, record, edit and share, step by step.</p>
  </div>
</div>

<div id="analytics-dialog" class="modal" role="dialog" aria-labelledby="analytics-title">
  <div class="panel">
    <button class="btn small close" data-close>\u2715 Close</button>
    <h2 id="analytics-title">Privacy &amp; analytics</h2>
    <p>Your decks, copies and recordings never leave this browser. This is only about counting visits to slidetake.com.</p>
    <div class="choices" role="radiogroup" aria-label="Privacy &amp; analytics">
      <button class="choice" role="radio" data-analytics="on">
        <strong>Allow analytics</strong>
        <span>Standard Google Analytics (<code>G-3S9FY4MQLS</code>), to see which pages get read and where readers come from. Sets the <code>_ga</code> cookies. The address it records leaves out the part after <code>#</code> and <code>?obs=</code>, so never a deck or an OBS password.</span>
      </button>
      <button class="choice" role="radio" data-analytics="off">
        <strong>Turn analytics off</strong>
        <span>Nothing more is sent from this browser, and the <code>_ga</code> cookies are removed. Cloudflare, which serves the site, still sees each request the way any web server does.</span>
      </button>
    </div>
    <p class="note" id="analytics-note"><code>slidetake:analytics</code> in this browser remembers your choice. Everything else is on the <a href="/privacy">privacy page</a>.</p>
  </div>
</div>

<div id="new-dialog" class="modal" role="dialog" aria-labelledby="new-title">
  <div class="panel">
    <button class="btn close" data-close>\u2715 Close</button>
    <h2 id="new-title">Start a new deck</h2>
    <p>Pick a template. It opens as it is; start typing and it becomes your own copy at <code>/edit</code>.</p>
    <ul class="templates">
      <li><a href="/new?template=blank"><strong>Blank</strong><span>A first card, a section and a detail.</span></a></li>
      <li><a href="/new?template=talk"><strong>Talk</strong><span>Why it matters, the idea, trade-offs, summary.</span></a></li>
      <li><a href="/new?template=recording"><strong>Recording</strong><span>Camera steps, an overview moment and a closing on camera.</span></a></li>
      <li><a href="/showcase"><strong>Showcase</strong><span>Every feature in one deck: diagrams, charts, images, YouTube, camera.</span></a></li>
    </ul>
    <p>Or <strong>\u21E3 Load</strong> a deck from a link, or <strong>Open</strong> a file from this computer.</p>
  </div>
</div>

<div id="open-dialog" class="modal" role="dialog" aria-labelledby="open-title">
  <div class="panel">
    <button class="btn close" data-close>\u2715 Close</button>
    <h2 id="open-title">Load a deck from a link</h2>
    <p>Paste a link to a markdown file: a GitHub file or folder, a gist, or any URL that allows other sites to read it.</p>
    <form id="open-form" class="row">
      <input type="text" id="open-url" placeholder="https://github.com/you/repo/blob/main/talk.md" spellcheck="false" autocomplete="off">
      <button class="btn primary" type="submit">Load</button>
    </form>
    <p id="open-error" class="warn" hidden></p>
    <h3>Try one</h3>
    <ul id="open-examples">
      <li><a href="/gh/slidetake/slidetake/examples/why-debt-is-not-bad.md">Why debt is a tool, not an enemy</a> (headings format)</li>
      <li><a href="/gh/sakthipriyan/sakthipriyan.github.io/content/building-wealth/slides/2025/invest-in-gold/index.md">Invest in gold</a> (a reveal.js deck)</li>
    </ul>
    <h3>Short links</h3>
    <p><code>slidetake.com/gh/owner/repo/path/deck.md</code> opens a file on GitHub (add <code>@branch</code> after the repo for another branch), and <code>slidetake.com/gist/&lt;id&gt;</code> a gist. Images next to the deck load as they are.</p>
    <p>A file on this computer? Use <strong>Open</strong>.</p>
  </div>
</div>

<div id="review" class="modal" role="dialog" aria-labelledby="rv-title">
  <div class="panel xwide">
    <div class="panel-actions">
      <span class="rv-using" id="rv-using"></span>
      <button class="btn toggle" id="rv-pro" aria-pressed="false" title="Pro mode: record with OBS">Pro</button>
      <button class="btn rv-setup-btn" id="rv-setup-btn" aria-expanded="false" aria-controls="rv-setup-view">\u2699 Setup</button>
      <button class="btn close" data-close>\u2715 Close</button>
    </div>
    <h2 id="rv-title" class="rv-brand"><svg class="logo" viewBox="0 0 64 64" aria-hidden="true"><path d="M 10 8 H 38 C 41.3 8 44 10.7 44 14 V 18 H 22 C 16.5 18 12 22.5 12 28 V 36 H 10 C 6.7 36 4 33.3 4 30 V 14 C 4 10.7 6.7 8 10 8 Z" opacity="0.4"/><path fill-rule="evenodd" d="M 22 22 H 54 C 57.3 22 60 24.7 60 28 V 50 C 60 53.3 57.3 56 54 56 H 22 C 18.7 56 16 53.3 16 50 V 28 C 16 24.7 18.7 22 22 22 Z M 26 34 C 28.2 34 30 32.2 30 30 C 30 27.8 28.2 26 26 26 C 23.8 26 22 27.8 22 30 C 22 32.2 23.8 34 26 34 Z M 38 40 C 36.9 40 36 40.9 36 42 V 48 C 36 49.1 36.9 50 38 50 H 50 C 51.1 50 52 49.1 52 48 V 42 C 52 40.9 51.1 40 50 40 H 38 Z"/></svg><span class="word">Slide<span>take</span></span> Studio<span class="rv-pro-tag for-obs">Pro</span><span class="rv-settings-tag"> / Settings</span><span class="rv-size" id="rv-size"></span></h2>
    <div id="rv-setup-view">
      <p class="setup-note" id="setup-note" hidden></p>
      <div id="rv-setup">
        <div class="rv-setup-cols">
          <section class="for-obs">
            <h4>OBS</h4>
            <div class="rv-obs-fields">
              <input type="text" id="obs-host" value="localhost" spellcheck="false" aria-label="Host" title="Host">
              <input type="text" id="obs-port" value="4455" inputmode="numeric" aria-label="Port" title="Port">
              <input type="password" id="obs-pass" autocomplete="off" placeholder="Password" aria-label="Password">
            </div>
            <div class="rv-setup-row">
              <button class="btn small" id="obs-connect">Connect</button>
              <label class="check rv-setup-label"><input type="checkbox" id="obs-remember"> Remember</label>
              <span class="rv-setup-gap"></span>
              <span id="obs-status">Not connected</span>
            </div>
            <p class="rv-setup-note" id="obs-detail" hidden></p>
            <p class="rv-setup-note">In OBS: Tools \u2192 WebSocket Server Settings \u2192 enable it (the port and password are there). Point OBS at this browser window plus your microphone; no scenes needed.</p>
          </section>
          <section>
            <h4>Camera</h4>
            <select id="rec-cam" aria-label="Camera"></select>
            <div class="setup-cam"><video id="rec-cam-preview" muted playsinline autoplay></video><span id="rec-cam-none">No camera</span></div>
            <p class="rv-setup-note">Turns on by itself when recording starts. Choose No camera for slides only.</p>
          </section>
          <section class="for-browser">
            <h4>Microphone</h4>
            <select id="rec-mic" aria-label="Microphone"></select>
            <meter id="rec-meter" min="0" max="1" low="0.1" high="0.8" optimum="0.5" value="0" aria-label="Mic level" hidden></meter>
            <canvas id="rec-wave" class="setup-wave" width="640" height="120" aria-label="What the microphone hears"></canvas>
            <div class="rv-setup-row">
              <span class="rv-setup-label">Sound</span>
              <div class="seg small" role="radiogroup" aria-label="Sound">
                <button class="seg-btn" data-sound="voice" role="radio" title="Chrome's noise suppression: takes out fans, hum and other steady noise (the default)">Voice</button>
                <button class="seg-btn" data-sound="raw" role="radio" title="No processing: best for a good mic in a quiet room">Raw</button>
              </div>
              <span class="rv-setup-gap"></span>
              <button class="btn small toggle rv-loud" id="rv-loud" aria-pressed="true" title="Raises the video towards YouTube's volume (-14 LUFS), stopping before the loudest peak would clip"><span class="ico" aria-hidden="true">\u{1F50A}</span> Volume boost</button>
              <button class="btn small toggle" id="rv-limiter" aria-pressed="false" title="Catches the few peaks (a click, a plosive) that would pass -1.5 dB, so Volume boost can reach -14 LUFS">Peak limiter</button>
            </div>
          </section>
          <section class="for-browser">
            <h4>Video</h4>
            <select id="rec-quality" aria-label="Quality"></select>
            <p class="rv-setup-note" id="rec-browser-check"></p>
          </section>
          <section class="for-obs">
            <h4>Video</h4>
            <select id="rv-mode" aria-label="How ffmpeg cuts">
              <option value="accurate">Frame-accurate (x264)</option>
              <option value="mac">Frame-accurate, Mac hardware encoder (faster)</option>
              <option value="copy">No re-encode (only when nothing is cut out)</option>
            </select>
            <div class="rv-setup-row">
              <select id="rv-fps" aria-label="Frame rate" title="Recording frame rate: cut points snap to its frames">
                <option value="24">24 fps</option><option value="25">25 fps</option><option value="30">30 fps</option>
                <option value="50">50 fps</option><option value="60">60 fps</option>
                <option value="23.976">23.976 fps</option><option value="29.97">29.97 fps</option><option value="59.94">59.94 fps</option>
              </select>
              <span class="rv-setup-gap"></span>
              <button class="btn small toggle rv-loud" id="rv-loud-obs" aria-pressed="true" title="Adds loudnorm to the ffmpeg command: YouTube's volume (-14 LUFS), peaks held below -1 dB"><span class="ico" aria-hidden="true">\u{1F50A}</span> Volume boost</button>
            </div>
            <p class="rv-setup-note" id="rec-screen"></p>
          </section>
        </div>
        <div class="rv-setup-foot for-browser">
          <span class="rv-setup-note for-browser">When Chrome asks, share <strong>this tab</strong>: only the slides and your camera are recorded, in a 16:9 frame.</span>
          <div class="rv-setup-row rv-files for-browser">
            <span class="rv-setup-label">Files</span>
            <button class="btn small" id="rv-folder-change" title="Where Download saves videos">Download folder\u2026</button>
            <details class="rv-purge">
              <summary class="btn small" title="Delete takes from this browser">\u{1F5D1} Purge takes</summary>
              <div class="rv-menu"><button class="btn small" id="rv-clean-unused">Unused takes</button><button class="btn small" id="rv-clean">All takes</button><button class="btn small" id="rv-clean-every" title="Every take Slidetake keeps in this browser, of every deck">Every deck's takes\u2026</button></div>
            </details>
          </div>
        </div>
      </div>
      <div class="setup-actions">
        <button class="btn rec" id="setup-record" title="Start recording (R)"><span class="rec-dot" aria-hidden="true">\u25CF</span> <span><u class="key">R</u>ecord</span></button>
      </div>
    </div>
    <div class="rv-grid">
      <div>
        <div class="rv-video">
          <video id="rv-video" controls playsinline preload="metadata"></video>
          <div id="rv-novideo">
            <div class="row" style="justify-content:center;margin:0">
              <button class="btn primary" id="rv-open">Open the recording file\u2026</button>
              <button class="btn" id="rv-folder" hidden>Use my OBS recordings folder\u2026</button>
            </div>
            <p>Pick the file OBS saved<span id="rv-file"></span> (.mov, .mp4 or .mkv) to preview takes. Or choose your OBS recordings folder once, and later takes load by themselves.</p>
          </div>
        </div>
        <div class="rv-bar">
          <button class="btn rec" id="rv-rec" title="Records the whole deck, or only the ticked slides (shift-click ticks a range) (R)"><span class="rec-dot" aria-hidden="true">\u25CF</span> <span><u class="key">R</u>ecord</span></button>
          <span id="rv-now"></span>
          <button class="btn rv-preview" id="rv-play-final" title="Plays the picked takes back to back (P)">\u25B6 <span><u class="key">P</u>review</span></button>
        </div>
      </div>
      <div class="rv-list" id="rv-list"></div>
      <div class="rv-dl">
        <button class="btn" id="rv-chapters" title="Copies the chapters, to paste into the YouTube description">\u29C9 Chapters</button>
        <span class="rv-final" id="rv-final"></span>
        <button class="btn for-browser" id="rv-render-btn" title="Saves the video: the picked takes joined into one file (D)">\u2193 <span><u class="key">D</u>ownload</span></button>
        <button class="btn for-obs" id="rv-ffmpeg-copy" title="Copies the ffmpeg command that cuts the picked takes from the OBS file (D)">\u29C9 ffmpeg</button>
      </div>
    </div>
  </div>
</div>
<input type="file" id="rv-file-input" accept="video/*,video/quicktime,.mov,.mp4,.m4v,.mkv,.webm" hidden>

<div id="rec-countdown"><div class="num"></div><div class="hint">recording starts after the countdown \xB7 Esc to cancel</div></div>
<div id="rec-paused">Paused \xB7 press B to resume</div>

<!-- The sample deck. Plain markdown, nothing else. -->
`;var Rr=`<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=IBM+Plex+Mono:wght@400;500;600&family=IBM+Plex+Sans:wght@400;500;600&display=swap" rel="stylesheet">`;var bs=e=>new Promise((t,a)=>{let o=document.createElement("script");o.src=e,o.onload=t,o.onerror=()=>a(new Error("could not load "+e)),document.head.appendChild(o)});async function vs(){document.head.insertAdjacentHTML("beforeend",Rr);let e=document.createElement("style");e.textContent=Pr,document.head.appendChild(e),document.body.insertAdjacentHTML("afterbegin",zr),await Promise.all([window.gsap?null:bs("https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"),window.marked?null:bs("https://cdnjs.cloudflare.com/ajax/libs/marked/12.0.2/marked.min.js")]),await Promise.resolve().then(()=>(ys(),Zc))}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",vs,{once:!0}):vs();})();
