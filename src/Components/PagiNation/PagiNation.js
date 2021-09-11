import React from 'react';
import { usePagination } from '@material-ui/lab/Pagination';
import { makeStyles } from '@material-ui/core/styles';
import './PagiNation.scss';

const useStyles = makeStyles({
    ul: {
        listStyle: 'none',
        padding: '5px 12px 5px 12px',
        margin: 'auto',
        display: 'flex',
        alignItems: 'center',
        fontSize: '16px',
        maxWidth: '400px',
        justifyContent: 'center',
        borderRadius: '30px',
        boxShadow:'1px 2px 6px 1px  #88888824',
        
    },
});

const PagiNation = () => {

    const classes = useStyles();
    const { items } = usePagination({
        count: 10,
    });
    // console.log(items.length);
    return (
        <nav  className="mt-5">
            <div className={`${classes.ul} `}>
                {items.map(({ page, type, selected, ...item }, index) => {
                    let children = null;
                    console.log(type);
                    if (type === 'start-ellipsis' || type === 'end-ellipsis') {
                        children = (
                            <p className="unselectable my-auto">...</p>
                        );
                    } else if (type === 'page') {
                        children = (
                            <button className="unselectable" type="button"

                                style={{
                                    transition: '.2s',
                                    fontWeight: selected ? '' : undefined,
                                    color: selected ? 'White' : 'black',
                                    backgroundColor: selected ? '#01B55C' : 'white',
                                    borderRadius: selected ? '50%' : 'none',
                                    width: selected ? '40px' : '',
                                    height: selected ? '40px' : '',
                                    
                                    display:  'inline-block' ,
                                    
                                    border: 'none',
                                    margin: '9px',
                                    fontSize:'14px',
                                }} {...item}>
                                {page}
                            </button>
                        );
                    } else {

                        if (page === 0 || page === 11) {

                            children = (
                                ''
                            )
                        }
                        else {
                            children = (

                                <button className="unselectable" style={{
                                    
                                    border: 'none',
                                    backgroundColor: 'white',
                                    color: '#01B55C',
                                    margin: type === 'next' ? '2px 17px 2px 2px' : '2px 2px 2px 17px',
                                    fontSize:'14px',

                                }} type="button" {...item}>
                                    {type.charAt(0).toUpperCase() + type.slice(1)}
                                </button>
                            );
                        }
                    }

                    return <div  key={index}>{children}</div>;
                })}
            </div>
        </nav>
    );
};

export default PagiNation;