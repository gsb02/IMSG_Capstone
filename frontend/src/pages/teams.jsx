import { Link } from 'react-router-dom';
const Teams = () => {
    return (
        <>
            <h1 style={{ textAlign: "center" }}>UMaine Sports Teams</h1>
            <div>
            </div>
            <div style={{ justifyContent: 'center', display: 'flex', marginTop: '350px' }}>
                <Link to="/addTeam">
                    <button style={{ width: '350px', height: '60px', fontSize: '20px', margin: '25px' }}>Add Team</button>
                </Link>
            </div>
        </>
    );
};

export default Teams;