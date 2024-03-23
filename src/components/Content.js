import { Link } from 'react-scroll';
import { Card, List } from 'antd';
import Projects from './Projects/Projects';
import { motion } from 'framer-motion';
import AboutActivité from "./apropos&activite";


const data = [
    'Your office is the heartbeat of your business, and our expertly tailored commercial office cleaning services hold the key to unlocking your team’s full productivity potential. We offer top-notch office business cleaning services that elevate your workspace to a whole new level. Our experienced professionals excel in crafting customised office cleaning schedules that seamlessly integrate thorough one-time deep cleaning and ongoing maintenance.',
    'With our expertise, we banish dust, disinfect surfaces, and create a germ-free, hygienic workspace for your team. Our office cleaning services include cleaning workstations, conference rooms, restrooms, and common areas found in typical office settings. Additionally, our services include waste management, pest control, and hygiene services, ensuring your office environment is clean, organised, and free from pests and germs. Elevating office building cleaning services has been our specialty for over 25 years, ensuring that office spaces like yours are always at their best.',
];
const cards = [
    {
        title: 'Once Off Office Cleaning Services',
        content: 'Are you in need of a thorough and once off cleaning service? We’ll ensure your workspace is sparkling clean and inviting, making an excellent impression on clients and employees alike.',
    },
    {
        title: 'Office Contract Cleaning Services',
        content: 'Tailor your office cleaning timetable with our adaptable contract cleaning services. Whether you require daily, weekly or monthly general office cleaning our reliable team ensures consistent office cleanliness and maintenance.',
    },
    {
        title: 'Office Cleaning Training Services',
        content: 'Our office cleaning training program is tailored to empower your staff. From mastering effective cleaning techniques to safe equipment usage and essential safety guidelines, our training encompasses every facet of office cleaning',
    },
    {
        title: 'Corporate Cleaning Services',
        content: 'Our skilled team is committed to ensuring every facet of your office shines, from executive suites to communal areas. With us, your corporate space will exude cleanliness and leave a positive mark on both clients and staff.',
    },
    {
        title: 'Office Kitchen Cleaning Services',
        content: 'Our commercial kitchen cleaning is expertly crafted to remove grease, grime, and harmful bacteria, ensuring your office kitchen is a safe and spotless space for food preparation.',
    },
    {
        title: 'Office Furniture Cleaning',
        content: 'From office carpet cleaning to office chair cleaning, we’ve got your furniture needs covered.',
    },
];
function Content() {

    return (
        <motion.div className='Content'
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            exit={{ x: 1 }}
        >
            <h1 className='mainH1' >Plus Jamais de tels déchets</h1>
            <List
                size="large"
                dataSource={data}
                renderItem={(item) => <List.Item style={{ fontSize: 18, color: 'rgb(95, 94, 94)' }}>{item}</List.Item>}
            />
            <Link to='partenaires' spy={true} smooth={true} offset={50} duration={500}>Go to partenaires</Link>
            <List
                grid={{ gutter: 16, xs: 1, sm: 2, md: 3, lg: 3, xl: 3, }}
                dataSource={cards}
                renderItem={(item) => (
                    <List.Item>
                        <motion.div className='gradient'
                            whileHover={{ y: -5, }}
                        >
                            <Card
                                className='cart'
                                style={{ height: 350, color: 'rgb(59, 92, 165)', borderRadius: 50 }}
                                hoverable
                                title={<div className='cardTitle'> {item.title}</div>}
                            >
                                {item.content}
                            </Card>
                        </motion.div>

                    </List.Item>
                )}
            />
            <div className='thirdSection' style={{ fontSize: 18, columnGap: 60, display: 'flex' }}>

                <div style={{ color: 'rgb(95, 94, 94)' }}>
                    <h1 style={{ color: '#5E8000' }}>Office Cleaning Services Near You</h1>
                    Not only do we offer top-notch office cleaning services from Johannesburg, Durban to Cape Town, but we also provide our services nationwide across South Africa.<br /> <br />

                    No matter where your office is located, whether in Durbanville, Randburg or Pretoria, our team of experts will work with you to create a customised cleaning plan that fits your unique needs. And with our solution-focused approach, we guarantee that your office will be spotless and ready for business.
                </div>
                <div style={{ color: 'rgb(95, 94, 94)' }}>
                    <h1 style={{ color: '#5E8000' }}>Office Cleaning Services Prices</h1>
                    We offer competitive rates for a clean and tidy office that won’t break the bank. Our pricing is based on the size of your office and the frequency of cleaning, so you only pay for what you need. If you’re looking for an office cleaning services quote, we’d be happy to provide one.<br /> <br />

                    Contact us and let us know the size of your office and your cleaning needs, and we’ll give you an estimate. And don’t worry, our office cleaning costs per square metre are reasonable, especially in South Africa.
                </div>
            </div>
            <Projects />

            <div id='partenaires' style={{ color: 'rgb(95, 94, 94)' }}>
                <h1 style={{ color: '#5E8000' }}>Nos partenaires</h1>
                <ul>
                    <li style={{ color: '#5E8000' }}>HB7 Transport & Logistics</li>
                </ul>

                <span>Une Empire pour toutes vos besoins en nouvelle technologie de l'information, en décoration, en infographie, en événements</span><br /> <br />

                <ul>
                    <li style={{ color: '#5E8000' }}>VreConcept</li>
                </ul>

                <span>Partenaire idéale de voyage, avec Travel Now Agency vous avez le Monde à votre Porter. voyager partout dans le monde avec toute facilité et simplicité</span><br /> <br />
                <ul>
                    <li style={{ color: '#5E8000' }}>Now Realestate Group</li>
                </ul>

                <span>Now Real Estate Group est une compagne d'Investissment en Immobilier à l'Etranger, entre et autres Afrique du Sud, Grèce, Chypre etc . Elle propose des solutions et des services pour répondre à tous vos besoins d'investissments immobiliers.</span><br /> <br />
                <ul>
                    <li style={{ color: '#5E8000' }}>Congo Education Expo</li>
                </ul>

                <span>The first education exposition concentrated on promoting foreign education in Democratic Republic of Congo. The fair is based in Kinshasa, which is surrounded by populous cities, with a total estimated population of 25 million people in a close radius.</span><br /> <br />

            </div>
            <AboutActivité />

        </motion.div>
    )
};

export default Content;