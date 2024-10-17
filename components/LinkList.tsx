"use client"

import { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

const links = [
  { id: 1, title: 'My Portfolio', url: 'https://example.com/portfolio' },
  { id: 2, title: 'LinkedIn Profile', url: 'https://linkedin.com/in/example' },
  { id: 3, title: 'GitHub Projects', url: 'https://github.com/example' },
  { id: 4, title: 'Latest Blog Post', url: 'https://example.com/blog' },
  { id: 5, title: 'Twitter', url: 'https://twitter.com/example' },
];

const LinkList = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      {links.map((link) => (
        <motion.div
          key={link.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: link.id * 0.1 }}
        >
          <Card
            className="overflow-hidden transition-all duration-300 hover:shadow-lg"
            onMouseEnter={() => setHoveredId(link.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <CardContent className="p-0">
              <Button
                variant="ghost"
                className="w-full h-full py-6 px-4 text-left justify-start"
                asChild
              >
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                  {link.title}
                </a>
              </Button>
            </CardContent>
            {hoveredId === link.id && (
              <motion.div
                className="h-1 bg-primary"
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 0.3 }}
              />
            )}
          </Card>
        </motion.div>
      ))}
    </div>
  );
};

export default LinkList;