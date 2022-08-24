import React from 'react';

const SectionLists = (props) => {
    return (
        <div className='flex flex-col gap-[32px] px-[10px] lg:px-0'>
            {props.children}
        </div>
    );
};

export default SectionLists;