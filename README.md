# Test-Time Scaling for Multi-View Diffusion Models — Project Website

An **English-language, responsive academic project website** for the supplied paper, *Test-Time Scaling for Multi-View Diffusion Models: Generation, Verification, and Search*. All reported numeric results and figures originate from the manuscript. No author identities, code repository URLs, videos, or unpublished results are invented.

## Website files

```text
index.html                         # Main page — edit text, buttons, section layout
assets/style.css                   # Colors, typography, responsive layout
assets/main.js                     # Interactive N=4/16/64 LPIPS bars
assets/favicon.svg                 # Small browser icon
assets/paper.pdf                   # Anonymous manuscript provided by user
assets/figures/*.webp              # Cropped original figures from the manuscript
.nojekyll                          # Disable GitHub Pages Jekyll processing
```

The site is *pure static HTML/CSS/JS*. You do not need Node.js, npm, Python, GitHub Actions, or a paid host.

## A. Fastest publishing method (web browser only)

1. Sign in to [GitHub](https://github.com).
2. Choose **New repository** (or the `+` menu → **New repository**).
3. Repository name: `tts-multiview` (you may choose any available name). Make it **Public** for ordinary free GitHub Pages hosting. Select **Create repository**.
4. Open the repository's **Add file → Upload files** page.
5. Extract this ZIP on your computer. Upload **the contents inside `tts-multiview-site/`**, not the enclosing directory. `index.html` must be in the repository root. GitHub's browser drag-and-drop may not preserve nested folders reliably; use the web interface's folder-aware upload where supported, or use the Git method below (recommended for reliable uploads).
6. Commit the files.
7. Open **Settings → Pages**. Under **Build and deployment**, choose **Deploy from a branch**. Branch: `main`. Folder: `/(root)`. Click **Save**.
8. Wait for GitHub Pages to finish deployment, then visit:
   `https://YOUR_GITHUB_USERNAME.github.io/tts-multiview/`

If the repository was created as `YOUR_GITHUB_USERNAME.github.io` (a user site), the URL is instead `https://YOUR_GITHUB_USERNAME.github.io/`.

Official docs: [Creating a GitHub Pages site](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site) and [Configuring a publishing source](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

## B. Recommended: publish with Git on your own computer

1. Install [Git](https://git-scm.com/downloads), sign in to GitHub, and create a repository called `tts-multiview`.
2. Extract the ZIP and open a terminal **inside the folder containing `index.html`**.
3. Run:

```bash
git init
git add .
git commit -m "Add multi-view TTS project page"
git branch -M main
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/tts-multiview.git
git push -u origin main
```

4. Open the repository → **Settings → Pages** → **Deploy from a branch**, select `main` and `/(root)`, then save.
5. Open `https://YOUR_GITHUB_USERNAME.github.io/tts-multiview/` once the build finishes.

If Git asks for authentication, use Git Credential Manager, GitHub CLI (`gh auth login`), or an authorized personal access token — **not** the GitHub account password in the terminal prompt. If your remote has an existing README commit, clone the newly created repo first or reconcile history rather than force pushing.

## C. Edit or add content

- **Project title & abstract:** Edit `index.html`, in the hero and overview sections.
- **Authors and organizations:** The released page deliberately omits identifying information during double-blind review. Add only after the anonymity restriction no longer applies and you are ready to disclose identities.
- **Paper:** Replace `assets/paper.pdf` with the exact public version you intend to share.
- **Code:** In `index.html`, locate `Code link not provided`, then replace the text with an `<a href="https://github.com/...">Code ↗</a>` element once a link is public.
- **Video:** Add your own video file or approved embed as a new section in `index.html` if desired (currently no demo is claimed).
- **Metrics:** Edit both the HTML fixed text and `assets/main.js` budget values if your final camera-ready experiments change.
- **Images:** Replace or add images under `assets/figures/`. Be sure to update matching `src` paths in `index.html`.
- **Domain:** You can optionally configure a custom domain in GitHub Pages settings and update DNS at your domain provider.

After making local changes:

```bash
git add .
git commit -m "Update project page"
git push
```

GitHub Pages will publish the updated version after the build completes.

## D. Preview locally

Double-click `index.html` to preview basic rendering. For a web-server preview (recommended), from the same folder run:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000/` and verify desktop/mobile layout, navigation, figures, button links, and PDF access. Stop the server with `Ctrl+C`.

## E. Double-blind review warning

The supplied manuscript is labelled **under review at ICLR 2027**. Its author guidelines permit anonymized supplementary demo links subject to anonymity requirements, but a site hosted on a personally identifying GitHub account or linking author profiles may compromise anonymity. Do **not** assume an anonymous page is sufficient merely because it omits author names; GitHub account ownership, commit attribution, tracking scripts, and repository links may identify authors. Choose whether and when to publish according to the official [ICLR 2027 Author Guidelines](https://iclr.cc/Conferences/2027/AuthorGuidelines) and any relevant venue-specific policies. This package is anonymized by default, but GitHub hosting choices remain your responsibility.

## F. Common errors

- **404 on website:** `index.html` not in branch root; wrong publishing branch/folder; deployment still running; URL capitalization mismatch.
- **CSS/images 404:** Uploaded only the HTML but not `assets/`; accidentally nested an extra parent directory; asset paths were changed. Keep the directory structure intact.
- **PDF 404:** Ensure `assets/paper.pdf` is uploaded and accessible.
- **No Pages settings:** Check repository permissions and whether Pages is available for your repository plan/visibility.
- **Old page after pushing:** Refresh the browser, look at the repository's Actions/Pages deployment status, and verify your commit is on the configured source branch.

---

This package reproduces figures from the paper and is intended to be managed by the authors or with their authorization. Do not add claims of public code or acceptance until those facts are true.
