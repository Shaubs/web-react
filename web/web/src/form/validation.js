export function validate(e_name,e_value,formErrors){
		//let formErrors = this.state.formErrors;
		//console.log("these are the erroes in validate:"+JSON.stringify(e_name)+"::::"+JSON.stringify(e_value));
		switch(e_name){
			case "PV": if(e_value.length<6 ){
								formErrors.PV ="need longer fill" ;
								}
						else{
								formErrors.PV ="" ;
							}
				break;
			case "X":formErrors.X = e_value.length<3 ? "need longer fill" : "";
				break;
			default:
				break;
		}
};
export function formValid({ formErrors, ...rest }){
		  let valid = true;

		  // validate form errors being empty
		  Object.values(formErrors).forEach(val => {
			val.length > 0 && (valid = false);
		  });

		  // validate the form was filled out
		  Object.values(rest).forEach(val => {
			val === null && (valid = false);
		  });

		  return valid;
		};
