//scroll to top on every swap to new route 
exports.shouldUpdateScroll = ({
    routerProps: { location },
    getSavedScrollPosition,
    }) => {
        const { pathname } = location
        const scrollToTopRoutes = [`/`]
        if (scrollToTopRoutes.indexOf(pathname) !== -1) {
        window.scrollTo(0, 0)
    }

    return false
}