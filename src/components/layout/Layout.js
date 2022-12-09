import './Layout.scss'
import Sidebar from '../sidebar/Sidebar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div className='App'>
            <Sidebar />
            <div className='page'>
                {/* get rif of the elements with tags in the classnames later.
                They are only for design purposes. */}
                <span className='tags top-tags'> &lt;body&gt;</span>

                <Outlet/>

                <span className='tags bottom-tag'>
                &lt;/body&gt;
                <br/>
                <span className='bottom-tag-html'>&lt;/html&gt;</span>
                </span>

            </div>
        </div>
    )
}

export default Layout;