import { Helmet } from 'react-helmet';

function NotFound() {  
  return (
    <>
        <Helmet>
            <title>MoW Admin | Page introuvable</title>
        </Helmet>

        <div>
            Page introuvable
        </div>
    </>
  );
}

export default NotFound;