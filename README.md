# ApostropheCMS + Astro Essentials Starter Kit:

**Build lightning-fast websites with the editing experience your content team actually wants to use.**

This powerful combination gives you Astro's incredible performance and developer experience, plus ApostropheCMS's intuitive in-context editing and content management capabilities. No more choosing between speed and usability—get both.

## ApostropheCMS + Astro Starter Kits

**Choose the right foundation for your project:**

## 🎯 Astro Essentials Starter Kit (This Repository)
**Perfect if you want:** A clean, minimal foundation to build your own design system

- **Minimal & Non-opinionated**: Essential building blocks without imposed design decisions
- **Core Components**: Basic page types, essential widgets, and clean architecture  
- **Maximum Flexibility**: Build your own styling approach and component library
- **Learning Focus**: Understand the ApostropheCMS + Astro integration from the ground up
- **Best for**: Developers who want full creative control and custom design systems

## 🌟 [Apollo Starter Kit](https://github.com/apostrophecms/apollo)
**Perfect if you want:** A production-ready foundation with beautiful design included

- **Production-Ready Design**: Complete Bulma-based design system with modern styling
- **Rich Feature Set**: Advanced widgets, layouts, and pre-styled components
- **Faster Time-to-Market**: Launch professional sites with minimal additional styling
- **Content-Rich Sites**: Built-in blog, author relationships, and content management features
- **Best for**: Teams who want to focus on content and functionality over design from scratch

---

