import React from 'react';
import {
  Container, Col, Form,
  FormGroup, Label,
  Button,FormText,
} from 'reactstrap';
import './form.css';
//import storeData from './storage/storeData'
import {validate,formValid} from './validation'


export default class Formation extends React.Component{
	
	
	state = {
		PV:'',
		X:'',
		SA:'',
		C_type:'',
		Time_ex:'',
		C_desc:'',
		Phone_num:'',
		
		//    ERROR RECORD FOR VALIDATION   //
		formErrors:{
			PV:'',
			X:'',
			SA:'',
			C_type:'',
			Time_ex:'',
			C_desc:'',
			Phone_num:'',
		}
		};


//      ON CHANGE FUNCTION   ///
		
	myChangeFunc = e => {
		//e.preventDefault();
		this.setState({[e.target.name]:e.target.value});
		//		VALIDATION DURING CHANGE		//

		//console.log("these are the erroes:"+JSON.stringify(value));
		validate(e.target.name,e.target.value,this.state.formErrors);
		
	};
	
//   		ON SUBMIT FUNCTION    			
	whenSubmitted = e =>{
		e.preventDefault();
		
		//this.props.whenSubmitted(this.state);
		//let output=(this.state);
		//let formErrors = this.state.formErrors;
		console.log("submitted : "+JSON.stringify(this.state));
		if (formValid(this.state)===true){
			const PV= this.state.PV;
			const X=this.state.X;
			const SA=this.state.SA;
			const C_type=this.state.C_type;
			const Time_ex=this.state.Time_ex;
			const C_desc=this.state.C_desc
			const Phone_num=this.state.Phone_num
			//storeData.forge({
			//	Phone_num,PV,X,SA,C_type,Time_ex,C_desc
			//},{ hasTimestamps:true}).save();
			this.setState({
				PV:'',
				X:'',
				SA:'',
				C_type:'',
				Time_ex:'',
				C_desc:'',
				Phone_num:'',
				Errormessage:"",
				});
			;
		}
		else{
			this.setState({Errormessage:"SMS WAS NOT SENT. PLEASE CHECK IF THE DETAILS IN THE FORM ARE VALID",});
			console.log("in else");
		}
	};
	
	render(){
		
		const {formErrors} = this.state;
		var {Errormessage} = this.state;
		
		return(
			<Container className="Form-Container">
			<h1>Fill the form to send a text</h1>
				<Form className="Form-Formation">
						<FormGroup inline>
								<Label>Pv</Label>
							<Col>
								<input 
									name="PV"
									placeholder = 'PV'
									value={this.state.PV}
									onChange={e => this.myChangeFunc(e)}
								/>
							</Col>
							<FormText color="danger">{formErrors.PV}</FormText>
						</FormGroup>
						
						
						<FormGroup inline>
								<Label>Password</Label>
							<Col>
								<input 
									name="X"
									type = 'Password'
									placeholder = 'Password'
									value={this.state.X}
									onChange={e => this.myChangeFunc(e)}
								/>
							</Col>
							<FormText color="danger">{formErrors.X}</FormText>
						</FormGroup>
						
						
						<FormGroup inline>
								<Label >SA</Label>
							<Col>
								<input 
									name="SA"
									placeholder = 'Source Address'
									value={this.state.SA}
									onChange={e => this.myChangeFunc(e)}
								/>
							</Col>
							<FormText color="danger">{formErrors.SA}</FormText>				
						</FormGroup>
						
						
						<FormGroup inline>
								<Label>Command type</Label>
							<Col>
								<input 
									name="C_type"
									placeholder = 'Command type Ex:CVSR'
									value={this.state.C_type}
									onChange={e => this.myChangeFunc(e)}
								/>
							</Col>
							<FormText color="danger">{formErrors.C_type}</FormText>
						</FormGroup>
						
						
						<FormGroup inline>
								<Label>Time_ex</Label>
							<Col>
								<input 
									name="Time_ex"
									placeholder = 'Time of execution'
									value={this.state.Time_ex}
									onChange={e => this.myChangeFunc(e)}
								/>
							</Col>
							<FormText color="danger">{formErrors.Time_ex}</FormText>
						</FormGroup>
						
						
						<FormGroup inline>
								<Label>Command Description</Label>
							<Col>
								<input 
									name="C_desc"
									placeholder = 'Command description'
									value={this.state.C_desc}
									onChange={e => this.myChangeFunc(e)}
								/>
							</Col>
							<FormText color="danger">{formErrors.C_desc}</FormText>
						</FormGroup>
						
						
						<FormGroup inline>
								<Label>Phone Number</Label>
							<Col>
								<input 
									name="Phone_num"
									placeholder = 'Phone number'
									value={this.state.Phone_num}
									onChange={e => this.myChangeFunc(e)}
								/>
							</Col>
							<FormText color="danger">{formErrors.Phone_num}</FormText>
						</FormGroup>
						
						<br />			
						<Button onClick={e => this.whenSubmitted(e)}><p>Send SMS</p></Button>
						<br />
						<alert>{Errormessage}</alert>
			</Form>
      </Container>
			);
	}
	
}