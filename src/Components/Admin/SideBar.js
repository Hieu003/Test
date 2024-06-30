import 'react-pro-sidebar/dist/css/styles.css';
import {
    ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader,
    SidebarFooter,
    SidebarContent,
} from 'react-pro-sidebar';
import { FaTachometerAlt, FaGem, FaList, FaGithub, FaRegLaughWink, FaHeart } from 'react-icons/fa';
import sidebarBg from '../../asset/Image/bg2.jpg';
import { BsFillQuestionSquareFill } from "react-icons/bs";
import { MdDashboard } from "react-icons/md";
import "../Admin/Admin.scss"

const SideBar = (props) => {

    const { image, collapsed, toggled, handleToggleSidebar } = props
    return (
        <div>
            <ProSidebar
                image={sidebarBg}
                collapsed={collapsed}
                toggled={toggled}
                breakPoint="md"
                onToggle={handleToggleSidebar}
            >
                <SidebarHeader>
                    <div
                        style={{
                            padding: '24px',
                            textTransform: 'uppercase',
                            fontWeight: 'bold',
                            fontSize: 14,
                            letterSpacing: '1px',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                        }}
                    >
                        <BsFillQuestionSquareFill size={'2em'} color="white" className='question-icon' />
                        <span className='sidebar-header-title'>Question Web</span>
                    </div>
                </SidebarHeader>

                <SidebarContent>
                    <Menu iconShape="circle">
                        <MenuItem
                            icon={<MdDashboard />}
                        >
                            DashBoard
                        </MenuItem>
                    </Menu>
                    <Menu iconShape="circle">
                        <SubMenu icon={<FaGem />} title={"Feature"}>
                            <MenuItem>Quản lý người dùng</MenuItem>
                            <MenuItem> Quản lý câu hỏi</MenuItem>
                            <MenuItem>Quản lý bài Quiz</MenuItem>
                        </SubMenu>

                    </Menu>
                </SidebarContent>

                <SidebarFooter style={{ textAlign: 'center' }}>
                    <div
                        className="sidebar-btn-wrapper"
                        style={{
                            padding: '20px 24px',
                        }}
                    >
                        <a
                            href="https://github.com/Hieu003"
                            target="_blank"
                            className="sidebar-btn"
                            rel="noopener noreferrer"
                        >
                            <FaGithub />
                            <span style={{ whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>
                                Creator
                            </span>
                        </a>
                    </div>
                </SidebarFooter>
            </ProSidebar>
        </div>
    )
}

export default SideBar