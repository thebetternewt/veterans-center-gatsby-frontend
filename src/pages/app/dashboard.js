import React from 'react'
import { Layout, Menu, Icon } from 'antd'
import { logOutUser } from '../../apollo/client'
import { navigate } from 'gatsby'
import PrivateRoute from '../../components/privateRoute'
const { Header, Content, Footer, Sider } = Layout

const logoStyles = {
  height: 32,
  background: `rgba(255,255,255,.2)`,
  margin: 16,
}

const Dashboard = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={broken => {
          console.log(broken)
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type)
        }}
      >
        <div className="logo" style={logoStyles} />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
          <Menu.Item key="1">
            <Icon type="user" />
            <span className="nav-text">nav 1</span>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="video-camera" />
            <span className="nav-text">nav 2</span>
          </Menu.Item>
          <Menu.Item key="3">
            <Icon type="upload" />
            <span className="nav-text">nav 3</span>
          </Menu.Item>
          <Menu.Item
            key="4"
            onClick={async () => {
              await logOutUser()
              navigate('/')
            }}
          >
            <Icon type="logout" />
            <span className="nav-text">Log Out</span>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ background: '#fff', padding: 0 }} />
        <Content style={{ margin: '24px 16px 0' }}>
          <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
            content
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  )
}

export default props => <PrivateRoute component={Dashboard} {...props} />
