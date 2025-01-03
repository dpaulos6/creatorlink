import { ModeToggle } from './mode-toggle'

interface NavbarProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Navbar = ({ ...props }: NavbarProps) => {
  return (
    <header
      className="w-full flex container border-x border-b gap-4 justify-between items-center px-6 py-4 bg-background/80 backdrop-blur-md fixed"
      {...props}
    >
      <a href="/" className="flex items-center">
        <span className="text-3xl font-inter font-semibold">Creator</span>
        <span className="text-3xl font-inter font-semibold text-primary">
          link
        </span>
      </a>
      <div className="flex gap-4 items-center">
        <nav className="hidden md:flex gap-4 sm:gap-6">
          <a href="/" className="hover:text-primary transition">
            Features
          </a>
          <a href="/" className="hover:text-primary transition">
            Pricing
          </a>
          <a href="/" className="hover:text-primary transition">
            Docs
          </a>
          <a href="/" className="hover:text-primary transition">
            Blog
          </a>
        </nav>
        <ModeToggle />
      </div>
    </header>
  )
}
