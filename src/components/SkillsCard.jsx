import React from 'react';
import { motion } from 'framer-motion';



const SkillsCard = ({ image }) => {
    return (
        <div className=' col-6 col-md-3'>
            <motion.div initial={{ y:40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                    duration: 2,
                   
                }}

                className="skills_card">
                <img src={image} alt="" />
            </motion.div>

        </div>
    )
}

export default SkillsCard