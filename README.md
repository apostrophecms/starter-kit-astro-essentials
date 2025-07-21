# ApostropheCMS + Astro Essentials Starter Kit:

**Build lightning-fast websites with the editing experience your content team actually wants to use.**

This powerful combination gives you Astro's incredible performance and developer experience, plus ApostropheCMS's intuitive in-context editing and content management capabilities. No more choosing between speed and usability—get both.

## 🎯 What This Starter Provides

This is a **minimal, non-opinionated foundation** that demonstrates the ApostropheCMS + Astro integration without imposing design decisions on your project. You get the essential building blocks:

- **Basic Page Types**: Home page, default content page, and simple blog structure
- **Core Widgets**: Rich text, images, video, and a two-column layout widget
- **Clean Architecture**: Well-organized but unopinionated code structure
- **Integration Examples**: Working demonstrations of content fetching and rendering

**Perfect for:** Developers who want to understand the integration and build their own design system on top, rather than those looking for a ready-to-launch theme.

## ✨ Why Use This Combination

**For Developers:**
- 🏎️ **Blazing Fast**: Astro's server-side rendering + smart hydration = incredible Core Web Vitals scores
- 🛠️ **Modern DX**: Write components in React, Vue, Svelte, or vanilla JS—your choice
- 🔧 **Zero API Boilerplate**: The `apostrophe-astro` package handles all the backend communication automatically
- 📡 **Flexible Deployment**: SSR hosting on Netlify, Vercel, Cloudflare, or any Node.js environment

**For Content Teams:**
- ✏️ **True WYSIWYG**: Edit content directly on the live site with ApostropheCMS's in-context editing
- 🎯 **No Learning Curve**: Familiar, intuitive admin interface that non-technical users love
- 🔄 **Instant Previews**: See changes immediately without switching between admin panels and preview modes
- 👥 **Powerful Workflows**: Built-in user roles, content approval, and publishing controls

**For Everyone:**
- 🏗️ **Solid Foundation**: Essential building blocks with core widgets and basic page types
- 📚 **Non-Opinionated**: Clean starter that doesn't impose design decisions on your project
- 📈 **Room to Grow**: Architecture that scales from simple sites to complex applications
- 💰 **Open Source**: Free to use with optional Pro features available

---

## 🎯 What Makes This Special

Unlike typical headless setups where content editors work in separate admin panels, this combination delivers **in-context editing**. Content teams can click directly on the live site to edit—while you keep the modern development experience of Astro.

