import React from "react";
import { motion } from "framer-motion";
import Card from "@/components/common/Card";
import Icon from "@/components/common/Icon";
import { SocialLink } from "@/types";

interface ProfileCardProps {
  name: string;
  title: string;
  bio: string;
  avatar: string;
  social: SocialLink[];
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  name,
  title,
  bio,
  avatar,
  social,
}) => {
  return (
    <Card className="flex flex-col items-center text-center p-8">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="w-28 h-28 rounded-full overflow-hidden mb-6 ring-2 ring-white/10"
        style={{ boxShadow: "0 0 20px rgba(0,0,0,0.08)" }}
      >
        <img src={avatar} alt={name} className="w-full h-full object-cover" />
      </motion.div>

      <motion.h1
        className="text-2xl font-medium mb-2"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.4 }}
      >
        {name}
      </motion.h1>

      <motion.h2
        className="text-base text-text-light-secondary dark:text-text-dark-secondary mb-4"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.4 }}
      >
        {title}
      </motion.h2>

      <motion.p
        className="text-sm text-text-light-secondary dark:text-text-dark-secondary mb-6 max-w-xs"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.4 }}
      >
        {bio}
      </motion.p>

      <motion.div
        className="flex space-x-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.4 }}
      >
        {social.map((link, index) => (
          <motion.a
            key={link.id}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 dark:bg-white/5 backdrop-blur-sm w-9 h-9 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 + index * 0.1, duration: 0.2 }}
            aria-label={link.name}
          >
            <Icon name={link.icon} size={16} />
          </motion.a>
        ))}
      </motion.div>
    </Card>
  );
};

export default ProfileCard;
