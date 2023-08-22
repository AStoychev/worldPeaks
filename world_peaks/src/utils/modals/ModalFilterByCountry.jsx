import
// countryA, countryB, countryC, countryDtoF, countryGtoH, countryItoJ, countryKtoL, countryM, countryNtoO, countryP, countryR,
// countryS, countryT, countryUtoV
{ allCountries }
    from '../constants/constants';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import styles from './ModalFilterByCountry.module.css'

export const ModalFilterByCountry = ({
    show,
    handleShow,
    handleClose,
    onCountryChange,
    onCountryFilter
}) => {

    return (
        <div>
            <button className={styles.modalButton} variant="primary" onClick={handleShow}>
                Select By Country
            </button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Select Countries</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ overflow: "auto", maxHeight: "350px" }}>
                    {allCountries.map(item => (
                        <div key={item}>
                            <label className={styles.labelBrand}>
                                <input type="checkbox" value={item} onChange={onCountryChange} className={styles.inputStyle} />
                                {item}
                            </label>
                        </div>
                    ))}
                    {/* <div>
                        <h5>A</h5>
                        {countryA.map((x) => (
                            <div key={x}>{x}</div>
                        )
                        )}
                    </div>

                    <div>
                        <h5>B</h5>
                        {countryB.map((x) => (
                            <div key={x}>{x}</div>
                        )
                        )}
                    </div>

                    <div>
                        <h5>C</h5>
                        {countryC.map((x) => (
                            <div key={x}>{x}</div>
                        )
                        )}
                    </div>

                    <div>
                        <h5>D-F</h5>
                        {countryDtoF.map((x) => (
                            <div key={x}>{x}</div>
                        )
                        )}
                    </div> */}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={onCountryFilter}>
                        Show Peaks
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}