module.exports = {
  staticFileGlobs: [
    'build/**/*.js',
    'build/**/*.css',
    'build/index.html'
  ],
  navigateFallback: '/index.html',
  // something like this should allow everything but files ending with `.zip`
  navigateFallbackWhitelist: [/^(?!.*[.]zip$).*$/],
  cacheId: 'the-cache-machine'
}