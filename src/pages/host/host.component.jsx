import React from 'react';
import { connect } from 'react-redux';

import LoadQueue from '../../components/load-queue/load-queue.component';
import CurrentLoad from '../../components/current-load/current-load.component';

import { NavLine } from '../../styled-components/nav-line.component';
import { Tab, TabBar } from '../../styled-components/tabs.styles';
import TabbedPage from '../../styled-components/tabbed-page.styles';

class Host extends React.Component {
    constructor() {
        super();

        this.state = {
            tab: <LoadQueue />,
        }
    }

    componentDidMount() {

    }

    render() {
        return(
            <TabbedPage>
                <TabBar>
                    <Tab onClick={(event) => this.setState({ tab: <LoadQueue /> })}>Load Queues</Tab>
                    <Tab onClick={(event) => this.setState({ tab: <CurrentLoad /> })}>Current Load</Tab>
                </TabBar>
                {
                    this.state.tab
                }
                {/* <RoundButton>ADD</RoundButton> */}
                <NavLine page='host' />
            </TabbedPage>
        )
    }
}

export default connect()(Host);