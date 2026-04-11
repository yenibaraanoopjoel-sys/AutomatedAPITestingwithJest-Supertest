const { app, connectDB } = require('./app');

const PORT = process.env.PORT || 5000;

// Start server
const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
};

// Only start if this is the main module (not imported for tests)
if (require.main === module) {
  startServer();
}

module.exports = { app, startServer };