**Still deciding?** Both use the same powerful ApostropheCMS + Astro architecture. You can always start with the Essentials Starter Kit and add features, or begin with [Apollo](https://github.com/apostrophecms/apollo) and customize the design to match your brand.

**Ready for enterprise features?** [Contact us about Apollo Pro](https://apostrophecms.com/contact-us) for advanced permissions, automated translations, SEO optimization, and more professional capabilities.

- [ApostropheCMS + Astro Essentials Starter Kit:](#apostrophecms--astro-essentials-starter-kit)
  - [ApostropheCMS + Astro Starter Kits](#apostrophecms--astro-starter-kits)
  - [🎯 Astro Essentials Starter Kit (This Repository)](#-astro-essentials-starter-kit-this-repository)
  - [🌟 Apollo Starter Kit](#-apollo-starter-kit)
  - [🎯 What This Starter Provides](#-what-this-starter-provides)
  - [✨ Why Use This Combination](#-why-use-this-combination)
  - [🎯 What Makes This Special](#-what-makes-this-special)
  - [🚀 Quick Start](#-quick-start)
    - [Prerequisites](#prerequisites)
    - [Get Running in Minutes](#get-running-in-minutes)
  - [🏗️ Architecture Overview](#️-architecture-overview)
    - [How It Works](#how-it-works)
    - [Project Structure](#project-structure)
    - [For ApostropheCMS Developers](#for-apostrophecms-developers)
    - [For Astro Developers](#for-astro-developers)
  - [🖼️ Image Helper Functions](#️-image-helper-functions)
    - [Overview](#overview)
    - [Working with Image Relationships](#working-with-image-relationships)
    - [Working with Direct Attachments](#working-with-direct-attachments)
    - [Image Cropping and Sizes](#image-cropping-and-sizes)
    - [Working with Focal Points](#working-with-focal-points)
    - [Core Functions Reference](#core-functions-reference)
  - [🚀 Deployment Options](#-deployment-options)
    - [**ApostropheCMS Hosting** (Recommended)](#apostrophecms-hosting-recommended)
    - [**DIY Deployment**](#diy-deployment)
      - [Backend (ApostropheCMS) Deployment](#backend-apostrophecms-deployment)
      - [Frontend (Astro) Deployment](#frontend-astro-deployment)
      - [Netlify Deployment Example](#netlify-deployment-example)
  - [🚑 Need Help?](#-need-help)
  - [📚 Learn More](#-learn-more)
  - [🎯 Ready to Build Something Amazing?](#-ready-to-build-something-amazing)


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
- 🚀 **Seamless Hosting**: Deploy your ApostropheCMS + Astro Essentials project with [ApostropheCMS hosting](https://apostrophecms.com/hosting) for zero-config deployment, or choose from flexible alternatives like Netlify, Vercel, and Cloudflare

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
- Windows users: [WSL2 required](https://docs.apostrophecms.org/cookbook/windows-development.html)

### Get Running in Minutes

The codebases located in the `backend` and `frontend` folders should be treated as interlinked but separate projects.

To simplify dependency management, this repository includes several root-level scripts for convenience. The `postinstall` script automatically installs dependencies for both the `frontend` and `backend` folders when you run `npm install` at the root.

1. **Clone the repo and install dependencies**
   ```bash
   git clone https://github.com/apostrophecms/starter-kit-astro-essentials.git
   cd starter-kit-astro-essentials
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

   The `astro.config.mjs` file uses default values, but if running the backend on a different port and/or a different server, also set:
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
├── backend/               # ApostropheCMS application
│   ├── modules/           # Custom modules (pages, pieces, widgets)
│   ├── app.js             # Main configuration
│   └── ...
├── frontend/              # Astro application
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
- **No frontend code in modules** - Stylesheets, templates (implemented as Astro components), and client-side JavaScript go in the Astro project instead
- **No template helpers** - Skip `helper()`, `extendHelpers()`, `components()`, and `renderRoutes()` functions

The `modules/@apostrophecms/home-page` module loads the core `views/layout.html` file, which has been modified to indicate that editing should take place in the Astro frontend.

### For Astro Developers

The Astro portion follows standard conventions with components in `src` and assets in `public`. Configuration is managed through `astro.config.mjs` following standard practices.

**What stays the same:**
- Standard Astro project organization
- Normal component and template patterns
- Client-side asset management

**Key differences:**
- **Single route system** - Instead of multiple routes in `pages`, there's one `[...slug].astro` file that handles all routing
- **Template mapping** - Pages map to templates in the `templates` folder, mapped by the `index.js` file in that folder. Each template corresponds to an ApostropheCMS page type, including `index.html` and `show.html` piece-page types
- **Widget system** - The `widgets` folder contains templates for ApostropheCMS widgets, mapped through an `index.js` file in that folder.
- **Required configuration** - The `apostrophe` integration and `output: 'server'` settings must remain for backend integration

Content is populated by data from the CMS backend and inserted into slots in the main `[...slug].astro` file. Widget data is handled through the mapped templates and added to page templates using the `AposArea` helper component.

Read more in the [`apostrophe-astro` documentation](https://github.com/apostrophecms/apostrophe-astro)  or in the [Apollo tutorial series](https://docs.apostrophecms.org/tutorials/astro/apostrophecms-and-astro.html).

---

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
- combined logs of both services via our hosting CLI

*Learn more about [ApostropheCMS hosting](https://apostrophecms.com/hosting) or [contact us](https://apostrophecms.com/contact-us) for enterprise hosting.*

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

## 🚑 Need Help?

- **Community Support**: Join our [Discord community](https://discord.com/invite/HwntQpADJr) for help from other developers
- **Professional Support**: Dedicated support packages are available - [Contact us](https://apostrophecms.com/contact-us) to learn more
- **Training**: Professional training and consultation services available

---

## 📚 Learn More

- **[ApostropheCMS Documentation](https://docs.apostrophecms.org/)** - Complete CMS guide
- **[Astro Documentation](https://docs.astro.build/)** - Learn more about Astro
- **[Astro + ApostropheCMS Guide](https://docs.astro.build/en/guides/cms/apostrophecms/)** - Integration details
- **[Building a Site Tutorial](https://docs.apostrophecms.org/tutorials/astro/apostrophecms-and-astro.html)** - Building a complete site with the Apollo theme
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

*Need advanced features like granular permissions, advanced workflows, or premium support? [Explore ApostropheCMS Pro](https://apostrophecms.com/pro) for enterprise-grade capabilities.*

---

*Built with ❤️ by the ApostropheCMS team. [Star us on GitHub](https://github.com/apostrophecms) if this helps your project!*