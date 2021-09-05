import { connect } from "react-redux";
import Cockpit from "./Cockpit";

import { fetchCockpitData } from '../actions/cockpitAction';

const mapStateToProps = state => ({
    data: state.cockpit.cockpitData,
    page: state.cockpit.page
});

const mapDispatchToProps = {
    fetchCockpitData
}

// keeping the redux connection seperate from cockpit page
const CockpitContainer = connect(mapStateToProps, mapDispatchToProps)(Cockpit);
export default CockpitContainer;
