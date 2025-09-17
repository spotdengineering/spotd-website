import { FormData } from '@/components/types/form-data';

const SendEmail = async (data: FormData) => {
  const apiEndpoint = '/api/email';
  const res = await fetch(apiEndpoint, {
    method: 'POST',
    body: JSON.stringify(data),
  });
  const json = res.json();
  if (!res.ok) {
    const err = { error: { message: 'Failed to send message❕' } };
    throw new Error(err.error.message);
  }

  return json;
};
export { SendEmail };
