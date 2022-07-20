/**
* @export ErrorBoundary
* @return {error.message}
*/

export function ErrorBoundary({ error }: { error: Error }) {
  console.error(error);

  return (
    <Document title="404.Err.Boundry">
      <h1>App Error</h1>
      <pre>{error.message}</pre>
      <p>
        Replace this UI with what you want users to see when your app throws
        uncaught errors.
      </p>
    </Document>
  );
};
