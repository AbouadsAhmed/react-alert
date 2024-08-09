import { X } from 'lucide-react'
import './index.scss'
import { ReactNode } from 'react';
import { alertTypes } from '../../../typs';
interface IProp {
    type: alertTypes;
    icon: ReactNode;
    title: string;
    description?: string;
    children?: ReactNode;
}
const Alert = ({ type, icon, title, description, children }: IProp) => {
    return (
        <div className={type}>
            <div className='alert-header'>
                <div className="title">
                    <span>
                        {icon}
                    </span>
                    <h4>{title}</h4>
                </div>
                <X size={20} className='close' />
            </div>
            {children ? children : <p>{description}</p>}
        </div>
    )
}

export default Alert