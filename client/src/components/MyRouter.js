import React from 'react';
import { Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom';
import Main from './pages/Main';
import Hash from './pages/Hash';
import Block from './pages/Block';
import Blockchain from './pages/Blockchain';
import Distributed from './pages/Distributed';
import Tokens from './pages/Tokens';
import Coinbase from './pages/Coinbase';
import Keys from './pages/Keys';
import Signatures from './pages/Signatures';
import Transaction from './pages/Transaction';
import FullBlockchain from './pages/FullBlockchain';

const MyRouter = () => {
    return (
        <Router>
            <div className="links">
                <Link to="/" className="link">Main</Link>
                <Link to="/Hash" className="link">Hash</Link>
                <Link to="/Block" className="link">Block</Link>
                <Link to="/Blockchain" className="link">Blockchain</Link>
                <Link to="/Distributed" className="link">Distributed</Link>
                <Link to="/Tokens" className="link">Tokens</Link>
                <Link to="/Coinbase" className="link">Coinbase</Link>
                <Link to="/Keys" className="link">Keys</Link>
                <Link to="/Signatures" className="link">Signatures</Link>
                <Link to="/Transaction" className="link">Transaction</Link>
                <Link to="/FullBlockchain" className="link">Full Blockchain</Link>
            </div>

            <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/Hash" exact component={Hash} />
                <Route path="/Block" exact component={Block} />
                <Route path="/Blockchain" exact component={Blockchain} />
                <Route path="/Distributed" exact component={Distributed} />
                <Route path="/Tokens" exact component={Tokens} />
                <Route path="/Coinbase" exact component={Coinbase} />
                <Route path="/Keys" exact component={Keys} />
                <Route path="/Signatures" exact component={Signatures} />
                <Route path="/Transaction" exact component={Transaction} />
                <Route path="/FullBlockchain" exact component={FullBlockchain} />
            </Switch>
        </Router>
    );
};

export default MyRouter;