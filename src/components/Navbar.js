import React, { useState } from 'react';
import { Button, Menu, ConfigProvider } from 'antd';
import {
    ContainerOutlined,
    DesktopOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    PieChartOutlined,
} from '@ant-design/icons';
// import { useNavigate } from 'react-router-dom';


function getItem(label, key, icon,) {
    return {
        key,
        icon,
        label,
    };
}
const items = [
    getItem('Accueil', '/', <PieChartOutlined />),
    getItem('services', '/services', <DesktopOutlined />),
    getItem('A propos de CleanMama', '/about', <ContainerOutlined />),
    getItem('Contact', '/contact', <ContainerOutlined />),
    getItem('Activites', '/activites', <ContainerOutlined />),
    getItem('Nos partenaires', '/partenaires', <ContainerOutlined />),
];


function Navbar() {
    const [collapsed, setCollapsed] = useState(true);
    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };
    // const navigate = useNavigate();
    return (
        <div style={{ width: 256, position: "fixed", zIndex: 1, }} >

            <ConfigProvider
                theme={{
                    components: {
                        Menu: {
                            collapsedIconSize: 20,
                            darkItemColor: 'black',
                            darkItemBg: 'white',
                            darkItemHoverBg: '#c4bdda9c',
                            darkItemSelectedBg: '#c4bdda',
                            darkItemHoverColor: 'black',
                            darkItemSelectedColor: 'black',
                        },
                        Button: {
                            defaultBg: '#c4bdda9c',
                            defaultColor: 'black',
                        },
                    },
                }}
            >
                <Button className='toggleButton' onClick={toggleCollapsed} >
                    {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                </Button>

                <Menu

                    // onClick={({ key }) => {
                    //     if (key === "/partenaires") {
                    //         //do this
                    //     } else {
                    //         navigate(key);
                    //     }
                    // }}
                    theme='dark'
                    defaultSelectedKeys={['/']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    inlineCollapsed={collapsed}
                    items={items}
                />
            </ConfigProvider>
        </div>
    );
};
export default Navbar;