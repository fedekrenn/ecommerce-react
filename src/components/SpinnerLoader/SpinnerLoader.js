import './SpinnerLoader.css'

import Spinner from 'react-bootstrap/Spinner'

const SpinnerLoader = () => {


    return (
        <Spinner animation="border" role="status">
            <span className="visually-hidden">Cargando...</span>
        </Spinner>
    )
}

export default SpinnerLoader