
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

## Available Commands

Here are all the npm commands available in this project:

### Development Commands
- `npm run dev` - Start the development server with hot reload
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally

### Code Quality Commands
- `npm run lint` - Run ESLint to check for code quality issues
- `npm run type-check` - Run TypeScript compiler to check for type errors

### Other Commands
- `npm i` or `npm install` - Install all project dependencies

## Fiddler Autoresponse Rules for Local Development

If you're using Fiddler Classic for debugging and want to intercept CSS/JS files to serve local versions, you can set up autoresponse rules:

### Setting up Fiddler Autoresponse Rules

1. **Open Fiddler Classic**
2. **Go to AutoResponder tab**
3. **Enable "Enable rules" and "Unmatched requests passthrough"**
4. **Add the following rules:**

#### Dynamic folder and filename approach (recommended)
```
# For tenders component with dynamic folder and filename matching
REGEX:(.*?)((?'folder'css|js|html)(%252f|\/))?tenders\.(?'fname'[^?]*\.*)(.*?)$
# Action: C:\path\to\your\local\tenders\${folder}\${fname}

# Generic pattern for any component
REGEX:(.*?)((?'folder'css|js|html)(%252f|\/))?YOUR_NAMESPACE\.YOUR_CONTROL_NAME[\.\/](?'fname'[^?]*\.*)(.*?)$
# Action: C:\COMPONENT_ROOT_FOLDER\out\controls\YOUR_CONTROL_NAME\${folder}\${fname}
```

#### For your specific site (coop-tenders.powerappsportals.com)
```
# For tenders.js specifically
REGEX:(?inx)^https://coop-tenders\.powerappsportals\.com/tenders\.js(\?.*)?$
# Action: C:\path\to\your\local\tenders.js

# For any JS file from your domain
REGEX:(?inx)^https://coop-tenders\.powerappsportals\.com/.*\.js(\?.*)?$
# Action: C:\path\to\your\local\file.js

# For any CSS file from your domain
REGEX:(?inx)^https://coop-tenders\.powerappsportals\.com/.*\.css(\?.*)?$
# Action: C:\path\to\your\local\file.css

# For any map file from your domain
REGEX:(?inx)^https://coop-tenders\.powerappsportals\.com/.*\.map(\?.*)?$
# Action: C:\path\to\your\local\file.map
```

#### Universal patterns (for any domain)
```
# For any JavaScript file or map file
REGEX:(?inx).*\.js(\.map)?(\?.*)?$
# Action: C:\path\to\your\local\app.js

# For any JavaScript file
REGEX:(?inx).*\.js(\?.*)?$
# Action: C:\path\to\your\local\app.js

# For any CSS file
REGEX:(?inx).*\.css(\?.*)?$
# Action: C:\path\to\your\local\app.css

# For any map file
REGEX:(?inx).*\.map(\?.*)?$
# Action: C:\path\to\your\local\app.map
```

#### Specific file examples
```
# For specific JS files by name
REGEX:(?inx).*/tenders\.js(\?.*)?$
# Action: C:\path\to\your\local\tenders.js

# For specific map files by name
REGEX:(?inx).*/tenders\.js\.map(\?.*)?$
# Action: C:\path\to\your\local\tenders.js.map

# For bundle files
REGEX:(?inx).*/bundle\.js(\?.*)?$
# Action: C:\path\to\your\local\bundle.js

# For bundle map files
REGEX:(?inx).*/bundle\.js\.map(\?.*)?$
# Action: C:\path\to\your\local\bundle.js.map

# For main app files
REGEX:(?inx).*/main\.js(\?.*)?$
# Action: C:\path\to\your\local\main.js

# For main app map files
REGEX:(?inx).*/main\.js\.map(\?.*)?$
# Action: C:\path\to\your\local\main.js.map
```

#### Useful Fiddler Actions
- **Find a file...** - Serve a local file instead
- **`*drop`** - Block the request entirely
- **`*delay:3000`** - Add 3-second delay to simulate slow loading
- **`404`** - Return 404 Not Found

### Tips for Fiddler Rules

- Use `(?inx)` for case-insensitive matching
- Escape dots in domain names with backslashes (`\.`)
- Add `(\?.*)?$` at the end to handle query parameters
- Test your regex patterns in Fiddler's regex tester
- Use `^` at the start to match from beginning of URL
- Use specific domain patterns when targeting particular environments
- Named capture groups like `(?'folder'...)` and `(?'fname'...)` allow dynamic file path construction
- Use `${folder}` and `${fname}` in the action path to reference captured groups

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
