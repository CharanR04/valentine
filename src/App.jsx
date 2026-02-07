import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';
import Scene from './components/Scene';
import StoryText from './components/StoryText';
import Proposal from './components/Proposal';
import Success from './components/Success';
import storyScenes from './data/storyScenes';

function App() {
  const [sceneIndex, setSceneIndex] = useState(0);
  const [phase, setPhase] = useState('story'); // 'story', 'proposal', 'success'
  const [clickHearts, setClickHearts] = useState([]);

  // Create hearts that pour from click location
  const createClickHearts = useCallback((x, y) => {
    const newHearts = [];
    const heartCount = 8 + Math.floor(Math.random() * 5); // 8-12 hearts per click

    for (let i = 0; i < heartCount; i++) {
      newHearts.push({
        id: Date.now() + i,
        x: x,
        y: y,
        size: 15 + Math.random() * 20,
        delay: i * 0.05,
        xOffset: (Math.random() - 0.5) * 150,
        rotation: Math.random() * 360,
      });
    }

    setClickHearts(prev => [...prev, ...newHearts]);

    // Clean up hearts after animation
    setTimeout(() => {
      setClickHearts(prev => prev.filter(h => !newHearts.find(nh => nh.id === h.id)));
    }, 2000);
  }, []);

  const handleClick = (e) => {
    // Create heart effect at click position
    createClickHearts(e.clientX, e.clientY);

    if (phase === 'story') {
      if (sceneIndex < storyScenes.length - 1) {
        setSceneIndex(sceneIndex + 1);
      } else {
        setPhase('proposal');
      }
    }
  };

  const handleYes = (e) => {
    e.stopPropagation();
    createClickHearts(e.clientX, e.clientY);
    setPhase('success');
  };

  return (
    <div className="app-container" onClick={handleClick}>
      {/* Background Scene */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
        <Scene sceneData={storyScenes[sceneIndex] || storyScenes[storyScenes.length - 1]} />
      </div>

      {/* Click Hearts Effect */}
      <AnimatePresence>
        {clickHearts.map((heart) => (
          <motion.div
            key={heart.id}
            initial={{
              opacity: 1,
              scale: 0,
              x: heart.x,
              y: heart.y,
              rotate: 0
            }}
            animate={{
              opacity: [1, 1, 0],
              scale: [0, 1.2, 1],
              x: heart.x + heart.xOffset,
              y: heart.y + 150,
              rotate: heart.rotation
            }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 1.5,
              delay: heart.delay,
              ease: "easeOut"
            }}
            style={{
              position: 'fixed',
              fontSize: `${heart.size}px`,
              pointerEvents: 'none',
              zIndex: 100,
              left: 0,
              top: 0,
            }}
          >
            💖
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Content overlay */}
      <div className="content-wrapper" style={{ position: 'relative', zIndex: 10, pointerEvents: 'none' }}>
        {phase === 'story' && (
          <>
            <StoryText key={sceneIndex} text={storyScenes[sceneIndex].text} isActive={true} />
            <div className="hint-text">Tap anywhere to continue</div>
          </>
        )}

        {phase === 'proposal' && (
          <div style={{ pointerEvents: 'auto' }}>
            <Proposal onYes={handleYes} />
          </div>
        )}

        {phase === 'success' && <Success />}
      </div>
    </div>
  );
}

export default App;
