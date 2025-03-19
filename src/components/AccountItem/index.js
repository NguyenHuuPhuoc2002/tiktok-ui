import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://th.bing.com/th/id/OIP._Hdxq8FU_gflNcstIZTtGgHaLI?rs=1&pid=ImgDetMain"
                alt="Hoa"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span> Nguyen Van A</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>nguyenvana</span>
            </div>
        </div>
    );
}

export default AccountItem;
