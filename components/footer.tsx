export function Footer() {
  return (
    <footer className="py-8 px-6 md:px-12 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="text-sm text-muted-foreground">
          {new Date().getFullYear()} Jetpack Jungle. All rights reserved.
        </span>
        <span className="text-sm text-muted-foreground">
          Los Angeles, CA
        </span>
      </div>
    </footer>
  )
}
