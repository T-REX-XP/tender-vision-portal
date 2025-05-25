
# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/d3b3018f-9004-4642-9226-5a7e7dfc10e2

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/d3b3018f-9004-4642-9226-5a7e7dfc10e2) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## Fiddler Autoresponse Rules for Local Development

If you're using Fiddler Classic for debugging and want to intercept CSS/JS files to serve local versions, you can set up autoresponse rules:

### Setting up Fiddler Autoresponse Rules

1. **Open Fiddler Classic**
2. **Go to AutoResponder tab**
3. **Enable "Enable rules" and "Unmatched requests passthrough"**
4. **Add the following rules:**

#### Using the Generic Pattern
```
REGEX:(.*?)((?'folder'css|html)(%252f|\/))?YOUR_NAMESPACE\.YOUR_CONTROL_NAME[\.\/](?'fname'[^?]*\.*)(.*?)$
```
**Action:** Find a file... → Point to your local file or use `*drop` to block loading

#### CSS Files
```
REGEX:(?inx).*\.css(\?.*)?$
```
**Action:** Find a file... → Point to your local CSS file or use `*drop` to block CSS loading

#### JavaScript Files
```
REGEX:(?inx).*\.js(\?.*)?$
```
**Action:** Find a file... → Point to your local JS file or use `*drop` to block JS loading

#### Specific File Examples
```
# For CSS files
REGEX:(?inx).*/app\.css(\?.*)?$
# Action: C:\path\to\your\local\app.css

# For JavaScript files  
REGEX:(?inx).*/app\.js(\?.*)?$
# Action: C:\path\to\your\local\app.js

# For bundle files
REGEX:(?inx).*/bundle\.js(\?.*)?$
# Action: C:\path\to\your\local\bundle.js
```

#### Useful Fiddler Actions
- **Find a file...** - Serve a local file instead
- **`*drop`** - Block the request entirely
- **`*delay:3000`** - Add 3-second delay to simulate slow loading
- **`404`** - Return 404 Not Found

### Tips for Fiddler Rules

- Use the regex pattern `(?'folder'css|html)(%252f|\/)` for folder matching
- Replace `YOUR_NAMESPACE.YOUR_CONTROL_NAME` with your specific namespace and control names
- Add `(\?.*)?$` at the end to handle query parameters
- Test your regex patterns in Fiddler's regex tester
- Use specific paths when targeting particular environments

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/d3b3018f-9004-4642-9226-5a7e7dfc10e2) and click on Share → Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)
