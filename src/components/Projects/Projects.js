import { Link } from 'react-router-dom';
import './ProjectsStyle.css';
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';


function Projects() {
    useEffect(() => {
        const nodes = [].slice.call(document.querySelectorAll('li'), 0);
        const directions = { 0: 'top', 1: 'right', 2: 'bottom', 3: 'left' };
        const classNames = ['in', 'out'].map(p => Object.values(directions).map(d => `${p}-${d}`)).reduce((a, b) => a.concat(b));

        const getDirectionKey = (ev, node) => {
            const { width, height, top, left } = node.getBoundingClientRect();
            const l = ev.pageX - (left + window.pageXOffset);
            const t = ev.pageY - (top + window.pageYOffset);
            const x = l - width / 2 * (width > height ? height / width : 1);
            const y = t - height / 2 * (height > width ? width / height : 1);
            return Math.round(Math.atan2(y, x) / 1.57079633 + 5) % 4;
        };

        class Item {
            constructor(element) {
                this.element = element;
                this.element.addEventListener('mouseover', ev => this.update(ev, 'in'));
                this.element.addEventListener('mouseout', ev => this.update(ev, 'out'));
            }

            update(ev, prefix) {
                this.element.classList.remove(...classNames);
                this.element.classList.add(`${prefix}-${directions[getDirectionKey(ev, this.element)]}`);
            }
        }


        nodes.forEach(node => new Item(node));
    }, []);

    return (
        <>
            <motion.div className='projects'
                initial={{ opacity: 0.2 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 1, duration: 3 }}
                viewport={{ once: true }}
            >
            <p>Let us do the dirty work <span><Link to={[]} style={{ textDecoration: 'none'}}>Get a Quote</Link></span></p>
            </motion.div>
        </>
    );
}

export default Projects;