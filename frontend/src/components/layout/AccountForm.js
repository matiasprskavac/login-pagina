import React from 'react';
import '../../styles/style.css'

const AccountForm = () => {
    return (
        <div className="form-login">
            <h5>Create an account to access exclusive promotions and rewards or log in to start enjoying them.</h5>
            <form className="form-content-login">
                <a className="btn-l" href="/"> Login </a>
                <a className="btn-l" href="/"> Register </a>
            </form>
        </div>
    );
};

export default AccountForm;