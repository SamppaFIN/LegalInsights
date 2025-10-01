const express = require('express');
const compression = require('compression');
const helmet = require('helmet');
const path = require('path');

const app = express();
app.disable('x-powered-by');
app.use(helmet({ contentSecurityPolicy: false }));
app.use(compression());

const buildDir = path.resolve(__dirname, './client/build');
app.use(express.static(buildDir, { maxAge: '1y', index: false }));

// Health check
app.get('/health', (req, res) => res.json({ ok: true }));

// Fallback to index.html for SPA routes
app.get('*', (req, res) => {
  res.sendFile(path.join(buildDir, 'index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`LEGALFLY running on :${port}`));
