# Email Module

This module provides a modern approach to create and maintain email templates using React Email. It's designed to be integrated with existing Java-based projects, allowing teams to build email templates with React components and export them as HTML for use in backend services.

## Getting Started

### Prerequisites

- Node.js (latest LTS version recommended)
- npm or yarn

### Installation

1. Clone or copy this module into your project
2. Install dependencies:

```bash
npm install
```

## Usage

### Development

Start the development server to preview your email templates:

```bash
npm run dev
```

This will start a local server at `http://localhost:3001` where you can view and test all your email templates.

### Creating Email Templates

Create new email templates in the `emails/` directory. Use the existing `example.tsx` as a reference:

```tsx
import React from "react";
import { /* components */ } from "@react-email/components";

export const YourEmailName = () => (
  // Your email template
);

export default YourEmailName;
```

### Template Variables

Use curly braces for variables that will be replaced in your Java application:

```tsx
<Text>Hello {name}!</Text>
```

These placeholders will be preserved in the exported HTML and can be replaced with actual values using Java's string manipulation libraries.

### Exporting Templates

To export all email templates as HTML files:

1. Create a `.env` file based on `.env.example`:

```
EXPORT_DIR=out
```

2. Run the export command:

```bash
npm run export
```

This will generate HTML files in the specified output directory (default: `out/`).

## Integration with Java Applications

After exporting the email templates, you can use them in your Java application by:

1. Copying the generated HTML files to your Java resources
2. Loading the template files as strings
3. Using string manipulation to replace variables like `{name}` with actual values

Example Java usage:

```java
String template = loadEmailTemplate("example.html");
String personalizedEmail = template
    .replace("{name}", user.getName())
    .replace("{email}", user.getEmail());
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Builds the preview app.
- `npm run export` - Export all templates as HTML files
- `npm run lint` - Run TypeScript type checking

## Styling

This module uses Tailwind CSS for styling. You can customize the styles directly in your email components.

## Assets Management

The `assets/` directory in this project is used only for reference and documentation purposes. These assets are not directly used in the email templates and should not be referenced in your email components.

For production use, all assets (images, logos, etc.) should be hosted on a CDN or cloud storage service (e.g., Amazon S3, CloudFront, etc.) and referenced using their public URLs in the email templates.

Example of correct asset usage in templates:

```tsx
<Img
  src="https://your-cdn.com/images/logo.png"
  alt="Company Logo"
  width={200}
  height={50}
/>
```

## For Module Maintainers

Consider these guidelines to improve the project:

### Architecture Enhancement

1. **Template Organization**: Create subdirectories in `emails/` for different types of emails (transactional, marketing, notifications)
2. **Component Library**: Build reusable components specific to your brand in a `components/` directory
3. **Theme Configuration**: Create a theme configuration file to centralize brand colors and styling
