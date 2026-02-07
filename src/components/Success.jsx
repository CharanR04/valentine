import { motion } from 'framer-motion';

// Success screen after pressing Yes
const Success = () => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, type: 'spring' }}
            style={{ textAlign: 'center' }}
        >
            <motion.p
                className="success-text"
                animate={{
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut'
                }}
            >
                I love you! 💖✨
            </motion.p>

            {/* Floating hearts animation */}
            <div style={{ position: 'absolute', width: '100%', height: '100%', pointerEvents: 'none', overflow: 'hidden' }}>
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        style={{
                            position: 'absolute',
                            left: `${Math.random() * 100}%`,
                            bottom: '-50px',
                            fontSize: `${20 + Math.random() * 30}px`
                        }}
                        animate={{
                            y: [0, -window.innerHeight - 100],
                            x: [0, (Math.random() - 0.5) * 100],
                            rotate: [0, 360],
                            opacity: [1, 0]
                        }}
                        transition={{
                            duration: 3 + Math.random() * 2,
                            repeat: Infinity,
                            delay: Math.random() * 3,
                            ease: 'linear'
                        }}
                    >
                        💖
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default Success;
