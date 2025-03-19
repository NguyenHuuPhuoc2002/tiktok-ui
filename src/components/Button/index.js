import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({
    to,
    href,
    large = false,
    children,
    text = false,
    small = false,
    rounded = false,
    outline = false,
    disabled = false,
    primary = false,
    onClick,
    classNames,
    ...passProps
}) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    };

    if (disabled) {
        delete props.onClick;
    }

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    const classes = cx('wrapper', {
        primary,
        outline,
        text,
        [classNames]: classNames,
        small,
        rounded,
        large,
        disabled,
    });

    return (
        <Comp className={classes} {...props}>
            <span> {children}</span>
        </Comp>
    );
}

export default Button;
