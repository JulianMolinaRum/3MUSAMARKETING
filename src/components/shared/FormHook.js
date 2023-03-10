import React from 'react';

export const useForm = (initialState = {}) => {
	const [formState, setFormState] = React.useState(initialState);
	const handleInputChange = (e) => {
		setFormState({ ...formState, [e.target.name]: e.target.value });
	}
	const resetForm = () => {
		setFormState(initialState);
	}
	return { formState, handleInputChange, resetForm }
}
