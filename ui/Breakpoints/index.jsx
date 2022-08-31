import useMediaQuery from '@material-ui/core/useMediaQuery';

export const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery('(min-width:991px)');
    return isDesktop ? children : null
}

export const Tablet = ({ children }) => {
    const isTablet = useMediaQuery('(minWidth:768px, maxWidth: 991px)');
    return isTablet ? children : null
}

export const Mobile = ({ children }) => {
    const isMobile = useMediaQuery('(max-width:767px)');
    return isMobile ? children : null
}

export const DesktopTablet = ({ children }) => {
    const query = useMediaQuery('(min-width:768px)');
    return query ? children: null;
}

export const TabletMobile = ({ children }) => {
    const query = useMediaQuery('(max-width:991px)');
    return query ? children : null;
}

export const Default = ({ children }) => {
    const isNotMobile = useMediaQuery('min-width:768px');
    return isNotMobile ? children : null
}