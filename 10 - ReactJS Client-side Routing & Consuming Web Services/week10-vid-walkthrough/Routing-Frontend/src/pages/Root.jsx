/****
 * This function provides the initial page and is
 * rendered when the frontend is served through the terminal.
 * 
 * Last update: Nov 17, 2024
 */
import { Link } from 'react-router-dom';
import Footer from './components/Footer';

export default function Root() {
    return(
        <>
            <section>
                <h2>ReactJS Client-side routing & consuming web services</h2>
            </section>

            <section className="topics">
                <h3>Topics Covered:</h3>
                <ul>
                    <li><Link to="/routing-info">Client-side routing</Link></li>
                    <li><Link to="/games">Fetching data from a back-end API to display it on the React app</Link></li>
                </ul>
            </section>

            <Footer />
        </>
    )
}