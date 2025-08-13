A tree hydrated but some attributes of the server rendered HTML didn't match the client properties. This won't be patched up. This can happen if a SSR-ed Client Component used:

- A server/client branch `if (typeof window !== 'undefined')`.
- Variable input such as `Date.now()` or `Math.random()` which changes each time it's called.
- Date formatting in a user's locale which doesn't match the server.
- External changing data without sending a snapshot of it along with the HTML.
- Invalid HTML tag nesting.

It can also happen if the client has a browser extension installed which messes with the HTML before React loaded.

See more info here: https://nextjs.org/docs/messages/react-hydration-error


  ...
    <HotReload assetPrefix="" globalError={[...]}>
      <AppDevOverlayErrorBoundary globalError={[...]}>
        <ReplaySsrOnlyErrors>
        <DevRootHTTPAccessFallbackBoundary>
          <HTTPAccessFallbackBoundary notFound={<NotAllowedRootHTTPFallbackError>}>
            <HTTPAccessFallbackErrorBoundary pathname="/" notFound={<NotAllowedRootHTTPFallbackError>} ...>
              <RedirectBoundary>
                <RedirectErrorBoundary router={{...}}>
                  <Head>
                  <link>
                  <RootLayout>
                    <html lang="en">
                      <body
+                       className="__variable_5cfdac __variable_9a8899 antialiased"
-                       className="__variable_5cfdac __variable_9a8899 antialiased vsc-domain-localhost vsc-initialized"
                      >
                  ...
src\app\layout.tsx (27:7) @ RootLayout


  25 |   return (
  26 |     <html lang="en">
> 27 |       <body
     |       ^
  28 |         className={`${geistSans.variable} ${geistMono.variable} antialiased`}
  29 |       >
  30 |         {children}