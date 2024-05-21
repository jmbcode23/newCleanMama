import { FloatButton } from "antd";
import SliderCarousel from "./components/Carousel";
import Navbar from "./components/Navbar";
import './index.css';
import { UpOutlined, WhatsAppOutlined } from "@ant-design/icons";
import Content from "./components/Content";
import Footer from "./components/Footer";

function App() {

    return (

        <div className="app">
            {/* <Navbar /> */}
            <SliderCarousel />
            <Content />
            <Footer />
            <FloatButton.Group
                shape="circle"
                style={{
                    right: 24,
                }}
            >
                <FloatButton href="https://wa.me/243819471244" target="_blank" icon={<WhatsAppOutlined style={{ color: 'green' }} />} tooltip="WhatsApp" />
                <FloatButton.BackTop icon={<UpOutlined />} visibilityHeight={400} tooltip="Rentrer au Top" />
            </FloatButton.Group>
        </div>
    )
};

export default App;