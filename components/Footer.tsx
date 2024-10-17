import { Button } from "@/components/ui/button"
import { Rss } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-secondary py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <p>&copy; 2023 LinkHub. All rights reserved.</p>
        <Button variant="outline" size="sm">
          <Rss className="mr-2 h-4 w-4" />
          RSS Feed
        </Button>
      </div>
    </footer>
  );
};

export default Footer;