import React from 'react';
import { Route } from 'react-router-dom/cjs/react-router-dom.min';
import Topup from './topup/Topup';

export default function Pages(){
    return(
        <section className="topup">
            <Route path='/topup' components={Topup} />
        <Topup />
        </section>
    )
}
