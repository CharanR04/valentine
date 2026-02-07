import { motion } from 'framer-motion';

// SVG Avatar component - cartoon style characters
const Avatar = ({ type, animation }) => {
    const isHim = type === 'him';

    // Animation variants
    const getAnimationStyle = () => {
        switch (animation) {
            case 'walking':
                return { animation: 'bobbing 0.8s infinite alternate ease-in-out' };
            case 'talking':
                return { animation: 'talking 0.5s infinite alternate ease-in-out' };
            case 'jumping':
                return { animation: 'jump 0.6s infinite ease-in-out' };
            default:
                return {};
        }
    };

    return (
        <motion.div
            style={getAnimationStyle()}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
        >
            <svg width="200" height="400" viewBox="0 0 200 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <filter id="shadow" x="-50%" y="-20%" width="200%" height="140%">
                        <feGaussianBlur in="SourceAlpha" stdDeviation="2" />
                        <feOffset dx="2" dy="2" result="offsetblur" />
                        <feFlood floodColor="rgba(0,0,0,0.3)" />
                        <feComposite in2="offsetblur" operator="in" />
                        <feMerge>
                            <feMergeNode />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>

                {isHim ? (
                    // Him - Boy avatar (blue outfit, glasses)
                    <g filter="url(#shadow)">
                        {/* Legs */}
                        <path d="M70,300 L70,400 L90,400 L90,300 Z" fill="#1e293b" />
                        <path d="M110,300 L110,400 L130,400 L130,300 Z" fill="#1e293b" />

                        {/* Body - Blue shirt */}
                        <path d="M60,150 L140,150 L140,300 L60,300 Z" fill="#3b82f6" rx="10" />

                        {/* Arms */}
                        <path d="M60,150 L40,250 L60,260 L80,160 Z" fill="#3b82f6" /> {/* Left arm */}
                        <path d="M140,150 L160,250 L140,260 L120,160 Z" fill="#3b82f6" /> {/* Right arm */}

                        {/* Head */}
                        <circle cx="100" cy="110" r="40" fill="#fca5a5" />

                        {/* Hair */}
                        <path d="M60,100 Q100,60 140,100 L140,120 L60,120 Z" fill="#1f2937" />

                        {/* Glasses */}
                        <g>
                            <circle cx="85" cy="115" r="12" fill="none" stroke="black" strokeWidth="2" />
                            <circle cx="115" cy="115" r="12" fill="none" stroke="black" strokeWidth="2" />
                            <line x1="97" y1="115" x2="103" y2="115" stroke="black" strokeWidth="2" />
                        </g>

                        {/* Smile */}
                        <path d="M85,135 Q100,145 115,135" fill="none" stroke="#be123c" strokeWidth="2" />
                    </g>
                ) : (
                    // Her - Girl avatar (teal dress, long hair)
                    <g filter="url(#shadow)">
                        {/* Hair (long, behind body) */}
                        <path d="M50,110 Q100,50 150,110 L160,300 Q100,320 40,300 Z" fill="#1f2937" />

                        {/* Body - Teal dress */}
                        <path d="M70,150 L130,150 L150,380 L50,380 Z" fill="#2dd4bf" />

                        {/* Arms */}
                        <path d="M70,160 L50,260 L65,270 L85,170 Z" fill="#fca5a5" /> {/* Left arm */}
                        <path d="M130,160 L150,260 L135,270 L115,170 Z" fill="#fca5a5" /> {/* Right arm */}

                        {/* Head */}
                        <circle cx="100" cy="110" r="35" fill="#fca5a5" />

                        {/* Hair bangs */}
                        <path d="M65,110 Q100,120 135,110 Q120,70 80,70 Z" fill="#1f2937" />

                        {/* Eyes (closed/happy) */}
                        <path d="M85,110 Q90,105 95,110" fill="none" stroke="#1f2937" strokeWidth="2" />
                        <path d="M105,110 Q110,105 115,110" fill="none" stroke="#1f2937" strokeWidth="2" />

                        {/* Smile */}
                        <path d="M90,130 Q100,140 110,130" fill="none" stroke="#be123c" strokeWidth="2" />
                    </g>
                )}
            </svg>
        </motion.div>
    );
};

export default Avatar;
