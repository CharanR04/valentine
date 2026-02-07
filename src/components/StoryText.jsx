import { motion } from 'framer-motion';

// Typewriter-style story text component
const StoryText = ({ text, isActive }) => {
    if (!isActive) return null;

    return (
        <motion.div
            className="story-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8 }}
        >
            {text}
        </motion.div>
    );
};

export default StoryText;
