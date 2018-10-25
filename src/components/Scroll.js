import React from 'react';

export default ({ children }) => (
    <div style={{ overflowY: 'scroll', border: '1px solid black', height: '500px' }}>
        {children}
    </div>
);