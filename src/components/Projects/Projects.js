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
            <motion.ul className='projects'
                initial={{ opacity: 0.2 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 1, duration: 3 }}
                viewport={{ once: true }}
            >
                <li className='list'>
                    <Link className='normal' to='#'>
                        <div style={{ background: '#3f4bea', width: '100%', height: '100%', }}>
                            <span>Project 1</span>
                        </div>
                    </Link>
                    <div className='info'>
                        <h3>Single-origin coffee whatever</h3>
                        <p>Organiser des Collectes</p>
                    </div>
                </li>
                <li className='list'>
                    <Link className='normal' to='#'>
                        <div style={{ background: '#907bd3', width: '100%', height: '100%', }}>
                            <span>Project 2</span>
                        </div>
                    </Link>
                    <div className='info'>
                        <h3>Single-origin coffee whatever</h3>
                        <p>Triage des Déchets</p>
                    </div>
                </li>
                <li className='list'>
                    <Link className='normal' to='#'>
                        <div style={{ background: '#ddabbd', width: '100%', height: '100%', }}>
                            <span>Project 3</span>
                        </div>
                    </Link>
                    <div className='info'>
                        <h3>Single-origin coffee whatever</h3>
                        <p>Trouver des Acheteurs</p>
                    </div>
                </li>
                <li className='list'>
                    <Link className='normal' to='#'>
                        <div style={{ background: '#907cd3', width: '100%', height: '100%', }}>
                            <span>Project 4</span>
                        </div>
                    </Link>
                    <div className='info'>
                        <h3>Single-origin coffee whatever</h3>
                        <p>Poubelles Publiques</p>
                    </div>
                </li>
            </motion.ul>
        </>
    );
}

export default Projects;