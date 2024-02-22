import { styled } from "@/styles";

export const Container = styled('div', {
    maxWidth: 1360,
    padding: '2rem'
})

export const Title = styled('h1', {
    fontSize: '$2xl',
    textTransform: 'uppercase'
})

export const CardsList = styled('div', {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '1rem',
    justifyContent: 'center',
    alignItems: 'center',
})

export const Card = styled('div', {
    borderRadius: '10',
    background: '$gray_100',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    boxShadow: '0 0 10px #00000057',

    
})

export const CardHeader = styled('div', {
    background: '$orange_600',
    width: '100%',
    display: 'flex',
    alignItems: 'end',
    justifyContent: 'center',
    padding: '0.5rem 0',
    'img': {
        maxWidth: 75,
        maxHeight: 75,
        borderRadius: '50%',
        marginBottom: '-2.5rem',
    }
})

export const CardBody = styled('div', {
    padding: '0.75rem 1rem',
    marginTop: '2rem',
    'ul': {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        listStyleType: 'none',
        marginBottom: '0.75rem',
    },

    'button': {
        padding: '0.25rem 0.5rem',
        borderRadius: '10px',
        border: '0',
        background: '$blue_600',
        color: '$white',
        fontSize: '$sm',
        width: '100%',
    }
})