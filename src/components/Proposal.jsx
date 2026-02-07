import { motion } from 'framer-motion';

// Proposal screen with "Will you be my Valentine?" and Yes button
const Proposal = ({ onYes }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            style={{ textAlign: 'center' }}
        >
            <p className="proposal-text">Will you be my Valentine? 💕</p>
            <motion.button
                className="yes-button"
                onClick={onYes}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
            >
                Yes! 💖
            </motion.button>
        </motion.div>
    );
};

export default Proposal;