**The key:** The [`apostrophe-astro` package](https://github.com/apostrophecms/apostrophe-astro) creates a seamless bridge between your Astro frontend and ApostropheCMS backend, handling authentication, content fetching, and real-time updates automatically.

## 🚀 Quick Start

### Prerequisites
- Node.js v22 or later
- MongoDB v6.0 or later ([setup guide](https://docs.apostrophecms.org/guide/development-setup.html))
- Windows users: [WSL2 required](https://learn.microsoft.com/en-us/windows/wsl/install)

### Get Running in Minutes

The codebases located in the `backend` and `frontend` folders should be treated as interlinked but separate projects.

To simplify dependency management, this repository includes several root-level scripts for convenience. The `postinstall` script automatically installs dependencies for both the `frontend` and `backend` folders when you run `npm install` at the root.

1. **Clone the repo and install dependencies**
```bash
git clone https://github.com/apostrophecms/combined-astro-starter-kit.git
cd combined-astro-example
npm install
```
2. **Set up environment variables**
Both projects need an `APOS_EXTERNAL_FRONT_KEY` environment variable set to the same value for authentication. Open two terminals:
   - **Mac/Linux users**: One terminal in `frontend` folder, one in `backend` folder
   - **Windows users**: WSL terminal for `backend` folder, WSL or Windows terminal for `frontend` folder

   ```bash
   # In both terminal windows
   export APOS_EXTERNAL_FRONT_KEY=my-secret-key
   ```

   The `astro.config.mjs` file uses default values, but if running the backend on a different port, also set:
   ```bash
   export APOS_HOST=your-backend-url
   ```

3. **Start development servers**

   ```bash
   # Terminal 1 - Backend (use WSL on Windows)
   cd backend && npm run dev

   # Terminal 2 - Frontend
   cd frontend && npm run dev
   ```

> **Note:** Astro is less stringent about project setup in development mode. Before deployment, run `npm run build` followed by `npm run preview` in the `frontend` folder to test production behavior. We don't recommend using the root `npm run serve-frontend` script during development - it's used for Apostrophe hosting.

Visit `http://localhost:4321` and start building! 🎉

---

## 🏗️ Architecture Overview


### How It Works
This project utilizes ApostropheCMS as a headless backend with Astro as a frontend. What sets this apart from typical headless setups is the [apostrophe-astro](https://github.com/apostrophecms/apostrophe-astro) package in the Astro frontend project. This enables full use of the ApostropheCMS Admin UI, including in-context editing, while largely automating content fetching from the backend without writing REST API calls.

### Project Structure
```
├── backend/                 # ApostropheCMS application
│   ├── modules/            # Custom modules (pages, pieces, widgets)
│   ├── app.js             # Main configuration
│   └── ...
├── frontend/               # Astro application  
│   ├── src/
│   │   ├── pages/         # Single [...slug].astro route
│   │   ├── templates/     # Page templates
│   │   ├── widgets/       # Widget templates
│   │   └── components/    # Astro components
│   ├── astro.config.mjs   # Astro configuration
│   └── ...
└── README.md              # This file
└── package.json.          # Whole project scripts
```

### For ApostropheCMS Developers

If you've worked with ApostropheCMS previously, the backend should look familiar. Custom modules for pages, pieces, and widgets are in the `modules` folder, with core module configuration in `modules/@apostrophecms`. 

**What stays the same:**
- Module registration in `app.js`
- Page types added to `modules/@apostrophecms/page/index.js`
- Most [module configuration settings](https://docs.apostrophecms.org/reference/module-api/module-overview.html#module-configuration) for Admin UI, request routing, and MongoDB interaction

**Key differences:**
- **No frontend code in modules** - Client-side JavaScript, styling, and templates go in the Astro project instead
- **No template helpers** - Skip `helper()`, `extendHelpers()`, `components()`, and `renderRoutes()` functions
- **Schema sharing** - Some widget schemas have been moved to `lib/schema-mixins` for reuse between widgets and pages

The `modules/@apostrophecms/home-page` module loads the core `views/layout.html` file, which has been modified to show project status information instead of the Admin UI.

### For Astro Developers

The Astro portion follows standard conventions with components in `src` and assets in `public`. Configuration is managed through `astro.config.mjs` following standard practices.

**What stays the same:**
- Standard Astro project organization
- Normal component and template patterns
- Client-side asset management

**Key differences:**
- **Single route system** - Instead of multiple routes in `pages`, there's one `[...slug].astro` file that handles all routing
- **Template mapping** - Pages map to templates in the `templates` folder, corresponding to ApostropheCMS page types
- **Widget system** - The `widgets` folder contains templates for ApostropheCMS widgets, mapped through `index.js` files
- **Required configuration** - The `apostrophe` integration and `output: 'server'` settings must remain for backend integration

### Routing and Templates

Unlike typical Astro projects with multiple route files, this project uses a single `[...slug].astro` route that:

1. Handles all URL routing using pages from the CMS backend
2. Maps page types to corresponding templates in the `templates` folder
3. Populates template content with data from the CMS
4. Renders widgets using templates from the `widgets` folder

Each template corresponds to a registered ApostropheCMS page or piece-page type. Content is populated by data from the CMS backend and inserted into slots in the main `[...slug].astro` file.

Read more in the [`apostrophe-astro` documentation](https://github.com/apostrophecms/apostrophe-astro).
---

## 🌟 Key Features

## 🖼️ Image Helper Functions

### Overview
These helper functions are designed to work with images in your Astro frontend that come from ApostropheCMS through relationships or attachment fields. If you're using the image widget within an area, you should use the `AposArea` helper instead - these utilities are specifically for handling images that are part of your content model.

**Important:** These helpers expect a single attachment object, not an array. When working with relationships or array fields, make sure to pass a single image object (e.g., `page.relationship._image[0]`) rather than the full array.

### Working with Image Relationships
When you have a relationship field to `@apostrophecms/image` in your content type, you'll typically need to:
1. Get the image URL (potentially at different sizes for responsive images)
2. Handle focal points if configured
3. Get the image dimensions including any cropping that should be applied
4. Set up proper alt text

Here's a typical example:
```js
---
import {
  getAttachmentUrl,
  getAttachmentSrcset,
  getFocalPoint,
  getWidth,
  getHeight
} from '../lib/attachments.js';

// Get first image from relationship
const image = relationshipField._image[0];
---

<img
  src={getAttachmentUrl(image, { size: 'full' })}
  srcset={getAttachmentSrcset(image)}
  sizes="(max-width: 800px) 100vw, 800px"
  alt={image.alt || image.title || 'Image description'}
  width={getWidth(image)}
  height={getHeight(image)}
  style={`object-position: ${getFocalPoint(image)};`}
/>
```

### Working with Direct Attachments
For attachment fields (like logo fields), the pattern is similar:

```js
<img 
  src={getAttachmentUrl(attachmentField)}
  width={getWidth(attachmentField)}
  height={getHeight(attachmentField)}
  alt="Logo"
/>
```

### Image Cropping and Sizes

**Automatic Crop Handling**

If you set a crop region for an image in the ApostropheCMS Admin UI, all the helper methods will automatically respect that crop. You don't need to do anything special in your code - the cropped version will be used when generating URLs and srcsets.

**Size Variants**

The default size variants are:
- `one-sixth` (190×350px)
- `one-third` (380×700px)
- `one-half` (570×700px)
- `two-thirds` (760×760px)
- `full` (1140×1140px)
- `max` (1600×1600px)

These sizes will be used to generate the srcset and can be selected by name for the `getAttachmentUrl()` method:

```
getAttachmentUrl(image, { size: 'full' })
```

You can use custom size names in both `getAttachmentUrl()` and the srcset options. For example:
```js
const customUrl = getAttachmentUrl(image, { size: 'custom-banner' });

// Custom srcset configuration
const srcset = getAttachmentSrcset(image, {
  sizes: [
    { name: 'small', width: 300 },
    { name: 'medium', width: 600 },
    { name: 'large', width: 900 },
  ]
});
```

> Important: These helpers don't generate the image sizes - they just reference sizes that already exist. To use custom sizes, you must configure the [`@apostrophecms/attachment` module](https://docs.apostrophecms.org/reference/modules/attachment.html#configuration) to create those sizes when images are uploaded. You can do this in your backend configuration:

```javascript
// modules/@apostrophecms/attachment/index.js
module.exports = {
  options: {
    // Define what sizes should be created on upload
    imageSizes: {
      'custom-banner': { width: 1200, height: 400 },
      'square-thumb': { width: 300, height: 300 },
      'small': { width: 300 },
      'medium': { width: 600 },
      'large': { width: 900 }
    }
  }
};
```

See the [attachment module documentation](https://docs.apostrophecms.org/reference/modules/attachment.html#configuration) for complete configuration options.

### Working with Focal Points
When using focal points set in the ApostropheCMS admin UI, you'll need to:
1. Use `object-position` with the focal point value
2. Set appropriate Bulma image classes (like `is-fullwidth`)

```js
<figure class="image">
  <img
    src={getAttachmentUrl(image)}
    style={`object-position: ${getFocalPoint(image)}; object-fit: cover;`}
    class="is-fullwidth"
    width={getWidth(image)}
    height={getHeight(image)}
    alt="Image with focal point"
  />
</figure>
```

The `getFocalPoint()` function returns coordinates in the format "X% Y%" (e.g., "50% 50%" for center). If no focal point is set, it returns the default value (default is "center center").

### Core Functions Reference
Key functions available (see JSDoc comments in source for detailed documentation):
- `getAttachmentUrl(attachmentObject, options?)`: Get URL for an image with optional size (defaults to 'full')
- `getAttachmentSrcset(attachmentObject, options?)`: Generate responsive srcset string
- `getWidth(imageObject)`: Get image width, respecting crops
- `getHeight(imageObject)`: Get image height, respecting crops
- `getFocalPoint(attachmentObject, defaultValue?)`: Get focal point coordinates for styling

---

## 🚀 Deployment Options

### **ApostropheCMS Hosting** (Recommended)
Apostrophe can provide easy hosting for any ApostropheCMS-Astro monorepo with little or no extra configuration. This can be set up for deployment from GitHub or other code repository.

Apostrophe hosting comes with zero-config deployment with automatic:
- Database provisioning and backups
- SSL certificates
- Asset optimization and delivery
- Security updates and monitoring
- 24/7 support with Pro plans
- combined logs of both services via our hosting CLI

*[Contact us](https://apostrophecms.com/contact-us) for enterprise hosting.*

### **DIY Deployment**
Since this project uses Astro in server mode (SSR), deployment requires careful consideration:

Third-party hosting will typically require separate servers for the ApostropheCMS and Astro portions of the repositories. This is the typical pattern seen with other CMS that are used with Astro. You will need to specify whether you want the `backend` ApostropheCMS portion of the repo, or the `frontend` Astro project hosted. How this is accomplished will depend on the provider.

#### Backend (ApostropheCMS) Deployment

Your ApostropheCMS backend requires:
- Node.js environment (v22 or later recommended)
- MongoDB database
- Asset storage solution (cloud storage like AWS S3)

There are several examples of common deployment strategies in our [documentation](https://docs.apostrophecms.org/guide/hosting.html)

Example deployment steps for a typical provider:
1. Set up a MongoDB instance (Atlas, DigitalOcean, etc.)
2. Configure your server with Node.js and PM2
3. Set up your environment variables:
   ```bash
   NODE_ENV=production
   APOS_MONGODB_URI=YOUR_mongodb_connection_string
   APOS_EXTERNAL_FRONT_KEY=a_random_string
   APOS_S3_BUCKET=YOUR-bucket-name
   APOS_S3_SECRET=YOUR-s3-secret
   APOS_S3_KEY=YOUR-s3-key
   APOS_S3_REGION=YOUR-chosen-region
   ```
The remainder of the deployment will depend on the hosting platform being used and how that deployment is triggered. Generally, it will comprise a build step followed by bringing up the server. If you are not deploying with Git, you will also need to set the `APOS_RELEASE_ID` to a unique, random value. Again, make sure that you specify that the `backend` folder is to be used as the root for your deployment.

#### Frontend (Astro) Deployment

Your Astro frontend can be deployed to any static hosting provider that supports SSR (Server-Side Rendering). Popular options include:
- Netlify
- Vercel
- Cloudflare Pages
- AWS Amplify
There are a number of tutorials in the [Astro documentation](https://docs.astro.build/en/guides/deploy/#deployment-guides) to use as a starting point. The only modifications are the extra environment variable, `APOS_EXTERNAL_FRONT_KEY=a_random_string` set to the same string as your backend project, and to make sure that you are specifying the `frontend` folder as the root of the project.

#### Netlify Deployment Example

1. Log in to your [Netlify](https://www.netlify.com/) account.
2. Create a new site by connecting your Git repository.
3. In the "Build settings" configuration:
   - **Base directory**: `frontend`
   - **Build command**: `npm run build`
   - **Publish directory**: `frontend/dist`
4. Access Site Settings:
   -Navigate to the "Site settings" for the selected site.
5. Scroll down and find the "Environment variables" section under the "Build & deploy" tab. Click "Edit variables". Add a New Variable:
   - **Key**: `APOS_EXTERNAL_FRONT_KEY`
   - **Value**: `a_random_string`
6. Save your configuration and deploy the site.

The build settings can also be supplied through a `netlify.toml` file at the root of your project.

---

## 💼 Good Fit For

- **Content-focused websites** that need regular updates
- **Marketing sites** with multiple content contributors  
- **Projects requiring workflows** and user management
- **Developers** who want modern tooling with editor-friendly CMS
- **Teams** seeking a foundation to build upon rather than a pre-built theme

---

## 🔧 Development Workflow

The beauty of this setup is how smooth the development experience is:

1. **Define Your Content Types** in ApostropheCMS modules
2. **Build Components** in Astro using your preferred framework  
3. **Map Templates** to content types automatically
4. **Style & Deploy** with full confidence in performance

### **Differences from Standard Astro**
- **Server Mode Required**: Uses `output: 'server'` for server-side rendering (not static generation)
- Single `[...slug].astro` route handles all pages
- Content comes from ApostropheCMS instead of markdown files
- Templates in `/templates` folder map to CMS page types
- Widgets in `/widgets` folder for reusable content blocks
- **Deployment**: Requires SSR-capable hosting (not basic static hosting)

### **Differences from Standard ApostropheCMS**
- No Nunjucks templates (use Astro components instead)
- Frontend code lives in Astro project
- Focus on API and admin experience in backend

---

## 📚 Learn More

- **[ApostropheCMS Documentation](https://docs.apostrophecms.org/)** - Complete CMS guide
- **[Astro Documentation](https://docs.astro.build/)** - Static site generator docs
- **[Astro + ApostropheCMS Guide](https://docs.astro.build/en/guides/cms/apostrophecms/)** - Integration details
- **[apostrophe-astro Package](https://github.com/apostrophecms/apostrophe-astro)** - Bridge package docs

---

## 🎯 Ready to Build Something Amazing?

This starter kit includes the essentials to get you building:
- ✅ Basic page templates (home, default, blog)
- ✅ Core ApostropheCMS widgets plus layout widget
- ✅ Image optimization helpers
- ✅ Clean, non-opinionated structure
- ✅ Production deployment configuration
- ✅ Development tooling setup

**A clean foundation** for your project, not a finished product. Perfect for developers who want to start with solid architecture and build their vision on top.

*Need advanced features like e-commerce, advanced workflows, or premium support? [Explore ApostropheCMS Pro](https://apostrophecms.com/pro) for enterprise-grade capabilities.*

---

*Built with ❤️ by the ApostropheCMS team. [Star us on GitHub](https://github.com/apostrophecms) if this helps your project!*