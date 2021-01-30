
import Header from './Header';
// import Sidebar from './Sidebar';


export default function Layout({ children }) {
  return (
    <>

      <body>

        <div id="wrapper">

          {/* <Sidebar/> */}

          <div id="page-content-wrapper">

            <Header />

            <div className="container-fluid">
              <div className="app-content--inner__wrapper">{children} </div>

            </div>
          </div>

        </div>


      </body>

    </>
  );
}
