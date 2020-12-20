import React from 'react';
import { useDetectClickOutside } from '../hooks/';

export default props => {

    const { ref, isComponentVisible, setIsComponentVisible } = useDetectClickOutside(false);

    let {
        title,
        buttonChildren, 
        popoverChildren,
        className,
        ...rest
    } = props;

    let classNames = 'rgt-columns-manager-wrapper';
    if (className) classNames += ' ' + className;

    return (
        <div {...rest} ref={ref} className={classNames.trim()}>
            <button className={`rgt-columns-manager-button${isComponentVisible ? ' rgt-columns-manager-button-active' : ''}`} onClick={e => setIsComponentVisible(!isComponentVisible)}>
                { buttonChildren }
            </button>
            <div className={`rgt-columns-manager-popover${isComponentVisible ? ' rgt-columns-manager-popover-open' : ''}`}>
                <span className='rgt-columns-manager-popover-title'>{ title }</span>
                <div className='rgt-columns-manager-popover-body'>
                    { popoverChildren }
                </div>
            </div>
        </div>
    )
}