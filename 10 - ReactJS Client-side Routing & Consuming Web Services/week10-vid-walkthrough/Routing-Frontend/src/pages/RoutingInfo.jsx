import { Link } from 'react-router-dom';

export default function RoutingInfo() {
    return(
        <>
            <section>
                <h2>Client-side routing</h2>
            </section>

            <section className='article'>
                <h3>Routing</h3>
                <p>
                    Up until now our React JS apps have only had one page, the homepage ‘/’, which we accessed at
                    http://locahost:3000. Now we’ll add front-end routing to give our web app more pages.
                    Generate a React JS app and leave only index.js in the src/ folder. Then install
                    react-router-dom in the project folder
                </p>

                <bdi className='syntax'>
                    <span>npm create vite@latest</span><br />
                    <span>npm install --save react-router-dom</span>
                </bdi>

                <p>
                    createBrowserRouter() allows us to define an array of routes. For each route, we can define a path, and
                    what element to be displayed.
                </p>

                <p>
                    Create a folder called pages/. This is where we’ll store the pages of the React app. Inside, create a
                    component called Root.js and add some navigation items and import createBrowserRouter and RouterProvider 
                    to create a Browser Router inside Root.js. Once you're done, let's customize our pages.
                </p>

                <h3>To test this web application</h3>
                <p>
                    You will need Node.js installed on your computer, along with a working MongoDB instance that contains a 'GAMES' collection.
                </p>
            </section>


            <Link to={'/'}>Go back</Link>
        </>
    )
}