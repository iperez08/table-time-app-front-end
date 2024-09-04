import { useNavigate } from 'react-router-dom';

function SignUpAndInButtons() {
    const navigate = useNavigate();

    const handleNewCustomerClick = () => {
        navigate('/customers/signup');
    };

    const handleNewRestaurantClick = () => {
        navigate('/restaurants/signup');
    };

    const handleCustomerSignInClick = () => {
        navigate('/customers/signin');
    };

    const handleRestaurantSignInClick = () => {
        navigate('/restaurants/signin');
    };

    const primaryColor = '#FFFFFF'; 
    const textColor = '#000000'; 
    const activeColor = 'rgba(139, 124, 59, 0.7)'; 

    const buttonStyle = {
        display: 'inline-block',
        padding: '12px 24px',
        margin: '8px',
        fontSize: '18px',
        fontFamily: 'Arial, sans-serif',
        fontWeight: 'bold',
        textAlign: 'center',
        textDecoration: 'none',
        color: textColor,
        backgroundColor: primaryColor,
        border: '2px solid #8B7C3B', 
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
    };

    const buttonActiveStyle = {
        ...buttonStyle,
        backgroundColor: activeColor,
        border: '2px solid #8B7C3B', 
        transform: 'scale(0.98)',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',
    };

    return (
        <div>
            <button
                style={buttonStyle}
                onClick={handleCustomerSignInClick}
                onMouseOut={(e) => (e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor)}
                onMouseDown={(e) => (e.currentTarget.style.backgroundColor = buttonActiveStyle.backgroundColor)}
            >
                Customer Sign In
            </button>
            <button
                style={buttonStyle}
                onClick={handleRestaurantSignInClick}
                onMouseOut={(e) => (e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor)}
                onMouseDown={(e) => (e.currentTarget.style.backgroundColor = buttonActiveStyle.backgroundColor)}
            >
                Restaurant Sign In
            </button>
            <button
                style={buttonStyle}
                onClick={handleNewCustomerClick}
                onMouseOut={(e) => (e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor)}
                onMouseDown={(e) => (e.currentTarget.style.backgroundColor = buttonActiveStyle.backgroundColor)}
            >
                Customer Sign Up
            </button>
            <button
                style={buttonStyle}
                onClick={handleNewRestaurantClick}
                onMouseOut={(e) => (e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor)}
                onMouseDown={(e) => (e.currentTarget.style.backgroundColor = buttonActiveStyle.backgroundColor)}
            >
                Restaurant Sign Up
            </button>
        </div>
    );
}

export default SignUpAndInButtons;
