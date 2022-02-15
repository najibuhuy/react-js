import classes from './layout.module.css'
import MainNavigations from './mainNavigation'

function Layout (props) {
    return (
    <div>
        <MainNavigations />
        <main className={classes.main}>{props.children}</main>
    </div>
   
    )
}

export default Layout