export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook('render:response', (response) => {
    if (typeof response.body === 'string') {
      // Forcefully strip the absolute project path from all generated URLs
      // Includes both with and without leading slash variants
      const projectPathRegex = /\/?Users\/kenchan\/Documents\/PROJECT\/kwanwing\.hk\//g
      
      const originalBody = response.body
      response.body = response.body.replace(projectPathRegex, '/')
      
      // Ensure we don't end up with double slashes like //_nuxt/
      // But don't break protocols like https://
      response.body = response.body.replace(/([^:])\/\//g, '$1/')
      
      if (originalBody !== response.body) {
        // console.log('[Nitro Plugin] Fixed absolute paths in response')
      }
    }
  })
})
