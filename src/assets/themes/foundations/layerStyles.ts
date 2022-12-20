export const layerStyles = {
    colorfulCard: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        boxShadow: 'lg',
        fontWeight: '900',
        color: 'white',
        py: '8px',
        px: '4px',
    },

    credentialsCard: {
        flexDirection: 'column',
        justifyCOntent: 'center',
        py: 4,
        px: 8,
        borderWidth: 1,
        borderRadius: 4,
        boxShadow: 'lg',
        w: 'full',
        h: 'full',

        button: {
            w: 'full',
        },

        h2: {
            textStyle: 'h2',
            textAlign: 'center',
            m: 4,
            fontWeight: '600',
        },

        h3: {
            textStyle: 'h3',
        },

        h4: {
            textStyle: 'h4',
            textAlign: 'center',
        },

        h5: {
            textStyle: 'h3',
            fontSize: 'sm',
            textAlign: 'center',
            mt: 4,
        },

        svg: {
            color: 'pageGreen.500',
        },
    },

    credentialsLayout: {
        w: '100vw',
        maxW: '920px',
        justifyContent: 'center',
        alignItems: 'center',
        p: ['8px', '14px'],
        flexDirection: ['column', 'column', 'row'],
        gap: 6,
    },

    dashBoardCard: {
        p: 8,
        borderWidth: 1,
        borderRadius: 4,
        boxShadow: 'lg',
        flexDirection: 'column',
        justifyContent: 'space-between',
        w: 'clamp(340px, 100%, 400px)',
        h: [null, '442px'],
    },

    dashboardCardsContainer: {
        mt: '30px',
        mb: '30px',
    },

    dayFormCard: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        boxShadow: 'lg',
        fontWeight: '900',
        color: 'white',
    },

    dayPageContainer: {
        w: 'clamp(340px, 100vw, 1200px)',
        minH: [
            'calc(100vh - 42px)',
            'calc(100vh - 64px)',
            'calc(100vh - 84px)',
        ], //navBar height
        p: '8px',
    },

    dayPageH1: {
        color: 'pageGreen.500',
        fontSize: ['40px', '50px', '44px', '72px'],
        fontWeight: '700',
    },

    dayPageH2: {
        color: 'pageGreen.400',
        fontSize: ['40px', '50px', '44px', '72px'],
        fontWeight: '700',
    },

    dayPageH3: {
        color: 'pageGreen.400',
        fontSize: ['12px', '16px', '20px'],
        fontWeight: '600',
    },

    dayPageHeadersContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        mb: '20px',
    },

    dayResumeCardGrid: {
        display: 'grid',
        h: [null, '100%'],
        gridTemplateAreas: `"calories proteins fats"
        "calories proteins carbs"`,
        gridTemplateRows: '1fr 1fr',
        gridTemplateColumns: '1fr 1fr 1fr',
        gridGap: ['8px', '12px'],
        justifyContent: 'stretch',
    },

    deleteDayBox: {
        position: 'absolute',
        right: 8,
        top: 8,
        minW: 0,
        p: 0,
        m: 0,
        borderRadius: 'full',
        bg: 'pageGreen.500',
    },

    deleteIngBox: {
        position: 'absolute',
        right: 2,
        top: 2,
        minW: 0,
        p: 0,
        m: 0,
        borderRadius: 'full',
        bg: 'pageGreen.500',
    },

    fracDenominator: {
        borderTop: 'solid',
        clear: 'left',
        float: 'left',
    },

    ingCreatorCard: {
        p: 4,
        borderWidth: 1,
        borderRadius: 4,
        boxShadow: 'lg',
        w: '100%',
    },

    ingCreatorInputContainer: {
        p: 0,
        m: 0,
        borderRadius: 4,

        div: {
            color: 'white',
            fontSize: ['10px', '12px', '16px'],
            fontWeight: '900',
            textAlign: 'center',
            p: '6px 4px',
        },
    },

    ingFormContainer: {
        display: 'flex',
        w: 'full',
        flexDirection: ['column', 'column', 'column', 'row'],
    },

    mealResumeGrid: {},

    mealTabSummarySubTitle: {
        color: 'gray.500',
        fontSize: ['10px', '12px', '16px', '20px'],
        fontWeight: '700',
        textAlign: 'left',
    },

    mealTabSummaryTitle: {
        color: 'pageGreen.500',
        fontSize: ['14px', '16px', '20px', '25px'],
        fontWeight: '700',
        textAlign: 'left',
    },

    navBar: {
        bg: '#3db9a2',
        height: ['42px', '64px', '84px'],
        py: '0px',
        px: ['10px', '20px', '30px'],
        boxShadow: 'lg',
    },

    nutrient: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        py: 2,
        borderRadius: 4,
        boxShadow: 'lg',
        fontWeight: '900',
        color: 'white',
    },

    nutrientNumber: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },

    searchInterface: {
        position: 'relative',
        borderStyle: 'none solid solid solid',
        borderWidth: '3px',
        borderColor: 'pageGreen.500',
        mb: '10px',
    },

    searchResultItem: {
        fontSize: '14px',
        w: '90%',
        borderStyle: 'none none solid none',
        borderWidth: '1px',
        borderColor: 'pageGreen.400',
        color: 'pageGreen.500',
    },

    searchResultSelectedItem: {
        fontSize: '14px',
        w: '90%',
        fontWeight: '900',
        borderStyle: 'none none solid none',
        borderWidth: '1px',
        borderColor: 'pageGreen.400',
        color: 'pageGreen.500',
    },

    searchResultList: {
        h: '270px',
        overflowY: 'auto',
        marginLeft: '10px',
    },

    tabContentSubTitle: {
        color: 'pageGreen.400',
        fontSize: ['14px', '14px', '18px', '25px'],
        fontWeight: '700',
        mb: '16px',
        mt: '30px',
    },

    tabContentTitle: {
        color: 'pageGreen.500',
        fontSize: ['28px', '28px', '35px', '50px'],
        fontWeight: '700',
        lineHeight: '70%',
    },
};
