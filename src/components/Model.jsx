import { motion, AnimatePresence } from 'framer-motion';
import React from 'react';
import { Link } from 'react-router-dom';
import { backdroup, modal} from './Animate'
const Model = ({ showModel, setShowModel }) => {
    return (
        <AnimatePresence exitBeforeEnter>
            {showModel && (
                <motion.div
                    className='backDrop'
                    variants={backdroup}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                >
                    <motion.div className="modal"
                        variants={modal}
                    >
                        <p>want to make anuther pizza</p>
                        <Link to="/" >
                            <button>start again</button>
                        </Link>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default Model