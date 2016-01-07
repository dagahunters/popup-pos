

AccountsTemplates.configure({
	//showAddRemoveServices: false;
	//hideSignUpLink: true
});

AccountsTemplates.addFields([
{
	_id: 'businessName',
	type: 'text',
	displayName: "Company",
	placeholder: 'Business Name',
	required: true
},

{
	_id: 'type',
	type: 'select',
	displayName: "Account Type",
	select:[
		{
		text: "Master Root Account",
		value: "Master"
	}
	],
}
]);
