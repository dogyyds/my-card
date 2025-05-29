import React from "react";
import { NavLink } from "@/types";
import Icon from "@/components/common/Icon";
import { motion } from "framer-motion";

interface NavigationLinksProps {
  links: NavLink[];
  showTitle?: boolean;
}

const NavigationLinks: React.FC<NavigationLinksProps> = ({
  links,
  showTitle = true,
}) => {
  return (
    <div className="space-y-4">
      {showTitle && <h2 className="text-lg font-medium">导航</h2>}

      <div className="glass-card p-2">
        <nav className="grid grid-cols-3 gap-2">
          {links.map((link, index) => (
            <motion.a
              key={link.id}
              href={link.url}
              target={link.isExternal ? "_blank" : undefined}
              rel={link.isExternal ? "noopener noreferrer" : undefined}
              className="flex flex-col items-center justify-center p-2 rounded-xl hover:bg-white/5 dark:hover:bg-black/10 transition-colors duration-200 text-center"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.2 }}
              title={link.name}
            >
              <div className="w-8 h-8 rounded-full bg-gray-100/20 dark:bg-gray-800/30 flex items-center justify-center mb-1">
                <Icon name={link.icon} size={16} />
              </div>

              <span className="text-xs truncate max-w-full">{link.name}</span>
            </motion.a>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default NavigationLinks;
