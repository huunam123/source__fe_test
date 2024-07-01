"use strict";

/* Package System */
import React from "react";
import {withRouter} from 'next/router';
import {connect} from 'react-redux';

/* Application */
import Cookies from 'js-cookie';
import FingerprintJS from '@fingerprintjs/fingerprintjs';
import Action from '@libs/Action';
import Head from '@views/Default/Components/Head';
import Header from '@views/Default/Components/Header';
import Footer from '@views/Default/Components/Footer';
import NavigatorMobile from '@views/Default/Components/NavigatorMobile';
import {isIOS} from 'react-device-detect';
import { Alert, Snackbar } from "@mui/material";
import {fetchApi,deleteApi,postApi,isPhoneNumber} from '@helpers/Common';
var renewTimeout = null;


class Layout extends React.Component{

	constructor(props){
		super(props);
	}

	handleLoadScript=()=>{
		const fpPromise = FingerprintJS.load();
		(async()=>{
			const fp = await fpPromise;
			const result = await fp.get();
			const visitorId = result.visitorId;
			this.setState({visitorId:visitorId});
			localStorage.setItem('visitorId',visitorId);
		})();
	}

	componentDidMount(){
		this.handleLoadScript();
		if(localStorage && localStorage.getItem('darkMode')){
			let _statusDarkMode = JSON.parse(localStorage.getItem('darkMode'));
			this.props.setDarkMode(_statusDarkMode);
		}
	}
	componentWillUnmount() {
		clearTimeout(renewTimeout);
	}

	render(){

		return(
			(this.props.openApp=='')?
			<React.Fragment>
				<Head data={this.props.data} router={this.props.router} />

				<div id="nl-wrapper">
					<Header renewTimeout={renewTimeout} renewToken={this.refreshToken}/>

					{this.props.children}
						{this.props.stateStatus.status.isSuccessful && <Snackbar open={this.props.stateStatus.status.isSuccessful} autoHideDuration={2000} onClose={this.handleCloseAlert} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
							<Alert severity="success">
								{this.props.stateStatus.status.msg.text}
							</Alert>
						</Snackbar>}
						{this.props.stateStatus.status.isFailure && <Snackbar open={this.props.stateStatus.status.isFailure} autoHideDuration={2000} onClose={this.handleCloseAlert} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
							<Alert severity="error">
								{this.props.stateStatus.status.msg.text}
							</Alert>
						</Snackbar>}
					<Footer />

					<NavigatorMobile />
				</div>
			</React.Fragment>
			:null
		)
	}
}

const mapStateToProps=state=>{

	return {
		stateStatus:state.status
	}
}

const mapDispatchToProps=dispatch=>{
	let _action = new Action();

	return{
		setDarkMode:val=>{dispatch(_action.setDarkMode(val))},
		setUser:data=>{dispatch(_action.setUser(data))}
	}
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Layout));