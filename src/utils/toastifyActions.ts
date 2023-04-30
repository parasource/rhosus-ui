import { toast } from 'react-toastify';

import { TOptionsMessages } from '@/types/toastify.types';

const optionsMessages: TOptionsMessages = {
	position: 'top-right',
	autoClose: 5000,
	hideProgressBar: false,
	closeOnClick: true,
	pauseOnHover: true,
	draggable: true,
	progress: undefined,
	theme: 'light',
};

export const emitSuccessResponse = (success: string): void => {
	toast.success(success, optionsMessages);
};

export const emitErrorResponse = (response: { err: string | [] }): void => {
	if (Array.isArray(response.err)) {
		response.err.forEach((err: string): void => {
			toast.error(err, optionsMessages);
		});
	} else {
		toast.error(response.err, optionsMessages);
	}
};