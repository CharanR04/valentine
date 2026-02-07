import { motion, AnimatePresence } from 'framer-motion';
import Avatar from './Avatar';

// Scene component with starry background, props, and avatars
const Scene = ({ sceneData }) => {
    const { avatars, props } = sceneData;

    return (
        <div
            style={{
                position: 'relative',
                width: '100%',
                height: '100%',
                overflow: 'hidden',
                background: 'linear-gradient(180deg, #000000 0%, #0a0a2a 40%, #001a4d 80%, #000000 100%)'
            }}
        >
            {/* Starry background */}
            <div
                style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    zIndex: 0,
                    overflow: 'hidden'
                }}
            >
                {[...Array(50)].map((_, i) => (
                    <motion.div
                        key={i}
                        style={{
                            position: 'absolute',
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            fontSize: Math.random() > 0.5 ? '4px' : '8px',
                            color: 'rgba(200, 230, 255, 0.8)'
                        }}
                        animate={{
                            opacity: [0.2, 0.8, 0.2],
                            scale: [1, 1.2, 1]
                        }}
                        transition={{
                            duration: 2 + Math.random() * 2,
                            repeat: Infinity,
                            delay: Math.random() * 2
                        }}
                    >
                        ✦
                    </motion.div>
                ))}
            </div>

            {/* Scene props (like NITT Clock Tower) */}
            <div
                style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    pointerEvents: 'none',
                    zIndex: 1
                }}
            >
                <AnimatePresence mode="wait">
                    {props && props.map((prop, index) => (
                        <motion.img
                            key={`prop-${index}-${prop.src}`}
                            src={prop.src}
                            alt={prop.alt || 'scene prop'}
                            style={{
                                position: 'absolute',
                                left: prop.position?.left,
                                right: prop.position?.right,
                                bottom: prop.position?.bottom || '0',
                                top: prop.position?.top,
                                width: prop.size?.width || 'auto',
                                height: prop.size?.height || '50%',
                                objectFit: 'contain',
                                ...(prop.style || {}),
                                ...(prop.position?.center ? { left: '50%', transform: 'translateX(-50%)' } : {})
                            }}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -30 }}
                            transition={{ duration: 0.8 }}
                        />
                    ))}
                </AnimatePresence>
            </div>

            {/* Avatars */}
            <div
                style={{
                    position: 'absolute',
                    bottom: '15%',
                    left: 0,
                    width: '100%',
                    height: 'auto',
                    pointerEvents: 'none',
                    zIndex: 2
                }}
            >
                <AnimatePresence>
                    {avatars && avatars.map((avatar, index) => (
                        <motion.div
                            key={`${index}-${avatar.type}`}
                            initial={{ opacity: 0, x: avatar.position.left ? -50 : 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.8 }}
                            style={{
                                position: 'absolute',
                                left: avatar.position.left,
                                right: avatar.position.right,
                                bottom: 0,
                                ...(avatar.position.center ? { left: '50%', x: '-50%' } : {})
                            }}
                        >
                            <div style={{ transform: avatar.position.center ? 'translateX(-50%)' : 'none' }}>
                                <Avatar type={avatar.type} animation={avatar.animation} />
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default Scene;
