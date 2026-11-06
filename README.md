# Akshay Desai — React Portfolio

A responsive React + Vite portfolio built from the details in the supplied resume.

## Run locally
1. Install Node.js (LTS) if it is not already installed.
2. Extract this project and open the `akshay-portfolio` folder in VS Code.
3. Open the VS Code terminal and run:

```bash
npm install
npm run dev
```

4. Open the local URL shown in the terminal (usually http://localhost:5173).

## Build for deployment

```bash
npm run build
```

The production website is generated in the `dist` folder. Deploy that folder using Vercel or Netlify. For Vercel, choose **Vite** as the framework preset and use `npm run build` as the build command and `dist` as the output directory.

## Personalize before publishing
- Replace the project links in `src/App.jsx` with each project's actual GitHub repository or live demo URL.
- Verify the email address in `profile.email`. The resume text appeared as `akkidesai4731@gmailcom`; this project uses the likely corrected format `akkidesai4731@gmail.com`. Confirm it before publishing.
- Add a professional headshot by replacing the initials avatar in `src/App.jsx` if desired.
- Resume PDF is stored in `public/Akshay_Desai_Resume.pdf`.
