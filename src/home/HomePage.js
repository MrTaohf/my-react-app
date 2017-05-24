/**
 * Created by hongfei.tao on 2017/5/24.
 */
import React, { Component, PropTypes } from 'react';
import { Layout, Menu, Icon } from 'antd';
import './styles.css';

const { Header, Sider, Content, Footer } = Layout;

class HomePage extends Component {

    render() {

        const { sideCollapsed, menuToggle } = this.props;
        const changeToggle = () => {
            menuToggle(sideCollapsed);
        };

        return (
            <Layout className="home-container">
                <Sider trigger={null} collapsible collapsed={ sideCollapsed }>
                    <div className="home-logo"/>
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1">
                            <Icon type="github"/>
                            <span className="nav-text">个人中心</span>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Icon type="video-camera"/>
                            <span className="nav-text">相册</span>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Icon type="upload"/>
                            <span className="nav-text">上传</span>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{ background: '#FFF', padding: 0 }}>
                        <Icon className="home-trigger" type={sideCollapsed ? 'menu-unfold' : 'menu-fold'}
                              onClick={changeToggle}/>
                    </Header>
                    <Content style={{ margin: '24px 16px', padding: 24, background: '#FFF', minHeight: 280 }}>
                        Content
                    </Content>
                    <Footer className="home-footer">
                        Mr.Taohf's github page &copy; hongfei.engineer@gmail.com 2017
                    </Footer>
                </Layout>
            </Layout>
        );
    }
}

HomePage.propTypes = {
    sideCollapsed: PropTypes.bool.isRequired,
    menuToggle: PropTypes.func.isRequired
};

HomePage.defaultProps = {
    sideCollapsed: false,
    menuToggle: null
};

export default HomePage;