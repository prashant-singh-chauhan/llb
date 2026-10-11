# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

A static study-material site for LLB (law degree) subjects, served via GitHub Pages. It is plain HTML with Bootstrap 5.0.2 loaded from the jsDelivr CDN — there is no build step, package manager, linter, or test suite.

`index.html` is the landing page: a list of links to subjects (Jurisprudence, Law of Tort, Law of Crime 1, Constitution of India 1, Indian Contract Act 1872, BNS, BNSS, BSA). The links are currently `href="#"` placeholders; subject pages have not been created yet.

## Development

- Preview locally by opening `index.html` in a browser, or serve the directory, e.g. `python -m http.server 8000`.
- Keep pages static (HTML/CSS/JS only) so they work with GitHub Pages without a build.
- Use relative links between pages so they resolve under the Pages project subpath.

## Deployment

`.github/workflows/static.yml` deploys on every push to `main` (or manual `workflow_dispatch`). It uploads the **entire repository root** (`path: '.'`) as the Pages artifact, so any file committed to the repo is publicly served — keep non-public files out of the repo.
