import { CgSpinner } from 'react-icons/cg';
import s from './Spinner.module.css';

export const Spinner = ({ size }) => {
    return <CgSpinner size={size} className={s.spinner} />;
};