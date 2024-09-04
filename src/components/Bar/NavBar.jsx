import SignUpAndInButtons from "../Button/SignUpAndInButtons";
import CustomerDashboardButton from "../Button/CustomerDashboardButton";
import EditRestaurantButton from "../Button/EditRestaurantButton";
import SignOutButton from "../Button/SignOutButton";
import { useLocation } from "react-router-dom";
import './NavFooter.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function NavBar({ methods }) {
    const location = useLocation();

    const navStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '10px 20px',
        backgroundColor: '#000000', 
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.3)', 
    };

    const iconStyle = {
        fontSize: '40px', 
        marginRight: '8px',
        color: '#FFFFFF', 
    };

    const titleStyle = {
        display: 'flex',
        alignItems: 'center',
        fontSize: '40px', 
        color: '#FFFFFF',
    };

    return (
        <nav style={navStyle}>
            <h1 style={titleStyle}>
                <i className="fas fa-utensils" style={iconStyle}></i>
                TableTime
            </h1>
            {location.pathname === '/' && <SignUpAndInButtons />}
            {location.pathname === '/customers/dashboard' && <SignOutButton methods={methods} />}
            {location.pathname === '/customers/restaurants/:restaurantname' && (
                <>
                    <SignOutButton />
                    <CustomerDashboardButton />
                </>
            )}
            {location.pathname === '/restaurants/dashboard' && (
                <>
                    <SignOutButton />
                    <EditRestaurantButton />
                </>
            )}
        </nav>
    );
}

export default NavBar;
