import React from 'react'
import { Layout, Menu, Icon } from 'antd'
import { logOutUser, getAuthenticatedUser } from '../../apollo/client'
import { navigate } from 'gatsby'
import PrivateRoute from '../../components/privateRoute'
const { Header, Content, Footer, Sider } = Layout

const logoStyles = {
  height: 32,
  background: `rgba(255,255,255,.2)`,
  margin: 16,
}

const Dashboard = () => {
  const user = getAuthenticatedUser()

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
            <span className="nav-text">Profile</span>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="video-camera" />
            <span className="nav-text">Needs</span>
          </Menu.Item>
          <Menu.Item
            key="3"
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
        <Header
          style={{ background: '#fff', padding: '0 1rem', minWidth: 320 }}
        >
          <h2>Hello, {user && user.firstName}!</h2>
        </Header>
        <Content style={{ margin: '24px 16px 0', minWidth: 288 }}>
          <div
            style={{
              padding: 24,
              background: '#fff',
              minHeight: 360,
            }}
          >
            content
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Veterans Center © {new Date().getFullYear()}
          <br />
          Created by BIS 8753
        </Footer>
      </Layout>
    </Layout>
  )
}

export default props => <PrivateRoute component={Dashboard} {...props} />
