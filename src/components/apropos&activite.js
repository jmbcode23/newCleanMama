import portrait from '../images/portrait-of-a-happy-male-janitor-with-cleaning-equipment-in-office.jpg';
import vacuum from '../images/vacuum_cleaner.jpg';
import './apropos.css';
import Pdf from './PDF/CV Jonathan Milolo Beya 3.pdf';
import { Collapse, Space, ConfigProvider } from 'antd';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const MotionCollapse = motion(Collapse);

const text =
    `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const appearOnScrollVariant = {
    hidden1: { opacity: 0, x: -100 },
    visible1: { opacity: 1, x: 0, transition: { duration: 1, delay: 1 } },
    hidden2: { opacity: 0, x: 100 },
    visible2: { opacity: 1, x: 0, transition: { duration: 1, delay: 1 } }

}
const staggeredVariant = {
    initial: { opacity: 0, y: 100 },
    animate: { opacity: 1, y: 0, transition: { duration: 2 } },
}

function AboutActivité() {
    return (
        <motion.div style={{ color: 'white' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 1 }}
        >
            <div className='grid-container'>
                <img style={{ width: 500, borderRadius: 10 }} src={vacuum} alt='cleaner' />
                <div>
                    <h1>ABOUT</h1>
                    <h2>CLEAN MAMA</h2>
                    <p>L'idée de la creation de la société Clean Mama Sarl est née par le soucis
                        de rendre notre environnement propre et vivable et de la quantité de
                        déchets qu'ont retrouve dans les rues de la Ville Province de Kinshasa.
                        Spécialisée dans la récupération, la trie et la valorisation des déchets
                        de tout genre, nous sommes une entreprise de taille humaine alliant
                        disponibilité, réactivité, traçabilité, moyens humains et techniques.
                        Ainsi nous assurons à travers une gamme complète de services et de
                        prestations qui requièrent un savoir-faire hautement qualifié : la collecte
                        des déchets, le triage vos produits déclassés, la ventes des déchets pour
                        de fin de recyclage.
                    </p>
                </div>
            </div>
            <div className='grid-container'>
                <motion.div
                    variants={appearOnScrollVariant}
                    initial='hidden1'
                    whileInView='visible1'
                    viewport={{ once: true }}
                >
                    <h1>NOTRE MISSION</h1>
                    <p>Nous nous fixons pour Mission de lutter contre l'insalubrité par une
                        gestion complète des déchets depuis nos ménages jusqu'à l'usine de
                        recyclage pour leur traitement.
                        Notre savoir-faire et la diversité des matières que nous traitons, nous
                        permettent de bâtir des relations privilégiées aussi bien en amont avec
                        nos fournisseurs qu’en aval avec nos clients.
                        En accord avec toutes les législations en vigueur en matière de collecte
                        et de traitement des déchets industriels, nos sites sont agréés et répondent
                        aux normes européennes.
                    </p>
                </motion.div>
                <motion.img style={{ width: 500, borderRadius: 10 }} src={portrait} alt='cleaner'
                    variants={appearOnScrollVariant}
                    initial='hidden2'
                    whileInView='visible2'
                    viewport={{ once: true }}
                />
            </div>
            <div style={{ textAlign: "center", }}>
                <h1>NOS ACTIVITES</h1>
                <h3>COMMENT GERER LES DECHETS ?</h3>
                <ConfigProvider
                    theme={{
                        components: {
                            Collapse: {
                                contentBg: '#c4bdda',
                                headerBg: '#5e8000',
                            }
                        },
                    }}
                >
                    <Space direction="vertical">
                        <MotionCollapse
                            variants={staggeredVariant}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true }}
                            collapsible="header"
                            defaultActiveKey={['1']}
                            items={[
                                {
                                    key: '1',
                                    label: 'Collecte des déchets',
                                    children: <p>{text}</p>,
                                },
                            ]}
                        />
                        <MotionCollapse
                            variants={staggeredVariant}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true }}
                            collapsible="header"
                            defaultActiveKey={['2']}
                            items={[
                                {
                                    key: '2',
                                    label: 'Trie des déchets',
                                    children: <p>{text}</p>,
                                },
                            ]}
                        />
                        <MotionCollapse
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true }}

                            variants={staggeredVariant}
                            collapsible="header"
                            defaultActiveKey={['3']}
                            items={[
                                {
                                    key: '3',
                                    label: 'Vente de déchets',
                                    children: <p>{text}</p>,
                                },
                            ]}
                        />
                        <Link to={Pdf} target="_blank">En savoir plus</Link>

                    </Space>
                </ConfigProvider>
            </div>
        </motion.div>
    );
}

export default AboutActivité;