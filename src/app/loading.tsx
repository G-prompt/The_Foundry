export default function Loading() {
  return (
    <main
      aria-busy="true"
      aria-label="Loading The Foundry"
      className="relative flex min-h-[calc(100vh-5rem)] items-center justify-center overflow-hidden border-b border-border bg-background px-5 py-16 sm:px-8"
    >
      <div aria-hidden="true" className="grid-canvas pointer-events-none absolute inset-0 opacity-70" />

      <div className="relative flex w-full max-w-sm flex-col items-center text-center">
        <div className="foundry-loader-mark" aria-hidden="true">
          <span>F</span>
        </div>
        <p className="mt-6 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Preparing the workspace
        </p>
        <div className="foundry-loader-track mt-5" aria-hidden="true">
          <span className="foundry-loader-beam" />
        </div>
      </div>
    </main>
  );
}