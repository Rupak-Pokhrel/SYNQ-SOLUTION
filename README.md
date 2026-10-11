# SYNQ – Interactive Safety Training Website

Static website (no build step). Open `index.html` in a browser, or serve the folder:

    python3 -m http.server 8000

## Structure

    synq-website/
    ├── index.html          # page markup (all sections + SVG icon sprite)
    ├── css/
    │   └── styles.css      # all styles, design tokens in :root
    ├── js/
    │   └── main.js         # mobile menu, active nav, stage tabs, demo modal, newsletter
    ├── assets/
    │   └── images/         # logo, hero, product, scenario (sc1-4), pipeline (pl1-4)
    └── README.md


