import React, {useContext} from 'react';
import {CSSTransition} from 'react-transition-group'
import {AlertContext} from '../context/alert/AlertContext';
import {MatchPath} from 'react-router-dom'

export const Alert = () => {
    const styles = {
        button: {
            background: 'none',
            color: 'inherit',
            border: 'none',
            padding: 0,
            cursor: 'pointer',
            outline: 'inherit',
            width: '100%'
        }
    }

    const {alert, hide} = useContext(AlertContext)
    //
    // const routerlink = path
    //


    // if(curren)

    return (
        <CSSTransition in={alert.visible} timeout={{enter: 500, exit: 350}} classNames={'alert'} appear mountOnEnter unmountOnExit>
            <div className="">
                <button style={styles.button} onClick={hide}>
                    <div className={`alert alert-${alert.type || 'warning'} d-flex align-items-center`}>
                        {/*svg icon*/}
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                             className="bi bi-exclamation-triangle-fill flex-shrink-0 me-2" viewBox="0 0 16 16"
                             role="img"
                             aria-label="Warning:">
                            <path
                                d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                        </svg>
                        <div>
                            <strong>Attention!</strong> &nbsp;
                            {alert.text}
                        </div>
                    </div>
                </button>
            </div>
        </CSSTransition>
    )
}
