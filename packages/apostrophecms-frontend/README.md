# @apostrophecms/frontend

Astro widget components for ApostropheCMS, extracted as a workspace package.

## Getting Started with Workspace

This package is part of a **pnpm workspace** monorepo. To run the complete project:

### Installation

From the project root:

```bash
# Install all workspace dependencies
pnpm install
```

### Running the Project

The project consists of two parts that need to run simultaneously:

**1. Start the ApostropheCMS Backend** (in one terminal):

```bash
cd backend
npm install  # if first time
npm run serve
```

The backend will run at `http://localhost:3000`

**2. Start the Astro Frontend** (in another terminal):

From the project root:

```bash
pnpm dev
```

Or from the frontend directory:

```bash
cd frontend
pnpm dev
```

The frontend will run at `http://localhost:4321`

### Quick Commands

All from the project root:

```bash
# Start frontend dev server
pnpm dev

# Build frontend for production
pnpm build

# Serve built frontend
pnpm serve
```

### First Time Setup

If this is your first time running the project, you'll need to create an admin user in the backend:

```bash
cd backend
node app @apostrophecms/user:add admin admin
```

Follow the prompts to set a password.

## Structure

```
@apostrophecms/frontend/
├── astro/
│   ├── components/
│   │   ├── Figure.astro
│   │   └── ImageLink.astro
│   └── widgets/
│       ├── ImageWidget.astro
│       ├── RichTextWidget.astro
│       ├── TwoColumnWidget.astro
│       └── VideoWidget.astro
├── public/
│   └── images/
│       └── image-widget-placeholder.jpg
└── package.json
```

## Usage

Import widgets from the package using the export path:

```javascript
import ImageWidget from '@apostrophecms/frontend/astro/widgets/ImageWidget.astro';
import RichTextWidget from '@apostrophecms/frontend/astro/widgets/RichTextWidget.astro';
import VideoWidget from '@apostrophecms/frontend/astro/widgets/VideoWidget.astro';
import TwoColumnWidget from '@apostrophecms/frontend/astro/widgets/TwoColumnWidget.astro';
```

## Development

The package is part of a pnpm workspace. Changes to widgets in this package will be reflected immediately in the frontend via HMR (Hot Module Replacement).

To modify a widget:
1. Edit the file in `packages/apostrophecms-frontend/astro/widgets/`
2. Save the file
3. Astro dev server will automatically detect the change and hot-reload

## Dependencies

Peer dependencies:
- `@apostrophecms/apostrophe-astro` ^1.4.0
- `astro` ^5.0.0
