import AdminHeader from "../components/layout/AdminHeader";
import Promotions from "../components/layout/Promotions";


export default function Admin() {
    
    return (
        <div className="container">
            <AdminHeader />
            <div className="main-login">
                <h1>Add Weekly Promotions</h1>
                <Promotions />
                <Promotions />
            </div>
            
        </div>
    );
}
